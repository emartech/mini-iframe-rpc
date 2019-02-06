export interface InitParameters {
    windowRef: Window;
    originWhitelist: string[];
    timeout: number;
}
declare type ProcedureImplementation = (...args: any[]) => any;
export declare class MiniIframeRPC {
    private config;
    private callbacks;
    private registeredProcedures;
    constructor(initParameters?: InitParameters);
    register(procedureName: string, implementation: ProcedureImplementation | null): void;
    invoke(targetWindow: Window, targetOrigin: string | null, procedureName: string, argumentList: any[] | null): Promise<any>;
    close(): void;
    private timeboxPromise;
    private getNextCallId;
    private sendMessage;
    private formatError;
    private respond;
    private handleResponse;
    private recv;
}
export {};
//# sourceMappingURL=mini-iframe-rpc.d.ts.map