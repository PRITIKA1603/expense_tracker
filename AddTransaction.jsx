import { useState } from "react";

const AddTransaction = (props) => {
  const { onAdd } = props;

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ title, amount });
    onAdd({ title, amount });
  };

  return (
    <div className="add-transaction">
      <h3> Add New</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title..."
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={onAmountChange}
          />
        </div>
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;