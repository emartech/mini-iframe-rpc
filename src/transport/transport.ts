import { MessageBody } from '../json-rpc';

export interface TransportConfig {
  originWhitelist?: string[];
  stringifyObjects: boolean;
}

export type TransportConstructor = new (
  windowRef: Window,
  onReceive: (messageBody: MessageBody) => void,
  config?: TransportConfig
) => TransportInterface;

export interface Recipient {
  targetWindow: Window;
  targetOrigin: string | null;
}

export interface TransportInterface {
  close(): void;
  send(recipient: Recipient, messageBody: MessageBody): Promise<void>;
}
