export class MiniIframeError extends Error {
    
    timestamp = +(new Date());

    constructor(message?: string) {
        super(message);
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        this.name = MiniIframeError.name; // stack traces display correctly now 
    }
}