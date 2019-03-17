describe('on-cache-evict', function() {
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
                timeout: 0,
            },
            'eventCallbacks': {
                'onSend': (targetWindow, targetOrigin, fullMessage) => {
                    //console.log('parent send', fullMessage);
                },
                'onReceive': (postMessage) => {
                    //console.log('parent recv', postMessage.data);
                }
            }
        });
        // inject the HTML fixture for the tests
        const iframe = document.createElement('iframe');
        iframe.srcdoc = `
            <html>
                <body>
                    <script src="${document.querySelectorAll('script[src*="mini-iframe-rpc.js"]')[0].src}"><\/script>
                    <script>
                        // useful for jasmine window.console = window.parent.console;
                        window.isChild = "child";
                        window.childRPC = new window["mini-iframe-rpc"].MiniIframeRPC({
                            'resultCacheCapacity': 2,
                            'defaultInvocationOptions': {
                                timeout: 0,
                            },
                            'eventCallbacks': {
                                'onSend': (targetWindow, targetOrigin, fullMessage) => {
                                    // console.log('child send', fullMessage);
                                },
                                'onReceive': (postMessage) => {
                                    // console.log('child recv', postMessage.data);
                                },
                                'onResultCacheEviction': (callId, evictedResult) => {
                                    // console.log('cache evict', callId);
                                    Promise.resolve(evictedResult).then((er) => window.childRPC.invoke(window.parent, null, 'onEvict', [callId, er]));
                                }
                            }
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
        iframe.sandbox = "allow-scripts allow-same-origin";
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

    it('cache eviction internal event callback called on eviction', function(done) {
        let evictionCount = 0;
        let onEvictCalled;
        ready.then(() => {
            onEvictCalled = new Promise((resolve, reject) => {
                window.parentRPC.register("onEvict", (callId, evictedResult) => {
                    // first eviction (where evictionCount === 0) is result of appendScript
                    // we want the first eviction of a result to callme
                    if (evictionCount === 1) {
                        resolve(evictedResult);
                    }
                    evictionCount++;
                });
            });
            return onScriptRun(`
                (function() {
                    let counter=0;
                    return window.childRPC.register("callme", () => {
                        return counter++;
                    });
                })();
            `);
        }).then(() => {
            var results = [];
            for (let i = 0; i < 3; i++) {
                results.push(parentRPC.invoke(childWindow(), null, "callme", []));
            }
            Promise.all([onEvictCalled, Promise.all(results)]).then(r => {
                expect(r[0]).toEqual(0);
                expect(r[1]).toEqual([0,1,2]);
                done();
            });
        }); 
    });

});
