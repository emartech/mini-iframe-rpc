// MSIE 11 has no Object.assign
// based on: https://github.com/rubennorte/es6-object-assign/blob/master/index.js

// tslint:disable-next-line:no-any
function copyAttributes(to:any, from:any) {
    const keysArray = Object.keys(Object(from));
    const len = keysArray.length;
    for (let nextIndex = 0; nextIndex < len; nextIndex++) {
      const nextKey = keysArray[nextIndex];
      const desc = Object.getOwnPropertyDescriptor(from, nextKey);
      if (desc !== undefined && desc.enumerable) {        
        to[nextKey] = from[nextKey];
      }
    }
  }

// tslint:disable-next-line:no-any
export function assign(target?:any, ...sources: any[]) {
    if (target === undefined || target === null) {
      throw new TypeError('Cannot convert first argument to object');
    }
  
    const to = Object(target);
    sources.forEach((source) => {
        if (source !== undefined && source !== null) {
            copyAttributes(to, source);
        }
    });

    return to;
  }
  