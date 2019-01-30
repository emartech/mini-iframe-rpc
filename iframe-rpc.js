var makeIframeRPC = function makeIframeRPC(expectedOrigin) {
    // sendMessage receives the message object, the from: and type: fields it fills in.

    /*
        MSG format
        {
            type: iframe-rpc
            message: {
                contents: request, result or exception
                callId: (int)
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

    var REQUEST = "request", RESULT = "result", EXCEPTION = "exception"; 
    var RPC_MESSAGE_TYPE = "iframe-rpc";

    var nextCallId = 0;

    var callbacks = {};

    var registeredProcedures = {};

    var register = function(name, implementation) {
        registeredProcedures[name] = implementation;
    };

    var getNextCallId = function() {
        return ++nextCallId;
    };

    var sendMessage = function(targetWindow, message) {
        const fullMessage = {
            "type": RPC_MESSAGE_TYPE,
            "message": message };
        return targetWindow.postMessage(fullMessage, "*");
    };

    var invoke = function(targetWindow, procedure, argumentList) {
        var callId = getNextCallId();
        sendMessage(targetWindow, {
            "contents": REQUEST,
            "callId" : callId,
            "procedure": procedure,
            "argumentList": (argumentList || [])
        });
        return new Promise((resolve, reject) => {
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
    };

    var recv = function(messageEvent) {
        if ((!expectedOrigin || expectedOrigin === messageEvent.origin) &&
            messageEvent.data && messageEvent.data.type === RPC_MESSAGE_TYPE) {
            const message = messageEvent.data.message
            if (message.contents === REQUEST) {
                ({callId, procedure, argumentList} = message);
                let response = {"callId" : callId};
                const sendError = (ex) => {
                    sendMessage(
                        messageEvent.source,
                        Object.assign(response, {
                            "contents": EXCEPTION,
                            "exception": ex}));
                };
                if (registeredProcedures[procedure]) {
                    try {
                        Promise.resolve(
                            registeredProcedures[procedure].apply(messageEvent, argumentList)).then(
                            result => sendMessage(
                                messageEvent.source,
                                Object.assign(response, {
                                    "contents": RESULT,
                                    "result": result})),
                            sendError);
                    } catch (ex) {
                        sendError(ex);
                    }
                } else {
                    sendError("Procedure not found: " + procedure);
                }
            } else {
                ({callId, contents, result} = message);
                if (callbacks[callId]) {
                    callbacks[callId][contents](message[contents]);
                }
            }
        }
    };

    var close = function() {
        window.removeEventListener("message", recv);
    };

    // attach listener
    window.addEventListener("message", recv, false);

    return {register, invoke, close};
};
