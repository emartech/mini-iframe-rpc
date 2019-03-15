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
        ready.then(() => onScriptRun('(function() {let counter=0;childRPC.register("callme", () => Promise.reject(counter++));})();')
            ).then(() => parentRPC.invoke(childWindow(), null, "callme", [], {timeout: 100, retryLimit: retryLimit})
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

});
