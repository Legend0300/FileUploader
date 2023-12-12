import React from 'react';

const FileDisplay = ({ filename, fileLink }) => {
  const openLinkInNewTab = () => {
    window.open(fileLink, '_blank');
  };

  return (
    <div className="border border-gray-300 p-4 rounded mt-4">
      <h2 className="text-xl font-bold mb-2">File Display</h2>
      <hr className="mb-2" />
      {fileLink ? (
        <div>
          <p className="mb-2">Filename: {filename.replace(/%20/g, ' ')}</p>
          {filename.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/) ? (
            // Display image with clickable link
            <a href={fileLink} target="_blank" rel="noopener noreferrer">
              <img
                src={fileLink}
                alt={filename}
                style={{ maxWidth: '100%', cursor: 'pointer', border: '1px solid #ddd', borderRadius: '8px' }}
                onClick={openLinkInNewTab}
              />
            </a>
          ) : (
            // Display non-image file with link to open in a new tab
  
            <>
                <span style={{margin: "15px"}}>Open: </span><a
                  href={fileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline', transition: 'color 0.3s' }}
                  onClick={openLinkInNewTab}
                >
                  {filename.replace(/%20/g, ' ')}
                </a></>
          )}
        </div>
      ) : (
        <p className="mt-2">No file selected</p>
      )}
    </div>
  );
};

export default FileDisplay;
