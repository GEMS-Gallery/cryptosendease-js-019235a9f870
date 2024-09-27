import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Transaction {
  'to' : string,
  'from' : string,
  'timestamp' : bigint,
  'amount' : bigint,
}
export interface _SERVICE {
  'getTransactionHistory' : ActorMethod<[], Array<Transaction>>,
  'sendCrypto' : ActorMethod<[string, bigint], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
