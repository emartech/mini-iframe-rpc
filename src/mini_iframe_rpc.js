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
        if (implementation) {
            registeredProcedures[name] = implementation;
        } else {
            delete registeredProcedures[name];
        }
    };

    const getNextCallId = () => {
        let randomId;
        while(!randomId || (randomId in callbacks)) {
            randomId = "cb" + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
        }
        return randomId;
    }

    const sendMessage = (targetWindow, targetOrigin, message) => new Promise((resolve, reject) => {
        try {
            targetWindow.postMessage({
                "type": RPC_MESSAGE_TYPE,
                "message": message}, targetOrigin || "*");
            resolve();
        } catch (e) {
            reject(e);
        }
    });

    const invoke = (targetWindow, targetOrigin, procedure, argumentList) => {
        const callId = getNextCallId();
        let resultPromise = sendMessage(targetWindow, targetOrigin, {
            "contents": REQUEST,
            "callId" : callId,
            "procedure": procedure,
            "argumentList": (argumentList || [])
        }).then(() => new Promise((resolve, reject) => {
            callbacks[callId] = {
                "result": (result) => {
                    delete callbacks[callId];
                    resolve(result);
                },
                "exception": (exception) => {
                    delete callbacks[callId];
                    reject(new Error(exception));
                }
            };
        }));
        if (timeout > 0) {
            resultPromise = timeboxPromise(resultPromise, timeout);
        }
        return resultPromise;
    };

    const merge = (...objects) => {
        const dest = {};
        objects.forEach(obj => Object.getOwnPropertyNames(obj).forEach(function(key) {
            dest[key] = obj[key];
        }));
        return dest;
    }

    const formatError = (err) => {
        if (!(err instanceof Error)) {
            return err;
        }
        return windowRef.JSON.stringify(merge(err, {"message": err.message}));
    };

    const respond = (messageEvent) => {
        const message = messageEvent.data.message
        const callId = message.callId;
        const procedure = message.procedure;
        const argumentList = message.argumentList;
        const responseOrigin = !messageEvent.origin || messageEvent.origin === "null" ? null : messageEvent.origin;
        const response = {"callId" : callId};
        const sendError = (ex) => sendMessage(
                messageEvent.source,
                responseOrigin,
                merge(response, {
                    "contents": EXCEPTION,
                    "exception": formatError(ex)}));
        if (registeredProcedures[procedure]) {
            try {
                return Promise.resolve(
                    registeredProcedures[procedure].apply(messageEvent, argumentList)).then(
                        result => sendMessage(
                            messageEvent.source,
                            responseOrigin,
                            merge(response, {
                                "contents": RESULT,
                                "result": result})).catch(sendError),
                        sendError);
            } catch (ex) {
                return sendError(ex);
            }
        } else {
            return sendError("Procedure not found: " + procedure);
        }
    };

    const recv = (messageEvent) => {
        if ((originWhitelist.length < 1 || originWhitelist.indexOf(messageEvent.origin) > -1) &&
            messageEvent.data && messageEvent.data.type === RPC_MESSAGE_TYPE) {
            const message = messageEvent.data.message
            if (message.contents === REQUEST) {
                respond(messageEvent);
            } else {
                const callId = message.callId;
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
