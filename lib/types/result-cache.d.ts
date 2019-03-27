export interface ResultCacheParameters {
    capacity: number;
    evictionCallback?: (callId: string, result: any) => void;
}
export declare const DEFAULT_RESULT_CACHE_CAPACITY = 200;
export declare class ResultCache {
    private ids;
    private results;
    private config;
    constructor(config?: Partial<ResultCacheParameters>);
    hasCachedResult(id: string): boolean;
    getCachedResult(id: string): any;
    setCachedResult(id: string, result: any): void;
    private enforceCapacity;
}
//# sourceMappingURL=result-cache.d.ts.map