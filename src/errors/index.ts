import {EvaluationError} from './evaluation-error';
import {InvocationError} from './invocation-error';
import {MiniIframeError} from './mini-iframe-error';
import {ProcedureNotFoundError} from './procedure-not-found-error';
import {errorToJSON, RemoteError, RemoteErrorCause} from './remote-error';
import {SendMessageError} from './send-message-error';
import {TimeoutError} from './timeout-error';

export {MiniIframeError, ProcedureNotFoundError, EvaluationError, TimeoutError, SendMessageError, RemoteError, InvocationError};

type RemoteErrorConstructor = new (state: Partial<RemoteError>) => RemoteError;

type ERROR_MAP = {
    [key: string]: RemoteErrorConstructor
}

const remoteErrorClasses = ([
    ProcedureNotFoundError,
    EvaluationError,
    SendMessageError
    ] as RemoteErrorConstructor[]).reduce(
    (obj:ERROR_MAP, constr:RemoteErrorConstructor) => {
        obj[constr.name] = constr;

        return obj;
    }, {} as ERROR_MAP) as ERROR_MAP;    

export const serializeRemoteError = (cause: RemoteErrorCause, remoteExceptionName?: string):RemoteError => {    
    
    const convert = (err: RemoteError):RemoteError => {
        const errJSON:RemoteError = errorToJSON(err);        
        if (remoteExceptionName) {
            errJSON.name = remoteExceptionName;
        }     

        return errJSON;
    }
    if (cause instanceof RemoteError) {
        // if cause is already a remoteError, return as is
        return convert(cause);
    }    
    // for both Error and String type causes, create a new RemoteError 

    return convert(new RemoteError(cause));    
};   

// tslint:disable-next-line:no-any
export const deserializeRemoteError = (error:RemoteError) => {
    const constr = remoteErrorClasses[error.name] || RemoteError;

    return new constr(error);
};