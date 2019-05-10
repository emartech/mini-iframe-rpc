import { MiniIframeError } from './mini-iframe-error';

export class TimeoutError extends MiniIframeError {
  public timeoutMilliSeconds = 0;

  public constructor(state: Partial<TimeoutError>) {
    super(`Timeout after ${state.timeoutMilliSeconds} ms.`, state);
    this.name = TimeoutError.name; // stack traces display correctly now
  }
}
