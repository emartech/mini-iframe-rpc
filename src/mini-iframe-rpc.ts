/* tslint:disable no-any no-unsafe-any */

import 'mdn-polyfills/Object.assign';
import {deserializeRemoteError, EvaluationError, InvocationError, isError, ProcedureNotFoundError, SendMessageError, serializeRemoteError, TimeoutError} from './errors';
import {DEFAULT_RESULT_CACHE_CAPACITY, ResultCache} from "./result-cache";
export {ResultCache}; // so unit tests can access ResponseCache
import {MessageBody, RequestMessageBody} from "./json-rpc";
import {PostMessageTransport} from './transport/post-message-transport';


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
    private transport: PostMessageTransport;

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
            evictionCallback: (id, result) => {
                this.internalEventCallback("onResultCacheEviction", id, result);
            }
        });
        this.transport = new PostMessageTransport(
            this.config.windowRef,
            this.recv,
            {'originWhitelist': this.config.originWhitelist});        
    }        

    register(procedureName: string, implementation?: ProcedureImplementation): void {
        this.internalEventCallback("onRegister", procedureName, implementation)
        if (implementation) {
            this.registeredProcedures[procedureName] = implementation;
        } else {
            delete this.registeredProcedures[procedureName];
        }
    }

    invoke (targetWindow: Window, targetOrigin: string | null, method: string, params?: any[], invocationOptions?: InvocationOptions): Promise<any> {
        const options = Object.assign({}, this.config.defaultInvocationOptions, invocationOptions || {});
        const id = this.getNextCallId();
        const requestMessageBody: RequestMessageBody = {
            id,
            method,
            params: (params || [])};

        return this.requestWithRetry(targetWindow, targetOrigin, requestMessageBody, options);
    }

    close() {
        this.internalEventCallback("onClose");
        this.transport.close();        
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
            return this.sendMessage(targetWindow, targetOrigin, requestMessageBody).then(
                () => new Promise((resolve, reject) => {
                    this.callbacks[requestMessageBody.id] = {resolve, reject};
                }));
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
                    finalReject(new InvocationError(requestMessageBody.method, reason, previousRejectReasons));
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
            this.internalEventCallback("onSend", messageBody, targetWindow, targetOrigin);

            return this.transport.send(
                {targetWindow, targetOrigin},
                messageBody);
    }        

    private isArray(arg:any) {
        // Array.isArray doesn't work in IE8 and doesn't necessarily work cross-window
        // from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
        return Object.prototype.toString.call(arg) === '[object Array]';   
    }

    private unpackParams(params:any) {
        if (this.isArray(params)) {
            return params;
        }
        if (params === undefined) {
            return [];
        }

        return [params];
    }

    private async handleRequest (requestMessageBody:RequestMessageBody, messageSource: Window, messageOrigin: string) {
        const id = requestMessageBody.id;
        const method = requestMessageBody.method;
        const params = this.unpackParams(requestMessageBody.params);
        const responseOrigin = !messageOrigin || messageOrigin === "null" ? null : messageOrigin;
        const sendError = (rejectOrError: any, exceptionName?:string) => {
            const sendingError = isError(rejectOrError);

            return this.sendMessage(
                messageSource,
                responseOrigin,
                {
                    id,
                    isErrorInstance: sendingError,                    
                    error: sendingError ? serializeRemoteError(rejectOrError, exceptionName) : rejectOrError
                });
        };
        const getResult = () => {
            if (this.resultCache.hasCachedResult(id)) {
                return this.resultCache.getCachedResult(id);
            }
            const resultPromise = new Promise((resolve) => {
                resolve(this.registeredProcedures[method].apply(
                    {requestMessageBody, messageSource, messageOrigin},
                    params));
                });
            this.resultCache.setCachedResult(id, resultPromise);

            return resultPromise;
        };
        if (this.registeredProcedures[method]) {            
            getResult()
                .then(
                    (result?:any) => this.sendMessage(
                        messageSource,
                        responseOrigin,
                        {
                            id,
                            result
                        }).catch(error => sendError(error, SendMessageError.name))
                    ,
                    (error?:any) => sendError(error, EvaluationError.name)
                );            
        } else {
            sendError(new ProcedureNotFoundError({procedureName: method}));
        }
    }

    private handleResponse(messageBody: MessageBody) {
        const callbackFunctions = this.callbacks[messageBody.id];
        if (callbackFunctions) {
            delete this.callbacks[messageBody.id];                                    
            if ('isErrorInstance' in messageBody) {
                const errorObject = messageBody.isErrorInstance ? deserializeRemoteError(messageBody.error) : messageBody.error;
                callbackFunctions.reject(errorObject);
            } else if ('result' in messageBody) {
                callbackFunctions.resolve(messageBody.result);
            }        
        } else {
            this.internalEventCallback("onUnexpectedResponse", messageBody);
        }               
    }

    private recv = (messageBody:MessageBody, messageSource: Window, messageOrigin: string) => {
        this.internalEventCallback("onReceive", messageBody, messageSource, messageOrigin);    
        if ('method' in messageBody) {
            this.handleRequest(messageBody, messageSource, messageOrigin);
        } else {
            this.handleResponse(messageBody);
        }            
    }

} // end of class
