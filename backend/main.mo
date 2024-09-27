import Array "mo:base/Array";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";

actor {
  type Transaction = {
    from: Text;
    to: Text;
    amount: Nat;
    timestamp: Int;
  };

  stable var ledger : [Transaction] = [];

  public func sendCrypto(to: Text, amount: Nat) : async Text {
    let transaction : Transaction = {
      from = "User";
      to = to;
      amount = amount;
      timestamp = Time.now();
    };

    ledger := Array.append(ledger, [transaction]);
    return "Transaction successful";
  };

  public query func getTransactionHistory() : async [Transaction] {
    return ledger;
  };
}
