import { useState } from "react";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "laptop", amount: -60000 },
    { id: 2, title: "salary", amount: 250000 },
    { id: 3, title: "trip-vietnam", amount: -70000 },
    { id: 4, title: "dress", amount: -1500 },
  ]);

  const onAddTransaction = (data) => {
    const modifyData = { ...data, id: Math.random() * 10000 };
    setTransactions([...transactions, modifyData]);
  };

  const onDeleteTransaction = (id) => {
    const modifiedList = transactions.filter(
      (eachTransaction) => eachTransaction.id !== id
    );
    setTransactions(modifiedList);
  };

  return (
    <>
      <div className="container">
        <Balance transactions={transactions} />
        <AddTransaction onAdd={onAddTransaction} />
        <TransactionList
          transactions={transactions}
          onDelete={onDeleteTransaction}
        />
      </div>
    </>
  );
}

export default App;
