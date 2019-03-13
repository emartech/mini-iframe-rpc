import { RemoteError } from './remote-error';

export class EvaluationError extends RemoteError {

    constructor(error: RemoteError) {
        super(error.cause);
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = EvaluationError.name; // stack traces display correctly now         
    }
}