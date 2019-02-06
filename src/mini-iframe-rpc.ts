
/* tslint:disable no-any no-unsafe-any */

const RPC_MESSAGE_TYPE = "iframe-rpc";
const RANDOM_BASE = 36;
const CALLID_LENGTH = 8;

interface RequestMessageBody  {
    contents: "request";
    callId: string;
    procedureName: string;
    argumentList: any[]
}

interface ResultMessageBody {
    contents: "result";
    callId: string;    
    result: any | null
}

interface ExceptionMessageBody {
    contents: "exception";
    callId: string;
    exception: string
}

type MessageBody = RequestMessageBody | ResultMessageBody | ExceptionMessageBody;

export interface InitParameters {
    windowRef: Window;
    originWhitelist: string[];
    timeout: number;
}

interface CallbackFunctions {
    result: (result: any) => void,
    exception: (exception: string) => void
}

type ProcedureImplementation = (...args: any[]) => any;

export class MiniIframeRPC {
    private config: InitParameters;
    private callbacks: Map<string, CallbackFunctions> = new Map<string, CallbackFunctions>();
    private registeredProcedures: Map<string, ProcedureImplementation> = new Map<string, ProcedureImplementation>();

    constructor(initParameters?: InitParameters) {
        this.config = {
            windowRef: initParameters && initParameters.windowRef || window,
            originWhitelist: initParameters && initParameters.originWhitelist || [],
            timeout: initParameters && initParameters.timeout || 0
        };
        // attach listener
        this.config.windowRef.addEventListener("message", this.recv);
    }

    register(procedureName: string, implementation: ProcedureImplementation | null): void {
        if (implementation !== null) {
            this.registeredProcedures.set(procedureName, implementation);
        } else {
            this.registeredProcedures.delete(procedureName);
        }
    }

    invoke (targetWindow: Window, targetOrigin: string | null, procedureName: string, argumentList: any[] | null): Promise<any> {
        const callId = this.getNextCallId();
        const messageBody: RequestMessageBody = {
            contents: "request",
            callId,
            procedureName,
            argumentList: (argumentList || [])};
        let resultPromise: Promise<any> = this.sendMessage(targetWindow, targetOrigin, messageBody).then(() => new Promise((resolve, reject) => {
            const callbacks : CallbackFunctions = {
                result: (result : any) => {
                    this.callbacks.delete(callId);
                    resolve(result);
                },
                exception: (exception : string) => {
                    this.callbacks.delete(callId);
                    reject(new Error(exception));
                }
            };
            this.callbacks.set(callId, callbacks);
        }));
        if (this.config.timeout > 0) {
            resultPromise = this.timeboxPromise(resultPromise);
        }

        return resultPromise;
    }

    close() {
        this.config.windowRef.removeEventListener("message", this.recv);
    }

    private timeboxPromise(originalPromise : Promise<any>): Promise<any> {
        return Promise.race([
            originalPromise,
            new Promise((_resolve, reject) => {
                this.config.windowRef.setTimeout(
                    () => reject(new Error(`Timeout waiting for RPC response after ${this.config.timeout} ms`)),
                    this.config.timeout);
            })
        ]);
    }   

    private getNextCallId () {
        let randomId : string | null = null;
        while(!randomId || this.callbacks.has(randomId)) {
            randomId = `cb${Math.random().toString(RANDOM_BASE).replace(/[^a-z]+/g, '').substr(0, CALLID_LENGTH)}`;
        }

        return randomId;
    }

    private sendMessage (targetWindow: Window, targetOrigin: string | null, messageBody: MessageBody) : Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                const fullMessage = {
                    "type": RPC_MESSAGE_TYPE,
                    "message": messageBody
                };
                targetWindow.postMessage(fullMessage, targetOrigin || "*");
                resolve();
            } catch (e) {
                reject(e);
            }
        });
    }

    private formatError(err : any)  {
        if (!(err instanceof Error)) {
            return err;
        }
        // message is non-enumerable, so it must be explicitly extracted
        const {message, name, stack} = err;

        return JSON.stringify({message, name, stack});
    }

    private async respond (messageBody: RequestMessageBody, messageSource: Window, messageOrigin: string) {
        const callId = messageBody.callId;
        const procedureName = messageBody.procedureName;
        const argumentList = messageBody.argumentList;
        const responseOrigin = !messageOrigin || messageOrigin === "null" ? null : messageOrigin;
        const sendError = (ex : Error | string) => this.sendMessage(
                messageSource,
                responseOrigin,
                {
                    contents: "exception",
                    callId,
                    exception: this.formatError(ex)});
        if (this.registeredProcedures.has(procedureName)) {
            try {
                return Promise.resolve(
                    this.registeredProcedures.get(procedureName)!.apply(
                        {messageBody, messageSource, messageOrigin},
                        argumentList)).then(
                            result => this.sendMessage(
                                messageSource,
                                responseOrigin,
                                {
                                    contents: "result",
                                    callId,
                                    result
                                }).catch(sendError),
                            sendError);
            } catch (ex) {
                return sendError(ex);
            }
        } else {
            return sendError(`Procedure not found: ${procedureName}`);
        }
    }

    private handleResponse(response: MessageBody) {
        const callbackFunctions = this.callbacks.get(response.callId);
        if (callbackFunctions) {                        
            if (response.contents === "result") {
                callbackFunctions.result(response.result);
            } else if (response.contents === "exception") {
                callbackFunctions.exception(response.exception);
            }        
        }                
    }

    private recv = (messageEvent: MessageEvent) => {
        if ((this.config.originWhitelist.length < 1 || this.config.originWhitelist.indexOf(messageEvent.origin) > -1) &&
            messageEvent.data && messageEvent.data.type === RPC_MESSAGE_TYPE) {
            const messageBody : MessageBody = messageEvent.data.message as MessageBody;
            if (messageBody.contents === "request") {
                return this.respond(messageBody, messageEvent.source as Window, messageEvent.origin);
            }

            return this.handleResponse(messageBody);                        
        }
    }

} // end of class
