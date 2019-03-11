export interface InvocationOptions {
    timeout: number;
    retryLimit: number;
}
declare type InternalEventCallbackType = 'onUnexpectedResponse' | 'onReceive' | 'onSend' | 'onRegister' | 'onClose';
export declare type InternalEventCallbacks = {
    [key in InternalEventCallbackType]: (...args: any[]) => void;
};
export interface InitParameters {
    windowRef: Window;
    originWhitelist: string[];
    defaultInvocationOptions: InvocationOptions;
    eventCallbacks: Partial<InternalEventCallbacks>;
}
declare type ProcedureImplementation = (...args: any[]) => any;
export declare class MiniIframeRPC {
    private config;
    private callbacks;
    private registeredProcedures;
    constructor(initParameters?: InitParameters);
    register(procedureName: string, implementation?: ProcedureImplementation): void;
    invoke(targetWindow: Window, targetOrigin: string | null, procedureName: string, argumentList?: any[], invocationOptions?: InvocationOptions): Promise<any>;
    close(): void;
    private internalEventCallback;
    private timeboxPromise;
    private getNextCallId;
    private sendMessage;
    private formatError;
    private handleRequest;
    private handleResponse;
    private recv;
}
export {};
//# sourceMappingURL=mini-iframe-rpc.d.ts.map