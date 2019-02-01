# mini-iframe-rpc

Simple Javascript library for postMessage-based inter iframe (or window) communication.

## Installation

    npm install --save mini-iframe-rpc

## Building and testing

    npm run build

## Usage

If you want to establish communication between a parent window and it's child iframe, then in the parent, do:

    <script src="mini_iframe_rpc.js"></script>
    <script>
        const iframe = ...
        const rpc = mini_iframe_rpc();
        rpc.register('mySuperFunction', () => alert(1));
    </script>

To call this code from the iframe, do:

    <script src="mini_iframe_rpc.js"></script>
    <script>
        const iframe = ...
        const rpc = mini_iframe_rpc();
        rpc.register(window.parent, "http://window-parent-location.com", 'mySuperFunction');
    </script>

