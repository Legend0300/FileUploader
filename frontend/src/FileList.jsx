import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileList = ({ onSelect }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:3000/files');
        console.log(response.data);
        setFiles(response.data);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="bg-black-100 border border-gray-300 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">File List</h2>
      <ul className="list-disc ml-4">
        {files.map((file) => (
          <li
            key={file.name}
            className="text-blue-500 cursor-pointer hover:underline transition-colors"
            onClick={() => onSelect(file.name)}
          >
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
