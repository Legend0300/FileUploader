import React, { useEffect, useState } from "react";

const Report = ({ url }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          setError(null);
          console.log(data);
        })
        .catch((err) => {
          // auto catches network / connection error
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  const renderTable = () => {
    if (!data) return null;

    return Object.keys(data).map((category, index) => {
      const items = data[category];

      return (
        <div key={index} className="my-4">
          <h1 className="text-2xl font-bold mb-2">{category}</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  {Object.keys(items[0]).map((header) => (
                    <th
                      key={header}
                      className="py-2 px-4 border-b border-gray-300 font-bold text-left"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    {Object.values(item).map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="py-2 px-4 border-b border-gray-300 text-left"
                      >
                        {Array.isArray(cell) ? (
                          <ul>
                            {cell.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          cell.toString()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="my-8 mx-auto max-w-2xl">
      {isPending && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {data && renderTable()}
    </div>
  );
};

export default Report;