import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';

function UploadCSV() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: function (results) {
          axios.post('http://localhost:5000/api/upload', results.data)
            .then(response => {
              alert('Data uploaded successfully!');
            })
            .catch(error => {
              console.error('Error uploading data:', error);
            });
        }
      });
    }
  };

  return (
    <div>
      <h2>Upload CSV</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadCSV;
