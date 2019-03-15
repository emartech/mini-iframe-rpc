export interface ResultCacheParameters {
    capacity: number;
    evictionCallback?: (callId: string, result: any) => void;
}
export declare const DEFAULT_RESULT_CACHE_CAPACITY = 200;
export declare class ResultCache {
    private callIds;
    private results;
    private config;
    constructor(config?: Partial<ResultCacheParameters>);
    hasCachedResult(callId: string): boolean;
    getCachedResult(callId: string): any;
    setCachedResult(callId: string, result: any): void;
    private enforceCapacity;
}
//# sourceMappingURL=result-cache.d.ts.map