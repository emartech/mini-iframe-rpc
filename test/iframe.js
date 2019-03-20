const MiniIframeRPC = require('mini-iframe-rpc').MiniIframeRPC;

window.initChildRPC = function(config) {
    if (window.childRPC) {
        window.childRPC.close();
    }
    window.childRPC = new MiniIframeRPC(config);
    window.childRPC.register("appendScript", (script) => {
        const element = document.createElement('script');
        element.innerHTML = script;
        document.body.appendChild(element);
        return true;
    });
    window.childRPC.register("close", () => window.childRPC.close());
}

window.initChildRPC(window.miniIframeConfig);
window.childRPC.invoke(window.parent, null, 'ready');
