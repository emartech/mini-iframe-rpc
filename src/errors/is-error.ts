// the wonders of Javascript: Error detection https://stackoverflow.com/a/45496068
// tslint:disable-next-line:no-any
export const isError = (rejectOrError?:any) => {
    const isErrorValue = (rejectOrError !== null && rejectOrError !== undefined) &&
        (
            (rejectOrError instanceof Error) ||
            (rejectOrError instanceof DOMException) ||
            // DataCloneErrors must be identified as such otherwise, we can't even send errors
            // when response cant be serialized! This is required for MS Edge support.
            (rejectOrError.name === 'DataCloneError') ||
            (
                (rejectOrError.message && typeof rejectOrError.message === 'string') &&
                (rejectOrError.stack && typeof rejectOrError.stack === 'string')
            )
        );
        
    return isErrorValue;    
};