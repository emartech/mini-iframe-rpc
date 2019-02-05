describe('mini-iframe-rpc', function() {
    let ready;
    window.isParent = "parent";

    const childWindow = () => document.getElementById('childIframe').contentWindow;

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
        window.parentRPC = new mini_iframe_rpc.MiniIframeRPC();
        // inject the HTML fixture for the tests
        const iframe = document.createElement('iframe');
        iframe.srcdoc = `
            <html>
                <body>
                    <script src="${document.querySelectorAll('script[src*="mini_iframe_rpc.js"]')[0].src}"><\/script>
                    <script>
                        window.isChild = "child";
                        window.childRPC = new mini_iframe_rpc.MiniIframeRPC();
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
        iframe.id = "childIframe";
        ready = new Promise((resolve, _reject) => {
            document.body.appendChild(iframe);
            window.parentRPC.register('ready', () => resolve(iframe.contentWindow));
        });
    });

    // remove the html fixture from the DOM
    afterEach(() => {
        window.parentRPC.invoke(childWindow(), null, 'close');
        window.parentRPC.close();
        document.getElementById("childIframe").remove();
    });

    it('can invoke registered procedures (parent calling child)', function(done) {
        ready.then((child) => {
            onScriptRun('childRPC.register("callme", () => window.isChild);').then(() => 
                parentRPC.invoke(child, null, "callme").then((result) => {
                    expect(result).toBe("child");
                    done();
                })
            );
        });
    });

    it('can invoke registered procedures (child calling parent)', function(done) {
        ready.then(() => {
            parentRPC.register('callme', (callerName) => {
                expect(window.isParent).toBe("parent");
                expect(callerName).toBe("child");
                done();
            });
            runChildScript(`childRPC.invoke(window.parent, null, "callme", [window.isChild])`);
        });
    });

    it('can properly pass complex arguments', function(done) {
        ready.then((child) => onScriptRun(`
            const recursiveReduce = (fn, args) => 
            args.map(arg => {
                if (arg instanceof Array) {
                    return recursiveReduce(fn, arg);
                }
                return arg;
            }).reduce(fn);
            window.childRPC.register("add", (...numbers) => recursiveReduce((a,b) => a+b, numbers)); 
            `)
        ).then(() => parentRPC.invoke(childWindow(), null, "add", [1,2,[1,2,3],4,5])
        ).then((result) => {
            expect(result).toBe(18);
            done();
        });
    });

    it('can return complex parameters', function(done) {
        const obj = {"a": 1, "b": [1,2,3], "c": false};
        ready.then((child) => {
            onScriptRun(`
                window.childRPC.register('callme', () => {
                    return ${JSON.stringify(obj)};
                });
            `
            ).then(() => parentRPC.invoke(child, null, "callme")
            ).then((result) => {
                expect(result).toEqual(obj);
                done();
            });
        });
    });

    it('can handle promise responses', function(done) {
        ready.then((child) => {
            onScriptRun(`window.childRPC.register('callme', () => Promise.resolve(true));`
            ).then(() => parentRPC.invoke(child, null, "callme")
            ).then((result) => {
                expect(result).toBe(true);
                done();
            });
        });
    });

    it('rejects response promise if called function doesnt exist', function(done) {
        ready.then((child) => {
            parentRPC.invoke(child, null, "unregistered_function").then(
                (result) => done(new Error('Promise should not be resolved')),
                (reject) => {
                    expect(reject).toEqual(new Error('Procedure not found: unregistered_function'));
                    done();
                });
        });
    });

    it('unregisters a procedure when reregistered with null implementation ', function(done) {
        ready.then(
            (child) => onScriptRun('childRPC.register("callme", () => window.isChild);')
            // first call OK, because procedure is registered
        ).then(() => parentRPC.invoke(childWindow(), null, "callme")
        ).then((result) => expect(result).toEqual('child')
        ).then(() => onScriptRun('childRPC.register("callme", null);')
        ).then(() => parentRPC.invoke(childWindow(), null, "callme")
        ).then(
            (result) => done(new Error('Promise should not be resolved (result: '+result+')')),
            (reject) => {
                expect(reject).toEqual(new Error('Procedure not found: callme'));
                done();
            });
    });

    it('does not receive messages after close() called', function(done) {
        ready.then((child) => {
            // re-init parentRPC to use timeout
            window.parentRPC.close();
            window.parentRPC = new mini_iframe_rpc.MiniIframeRPC({'timeout': 100});
            onScriptRun('childRPC.register("callme", () => window.isChild);');
            // first call OK, because procedure is registered
        }).then(() => parentRPC.invoke(childWindow(), null, "callme")
        ).then((result) => expect(result).toEqual('child')
        ).then(() => window.parentRPC.invoke(childWindow(), null, 'close')
            // after child RPC closed, same call results in timeout
        ).then(() => parentRPC.invoke(childWindow(), null, "callme")
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject).toEqual(new Error('Timeout waiting for RPC response after 100 ms'));
                done();
            }
        );
    });

    it('gracefully handles exceptions in remote procedure', function(done) {
        ready.then(
            () => onScriptRun(`childRPC.register("err", () => {
                throw new Error("err");
            });`)
        ).then(() => parentRPC.invoke(childWindow(), null, "err")
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                // exception data is JSON encoded so original stack can be retrieved
                const exData = JSON.parse(reject.message);
                expect(exData.message).toEqual('err');
                done();
            });
    });

    it('gracefully handles rejected promise in remote procedure', function(done) {
        ready.then(
            () => onScriptRun(`childRPC.register("err", () => Promise.reject("reject"));`)
        ).then(() => parentRPC.invoke(childWindow(), null, "err")
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject).toEqual(new Error('reject'));
                done();
            });
    });

    it('gracefully handles unserializable response objects', function(done) {
        ready.then(
            () => onScriptRun(`childRPC.register("err", () => window);`)
        ).then(() => parentRPC.invoke(childWindow(), null, "err")
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                // exception data is JSON encoded so original stack can be retrieved
                const exData = JSON.parse(reject.message);
                expect(exData.message.indexOf('could not be cloned') > -1).toBe(true);
                done();
            });
    });

    it('gracefully handles unserializable request objects', function(done) {
        ready.then(
            () => onScriptRun(`childRPC.register("callme", () => true);`)
        ).then(() => parentRPC.invoke(childWindow(), null, "callme", [window])
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                // exception data is JSON encoded so original stack can be retrieved
                expect(reject.toString().indexOf('could not be cloned') > -1).toBe(true);
                done();
            });
    });

    it('gracefully handles timeouts in remote procedure', function(done) {
        ready.then(
            () => {
                // re-init parentRPC to use timeout
                window.parentRPC.close();
                window.parentRPC = new mini_iframe_rpc.MiniIframeRPC({'timeout': 100});
                onScriptRun(`
                    childRPC.register("err", () => {
                        return new Promise(() => true);
                    });`
                );
            }
        ).then(() => parentRPC.invoke(childWindow(), null, "err")
        ).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject).toEqual(new Error('Timeout waiting for RPC response after 100 ms'));
                done();
            });
    });

});
