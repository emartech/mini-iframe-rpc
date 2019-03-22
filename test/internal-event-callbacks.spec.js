const MiniIframeRPC = require('mini-iframe-rpc').MiniIframeRPC;
const TestBase = require('./test-base.js');


describe('internal-event-callbacks', function() {

    window.isParent = "parent";

    beforeEach((done) => {
        window.parentRPC = new MiniIframeRPC({'defaultInvocationOptions': {'timeout': 0, 'retryLimit': 0}});
        TestBase.defaultBeforeEach({done, parentRPC: window.parentRPC, sandbox: 'allow-scripts allow-same-origin'});
    });

    afterEach((done) => {
        TestBase.defaultAfterEach({done, parentRPC: window.parentRPC});
    });

    const cleanCallId = (fullMessage) => {
        let copy = Object.assign({}, fullMessage);
        copy.message.callId = null;
        return copy;
    }


    it('calls onRegister handler on procedure registration', function(done) {
        TestBase.ready.then(() => {
            const name = "afunction";
            const impl = (x) => x;
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
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
        TestBase.ready.then(() => {
            let listenToOnReceive = false;
            window.parentRPC.close();
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
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
            TestBase.onScriptRun('childRPC.register("callmeA", () => window.isChild);').then(() => {
                listenToOnReceive = true;
                parentRPC.invoke(TestBase.childWindow(), window.location.origin, "callmeA").then((result) => {
                    done(new Error('onReceive should be called before RPC call completes'));
                })
            });
        });
    });

    it('calls onSend handler on postMessage send', function(done) {
        TestBase.ready.then((child) => {
            let listenToOnSend = false;
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                'onSend': (targetWindow, targetOrigin, fullMessage) => {
                    if (!listenToOnSend) {
                        return;
                    }
                    expect(targetWindow).toBe(child);
                    expect(targetOrigin).toEqual(child.location.origin);
                    // update callId in fullMessage which is random
                    expect(cleanCallId(fullMessage)).toEqual({
                        type: 'mini-iframe-rpc',
                        message: {
                            contents: 'request',
                            callId: null,
                            procedureName: 'callmeB',
                            argumentList: []
                        }
                    });
                    listenToOnSend = false;
                    done();
                }
            }});
            TestBase.onScriptRun('childRPC.register("callmeB", () => window.isChild);').then(() =>  {
                listenToOnSend = true;
                parentRPC.invoke(child, window.location.origin, "callmeB").then((result) => {
                    done(new Error('onSend should be called before RPC call completes'));
                }).catch(() => 0); // ignore errors stemming from call not answered
            });
        });
    });

    it('calls onClose event callback on close()', function(done) {
        TestBase.ready.then(() => {
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                'onClose': () => {
                    done();
                }
            }});
            window.parentRPC.close();
        });
    });

    it('calls onUnexpectedResponse handler on reception of responses without registered callbacks', function(done) {
        TestBase.ready.then(() => {
            let listenToOnReceive = false;
            window.parentRPC = new MiniIframeRPC({'eventCallbacks': {
                'onReceive': (postMessage) => {
                    // change callId so response cannot be matched with outgoing call.
                    if (!listenToOnReceive) {
                        return;
                    }
                    postMessage.data.message.callId = "asdf";
                    listenToOnReceive = false;
                },
                'onUnexpectedResponse': (response) => {
                     expect(response).toEqual({
                        contents: 'result',
                        callId: 'asdf',
                        result: true
                    });
                    done();
                }
            }});
            TestBase.onScriptRun('childRPC.register("callmeC", () => window.isChild);').then(() => {
                listenToOnReceive = true;
                parentRPC.invoke(TestBase.childWindow(), window.location.origin, "callmeC").then((result) => {
                    done(new Error('onReceive should be called before RPC call completes'));
                })
            });
        });
    });

    it('retried request doesnt result in double execution of remote procedure', function(done) {
        const retryLimit = 1;
        let listen = false;
        let sent = [], received = [];
        let receivedResponses;

        TestBase.ready.then(() => {
            window.parentRPC.close();
            receivedResponses = new Promise((resolve, reject) => {
                window.parentRPC = new MiniIframeRPC({
                    'eventCallbacks': {
                        'onSend': (targetWindow, targetOrigin, fullMessage) => {
                            if (listen) {
                                sent.push(fullMessage.message);
                            }
                        },
                        'onReceive': (postMessage) => {
                            if (listen && sent.length > 0 && sent[0].callId === postMessage.data.message.callId) {
                                received.push(postMessage.data.message);
                                if (received.length === 2) {
                                    listen = false;
                                    resolve();
                                }
                            }
                        }
                    }
                });
            });
            return TestBase.onScriptRun(`
                (function() {
                    const timeouts = [120, 80];
                    window.counter=0;
                    childRPC.register("callmeD", () => new Promise((resolve, reject) => {
                        const currentValue = counter;
                        window.setTimeout(
                            () => resolve(currentValue),
                            timeouts[currentValue]);
                        window.counter++;
                        })
                    );
                })();`);
            }).then(() => {
                listen = true;
                parentRPC.invoke(TestBase.childWindow(), null, "callmeD", [], {timeout: 100, retryLimit: retryLimit});
                return receivedResponses;
            }).then(
                (result) => {
                    // two requests sent (original and retry)
                    expect(sent.length).toEqual(2);
                    // two responses received
                    expect(received.length).toEqual(2);
                    // all have the same callId
                    expect([sent[0].callId, sent[1].callId, received[0].callId, received[1].callId]).toEqual([sent[0].callId, sent[0].callId, sent[0].callId, sent[0].callId]);
                    // both responses have same result
                    expect([received[0].result, received[1].result, 0]).toEqual([0,0,0]);
                    // counter has only been incremented once
                    expect(TestBase.childWindow().counter).toEqual(1);
                    done();
                });
    });

});
