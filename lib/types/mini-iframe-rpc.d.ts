import 'mdn-polyfills/Object.assign';
import { ResultCache } from "./result-cache";
export { ResultCache };
export interface InvocationOptions {
    timeout: number;
    retryLimit: number;
    retryAllFailures: boolean;
}
declare type InternalEventCallbackType = 'onUnexpectedResponse' | 'onReceive' | 'onSend' | 'onRegister' | 'onClose' | 'onRequestRetry' | 'onResultCacheEviction';
export declare type InternalEventCallbacks = {
    [key in InternalEventCallbackType]: (...args: any[]) => void;
};
export interface InitParameters {
    windowRef: Window;
    originWhitelist: string[];
    defaultInvocationOptions: InvocationOptions;
    eventCallbacks: Partial<InternalEventCallbacks>;
    resultCacheCapacity: number;
}
declare type ProcedureImplementation = (...args: any[]) => any;
export declare class MiniIframeRPC {
    private config;
    private callbacks;
    private registeredProcedures;
    private resultCache;
    private transport;
    constructor(initParameters?: Partial<InitParameters>);
    register(procedureName: string, implementation?: ProcedureImplementation): void;
    invoke(targetWindow: Window, targetOrigin: string | null, method: string, params?: any[], invocationOptions?: InvocationOptions): Promise<any>;
    close(): void;
    private requestWithRetry;
    private internalEventCallback;
    private timeboxPromise;
    private getNextCallId;
    private sendMessage;
    private isArray;
    private unpackParams;
    private handleRequest;
    private handleResponse;
    private recv;
}
//# sourceMappingURL=mini-iframe-rpc.d.ts.map