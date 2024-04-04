function TransactionTable() {
  const entries = [
    { type: "Deposit", amount: "$500.00", date: "2024-04-01" },
    { type: "Withdrawal", amount: "$200.00", date: "2024-04-02" },
    { type: "Deposit", amount: "$300.00", date: "2024-04-03" },
    { type: "Deposit", amount: "$500.00", date: "2024-04-01" },
    { type: "Withdrawal", amount: "$200.00", date: "2024-04-02" },
    { type: "Deposit", amount: "$300.00", date: "2024-04-03" },
    { type: "Deposit", amount: "$500.00", date: "2024-04-01" },
    { type: "Withdrawal", amount: "$200.00", date: "2024-04-02" },
    { type: "Deposit", amount: "$300.00", date: "2024-04-03" },
    { type: "Deposit", amount: "$500.00", date: "2024-04-01" },
    { type: "Withdrawal", amount: "$200.00", date: "2024-04-02" },
    { type: "Deposit", amount: "$300.00", date: "2024-04-03" },
    { type: "Deposit", amount: "$500.00", date: "2024-04-01" },
    { type: "Withdrawal", amount: "$200.00", date: "2024-04-02" },
    { type: "Deposit", amount: "$300.00", date: "2024-04-03" },
    { type: "Deposit", amount: "$500.00", date: "2024-04-01" },
    { type: "Withdrawal", amount: "$200.00", date: "2024-04-02" },
    { type: "Deposit", amount: "$300.00", date: "2024-04-03" },
    // Add more entries here
  ];
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Type
            </th>
            <th scope="col" className="py-3 px-6">
              Amount
            </th>
            <th scope="col" className="py-3 px-6">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="py-4 px-6">{entry.type}</td>
              <td className="py-4 px-6">{entry.amount}</td>
              <td className="py-4 px-6">{entry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
