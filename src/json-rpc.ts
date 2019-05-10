import { RemoteError } from './errors';

/*
Mini-iframe-rpc implements JSON-RPC 2.0 as specified at https://www.jsonrpc.org/specification
with a few key differences:
    - the "jsonrpc" field is ommitted because mini-iframe-rpc is assumed to always communicate
      with itself, thus the protocol is understood to be jsonrpc.
    - In the request, the parameters ("params" field) may contain any value.
      Arrays are detected and treated as positional parameters. Every other value
      is passed in as is except undefined, which is replaced by an empty array.
      We do this so the semantics of regular JS function calls are followed in the rpc interace.
    - Notifications are not supported. There will always be a response (which can be undefined).
      If you don't need a response, just send a postMessage (no need for mini-iframe-rpc).
    - Batching requests is not supported, because there is no network traffic which would
      make this feature useful.
    - Error responses are different in several ways:
        1. Error codes (the "code" field of an error response) are not implemented
        2. No "data" field, all information on the error is part of the "error" field's value.
        3. an addition isErrorInstance field signals whether the error should be deserialized
           as a JS error class instance.      
    - call ids ("id" field of request) are strings instead of integers in order to decrease the
      likelihood of a call id collision if there are multiple iframes.
    - The jsonrpc requirement that "rpc." prefixed method names be reserved for internal system
      calls is not enforced by mini-iframe-rpc.
    
*/

export interface RequestMessageBody {
  id: string;
  method: string;
  // tslint:disable-next-line:no-any
  params: any;
}

export interface ResponseMessageBody {
  id: string;
  // tslint:disable-next-line:no-any
  result: any;
}

export interface ErrorMessageBody {
  id: string;
  isErrorInstance: boolean;
  error: RemoteError;
}

export type MessageBody = RequestMessageBody | ResponseMessageBody | ErrorMessageBody;
