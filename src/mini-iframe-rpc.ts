
/* tslint:disable no-any no-unsafe-any */

import {deserializeError, ProcedureNotFoundError, RemoteEvaluationError, TimeoutError} from './errors';

const RPC_MESSAGE_TYPE = "mini-iframe-rpc";
const RANDOM_BASE = 36;
const CALLID_LENGTH = 8;

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
    errorValue: any;
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
    result: (result: any) => void,
    error: (error: any) => void
}

type ProcedureImplementation = (...args: any[]) => any;

const timeoutMarker = {};

export class MiniIframeRPC {
    private config: InitParameters;
    private callbacks: Map<string, CallbackFunctions> = new Map<string, CallbackFunctions>();
    private registeredProcedures: Map<string, ProcedureImplementation> = new Map<string, ProcedureImplementation>();

    constructor(initParameters?: InitParameters) {
        this.config = {
            windowRef: initParameters && initParameters.windowRef || window,
            originWhitelist: initParameters && initParameters.originWhitelist || [],
            defaultInvocationOptions: initParameters && initParameters.defaultInvocationOptions || {
                timeout: 0,
                retryLimit: 0
            },
            eventCallbacks: initParameters && initParameters.eventCallbacks || {}
        };
        // attach listener
        this.config.windowRef.addEventListener("message", this.recv);
    }        

    register(procedureName: string, implementation?: ProcedureImplementation): void {
        this.internalEventCallback("onRegister", procedureName, implementation)
        if (implementation) {
            this.registeredProcedures.set(procedureName, implementation);
        } else {
            this.registeredProcedures.delete(procedureName);
        }
    }

    invoke (targetWindow: Window, targetOrigin: string | null, procedureName: string, argumentList?: any[], invocationOptions?: InvocationOptions): Promise<any> {
        const options = invocationOptions || this.config.defaultInvocationOptions;
        const callId = this.getNextCallId();
        const messageBody: RequestMessageBody = {
            contents: "request",
            callId,
            procedureName,
            argumentList: (argumentList || [])};
        let resultPromise: Promise<any> = this.sendMessage(targetWindow, targetOrigin, messageBody).then(() => new Promise((resolve, reject) => {
            const callbacks : CallbackFunctions = {
                result: (result : any) => {
                    this.callbacks.delete(callId);
                    resolve(result);
                },
                error: (err : any) => {
                    this.callbacks.delete(callId);
                    reject(err);
                }
            };
            this.callbacks.set(callId, callbacks);
        }));
        if (options.timeout > 0) {
            resultPromise = this.timeboxPromise(resultPromise, options.timeout).then(
                result => result,
                error => {
                    if (error === timeoutMarker) {
                        // retry?
                        // when retry exhaused raise timeout error
                        throw new TimeoutError({procedureName, timeoutMilliSeconds: options.timeout});
                    } else {
                        throw error;
                    }
                }
            );
        }

        return resultPromise;
    }

    close() {
        this.internalEventCallback("onClose");
        this.config.windowRef.removeEventListener("message", this.recv);
    }

    private internalEventCallback(internalEventCallback: InternalEventCallbackType, ...args: any[]) {
        const cb = this.config.eventCallbacks[internalEventCallback];
        if (cb) {
            cb.apply(this, args);
        }
    }

    private timeboxPromise(originalPromise: Promise<any>, timeoutMilliseconds: number): Promise<any> {
        return Promise.race([
            originalPromise,
            new Promise((_resolve, reject) => {
                this.config.windowRef.setTimeout(
                    () => reject(timeoutMarker),
                    timeoutMilliseconds);
            })
        ]);
    }   

    private getNextCallId () {
        let randomId : string | null = null;
        while(!randomId || this.callbacks.has(randomId)) {
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

    private serializeError(err : Error)  {
        const {message, name, stack} = err;

        return Object.assign({message, stack, originalName: name}, err);
    }    

    private async handleRequest (messageBody: RequestMessageBody, messageSource: Window, messageOrigin: string) {
        const callId = messageBody.callId;
        const procedureName = messageBody.procedureName;
        const argumentList = messageBody.argumentList;
        const responseOrigin = !messageOrigin || messageOrigin === "null" ? null : messageOrigin;
        const sendError = (error: any) => {
            const isError = error instanceof Error;
            this.sendMessage(
                messageSource,
                responseOrigin,
                {
                    contents: "error",
                    callId,
                    isErrorInstance: isError,                    
                    errorValue: isError ? this.serializeError(error) : error
                });
            }
        if (this.registeredProcedures.has(procedureName)) {
            try {
                return Promise.resolve(
                    this.registeredProcedures.get(procedureName)!.apply(
                        {messageBody, messageSource, messageOrigin},
                        argumentList)).then(
                            result => this.sendMessage(
                                messageSource,
                                responseOrigin,
                                {
                                    contents: "result",
                                    callId,
                                    result
                                }).catch(sendError),
                            sendError);
            } catch (ex) {
                return sendError(ex);
            }
        } else {
            return sendError(new ProcedureNotFoundError({procedureName}));
        }
    }

    private handleResponse(response: MessageBody) {
        const callbackFunctions = this.callbacks.get(response.callId);
        if (callbackFunctions) {                        
            if (response.contents === "result") {
                callbackFunctions.result(response.result);
            } else if (response.contents === "error") {
                const errorObject = response.isErrorInstance ? deserializeError(response.errorValue) : response.errorValue;
                callbackFunctions.error(errorObject);
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
