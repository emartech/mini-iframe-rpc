import {Dictionary} from 'typescript-collections';

const RPC_MESSAGE_TYPE = "iframe-rpc";

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
    originWhitelist: Array<string>;
    timeout: number;
}

interface CallbackFunctions {
    result: (result: any) => void,
    exception: (exception: string) => void
}

type ProcedureImplementation = (...args: any[]) => any;

export class MiniIframeRPC {
    private config: InitParameters;
    private callbacks: Dictionary<string, CallbackFunctions> = new Dictionary<string, CallbackFunctions>();
    private registeredProcedures: Dictionary<string, ProcedureImplementation> = new Dictionary<string, ProcedureImplementation>();

    public constructor(initParameters?: InitParameters) {
        this.config = {
            windowRef: initParameters && initParameters.windowRef || window,
            originWhitelist: initParameters && initParameters.originWhitelist || [],
            timeout: initParameters && initParameters.timeout || 0
        };
        // attach listener
        this.config.windowRef.addEventListener("message", this.recv);
    }

    private timeboxPromise(originalPromise : Promise<any>): Promise<any> {
        return Promise.race([
            originalPromise,
            new Promise((_resolve, reject) => {
                this.config.windowRef.setTimeout(
                    () => reject(new Error('Timeout waiting for RPC response after ' + this.config.timeout + ' ms')),
                    this.config.timeout);
            })
        ]);
    }

    public register(procedureName: string, implementation: ProcedureImplementation | null): void {
        if (implementation != null) {
            this.registeredProcedures.setValue(procedureName, implementation);
        } else {
            this.registeredProcedures.remove(procedureName);
        }
    };

    private getNextCallId () {
        let randomId : string | null = null;
        while(!randomId || this.callbacks.containsKey(randomId)) {
            randomId = "cb" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
        }
        return randomId;
    }

    private sendMessage (targetWindow: Window, targetOrigin: string | null, messageBody: MessageBody) : Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                let fullMessage = {
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

    public invoke (targetWindow: Window, targetOrigin: string | null, procedureName: string, argumentList: any[] | null): Promise<any> {
        const callId = this.getNextCallId();
        const messageBody: RequestMessageBody = {
            contents: "request",
            callId,
            procedureName,
            argumentList: (argumentList || [])};
        let resultPromise = this.sendMessage(targetWindow, targetOrigin, messageBody).then(() => new Promise((resolve, reject) => {
            const callbacks : CallbackFunctions = {
                result: (result : any) => {
                    this.callbacks.remove(callId);
                    resolve(result);
                },
                exception: (exception : string) => {
                    this.callbacks.remove(callId);
                    reject(new Error(exception));
                }
            };
            this.callbacks.setValue(callId, callbacks);
        }));
        if (this.config.timeout > 0) {
            resultPromise = this.timeboxPromise(resultPromise);
        }
        return resultPromise;
    }

    private formatError(err : any)  {
        if (!(err instanceof Error)) {
            return err;
        }
        // message is non-enumerable, so it must be explicitly extracted
        const {message, name, stack} = (err as Error);
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
        if (this.registeredProcedures.containsKey(procedureName)) {
            try {
                return Promise.resolve(
                    this.registeredProcedures.getValue(procedureName)!.apply(
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
            return sendError("Procedure not found: " + procedureName);
        }
    }

    private handleResponse(response: MessageBody) {
        const callbackFunctions = this.callbacks.getValue(response.callId);
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
            const messageBody : MessageBody = messageEvent.data.message;
            if (messageBody.contents === "request") {
                return this.respond(messageBody, messageEvent.source as Window, messageEvent.origin);
            }
            return this.handleResponse(messageBody);                        
        }
    }

    public close() {
        this.config.windowRef.removeEventListener("message", this.recv);
    }

} // end of class
