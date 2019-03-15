
/* tslint:disable no-any no-unsafe-any */

import {deserializeRemoteError, EvaluationError, InvocationError, ProcedureNotFoundError, RemoteError, SendMessageError, serializeRemoteError, TimeoutError} from './errors';
import {ResponseCache} from "./response-cache";
export {ResponseCache}; // so unit tests can access ResponseCache

interface RequestMessageBody  {
    contents: "request";
    callId: string;
    procedureName: string;
    argumentList: any[]
}

interface ResultMessageBody {
    contents: "result";
    callId: string;    
    result: any
}

interface ErrorMessageBody {
    contents: "error";
    callId: string;
    isErrorInstance: boolean;
    errorValue: RemoteError;
}

type MessageBody = RequestMessageBody | ResultMessageBody | ErrorMessageBody;

export interface InvocationOptions {
    timeout: number;
    retryLimit: number;
}

type InternalEventCallbackType = 'onUnexpectedResponse' | 'onReceive' | 'onSend' | 'onRegister' | 'onClose';

// Optional callbacks for internal events useful for debugging and testing
export type InternalEventCallbacks = {
    [key in InternalEventCallbackType]: (...args: any[]) => void;
};

export interface InitParameters {
    windowRef: Window;
    originWhitelist: string[];
    defaultInvocationOptions: InvocationOptions;
    eventCallbacks: Partial<InternalEventCallbacks>;
}

interface CallbackFunctions {
    resolve: (result?: any) => void,
    reject: (error?: any) => void
}

type ProcedureImplementation = (...args: any[]) => any;

const RPC_MESSAGE_TYPE = "mini-iframe-rpc";
const RANDOM_BASE = 36;
const CALLID_LENGTH = 8;
const DEFAULT_INVOCATION_OPTIONS:InvocationOptions = {
    timeout: 200,
    retryLimit: 0
}

export class MiniIframeRPC {
    private config: InitParameters;
    private callbacks: {[key:string]:CallbackFunctions} = {};
    private registeredProcedures:{[key:string]: ProcedureImplementation} = {};

    constructor(initParameters?: InitParameters) {
        this.config = {
            windowRef: initParameters && initParameters.windowRef || window,
            originWhitelist: initParameters && initParameters.originWhitelist || [],
            defaultInvocationOptions: Object.assign({}, DEFAULT_INVOCATION_OPTIONS, initParameters && initParameters.defaultInvocationOptions || {}),
            eventCallbacks: initParameters && initParameters.eventCallbacks || {}
        };
        // attach listener
        this.config.windowRef.addEventListener("message", this.recv);
    }        

    register(procedureName: string, implementation?: ProcedureImplementation): void {
        this.internalEventCallback("onRegister", procedureName, implementation)
        if (implementation) {
            this.registeredProcedures[procedureName] = implementation;
        } else {
            delete this.registeredProcedures[procedureName];
        }
    }

    invoke (targetWindow: Window, targetOrigin: string | null, procedureName: string, argumentList?: any[], invocationOptions?: InvocationOptions): Promise<any> {
        const options = Object.assign({}, this.config.defaultInvocationOptions, invocationOptions || {});
        const callId = this.getNextCallId();
        const requestMessageBody: RequestMessageBody = {
            contents: "request",
            callId,
            procedureName,
            argumentList: (argumentList || [])};

        return this.requestWithRetry(targetWindow, targetOrigin, requestMessageBody, options);
    }

    close() {
        this.internalEventCallback("onClose");
        this.config.windowRef.removeEventListener("message", this.recv);
    }

    private requestWithRetry(targetWindow: Window, targetOrigin: string | null, requestMessageBody:RequestMessageBody, options: InvocationOptions):Promise<any> {
        
        let requestCount = 0;
        let failureCount = 0;        
        let finalResolve:(result?: any) => void = () => void 0;
        let finalReject:(error?: any) => void = () => void 0;
        let completed = false;
        const previousRejectReasons:any[] = [];        
        
        const isErrorRetriable = (error: any) => {
            if (options.timeout <= 0 || options.retryLimit < 1) {
                return false;
            }
            if (error instanceof ProcedureNotFoundError) {
                return false;
            }

            return true;
        };

        const makeRequest = async () => {
            await this.sendMessage(targetWindow, targetOrigin, requestMessageBody);

            return new Promise((resolve, reject) => {
                this.callbacks[requestMessageBody.callId] = { resolve, reject };
            });
        }

        const handleResolve = (result?: any) => {
            // first successful request immediately resolves the invocation promise
            completed = true;
            finalResolve(result);
        }

        const handleReject = (reason?: any) => {
            failureCount += 1;
            // If request has since been completed, do nothing
            // Retry request or fail permanently if no outstanding requests still in flight
            if (!completed && failureCount === requestCount) {

                if (isErrorRetriable(reason) && requestCount < (options.retryLimit + 1)) {
                    previousRejectReasons.push(reason);
                    makeAttempt();
                // If error is non-retriable and there are no unanswered requests, give up.
                } else {
                    completed = true;
                    finalReject(new InvocationError(requestMessageBody.procedureName, reason, previousRejectReasons));
                }
            }
            // if there are still outstanding requests, wait for them to succeed or fail.
            // TODO: call internal eventCallback
        };

        const makeAttempt = () => {
            requestCount += 1;
            let responsePromise = makeRequest();
            if (options.timeout > 0) {
                responsePromise = this.timeboxPromise(responsePromise, options.timeout);
            }

            return responsePromise.then(handleResolve, handleReject);
        };

        const returnValue = new Promise((resolve, reject) => {
            finalResolve = resolve;
            finalReject = reject;
        });
        // initial attempt
        makeAttempt();

        return returnValue;
    }

