import { RemoteError } from './remote-error';

export class ProcedureNotFoundError extends RemoteError {

    procedureName = "unknown";

    constructor(state: Partial<ProcedureNotFoundError>) {
        super(`Remote procedure '${state.procedureName}' not registered in remote RPC instance.`);
        if (state.procedureName) {
            this.procedureName = state.procedureName;
        }
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = ProcedureNotFoundError.name; // stack traces display correctly now         
    }
}