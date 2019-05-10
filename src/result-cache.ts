export interface ResultCacheParameters {
  capacity: number;
  // tslint:disable-next-line:no-any
  evictionCallback?: (callId: string, result: any) => void;
}

export const DEFAULT_RESULT_CACHE_CAPACITY = 200;

const DEFAULT_PARAMETERS: ResultCacheParameters = {
  capacity: DEFAULT_RESULT_CACHE_CAPACITY
};

export class ResultCache {
  // tslint:disable-next-line:no-any
  private ids: string[] = [];
  // tslint:disable-next-line:no-any
  private results: { [key: string]: any } = {};
  private config: ResultCacheParameters;

  public constructor(config?: Partial<ResultCacheParameters>) {
    this.config = Object.assign({}, DEFAULT_PARAMETERS, config || {});
  }

  hasCachedResult(id: string) {
    return this.results.hasOwnProperty(id);
  }

  getCachedResult(id: string) {
    return this.results[id];
  }

  // tslint:disable-next-line:no-any
  setCachedResult(id: string, result: any) {
    if (this.hasCachedResult(id)) {
      this.ids = this.ids.filter(c => c !== id);
    }
    this.ids.unshift(id);
    this.results[id] = result;
    if (this.config.capacity >= 0) {
      this.enforceCapacity();
    }
  }

  private enforceCapacity() {
    for (let size = this.ids.length; size > this.config.capacity; size--) {
      const id = this.ids.pop()!;
      const result = this.results[id];
      delete this.results[id];
      if (this.config.evictionCallback) {
        this.config.evictionCallback(id, result);
      }
    }
  }
}
