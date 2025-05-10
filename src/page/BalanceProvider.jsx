// page/BalanceProvider.jsx
import { createContext, useState } from "react";

export const BalanceContext = createContext();

const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(10000);
  const [paidBills, setPaidBills] = useState([]);

  const payBill = (id, amount) => {
    if (paidBills.includes(id)) return false;
    if (balance >= amount) {
      setBalance(balance - amount);
      setPaidBills([...paidBills, id]);
      return true;
    }
    return false;
  };

  return (
    <BalanceContext.Provider value={{ balance, payBill, paidBills }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
