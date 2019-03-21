
const testBase = {
    ready: null,
    childWindowId: 'childIframe',
    childWindow: () => document.getElementById(testBase.childWindowId).contentWindow,
    runChildScript: (source) => window.parentRPC.invoke(testBase.childWindow(), null, 'appendScript', [source]),
    onScriptRun: (script) => {
        return new Promise((resolve, _reject) => {
            window.parentRPC.register('ready', (result) => resolve(result));
            testBase.runChildScript(`
                window.result = (function() {${script}})();
                window.childRPC.invoke(window.parent, null, 'ready', [window.result]);
                `);
        });
    },
    defaultBeforeEach: ({parentRPC, sandbox, src}) => {
        // inject the HTML fixture for the tests
        const iframe = document.createElement('iframe');
        iframe.src = src || "base/iframe.html";
        iframe.sandbox = sandbox || "allow-scripts";
        iframe.id = "childIframe";
        testBase.ready = new Promise((resolve, _reject) => {
            document.body.appendChild(iframe);
            parentRPC.register('ready', () => resolve(iframe.contentWindow));
        });
    },
    defaultAfterEach: ({parentRPC}) => {
        parentRPC.invoke(testBase.childWindow(), null, 'close', [], {timeout: 10, retryLimit: 0}).then(
            () => parentRPC.close(),
            // ignore close errors
            () => {}
        ).finally(
            () => document.getElementById(testBase.childWindowId).remove()
        );
    }
};

export default testBase;