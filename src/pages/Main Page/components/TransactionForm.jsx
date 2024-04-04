import { useState } from "react";

function TransactionForm() {
  const [transactionType, setTransactionType] = useState("deposit");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the submission of the form
    console.log({ transactionType, amount });
  };

  return (
    <div className="w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="bg-[#1A202C] text-[#E2E8F0] p-6 rounded-lg shadow-lg max-w-sm w-full">
          <form>
            <div>
              <label
                htmlFor="transactionType"
                className="block text-sm font-bold mb-2"
              >
                Type
              </label>
              <select
                id="transactionType"
                className="bg-[#2D3748] text-[#E2E8F0] rounded border border-[#4A5568] p-2 w-full"
              >
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-bold mb-2">
                Amount
              </label>
              <input
                type="text"
                id="amount"
                className="bg-[#2D3748] text-[#E2E8F0] rounded border border-[#4A5568] p-2 w-full"
                placeholder="0.00"
              />
            </div>
            <button
              type="submit"
              className="bg-[#3182CE] hover:bg-[#63B3ED] text-white font-bold py-2 px-4 rounded w-full"
            >
              Save
            </button>
          </form>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
