import React from 'react';

const VoucherTable = () => {
  const vouchers = [
    { id: 1, code: 'VOUCHER1', amount: 10 },
    { id: 2, code: 'VOUCHER2', amount: 20 },
    { id: 3, code: 'VOUCHER3', amount: 30 },
    { id: 4, code: 'VOUCHER4', amount: 40},
    { id: 5, code: 'VOUCHER5', amount: 50 },
    { id: 6, code: 'VOUCHER6', amount: 60 },
    { id: 7, code: 'VOUCHER7', amount: 70 },
    { id: 8, code: 'VOUCHER8', amount: 80 },
    { id: 9, code: 'VOUCHER9', amount: 90 },
    { id: 10, code: 'VOUCHER10', amount: 100 },
    { id: 11, code: 'VOUCHER11', amount: 110 },
    { id: 12, code: 'VOUCHER12', amount: 120 },
    { id: 13, code: 'VOUCHER13', amount: 130 }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Code</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((voucher) => (
            <tr key={voucher.id}>
              <td className="py-2 px-4 border-b">{voucher.id}</td>
              <td className="py-2 px-4 border-b">{voucher.code}</td>
              <td className="py-2 px-4 border-b">{voucher.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoucherTable;
