import { RemoteError } from './remote-error';

export class SendMessageError extends RemoteError {
  public constructor(error: RemoteError) {
    super(error.cause);
    this.name = SendMessageError.name; // stack traces display correctly now
  }
}
