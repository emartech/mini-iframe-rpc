import { MiniIframeError } from './mini-iframe-error';
export declare type RemoteErrorCause = Error | string;
export declare function errorToJSON<T extends Error>(err: T): T;
export declare class RemoteError extends MiniIframeError {
    cause: RemoteErrorCause;
    constructor(cause: RemoteErrorCause);
}
//# sourceMappingURL=remote-error.d.ts.map