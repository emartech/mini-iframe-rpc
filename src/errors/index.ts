import {MiniIframeError} from './mini-iframe-error';
import {ProcedureNotFoundError} from './procedure-not-found-error';
import {RemoteEvaluationError} from './remote-evaluation-error';
import {TimeoutError} from './timeout-error';

export {MiniIframeError, ProcedureNotFoundError, RemoteEvaluationError, TimeoutError};

type ErrorConstructor = new (state: MiniIframeError) => Error;

type ERROR_MAP = {
    [key: string]: ErrorConstructor
}

const errorClasses = ([
    ProcedureNotFoundError,
    RemoteEvaluationError,
    TimeoutError] as ErrorConstructor[]).reduce(
    (obj:ERROR_MAP, constr:ErrorConstructor) => {
        obj[constr.name] = constr;

        return obj;
    }, {} as ERROR_MAP) as ERROR_MAP;    

// tslint:disable-next-line:no-any
export const deserializeError = (error:Error) => {
    const constr = errorClasses[error.name];

    return constr ? new constr(error as MiniIframeError) : new MiniIframeError(error.message);
};