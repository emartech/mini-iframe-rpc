export interface ResponseCacheParameters {
    size: number;
};

const DEFAULT_PARAMETERS = {
    size: 100
};

export class ResponseCache {

    // tslint:disable-next-line:no-any
    responses: {[key:string]:any} = {};
    parameters: ResponseCacheParameters;

    constructor(parameters?: Partial<ResponseCacheParameters>) {
        this.parameters = Object.assign({}, DEFAULT_PARAMETERS, parameters || {});
    }
}