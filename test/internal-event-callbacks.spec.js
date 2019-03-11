describe('mini-iframe-rpc', function() {
    let ready;
    window.isParent = "parent";

    const childWindow = () => document.getElementById('unboxedChildIframe').contentWindow;

    const runChildScript = (source) => {
        return window.parentRPC.invoke(childWindow(), null, 'appendScript', [source]);
    };

    const onScriptRun = (script) => {
        return new Promise((resolve, _reject) => {
            window.parentRPC.register('ready', (result) => resolve(result));
            runChildScript(`
                window.result = (function() {${script}})();
                window.childRPC.invoke(window.parent, null, 'ready', [window.result]);
                `);
        });
    };

    beforeEach(() => {
        window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC();
        // inject the HTML fixture for the tests
        const iframe = document.createElement('iframe');
        iframe.srcdoc = `
            <html>
                <body>
                    <script src="${document.querySelectorAll('script[src*="mini-iframe-rpc.js"]')[0].src}"><\/script>
                    <script>
                        window.isChild = "child";
                        window.childRPC = new window["mini-iframe-rpc"].MiniIframeRPC();
                        window.childRPC.register("appendScript", (script) => {
                            const element = document.createElement('script');
                            element.innerHTML = script;
                            document.body.appendChild(element);
                            return true;
                        });
                        window.childRPC.register("close", () => window.childRPC.close());
                        window.childRPC.invoke(window.parent, null, 'ready');
                    <\/script>
                </body>
            </html>`;
        iframe.sandbox = "allow-scripts allow-same-origin";
        iframe.id = "unboxedChildIframe";
        ready = new Promise((resolve, _reject) => {
            document.body.appendChild(iframe);
            window.parentRPC.register('ready', () => {
                window.parentRPC.close();
                resolve(iframe.contentWindow);
            });
        });
    });

    // remove the html fixture from the DOM
    afterEach(() => {
        window.parentRPC.invoke(childWindow(), null, 'close');
        window.parentRPC.close();
        document.getElementById("unboxedChildIframe").remove();
    });

    const cleanCallId = (fullMessage) => {
        let copy = Object.assign({}, fullMessage);
        copy.message.callId = null;
        return copy;
    }


    it('calls onRegister handler on procedure registration', function(done) {
        ready.then(() => {
            const name = "afunction";
            const impl = (x) => x;
            window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC({'eventCallbacks': {
                'onRegister': (_name, _impl) => {
                    expect(_name).toEqual(name);
                    expect(_impl).toEqual(impl);
                    done();
                }
            }});
            window.parentRPC.register(name, impl);
        });
    });

    it('calls onReceive handler on postMessage reception', function(done) {
        ready.then(() => {
            let listenToOnReceive = false;
            window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC({'eventCallbacks': {
                'onReceive': (postMessage) => {
                    if (!listenToOnReceive) {
                        return;
                    }
                    expect(cleanCallId(postMessage.data)).toEqual({
                        type: 'mini-iframe-rpc',
                        message: {
                            contents: 'result',
                            callId: null,
                            result: true
                        }
                    });
                    listenToOnReceive = false;
                    done();
                }
            }});
            onScriptRun('childRPC.register("callme", () => window.isChild);').then(() => {
                listenToOnReceive = true;
                parentRPC.invoke(child, window.location.origin, "callme").then((result) => {
                    done(new Error('onReceive should be called before RPC call completes'));
                })
            });
        });
    });

    it('calls onSend handler on postMessage send', function(done) {
        ready.then((child) => {
            let listenToOnSend = false;
            window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC({'eventCallbacks': {
                'onSend': (targetWindow, targetOrigin, fullMessage) => {
                    if (!listenToOnSend) {
                        return;
                    }
                    expect(targetWindow).toBe(child);
                    expect(targetOrigin).toEqual(window.location.origin);
                    // update callId in fullMessage which is random
                    expect(cleanCallId(fullMessage)).toEqual({
                        type: 'mini-iframe-rpc',
                        message: {
                            contents: 'request',
                            callId: null,
                            procedureName: 'callme',
                            argumentList: []
                        }
                    });
                    listenToOnSend = false;
                    done();
                }
            }});
            onScriptRun('childRPC.register("callme", () => window.isChild);').then(() =>  {
                listenToOnSend = true;
                parentRPC.invoke(child, window.location.origin, "callme").then((result) => {
                    done(new Error('onSend should be called before RPC call completes'));
                })
            });
        });
    });

 
});
