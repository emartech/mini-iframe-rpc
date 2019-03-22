/* tslint:disable no-any no-unsafe-any */

import {deserializeRemoteError, EvaluationError, InvocationError, ProcedureNotFoundError, RemoteError, SendMessageError, serializeRemoteError, TimeoutError} from './errors';
import {DEFAULT_RESULT_CACHE_CAPACITY, ResultCache} from "./result-cache";
export {ResultCache}; // so unit tests can access ResponseCache

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
    retryAllFailures : boolean;
}

type InternalEventCallbackType = 'onUnexpectedResponse' | 'onReceive' | 'onSend' | 'onRegister' | 'onClose' | 'onRequestRetry' | 'onResultCacheEviction';

// Optional callbacks for internal events useful for debugging and testing
export type InternalEventCallbacks = {
    [key in InternalEventCallbackType]: (...args: any[]) => void;
};

export interface InitParameters {
    windowRef: Window;
    originWhitelist: string[];
    defaultInvocationOptions: InvocationOptions;
    eventCallbacks: Partial<InternalEventCallbacks>;
    resultCacheCapacity: number;
}

interface CallbackFunctions {
    resolve: (result?: any) => void,
    reject: (error?: any) => void
}

type ProcedureImplementation = (...args: any[]) => any;

type ProcedureInvocationContext = {requestMessageBody: RequestMessageBody, messageSource: Window, messageOrigin: string};

const RPC_MESSAGE_TYPE = "mini-iframe-rpc";
const RANDOM_BASE = 36;
const CALLID_LENGTH = 8;
const DEFAULT_INVOCATION_OPTIONS:InvocationOptions = {
    timeout: 100,
    retryLimit: 2,
    retryAllFailures: false
}

export class MiniIframeRPC {
    private config: InitParameters;
    private callbacks: {[key:string]:CallbackFunctions} = {};
    private registeredProcedures:{[key:string]: ProcedureImplementation} = {};
    private resultCache:ResultCache;

    constructor(initParameters?: Partial<InitParameters>) {
        this.config = {
            windowRef: initParameters && initParameters.windowRef || window,
            originWhitelist: initParameters && initParameters.originWhitelist || [],
            defaultInvocationOptions: Object.assign({}, DEFAULT_INVOCATION_OPTIONS, initParameters && initParameters.defaultInvocationOptions || {}),            
            eventCallbacks: initParameters && initParameters.eventCallbacks || {},
            resultCacheCapacity: initParameters && typeof initParameters.resultCacheCapacity === 'number' ? initParameters.resultCacheCapacity : DEFAULT_RESULT_CACHE_CAPACITY
        };
        this.resultCache = new ResultCache({
            capacity: this.config.resultCacheCapacity,
            evictionCallback: (callId, result) => {
                this.internalEventCallback("onResultCacheEviction", callId, result);
            }
        });
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

            return options.retryAllFailures || (error instanceof TimeoutError);            
        };

        const makeRequest = async () => {
            await this.sendMessage(targetWindow, targetOrigin, requestMessageBody);

            return new Promise((resolve, reject) => {
                this.callbacks[requestMessageBody.callId] = {resolve, reject};
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
                    this.internalEventCallback("onRequestRetry", reason, previousRejectReasons, requestMessageBody);
                    previousRejectReasons.push(reason);
                    makeAttempt();
                // If error is non-retriable and there are no unanswered requests, give up.
                } else {
                    completed = true;
                    finalReject(new InvocationError(requestMessageBody.procedureName, reason, previousRejectReasons));
                }
            }
            // if there are still outstanding requests, wait for them to succeed or fail.
        };

        const makeAttempt = () => {
            requestCount += 1;
            let responsePromise = makeRequest();
            if (options.timeout > 0) {
                responsePromise = this.timeboxPromise(responsePromise, options.timeout);
            }
            responsePromise.then(handleResolve, handleReject);
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
            const fullMessage = {
                "type": RPC_MESSAGE_TYPE,
                "message": messageBody
            };
            this.internalEventCallback("onSend", targetWindow, targetOrigin, fullMessage);
            targetWindow.postMessage(fullMessage, targetOrigin || "*");
            resolve();
        });
    }        

    private async handleRequest (context:ProcedureInvocationContext) {
        const callId = context.requestMessageBody.callId;
        const procedureName = context.requestMessageBody.procedureName;
        const argumentList = context.requestMessageBody.argumentList;
        const responseOrigin = !context.messageOrigin || context.messageOrigin === "null" ? null : context.messageOrigin;
        const sendError = (rejectOrError: any, exceptionName?:string) => {
            // the wonders of Javascript: Error detection https://stackoverflow.com/a/45496068
            const isError = !!rejectOrError && (
                (rejectOrError instanceof Error) || 
                (rejectOrError.stack && rejectOrError.message && typeof rejectOrError.stack === 'string' && typeof rejectOrError.message === 'string'));

            return this.sendMessage(
                context.messageSource,
                responseOrigin,
                {
                    contents: "error",
                    callId,
                    isErrorInstance: isError,                    
                    errorValue: isError ? serializeRemoteError(rejectOrError, exceptionName) : rejectOrError
                });
        };
        const getResult = () => {
            if (this.resultCache.hasCachedResult(callId)) {
                return this.resultCache.getCachedResult(callId);
            }
            const resultPromise = new Promise((resolve) => {
                resolve(this.registeredProcedures[procedureName].apply(
                    context,
                    argumentList));
                });
            this.resultCache.setCachedResult(callId, resultPromise);

            return resultPromise;
        };
        if (this.registeredProcedures[procedureName]) {            
            getResult()
                .then(
                    (result?:any) => this.sendMessage(
                        context.messageSource,
                        responseOrigin,
                        {
                            contents: "result",
                            callId,
                            result
                        }).catch(error => sendError(error, SendMessageError.name))
                    ,
                    (error?:any) => sendError(error, EvaluationError.name)
                );            
        } else {
            sendError(new ProcedureNotFoundError({procedureName}));
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
            const requestMessageBody : MessageBody = messageEvent.data.message as MessageBody;
            if (requestMessageBody.contents === "request") {
                this.handleRequest({requestMessageBody, messageSource: messageEvent.source as Window, messageOrigin: messageEvent.origin});
            } else {
                this.handleResponse(requestMessageBody);
            }            
        }
    }

} // end of class
