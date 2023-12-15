import React, { useState, useEffect } from "react";
import axios from "axios";

const Allotment = () => {
  const [users, setUsers] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
    // Fetch data periodically (every 2 seconds)
    const interval = setInterval(fetchData, 2000);
    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/testdata2");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePayBill = async (userId) => {
    try {
      await axios.put("http://localhost:3000/setBillPaid");
      // Refetch data after setting billPaid to true
      await fetchData();
    } catch (error) {
      console.error("Error setting bill paid:", error);
    }
  };

  return (
    <div>
      {users.length === 0 ? (
        <p className="text-center mt-4">Allot the users to shop</p>
      ) : (
        <table className="table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Bill Paid</th>
              <th className="px-4 py-2">Bill Amount</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{user.name}</td>
                <td
                  className={`border px-4 py-2 ${
                    !user.billpaid && "text-red-500"
                  }`}
                >
                  {user.billpaid ? "Paid" : "Not Paid"}
                </td>
                <td className="border px-4 py-2">{user.billamount}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handlePayBill(user.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    disabled={user.billpaid}
                  >
                    Pay Bill
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Allotment;
