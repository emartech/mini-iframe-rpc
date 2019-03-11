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
            window.parentRPC.register('ready', () => resolve(iframe.contentWindow));
        });
    });

    // remove the html fixture from the DOM
    afterEach(() => {
        window.parentRPC.invoke(childWindow(), null, 'close');
        window.parentRPC.close();
        document.getElementById("unboxedChildIframe").remove();
    });


    it('works with valid origin whitelist', function(done) {
        ready.then((child) => {
            // re-init parentRPC to use timeout
            window.parentRPC.close();
            window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC({'originWhitelist': [window.location.origin]});
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
            window.parentRPC = new window["mini-iframe-rpc"].MiniIframeRPC({'defaultInvocationOptions': {'timeout': 100}, 'originWhitelist': originWhitelist});
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
            return onScriptRun('childRPC.register("callme", () => window.isChild);');
        }).then(() => {
            return window.parentRPC.invoke(childWindow(), "https://not.my.origin:69", "callme", [], {'timeout': 100});
        }).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject).toEqual(new Error('Timeout waiting for RPC response after 100 ms'));
                done();
            }
        );
    });
 
});
