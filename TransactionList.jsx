const TransactionList = (props) => {
  const { transactions = [], onDelete } = props;
  return (
    <div className="transaction-listing">
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((eachTransaction) => {
          return (
            <li
              key={eachTransaction.id}
              className={eachTransaction.amount < 0 ? "minus" : "plus"}
            >
              <span>{eachTransaction.title}</span>
              <span>र{eachTransaction.amount}</span>
              <button
                className="delete-btn"
                onClick={() => onDelete(eachTransaction.id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;