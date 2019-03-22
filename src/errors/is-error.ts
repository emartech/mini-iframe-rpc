// the wonders of Javascript: Error detection https://stackoverflow.com/a/45496068
// tslint:disable-next-line:no-any
export const isError = (rejectOrError?:any) => !!rejectOrError && (
                (rejectOrError instanceof Error) || 
                (rejectOrError.stack && rejectOrError.message && typeof rejectOrError.stack === 'string' && typeof rejectOrError.message === 'string')
            );