describe('iframe-rpc', function() {
    let ready;
    window.isParent = "parent";
    const childWindow = () => document.getElementById('childIframe').contentWindow;
    const runChildScript = (source) => {
        const script = childWindow().document.createElement('script');
        script.innerHTML = source;
        childWindow().document.body.appendChild(script);
    };
    const iframe = document.createElement('iframe');
    iframe.id = "childIframe";
    document.body.appendChild(iframe);
    const onScriptRun = (script) => {
        return new Promise((resolve, _reject) => {
            window.parentRPC.register('ready', () => resolve());
            runChildScript(`
                ${script};
                window.childRPC.invoke(window.parent, null, 'ready');
                `);
        });
    };

    // inject the HTML fixture for the tests
    beforeEach(() => {
        window.parentRPC = iframerpc();
        ready = onScriptRun(`
            window.isChild = "child";
            window.childRPC = (${iframerpc.toString()})();
            `).then(() => childWindow());
    });

    // remove the html fixture from the DOM
    afterEach(() => {
        window.parentRPC.close();
        childWindow().childRPC.close();
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
            window.tmp = (result) => {
                expect(result).toBe("parent");
                done();
            };
            parentRPC.register('callme', () => window.isParent);
            runChildScript(`
                childRPC.invoke(window.parent, null, "callme").then((result) => {
                    window.parent.tmp(result);
                });
                `);
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
            childRPC.register("add", (...numbers) => recursiveReduce((a,b) => a+b, numbers)); `)
        ).then(() => parentRPC.invoke(childWindow(), null, "add", [1,2,[1,2,3],4,5])
        ).then((result) => {
            expect(result).toBe(18);
            done();
        });
    });

    it('can return complex parameters', function(done) {
        ready.then((child) => {
            const obj = {"a": 1, "b": [1,2,3], "c": false};
            child.childRPC.register('callme', () => obj);
            parentRPC.invoke(child, null, "callme").then((result) => {
                expect(result).toEqual(obj);
                done();
            });
        });
    });

    it('can handle promise responses', function(done) {
        ready.then((child) => {
            child.childRPC.register('callme', () => Promise.resolve(true));
            parentRPC.invoke(child, null, "callme").then((result) => {
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
        ).then(() => {
            childWindow().childRPC.register("callme", null);
            return parentRPC.invoke(childWindow(), null, "callme");
        }).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject).toEqual(new Error('Procedure not found: callme'));
                done();
            });
    });

    it('does not receive messages after close() called', function(done) {
        ready.then((child) => {
            // re-init parentRPC to use timeout
            window.parentRPC.close();
            window.parentRPC = iframerpc({'timeout': 100});
            onScriptRun('childRPC.register("callme", () => window.isChild);');
            // first call OK, because procedure is registered
        }).then(() => parentRPC.invoke(childWindow(), null, "callme")
        ).then((result) => expect(result).toEqual('child')
        ).then(() => childWindow().childRPC.close()
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
                window.parentRPC = iframerpc({'timeout': 100});
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

    it('works with valid origin whitelist', function(done) {
        ready.then((child) => {
            // re-init parentRPC to use timeout
            window.parentRPC.close();
            window.parentRPC = iframerpc({'originWhitelist': [window.location.origin]});
            onScriptRun('childRPC.register("callme", () => window.isChild);').then(() => 
                parentRPC.invoke(child, null, "callme").then((result) => {
                    expect(result).toBe("child");
                    done();
                })
            );
        });
    });

    it('works with valid origin passed to invoke()', function(done) {
        ready.then((child) => {
            onScriptRun('childRPC.register("callme", () => window.isChild);').then(() => 
                parentRPC.invoke(child, window.location.origin, "callme").then((result) => {
                    expect(result).toBe("child");
                    done();
                })
            );
        });
    });

    it('times out with invalid origin whitelist', function(done) {
        const originWhitelist = [];
        ready.then((child) => {
            // re-init parentRPC to use timeout
            window.parentRPC.close();
            // the initial origin whitelist must be configured properly for the 'ready' event
            // to be received, so it's broken later.
            window.parentRPC = iframerpc({'timeout': 100, 'originWhitelist': originWhitelist});
            return onScriptRun('childRPC.register("callme", () => window.isChild);');
        }).then(() => {
            originWhitelist.push("https://not.my.origin:69");
            return window.parentRPC.invoke(childWindow(), null, "callme");
        }).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject).toEqual(new Error('Timeout waiting for RPC response after 100 ms'));
                done();
            }
        );
    });

    it('times out with invalid origin passed to invoke()', function(done) {
        ready.then((child) => {
            // re-init parentRPC to use timeout
            window.parentRPC.close();
            window.parentRPC = iframerpc({'timeout': 100});
            return onScriptRun('childRPC.register("callme", () => window.isChild);');
        }).then(() => {
            return window.parentRPC.invoke(childWindow(), "https://not.my.origin:69", "callme");
        }).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject).toEqual(new Error('Timeout waiting for RPC response after 100 ms'));
                done();
            }
        );
    });
 
});
