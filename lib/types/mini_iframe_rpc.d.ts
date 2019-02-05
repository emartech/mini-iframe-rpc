export interface InitParameters {
    windowRef: Window;
    originWhitelist: Array<string>;
    timeout: number;
}
declare type ProcedureImplementation = (...args: any[]) => any;
export declare class MiniIframeRPC {
    private config;
    private callbacks;
    private registeredProcedures;
    constructor(initParameters?: InitParameters);
    private timeboxPromise;
    register(procedureName: string, implementation: ProcedureImplementation | null): void;
    private getNextCallId;
    private sendMessage;
    invoke(targetWindow: Window, targetOrigin: string | null, procedureName: string, argumentList: any[] | null): Promise<any>;
    private formatError;
    private respond;
    private handleResponse;
    private recv;
    close(): void;
}
export {};
//# sourceMappingURL=mini_iframe_rpc.d.ts.map