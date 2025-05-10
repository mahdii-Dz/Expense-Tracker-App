import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);
function Context({ children }) {
  const [addTransaction, setAddTransaction] = useState(false);
  const [description, setDescription] = useState("");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactionType, setTransactionType] = useState(null);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  
  return (
    <GlobalContext.Provider
      value={{
        addTransaction,
        setAddTransaction,
        income,
        setIncome,
        expense,
        setExpense,
        description,
        setDescription,
        transactionType,
        setTransactionType,
        totalIncome,
        setTotalIncome,
        totalExpense,
        setTotalExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default Context;
