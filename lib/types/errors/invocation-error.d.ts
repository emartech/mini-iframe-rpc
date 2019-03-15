import { MiniIframeError } from './mini-iframe-error';
export declare class InvocationError extends MiniIframeError {
    procedureName: string;
    cause?: any;
    previousRejectReasons?: any[];
    constructor(procedureName: string, cause?: any, previousRejectReasons?: any[]);
}
//# sourceMappingURL=invocation-error.d.ts.map