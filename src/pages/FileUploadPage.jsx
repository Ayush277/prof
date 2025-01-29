// src/pages/FileUploadPage.jsx

import React, { useState } from "react";

const FileUploadPage = () => {
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      // Save the file in your assets or upload to a server
      const filePath = URL.createObjectURL(file); // Temporarily show file preview
      setFileList([...fileList, filePath]);
      setFile(null); // Reset file input
    }
  };

  return (
    <div className="file-upload-page">
      <h2>Upload and View PDFs</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload PDF</button>

      <div className="pdf-gallery">
        {fileList.map((file, index) => (
          <div key={index} className="pdf-item">
            <embed src={file} width="300" height="400" type="application/pdf" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploadPage;
