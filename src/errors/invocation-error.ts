import {isError} from './is-error';
import {MiniIframeError} from './mini-iframe-error';

// tslint:disable-next-line:no-any
const makeMessage = (procedureName: string, cause?: any, previousRejectReasons?: any[]):string => {
    let message = `Error invoking remote procedure '${procedureName}'.`;
    if (isError(cause)) {        
        message += ` ${cause.name}: ${cause.message}.`;
    } else if (cause) {
        // tslint:disable-next-line:no-unsafe-any
        message += ` Reason: ${cause.toString()}`;
    }
    if (previousRejectReasons && previousRejectReasons.length > 0) {
        const plural = previousRejectReasons.length > 1 ? 's' : '';
        message += ` ${previousRejectReasons.length} additional rejection${plural} from retried attempt${plural}.`;
    }

    return message;
};

export class InvocationError extends MiniIframeError {

    procedureName: string;
    // tslint:disable-next-line:no-any
    cause?: any;
    // tslint:disable-next-line:no-any
    previousRejectReasons?: any[];

    // tslint:disable-next-line:no-any
    constructor(procedureName: string, cause?: any, previousRejectReasons?: any[]) {
        super(makeMessage(procedureName, cause, previousRejectReasons));                
        this.name = InvocationError.name; // stack traces display correctly now   
        this.procedureName = procedureName;
        this.cause = cause;
        this.previousRejectReasons = previousRejectReasons;              
    }    
}