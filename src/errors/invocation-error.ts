import {MiniIframeError} from './mini-iframe-error';
import {errorToJSON} from './remote-error';

// tslint:disable-next-line:no-any
const makeMessage = (procedureName: string, cause?: any, previousRejectReasons?: any[]):string => {
    let message = `Error invoking remote procedure '${procedureName}'.`;
    if (cause instanceof Error) {
        const err = cause as Error;
        message += ` ${err.name}: ${err.message}.`;
    } else if (cause) {
        message += ` Reason: ${cause.toString()}.`;
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