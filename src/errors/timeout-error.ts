import {MiniIframeError} from './mini-iframe-error';

export class TimeoutError extends MiniIframeError {

    timeoutMilliSeconds = 0;

    constructor(state: Partial<TimeoutError>) {
        super(`Timeout after ${state.timeoutMilliSeconds} ms.`, state);                
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = TimeoutError.name; // stack traces display correctly now                 
    }
}