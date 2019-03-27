import {MessageBody} from '../json-rpc';
import {Recipient, TransportConfig, TransportInterface} from './transport';

const isInternetExplorer = () => (
    // based on https://stackoverflow.com/questions/24861073/detect-if-any-kind-of-ie-msie/24861307#24861307    
    navigator.appName === 'Microsoft Internet Explorer' || 
    !!navigator.userAgent.match(/Trident|MSIE|rv:11/));

const POSTMESSAGE_TYPE = "mini-iframe-rpc";

const DEFAULT_CONFIG:TransportConfig = {
    // IE needs postmessages to contain strings instead of objects
    stringifyObjects: isInternetExplorer()
};

export type OnReceive = (messageBody:MessageBody, messageSource: Window, messageOrigin: string) => void;

export class PostMessageTransport implements TransportInterface{

    private windowRef: Window;
    private config: TransportConfig;
    private onReceive: OnReceive;

    constructor(windowRef: Window, onReceive: OnReceive, config?: Partial<TransportConfig>) {
        this.windowRef = windowRef || window;
        this.onReceive = onReceive;
        this.config = Object.assign({}, DEFAULT_CONFIG, config || {});
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
            recipient.targetWindow.postMessage(
                this.config.stringifyObjects ? JSON.stringify(envelopedMessage, (_k,v) => v === undefined ? null : v) : envelopedMessage,
                recipient.targetOrigin || "*");
            resolve();
        });
    };

    private recv = (messageEvent: MessageEvent) => {
        if (
            (!this.config.originWhitelist || this.config.originWhitelist.length < 1 || this.config.originWhitelist.indexOf(messageEvent.origin) > -1) && messageEvent.data) {
            const messageData = (typeof messageEvent.data === 'string' && JSON) ? JSON.parse(messageEvent.data) : messageEvent.data;
            if (messageData.type === POSTMESSAGE_TYPE && messageData.payload) {
                this.onReceive(
                    messageData.payload,
                    messageEvent.source as Window,
                    messageEvent.origin);
            }            
        }
        // otherwise drop the message silently
    }
}