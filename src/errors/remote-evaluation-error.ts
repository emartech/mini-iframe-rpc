import {MiniIframeError} from './mini-iframe-error';

export class RemoteEvaluationError extends MiniIframeError {

    stack = "(no stacktrace)";
    originalName = "Error";

    constructor(state: Partial<RemoteEvaluationError>) {
        super(`Remote ${state.name || ""}: ${state.message || ""}`);
        Object.assign(this, state);        
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = RemoteEvaluationError.name; // stack traces display correctly now         
    }
}