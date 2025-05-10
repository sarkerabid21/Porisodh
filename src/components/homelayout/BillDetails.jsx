import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BalanceContext } from "../../page/BalanceProvider";

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();
  const { payBill, paidBills } = useContext(BalanceContext);

  useEffect(() => {
    fetch("/bill.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id == id);
        setBill(found);
      });
  }, [id]);

  const handlePay = () => {
    const success = payBill(bill.id, parseInt(bill.amount));
    if (success) {
      setToastMessage(" Payment Successful");
      setTimeout(() => {
        setToastMessage("");
        navigate("/bills");
      }, 2000);
    } else {
      setToastMessage(" Already Paid or Insufficient Balance");
      setTimeout(() => setToastMessage(""), 2000);
    }
  };

  if (!bill) {
    return (
      <div className="text-center py-10">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-100 to-green-200 flex justify-center items-center min-h-screen relative">
      {/* DaisyUI Toast */}
      {toastMessage && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-warning">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl">
        <div className="flex-1 flex items-center justify-center">
          <img src={bill.icon} alt="icon" className="w-48 h-48 object-contain" />
        </div>
        <div className="flex-1 space-y-3 mt-6 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-bold">{bill.organization}</h2>
          <p className="italic text-gray-600">{bill.bill_type}</p>
          <p className="text-lg">
            <span className="font-semibold">Amount:</span> {bill.amount}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Due Date:</span> {bill.due_date}
          </p>
          {paidBills.includes(bill.id) ? (
            <span className="text-green-600 font-bold text-xl">✅ <button
            onClick={handlePay}
            className="cursor-pointer mt-4 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2 rounded"
          >
            Pay Bill
          </button></span>
          ) : (
            <button
              onClick={handlePay}
              className="cursor-pointer mt-4 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2 rounded"
            >
              Pay Bill
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
