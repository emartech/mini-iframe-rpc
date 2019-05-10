import { RemoteError } from './remote-error';

export class EvaluationError extends RemoteError {
  public constructor(error: RemoteError) {
    super(error.cause);
    this.name = EvaluationError.name; // stack traces display correctly now
  }
}
