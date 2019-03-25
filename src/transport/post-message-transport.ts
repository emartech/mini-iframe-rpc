import {MessageBody} from '../json-rpc';
import {Recipient, TransportConfig, TransportInterface} from './transport';

const POSTMESSAGE_TYPE = "mini-iframe-rpc";

export type OnReceive = (messageBody:MessageBody, messageSource: Window, messageOrigin: string) => void;

export class PostMessageTransport implements TransportInterface{

    private windowRef: Window;
    private config: TransportConfig;
    private onReceive: OnReceive;

    constructor(windowRef: Window, onReceive: OnReceive, config?: TransportConfig) {
        this.windowRef = windowRef || window;
        this.onReceive = onReceive;
        this.config = Object.assign({}, config || {});
        this.windowRef.addEventListener("message", this.recv);
    }

    close() {
        this.windowRef.removeEventListener("message", this.recv);
    }

    send (recipient:Recipient, messageBody: MessageBody): Promise<void> {
        return new Promise((resolve, reject) => {
            const envelopedMessage = {
                "type": POSTMESSAGE_TYPE,
                "payload": messageBody
            };
            recipient.targetWindow.postMessage(envelopedMessage, recipient.targetOrigin || "*");
            resolve();
        });
    };

    private recv = (messageEvent: MessageEvent) => {
        if (
            (!this.config.originWhitelist || this.config.originWhitelist.length < 1 || this.config.originWhitelist.indexOf(messageEvent.origin) > -1) &&
            messageEvent.data && messageEvent.data.type === POSTMESSAGE_TYPE && messageEvent.data.payload) {
            this.onReceive(
                messageEvent.data.payload,
                messageEvent.source as Window,
                messageEvent.origin);
        }
        // otherwise drop the message silently
    }
}