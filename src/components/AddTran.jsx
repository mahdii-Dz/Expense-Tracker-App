import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/Context";

const AddTran = React.forwardRef((props, ref) => {
  const {
    addTransaction,
    setAddTransaction,
    income,
    setIncome,
    expense,
    setExpense,
    setDescription,
    transactionType,
    setTransactionType,
  } = useContext(GlobalContext);
  const [tempValue, setTempValue] = useState(0);

  function handleTranType(e) {
    const tranType = e.target.id;
    setTransactionType(tranType);
  }
  const amount = Number(tempValue);
  function handleSubmit(e) {
    e.preventDefault();
    if (transactionType === "inc") {
      setExpense(0);
      setIncome(amount);
    } else if (transactionType === "epx") {
      setIncome(0);
      setExpense(amount);
    }
    setAddTransaction(!addTransaction);
  }

  return (
    <div className="fixed inset-0 bg-black/60">
      <div
        ref={ref}
        className="wrapper rounded-lg p-4 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-1/4 bg-white shadow-lg"
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-lg">Add New Transaction</h2>
          <div onClick={() => setAddTransaction(!addTransaction)}>
            <i className="bx bx-x text-xl cursor-pointer"></i>
          </div>
        </div>
        <form className="mb-6">
          <div>
            <h2>Enter Description</h2>
            <input
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 mb-4 border border-gray-300 py-1.5 px-2 outline-none rounded"
              type="text"
            />
          </div>
          <div>
            <h2>Enter Amount</h2>
            <input
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full mt-2 mb-4 border border-gray-300 py-1.5 px-2 outline-none rounded"
              type="number"
            />
          </div>
          <div className="flex gap-4">
            <div>
              <input
                onChange={handleTranType}
                type="radio"
                id="inc"
                name="group1"
              />
              <label htmlFor="inc">Income</label>
            </div>
            <div>
              <input
                onChange={handleTranType}
                type="radio"
                id="epx"
                name="group1"
              />
              <label htmlFor="epx">Expense</label>
            </div>
          </div>
        </form>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setAddTransaction(!addTransaction)}
            className="py-2 px-4 bg-gray-300 cursor-pointer hover:bg-gray-400 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="py-2 px-4 bg-gray-300 cursor-pointer hover:bg-gray-400 rounded-lg"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
});

export default AddTran;
