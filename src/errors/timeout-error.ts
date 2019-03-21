import {MiniIframeError} from './mini-iframe-error';

export class TimeoutError extends MiniIframeError {

    timeoutMilliSeconds = 0;

    constructor(state: Partial<TimeoutError>) {
        super(`Timeout after ${state.timeoutMilliSeconds} ms.`, state);                
        this.name = TimeoutError.name; // stack traces display correctly now                 
    }
}