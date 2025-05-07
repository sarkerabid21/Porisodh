// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const BillDetails = () => {
  const { id } = useParams();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    fetch("/bill.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(item => item.id == id);
        setBill(found);
      });
  }, [id]);

  if (!bill) return <div className="text-center py-10"><span className="loading loading-spinner loading-xl"></span></div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl">
        <div className="flex-1 flex items-center justify-center">
          <img src={bill.icon} alt="icon" className="w-48 h-48 object-contain" />
        </div>
        <div className="flex-1 space-y-3 mt-6 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-bold">{bill.organization}</h2>
          <p className="italic text-gray-600">{bill.bill_type}</p>
          <p className="text-lg"><span className="font-semibold">Amount:</span> {bill.amount}</p>
          <p className="text-lg"><span className="font-semibold">Due Date:</span> {bill.due_date}</p>
          <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-2 rounded">
            Pay Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillDetails;
