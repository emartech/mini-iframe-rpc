export default (init) => {
    /*
        MSG format
        {
            type: iframe-rpc
            message: {
                contents: request, result or exception
                callId: random id
                -- request --
                procedure:
                argumentList:
                -- result --
                result:
                -- exception --
                exception: 
            }
        }

    */
    const REQUEST = "request", RESULT = "result", EXCEPTION = "exception"; // TODO: type no such method, exception, timeout, etc.
    const RPC_MESSAGE_TYPE = "iframe-rpc";

    init = init || {};
    const windowRef = init.window || window;
    const originWhitelist = init.originWhitelist || [];
    const timeout = init.timeout || 0;

    const timeboxPromise = (originalPromise, milisecondsToWait) => {
      return Promise.race([
        originalPromise,
        new Promise((_resolve, reject) => {
          windowRef.setTimeout(
            () => reject(new Error('Timeout waiting for RPC response after ' + milisecondsToWait + ' ms')),
            milisecondsToWait);
        })
      ]);
    };


    const callbacks = {};

    const registeredProcedures = {};

    const register = function(name, implementation) {
        registeredProcedures[name] = implementation;
    };

    const getNextCallId = () => {
        let randomId;
        while(!randomId || (randomId in callbacks)) {
            randomId = "cb" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
        }
        return randomId;
    }

    const sendMessage = (targetWindow, targetOrigin, message) => {
        const fullMessage = {
            "type": RPC_MESSAGE_TYPE,
            "message": message };
        return targetWindow.postMessage(fullMessage, targetOrigin || "*");
    };

    const invoke = (targetWindow, targetOrigin, procedure, argumentList) => {
        const callId = getNextCallId();
        sendMessage(targetWindow, targetOrigin, {
            "contents": REQUEST,
            "callId" : callId,
            "procedure": procedure,
            "argumentList": (argumentList || [])
        });
        const resultPromise = new Promise((resolve, reject) => {
            callbacks[callId] = {
                "result": (result) => {
                    delete callbacks[callId];
                    resolve(result);
                },
                "exception": (exception) => {
                    delete callbacks[callId];
                    reject(exception);
                }
            };
        });
        return timeout > 0 ? timeboxPromise(resultPromise, timeout) : resultPromise;
    };

    const cloneError = (err) => {
        if (!(err instanceof Error)) {
            return err;
        }
        const plainObject = {};
        Object.getOwnPropertyNames(err).forEach(function(key) {
            plainObject[key] = err[key];
        });
        return plainObject;
    };

    const recv = (messageEvent) => {
        if ((originWhitelist.length < 1 || originWhitelist.indexOf(messageEvent.origin) > -1) &&
            messageEvent.data && messageEvent.data.type === RPC_MESSAGE_TYPE) {
            const message = messageEvent.data.message
            const callId = message.callId;
            if (message.contents === REQUEST) {
                const procedure = message.procedure;
                const argumentList = message.argumentList;
                const responseOrigin = !messageEvent.origin || messageEvent.origin === "null" ? null : messageEvent.origin;
                const response = {"callId" : callId};
                const sendError = (ex) => {
                    sendMessage(
                        messageEvent.source,
                        responseOrigin,
                        Object.assign(response, {
                            "contents": EXCEPTION,
                            "exception": cloneError(ex)}));
                };
                if (registeredProcedures[procedure]) {
                    try {
                        Promise.resolve(
                            registeredProcedures[procedure].apply(messageEvent, argumentList)).then(
                            result => sendMessage(
                                messageEvent.source,
                                responseOrigin,
                                Object.assign(response, {
                                    "contents": RESULT,
                                    "result": result})),
                            sendError);
                    } catch (ex) {
                        sendError(ex.toString());
                    }
                } else {
                    sendError("Procedure not found: " + procedure);
                }
            } else {
                const contents = message.contents;
                if (contents && callbacks[callId]) {
                    callbacks[callId][contents](message[contents]);
                }
            }
        }
    };

    const close = function() {
        windowRef.removeEventListener("message", recv);
    };

    // attach listener
    windowRef.addEventListener("message", recv);

    return {register, invoke, close};
};
