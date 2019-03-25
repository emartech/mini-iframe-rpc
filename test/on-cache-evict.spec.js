const MiniIframeRPC = require('mini-iframe-rpc').MiniIframeRPC;
const TestBase = require('./test-base.js');

describe('on-cache-evict', function() {
    // iframe-on-cache-evict.html
    //
    window.isParent = "parent";

    beforeEach((done) => {
        window.parentRPC = new MiniIframeRPC({'defaultInvocationOptions': {'timeout': 0, 'retryLimit': 0}});
        TestBase.defaultBeforeEach({done, parentRPC: window.parentRPC, sandbox: 'allow-scripts allow-same-origin', src: 'base/iframe-on-cache-evict.html'});
    });

    afterEach((done) => {
        TestBase.defaultAfterEach({done, parentRPC: window.parentRPC});
    });

    it('cache eviction internal event callback called on eviction', function(done) {
        let evictionCount = 0;
        let onEvictCalled;
        TestBase.ready.then(() => {
            onEvictCalled = new Promise((resolve, reject) => {
                window.parentRPC.register("onEvict", (id, evictedResult) => {
                    // first eviction (where evictionCount === 0) is result of appendScript
                    // we want the first eviction of a result to callme
                    if (evictionCount === 1) {
                        resolve(evictedResult);
                    }
                    evictionCount++;
                })
            });
            return TestBase.onScriptRun(`
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
                results.push(parentRPC.invoke(TestBase.childWindow(), null, "callme", []));
            }
            Promise.all([onEvictCalled, Promise.all(results)]).then(r => {
                expect(r[0]).toEqual(0);
                expect(r[1]).toEqual([0,1,2]);
                done();
            });
        }); 
    });

});
