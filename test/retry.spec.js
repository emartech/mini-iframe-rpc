describe('retries', function() {
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
        window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC({
            'defaultInvocationOptions': {
                retryAllFailures: true,
                timeout: 400,
                retryLimit: 2
            }
        });
        // inject the HTML fixture for the tests
        const iframe = document.createElement('iframe');
        iframe.srcdoc = `
            <html>
                <body>
                    <script src="${document.querySelectorAll('script[src*="mini-iframe-rpc.js"]')[0].src}"><\/script>
                    <script>
                        window.isChild = "child";
                        window.childRPC = new window["mini-iframe-rpc"].MiniIframeRPC({
                            'resultCacheCapacity': 0,
                        });
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
        iframe.sandbox = "allow-scripts";
        iframe.id = "unboxedChildIframe";
        ready = new Promise((resolve, _reject) => {
            document.body.appendChild(iframe);
            window.parentRPC.register('ready', () => {
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

    it('Retries until exhausted', function(done) {
        const retryLimit = 3;
        ready.then(() => onScriptRun(`
            (function() {
                let counter=0;
                childRPC.register("callme", () => Promise.reject(counter++));
            })();`)
            ).then(() => parentRPC.invoke(childWindow(), null, "callme", [], {timeout: 20, retryLimit: retryLimit, retryAllFailures: true})
            ).then(
                (result) => done(new Error('Promise should not be resolved')),
                (reject) => {
                    expect(reject.name).toEqual('InvocationError');
                    expect(reject.procedureName).toEqual('callme');
                    expect(reject.cause).toEqual(retryLimit);
                    expect(reject.previousRejectReasons.length).toEqual(retryLimit);
                    for (let i = 0; i < reject.previousRejectReasons.length; i++) {
                        expect(reject.previousRejectReasons[i]).toEqual(i);
                    }
                    done();
                });
    });


    it('calls internal event callback on retry', function(done) {
        const retryLimit = 3;
        const requestMessageBodies = [];
        let listen = false;
        ready.then(() => {
            window.parentRPC.close();
            window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC({
                'eventCallbacks': {
                    'onRequestRetry': (reason, previousRejectReasons, requestMessageBody) => {
                        if (!listen) {
                            return;
                        }
                        expect(reason).toEqual(retryLimit - previousRejectReasons.length);
                        requestMessageBodies.forEach(r => expect(requestMessageBody).toEqual(r));
                        requestMessageBodies.push(requestMessageBody);
                    }
                }
            });
            onScriptRun(`
                (function() {
                    let counter=${retryLimit};
                    childRPC.register("callme", () => Promise[counter > 0 ? 'reject' : 'resolve'](counter--));
                })();`);
            }).then(() => {
                listen = true;
                return parentRPC.invoke(childWindow(), null, "callme", [], {timeout: 100, retryLimit: retryLimit, retryAllFailures: true})
            }).then(
                (result) => {
                    listen = false;
                    expect(requestMessageBodies.length).toEqual(retryLimit);
                    expect(result).toEqual(0);
                    done();
                });
    });

    it('attempted when request times out', function(done) {
        const retryLimit = 3;
        const requestMessageBodies = [];
        let listen = false;
        ready.then(() => {
            window.parentRPC.close();
            window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC({'eventCallbacks': {
                    'onRequestRetry': (reason, previousRejectReasons, requestMessageBody) => {
                        if (!listen) {
                            return;
                        }
                        expect(reason.name).toEqual('TimeoutError');
                        expect(reason.message).toEqual('Timeout after 20 ms.');
                        requestMessageBodies.forEach(r => expect(requestMessageBody).toEqual(r));
                        requestMessageBodies.push(requestMessageBody);
                    }}});
            onScriptRun(`
                (function() {
                    let counter=${retryLimit}+1;
                    childRPC.register("callme", () => {
                        counter--;
                        if (counter > 0) {
                            // returns promise which never resolves or rejects
                            return new Promise((_1, _2) => {});
                        }
                        return counter;
                    });
                })();`);
            }).then(() => {
                listen = true;
                return parentRPC.invoke(childWindow(), null, "callme", [], {timeout: 20, retryLimit: retryLimit, retryAllFailures: true})
            }).then(
                (result) => {
                    listen = false;
                    expect(requestMessageBodies.length).toEqual(retryLimit);
                    expect(result).toEqual(0);
                    done();
                });
    });

    it('accepts first response even if its the response to a previous request', function(done) {
        const retryLimit = 1;
        let gotTimeoutError = false;
        let listen = false;
        ready.then(() => {
            window.parentRPC.close();
            window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC({'eventCallbacks': {
                    'onRequestRetry': (reason, previousRejectReasons, requestMessageBody) => {
                        if (!listen) {
                            return false;
                        }
                        expect(reason.name).toEqual('TimeoutError');
                        gotTimeoutError = true;
                    }}});
            onScriptRun(`
                (function() {
                    const timeouts = [120, 80];
                    let counter=0;
                    childRPC.register("callme", () => new Promise((resolve, reject) => {
                        const currentValue = counter;
                        window.setTimeout(
                            () => resolve(currentValue),
                            timeouts[currentValue]);
                        counter++;
                        })
                    );
                })();`);
            }).then(() => {
                listen = true;
                return parentRPC.invoke(childWindow(), null, "callme", [], {timeout: 100, retryLimit: retryLimit, retryAllFailures: true})
            }).then(
                (result) => {
                    listen = false;
                    expect(gotTimeoutError).toEqual(true);
                    expect(result).toEqual(0);
                    done();
                });
    });

    it('non retriable errors fail after first attempt', function(done) {
        const retryLimit = 3;
        ready.then(() => parentRPC.invoke(childWindow(), null, "callme", [], {timeout: 100, retryLimit: retryLimit, retryAllFailures: false})).then(
                (result) => done(new Error('Promise should not be resolved')),
                (reason) => {
                    expect(reason.cause.name).toEqual('ProcedureNotFoundError');
                    expect(reason.previousRejectReasons.length).toEqual(0);
                    done();
                });
    });

    it('cached results only computed once', function(done) {
        const retryLimit = 3;
        ready.then(() => {
            onScriptRun(`
                window.childRPC.close();
                window.childRPC = new window["mini-iframe-rpc"].MiniIframeRPC({resultCacheCapacity: 20});
                (function() {
                    let counter=0;
                    childRPC.register("callme", () => Promise.reject(counter++));
                })();`);
            }).then(() => parentRPC.invoke(childWindow(), null, "callme", [], {timeout: 100, retryLimit: retryLimit})
            ).then(
                (result) => done(new Error('Promise should not be resolved')),
                (reject) => {
                    expect(reject.name).toEqual('InvocationError');
                    expect(reject.procedureName).toEqual('callme');
                    expect(reject.cause).toEqual(0);
                    expect(reject.previousRejectReasons.length).toEqual(retryLimit);
                    for (let i = 0; i < reject.previousRejectReasons.length; i++) {
                        expect(reject.previousRejectReasons[i]).toEqual(0);
                    }
                    done();
                });
    });

});
