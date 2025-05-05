// src/pages/Dashboard.js
import React, { useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('csvFile', file);

    await axios.post('http://localhost:5000/api/invitations/upload', formData);
    alert('Invitations sent!');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Upload CSV to Send Invitations</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Upload & Send</button>
      </form>
    </div>
  );
}
