import { MiniIframeError } from './mini-iframe-error';

export type RemoteErrorCause = Error | string;

export function errorToJSON<T extends Error>(err: T): T {
  // message, name, stack are not ennumerable, so we must explicitly get them.
  const { message, name, stack } = err;

  return Object.assign({ message, stack, name }, err);
}

const causeToMessage = (cause: RemoteErrorCause): string => {
  if (typeof cause === 'string') {
    return cause;
  } else {
    return `${cause.message}`;
  }
};

export class RemoteError extends MiniIframeError {
  public cause: RemoteErrorCause;

  public constructor(cause: RemoteErrorCause) {
    super(causeToMessage(cause));
    this.cause = typeof cause === 'string' ? cause : errorToJSON(cause);
    this.name = RemoteError.name; // stack traces display correctly now
  }
}
