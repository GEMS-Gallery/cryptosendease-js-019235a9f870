export const idlFactory = ({ IDL }) => {
  const Transaction = IDL.Record({
    'to' : IDL.Text,
    'from' : IDL.Text,
    'timestamp' : IDL.Int,
    'amount' : IDL.Nat,
  });
  return IDL.Service({
    'getTransactionHistory' : IDL.Func([], [IDL.Vec(Transaction)], ['query']),
    'sendCrypto' : IDL.Func([IDL.Text, IDL.Nat], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
