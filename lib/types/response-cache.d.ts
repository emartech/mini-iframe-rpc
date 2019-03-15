export interface ResponseCacheParameters {
    size: number;
}
export declare class ResponseCache {
    responses: {
        [key: string]: any;
    };
    parameters: ResponseCacheParameters;
    constructor(parameters?: Partial<ResponseCacheParameters>);
}
//# sourceMappingURL=response-cache.d.ts.map