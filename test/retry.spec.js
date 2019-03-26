const MiniIframeRPC = require('mini-iframe-rpc').MiniIframeRPC;
const TestBase = require('./test-base.js');


describe('retries', function() {

    beforeEach((done) => {
        window.parentRPC = new MiniIframeRPC({
            'defaultInvocationOptions': {
                retryAllFailures: true,
                timeout: 400,
                retryLimit: 2}
        });
        TestBase.defaultBeforeEach({done, parentRPC: window.parentRPC, src: "base/iframe-nocache.html"});
    });

    afterEach((done) => {
        TestBase.defaultAfterEach({done, parentRPC: window.parentRPC});
    });

    it('Retries until exhausted', function(done) {
        const retryLimit = 3;
        TestBase.ready.then(() => TestBase.onScriptRun(`
            (function() {
                let counter=0;
                childRPC.register("callme", function() {return Promise.reject(counter++);});
            })();`)
            ).then(() => parentRPC.invoke(TestBase.childWindow(), null, "callme", [], {timeout: 20, retryLimit: retryLimit, retryAllFailures: true})
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
        TestBase.ready.then(() => {
            window.parentRPC.close();
            window.parentRPC = new MiniIframeRPC({
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
            TestBase.onScriptRun(`
                (function() {
                    var counter=${retryLimit};
                    childRPC.register("callme", function() {return Promise[counter > 0 ? 'reject' : 'resolve'](counter--);});
                })();`);
            }).then(() => {
                listen = true;
                return parentRPC.invoke(TestBase.childWindow(), null, "callme", [], {timeout: 100, retryLimit: retryLimit, retryAllFailures: true})
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
        TestBase.ready.then(() => {
            window.parentRPC.close();
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                    'onRequestRetry': (reason, previousRejectReasons, requestMessageBody) => {
                        if (!listen) {
                            return;
                        }
                        expect(reason.name).toEqual('TimeoutError');
                        expect(reason.message).toEqual('Timeout after 20 ms.');
                        requestMessageBodies.forEach(r => expect(requestMessageBody).toEqual(r));
                        requestMessageBodies.push(requestMessageBody);
                    }}});
            TestBase.onScriptRun(`
                (function() {
                    var counter=${retryLimit}+1;
                    childRPC.register("callme", function() {
                        counter--;
                        if (counter > 0) {
                            // returns promise which never resolves or rejects
                            return new Promise(function (_1, _2) {return {};});
                        }
                        return counter;
                    });
                })();`);
            }).then(() => {
                listen = true;
                return parentRPC.invoke(TestBase.childWindow(), null, "callme", [], {timeout: 20, retryLimit: retryLimit, retryAllFailures: true})
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
        TestBase.ready.then(() => {
            window.parentRPC.close();
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                    'onRequestRetry': (reason, previousRejectReasons, requestMessageBody) => {
                        if (!listen) {
                            return false;
                        }
                        expect(reason.name).toEqual('TimeoutError');
                        gotTimeoutError = true;
                    }}});
            TestBase.onScriptRun(`
                (function() {
                    var timeouts = [120, 80];
                    var counter=0;
                    childRPC.register("callme", function() {return new Promise((resolve, reject) => {
                        const currentValue = counter;
                        window.setTimeout(
                            function() {return resolve(currentValue);},
                            timeouts[currentValue]);
                        counter++;
                        });
                    });
                })();`);
            }).then(() => {
                listen = true;
                return parentRPC.invoke(TestBase.childWindow(), null, "callme", [], {timeout: 100, retryLimit: retryLimit, retryAllFailures: true})
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
        TestBase.ready.then(() => parentRPC.invoke(TestBase.childWindow(), null, "callme", [], {timeout: 100, retryLimit: retryLimit, retryAllFailures: false})).then(
                (result) => done(new Error('Promise should not be resolved')),
                (reason) => {
                    expect(reason.cause.name).toEqual('ProcedureNotFoundError');
                    expect(reason.previousRejectReasons.length).toEqual(0);
                    done();
                });
    });

    it('cached results only computed once', function(done) {
        const retryLimit = 3;
        TestBase.ready.then(() => {
            TestBase.onScriptRun(`
                window.initChildRPC({resultCacheCapacity: 20});
                (function() {
                    var counter=0;
                    window.childRPC.register("callme", function() {return Promise.reject(counter++);});
                })();`);
            }).then(() => window.parentRPC.invoke(TestBase.childWindow(), null, "callme", [], {timeout: 100, retryLimit: retryLimit})
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
