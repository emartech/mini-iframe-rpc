import { isError } from './is-error';
import { MiniIframeError } from './mini-iframe-error';

const makeMessage = (procedureName: string, cause?: any, previousRejectReasons?: any[]): string => {
  let message = `Error invoking remote procedure '${procedureName}'.`;
  if (isError(cause)) {
    message += ` ${cause.name}: ${cause.message}.`;
  } else if (cause) {
    message += ` Reason: ${cause.toString()}`;
  }

  if (previousRejectReasons && previousRejectReasons.length > 0) {
    const plural = previousRejectReasons.length > 1 ? 's' : '';
    message += ` ${previousRejectReasons.length} additional rejection${plural} from retried attempt${plural}.`;
  }

  return message;
};

export class InvocationError extends MiniIframeError {
  private procedureName: string;
  private cause?: any;
  private previousRejectReasons?: any[];

  // tslint:disable-next-line:no-any
  public constructor(procedureName: string, cause?: any, previousRejectReasons?: any[]) {
    super(makeMessage(procedureName, cause, previousRejectReasons));
    this.name = InvocationError.name; // stack traces display correctly now
    this.procedureName = procedureName;
    this.cause = cause;
    this.previousRejectReasons = previousRejectReasons;
  }
}
