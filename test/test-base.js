
const testBase = {
    ready: null,
    childWindowId: 'childIframe',
    childWindow: () => document.getElementById(testBase.childWindowId).contentWindow,
    runChildScript: (source) => window.parentRPC.invoke(testBase.childWindow(), null, 'appendScript', [source]).catch(() => 0),
    onScriptRun: (script) => {
        return new Promise((resolve, _reject) => {
            window.parentRPC.register('ready', (result) => resolve(result));
            testBase.runChildScript(`
                window.result = (function() {${script}})();
                window.childRPC.invoke(window.parent, null, 'ready', [window.result]);
                `);
        });
    },
    defaultBeforeEach: ({done, parentRPC, sandbox, src}) => {
        // inject the HTML fixture for the tests
        const iframe = document.createElement('iframe');
        iframe.src = src || "base/iframe.html";
        iframe.sandbox = sandbox || "allow-scripts allow-same-origin";
        iframe.id = "childIframe";
        testBase.ready = new Promise((resolve, _reject) => {
            document.body.appendChild(iframe);
            parentRPC.register('ready', () => resolve(iframe.contentWindow));
        });
        testBase.ready.then(() => done());
    },
    defaultAfterEach: ({done, parentRPC}) => {
        parentRPC.invoke(testBase.childWindow(), null, 'close', [], {timeout: 10, retryLimit: 0}).catch(
            () => 0 // ignore close errors
        ).finally(() => {
            parentRPC.close();
            document.getElementById(testBase.childWindowId).remove()
            // let any parentRPC callbacks which are already scheduled to run by JS execute
            setTimeout(() => done(), 0);
        });
    }
};

export default testBase;
