// App.js
import React, { useEffect, useState } from 'react';
import FileUpload from './FileUpload';
import FileDisplay from './FileDisplay';
import FileList from './FileList';
import axios from 'axios';

const FileApp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileLink, setFileLink] = useState(null);
  const [Filename, setFilename] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  }, [selectedFile]);

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

  const rootStyle = {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    lineHeight: 1.5,
    fontWeight: 400,
    colorScheme: 'light dark',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '#1a202c', // Dark blue shade
    minHeight: '100vh', // Cover the entire page
    fontSynthesis: 'none',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };

  const buttonStyle = {
    borderRadius: '8px',
    border: '1px solid transparent',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: 500,
    fontFamily: 'inherit',
    backgroundColor: 'indigo-500', // Indigo color
    cursor: 'pointer',
    transition: 'background-color 0.25s', // Hover animation
  };

  return (
    <div style={{ ...rootStyle }} className="container">
      <h1 className="text-3xl font-bold mb-4 text-white">File App</h1>
      <div className="grid grid-cols-1 gap-4">
        <FileUpload onUpload={handleFileUpload} />
        <FileList onSelect={handleFileSelect} />
        <FileDisplay fileLink={fileLink} filename={Filename} />
      </div>
    </div>
  );
};

export default FileApp;
