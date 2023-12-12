// App.js
import React, { useEffect, useState } from 'react';
import FileUpload from './FileUpload';
import FileDisplay from './FileDisplay';
import FileList from './FileList';
import axios from 'axios';

const App = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileLink, setFileLink] = useState(null);
  const [Filename, setFilename] = useState(null);
  useEffect(() => {
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  }
  , [selectedFile]);

  const handleFileSelect = async (filename) => {
    try {
      const response = await axios.get(`http://localhost:3000/files/${filename}`);
      setFilename(filename);
      filename = filename.replace(/ /g, '%20');
      setFileLink(`http://localhost:3000/files/${filename}`);
    } catch (error) {
      console.error('Error getting file link:', error);
    }

    setSelectedFile(filename);
  };

  const handleFileUpload = () => {
    // Refresh file list after upload
    setFileLink(null);
  };

  return (
    <div>
      <FileUpload onUpload={handleFileUpload} />
      <FileList onSelect={handleFileSelect} />
      <FileDisplay fileLink={fileLink} filename={Filename} />
    </div>
  );
};

export default App;
