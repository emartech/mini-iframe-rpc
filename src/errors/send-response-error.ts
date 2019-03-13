import { RemoteError } from './remote-error';

export class SendMessageError extends RemoteError {

    constructor(error: RemoteError) {
        super(error.cause);        
        this.name = SendMessageError.name; // stack traces display correctly now         
    }
}