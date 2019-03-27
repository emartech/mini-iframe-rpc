import { EvaluationError } from './evaluation-error';
import { InvocationError } from './invocation-error';
import { isError } from './is-error';
import { MiniIframeError } from './mini-iframe-error';
import { ProcedureNotFoundError } from './procedure-not-found-error';
import { RemoteError, RemoteErrorCause } from './remote-error';
import { SendMessageError } from './send-message-error';
import { TimeoutError } from './timeout-error';
export { MiniIframeError, ProcedureNotFoundError, EvaluationError, TimeoutError, isError, SendMessageError, RemoteError, InvocationError };
export declare const serializeRemoteError: (cause: RemoteErrorCause, remoteExceptionName?: string | undefined) => RemoteError;
export declare const deserializeRemoteError: (error: RemoteError) => RemoteError;
//# sourceMappingURL=index.d.ts.map