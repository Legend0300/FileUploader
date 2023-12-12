import React from 'react';

const HomeDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard Home</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Table 1</h2>
            <div className="overflow-x-auto">
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
                    <tr>
                        <td className="py-2 px-4 border-b">1</td>
                        <td className="py-2 px-4 border-b">2022-01-01</td>
                        <td className="py-2 px-4 border-b">Transaction 1</td>
                        <td className="py-2 px-4 border-b text-green-500">100</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">2</td>
                        <td className="py-2 px-4 border-b">2022-01-02</td>
                        <td className="py-2 px-4 border-b">Transaction 2</td>
                        <td className="py-2 px-4 border-b text-red-500">-50</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 border-b">3</td>
                        <td className="py-2 px-4 border-b">2022-01-03</td>
                        <td className="py-2 px-4 border-b">Transaction 3</td>
                        <td className="py-2 px-4 border-b text-green-500">200</td>
                    </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow mt-4">
          <h2 className="text-lg font-bold mb-2">Reporting</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded shadow">
              <h3 className="text-lg font-bold mb-2">Chart 1</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className="bg-gray-200 p-4 rounded shadow">
              <h3 className="text-lg font-bold mb-2">Chart 2</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
