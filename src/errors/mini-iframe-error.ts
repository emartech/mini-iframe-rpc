export class MiniIframeError extends Error {
  private timestamp: number;

  // tslint:disable-next-line:no-any
  public constructor(message?: string, state?: any) {
    super(message);
    this.timestamp = +new Date();
    if (state) {
      Object.assign(this, state);
    }
    // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
    // tslint:disable-next-line:no-unsafe-any
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.name = MiniIframeError.name; // stack traces display correctly now
  }
}
