import React from 'react';

const Transactions = () => {
  const transactions = [
    { id: 1, date: '2022-01-01', description: 'Transaction 1', amount: 100 },
    { id: 2, date: '2022-01-02', description: 'Transaction 2', amount: -50 },
    { id: 3, date: '2022-01-03', description: 'Transaction 3', amount: 200 },
  ];

  return (
    <div className="transactions-table overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="py-2 px-4 border-b">{transaction.id}</td>
              <td className="py-2 px-4 border-b">{transaction.date}</td>
              <td className="py-2 px-4 border-b">{transaction.description}</td>
              <td className={`py-2 px-4 border-b ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {transaction.amount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
