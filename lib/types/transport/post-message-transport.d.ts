import { MessageBody } from '../json-rpc';
import { Recipient, TransportConfig, TransportInterface } from './transport';
export declare type OnReceive = (messageBody: MessageBody, messageSource: Window, messageOrigin: string) => void;
export declare class PostMessageTransport implements TransportInterface {
    private windowRef;
    private config;
    private onReceive;
    constructor(windowRef: Window, onReceive: OnReceive, config?: Partial<TransportConfig>);
    close(): void;
    send(recipient: Recipient, messageBody: MessageBody): Promise<void>;
    private recv;
}
//# sourceMappingURL=post-message-transport.d.ts.map