const MiniIframeRPC = require('mini-iframe-rpc').MiniIframeRPC;
const TestBase = require('./test-base.js');

describe('mini-iframe-rpc (same-origin iframe)', function() {

    window.isParent = "parent";

    beforeEach(() => {
        window.parentRPC = new MiniIframeRPC({'defaultInvocationOptions': {'timeout': 0, 'retryLimit': 0}});
        TestBase.defaultBeforeEach({parentRPC: window.parentRPC, sandbox: 'allow-scripts allow-same-origin'});
    });

    afterEach(() => {
        TestBase.defaultAfterEach({parentRPC: window.parentRPC});
    });



    it('works with valid origin whitelist', function(done) {
        TestBase.ready.then((child) => {
            // re-init parentRPC to use timeout
            window.parentRPC.close();
            window.parentRPC = new MiniIframeRPC({'originWhitelist': [window.location.origin]});
            TestBase.onScriptRun('childRPC.register("callme", () => window.isChild);').then(() => 
                parentRPC.invoke(child, null, "callme").then((result) => {
                    expect(result).toBe("child");
                    done();
                })
            );
        });
    });

    it('works with valid origin passed to invoke()', function(done) {
        TestBase.ready.then((child) => {
            TestBase.onScriptRun('childRPC.register("callme", () => window.isChild);').then(() => 
                parentRPC.invoke(child, window.location.origin, "callme").then((result) => {
                    expect(result).toBe("child");
                    done();
                })
            );
        });
    });

    it('times out with invalid origin whitelist', function(done) {
        const originWhitelist = [];
        TestBase.ready.then((child) => {
            // re-init parentRPC to use timeout
            window.parentRPC.close();
            // the initial origin whitelist must be configured properly for the 'ready' event
            // to be received, so it's broken later.
            window.parentRPC = new MiniIframeRPC({'defaultInvocationOptions': {'timeout': 100}, 'originWhitelist': originWhitelist});
            return TestBase.onScriptRun('childRPC.register("callme", () => window.isChild);');
        }).then(() => {
            originWhitelist.push("https://not.my.origin:69");
            return window.parentRPC.invoke(TestBase.childWindow(), null, "callme");
        }).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject.name).toEqual('InvocationError');
                expect(reject.procedureName).toEqual('callme');
                expect(reject.cause.name).toEqual('TimeoutError');
                expect(reject.cause.message).toEqual('Timeout after 100 ms.');
                done();
            }
        );
    });

    it('times out with invalid origin passed to invoke()', function(done) {
        TestBase.ready.then((child) => {
            // re-init parentRPC to use timeout
            return TestBase.onScriptRun('childRPC.register("callme", () => window.isChild);');
        }).then(() => {
            return window.parentRPC.invoke(TestBase.childWindow(), "https://not.my.origin:69", "callme", [], {'timeout': 100});
        }).then(
            (result) => done(new Error('Promise should not be resolved')),
            (reject) => {
                expect(reject.name).toEqual('InvocationError');
                expect(reject.procedureName).toEqual('callme');
                expect(reject.cause.name).toEqual('TimeoutError');
                expect(reject.cause.message).toEqual('Timeout after 100 ms.');
                done();
            }
        );
    });
 
});
