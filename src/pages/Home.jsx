import React, { useContext, useEffect, useRef, useState } from "react";
import AddTran from "../components/AddTran";
import { GlobalContext } from "../context/Context";
import useCLickOutSide from "../Hooks/useCLickOutSide";
import Demo from "../components/Chart";



function Home() {
  const {
    addTransaction,
    setAddTransaction,
    income,
    expense,
    description,
    totalIncome,
    setTotalIncome,
    totalExpense,
    setTotalExpense,
  } = useContext(GlobalContext);
  let balance = 0;
  const [allIncomeTransaction, setAllIncomeTransaction] = useState([]);
  const [allExpenseTransaction, setAllExpenseTransaction] = useState([]);
  balance = totalIncome - totalExpense;

  const ref = useRef();

  

  useEffect(() => {
    if (income > 0) {
      const newTransaction = {
        type: "income",
        amount: income,
        description: description,
      };
      setAllIncomeTransaction((prev) => [...prev, newTransaction]);
      setTotalIncome((prev) => prev + income);
    }
    if (expense > 0) {
      const newTransaction = {
        type: "expense",
        amount: expense,
        description: description,
      };
      setAllExpenseTransaction((prev) => [...prev, newTransaction]);
      setTotalExpense((prev) => prev + expense);
    }
  }, [income, expense]);

  useCLickOutSide(ref, () => setAddTransaction(false));

  function handleCLick() {
    setAddTransaction(!addTransaction);
  }

  return (
    <>
      <div className="container relative w-full min-w-full min-h-dvh bg-gray-100/80 pb-16">
        <nav className="flex justify-between items-center px-16 pt-14 pb-4">
          <h1 className="text-4xl font-semibold text-blue-400">
            Expense Tracker
          </h1>
          <button
            onClick={handleCLick}
            className="py-2 px-6 bg-blue-600 hover:bg-blue-800 text-white rounded-lg font-semibold cursor-pointer"
          >
            Add New Transaction
          </button>
        </nav>
        <main className="flex items-center bg-white py-4 mx-16 rounded-lg mb-8">
          <div className="balance w-full flex flex-col items-center py-8">
            <h3 className="text-xl font-semibold">Balance is ${balance}</h3>
            <div className="bg-gray-100/80 w-full flex flex-col items-center text-center py-8 mt-4">
              <div className="income mb-8">
                <h2 className="text-4xl font-semibold mb-2">$ {totalIncome}</h2>
                <p className="text-gray-500 text-sm">Total income</p>
              </div>
              <div className="expense">
                <h2 className="text-4xl font-semibold mb-2">
                  {" "}
                  $ {totalExpense}
                </h2>
                <p className="text-gray-500 text-sm">Total Expense</p>
              </div>
            </div>
          </div>
          <div className="chart-wrapper w-full h-69 flex items-end">
            <div className="chart w-full h-58 flex justify-center items-center">
              <Demo/>
            </div>
          </div>
        </main>
        <section className="flex items-start mx-16 gap-4">
          <div className="expense w-full font-semibold p-4 rounded-lg bg-white">
            <h3 className="text-lg text-red-700">Expense</h3>
            {allExpenseTransaction
              ? allExpenseTransaction.map((tran, index) => (
                  <div key={index}>
                    <div className="amount flex justify-between rounded-lg mt-4 items-center w-full bg-red-200/60 py-3 px-6">
                      <div>{tran.description}</div>
                      <div>$ {tran.amount}</div>
                    </div>
                  </div>
                ))
              : null}
          </div>
          <div className="income w-full font-semibold p-4 rounded-lg bg-white">
            <h3 className="text-lg text-red-700">Income</h3>
            {allIncomeTransaction
              ? allIncomeTransaction.map((tran, index) => (
                  <div key={index}>
                    <div className="amount flex justify-between rounded-lg mt-4 items-center w-full bg-blue-200/60 py-3 px-6">
                      <div>{tran.description}</div>
                      <div>$ {tran.amount}</div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </section>
        {addTransaction ? <AddTran ref={ref} /> : null}
      </div>
    </>
  );
}

export default Home;
