import React, { useState } from 'react';
import axios from 'axios';

function UploadForm() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reader = new FileReader();

    reader.onload = async (event) => {
      const text = event.target.result;
      const rows = text.split('\n').filter(Boolean);
      const invitees = rows.map((row) => {
        const [name, email, organization, field] = row.split(',');
        return { name, email, organization, field };
      });

      try {
        const res = await axios.post('http://localhost:5000/api/invitees/upload', { invitees });
        alert(res.data.message);
      } catch (err) {
        alert('Error uploading data');
      }
    };

    reader.readAsText(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".csv" onChange={handleFileChange} required />
      <button type="submit">Upload & Send</button>
    </form>
  );
}

export default UploadForm;