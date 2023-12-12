import React from 'react';

const FileDisplay = ({ filename, fileLink }) => {
  const openLinkInNewTab = () => {
    window.open(fileLink, '_blank');
  };


  return (
    <div>
      <h2>File Display</h2>
      {fileLink ? (
        <div>
          <p>Filename: {filename.replace(/%20/g, " ")}</p>
          {filename.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) ? (
            // Display image with clickable link
            <a href={fileLink} target="_blank" rel="noopener noreferrer">
              <img src={fileLink} alt={filename} style={{ maxWidth: '100%', cursor: 'pointer' }} onClick={openLinkInNewTab} />
            </a>
          ) : (
            // Display non-image file with link to open in a new tab
            <a href={fileLink} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }} onClick={openLinkInNewTab}>
              Open {filename.replace(/%20/g, " ")}
            </a>
          )}
        </div>
      ) : (
        <p>No file selected</p>
      )}
    </div>
  );
};

export default FileDisplay;
