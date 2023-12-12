// FileList.js
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
    <div>
      <h2>File List</h2>
      <ul>
        {files.map((file) => (
          <li key={file.name} onClick={() => onSelect(file.name)}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