    private internalEventCallback(internalEventCallback: InternalEventCallbackType, ...args: any[]) {
        const cb = this.config.eventCallbacks[internalEventCallback];
        if (cb) {
            cb.apply(this, args);
        }
    }

    private timeboxPromise(originalPromise: Promise<any>, timeoutMilliSeconds: number): Promise<any> {
        return Promise.race([
            originalPromise,
            new Promise((_resolve, reject) => {
                this.config.windowRef.setTimeout(
                    () => reject(new TimeoutError({timeoutMilliSeconds})),
                    timeoutMilliSeconds);
            })
        ]);
    }   

    private getNextCallId () {
        let randomId : string | null = null;
        while(!randomId || this.callbacks[randomId]) {
            randomId = `cb${Math.random().toString(RANDOM_BASE).replace(/[^a-z]+/g, '').substr(0, CALLID_LENGTH)}`;
        }

        return randomId;
    }

    private sendMessage (targetWindow: Window, targetOrigin: string | null, messageBody: MessageBody) : Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                const fullMessage = {
                    "type": RPC_MESSAGE_TYPE,
                    "message": messageBody
                };
                this.internalEventCallback("onSend", targetWindow, targetOrigin, fullMessage);
                targetWindow.postMessage(fullMessage, targetOrigin || "*");
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }     

    private async handleRequest (messageBody: RequestMessageBody, messageSource: Window, messageOrigin: string) {
        const callId = messageBody.callId;
        const procedureName = messageBody.procedureName;
        const argumentList = messageBody.argumentList;
        const responseOrigin = !messageOrigin || messageOrigin === "null" ? null : messageOrigin;
        const sendError = (rejectOrError: any, exceptionName?:string) => {
            const isError = rejectOrError instanceof Error;
            this.sendMessage(
                messageSource,
                responseOrigin,
                {
                    contents: "error",
                    callId,
                    isErrorInstance: isError,                    
                    errorValue: isError ? serializeRemoteError(rejectOrError, exceptionName) : rejectOrError
                });
            }
        if (this.registeredProcedures[procedureName]) {
            try {
                return Promise.resolve(
                    this.registeredProcedures[procedureName].apply(
                        {messageBody, messageSource, messageOrigin},
                        argumentList)).then(
                            result => this.sendMessage(
                                messageSource,
                                responseOrigin,
                                {
                                    contents: "result",
                                    callId,
                                    result
                                }).catch(error => {
                                    sendError(error, SendMessageError.name)
                                }),
                            // send 'error' type message with rejection value
                            sendError);
            } catch (ex) {
                return sendError(ex, EvaluationError.name);
            }
        } else {
            return sendError(new ProcedureNotFoundError({procedureName}));
        }
    }

    private handleResponse(response: MessageBody) {
        const callbackFunctions = this.callbacks[response.callId];
        if (callbackFunctions) {
            delete this.callbacks[response.callId];                        
            if (response.contents === "result") {
                callbackFunctions.resolve(response.result);
            } else if (response.contents === "error") {
                const errorObject = response.isErrorInstance ? deserializeRemoteError(response.errorValue) : response.errorValue;
                callbackFunctions.reject(errorObject);
            }        
        } else {
            this.internalEventCallback("onUnexpectedResponse", response);
        }               
    }

    private recv = (messageEvent: MessageEvent) => {
        if ((this.config.originWhitelist.length < 1 || this.config.originWhitelist.indexOf(messageEvent.origin) > -1) &&
            messageEvent.data && messageEvent.data.type === RPC_MESSAGE_TYPE) {
            this.internalEventCallback("onReceive", messageEvent);    
            const messageBody : MessageBody = messageEvent.data.message as MessageBody;
            if (messageBody.contents === "request") {
                return this.handleRequest(messageBody, messageEvent.source as Window, messageEvent.origin);
            }

            return this.handleResponse(messageBody);                        
        }
    }

} // end of class
