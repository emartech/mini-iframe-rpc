export interface ResultCacheParameters {
    capacity: number;
    // tslint:disable-next-line:no-any
    evictionCallback?: (callId:string, result:any) => void;
};

export const DEFAULT_RESULT_CACHE_CAPACITY = 200;


const DEFAULT_PARAMETERS:ResultCacheParameters = {
    capacity: DEFAULT_RESULT_CACHE_CAPACITY,
};

export class ResultCache {

    // tslint:disable-next-line:no-any
    private callIds: string[] = [];
    // tslint:disable-next-line:no-any
    private results: {[key:string]:any} = {};
    private config: ResultCacheParameters;

    constructor(config?: Partial<ResultCacheParameters>) {
        this.config = Object.assign({}, DEFAULT_PARAMETERS, config || {});
    }

    hasCachedResult(callId:string) {
        return this.results.hasOwnProperty(callId);
    }

    getCachedResult(callId:string) {
        return this.results[callId];
    }

    // tslint:disable-next-line:no-any
    setCachedResult(callId:string, result:any) {
        if (this.hasCachedResult(callId)) {
            this.callIds = this.callIds.filter(c => c !== callId);
        }
        this.callIds.unshift(callId);
        this.results[callId] = result;
        if (this.config.capacity >= 0) {
            this.enforceCapacity();
        }        
    }

    private enforceCapacity() {
        for (let size = this.callIds.length; size > this.config.capacity; size--) {
            const callId = this.callIds.pop()!;
            const result = this.results[callId];
            delete this.results[callId];
            if (this.config.evictionCallback) {
                this.config.evictionCallback(callId, result);
            }
        }
    }

}