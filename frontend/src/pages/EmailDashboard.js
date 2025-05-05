import React, { useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';

const EmailDashboard = () => {
  const [recipients, setRecipients] = useState([]);

  const handleCSV = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      complete: (results) => {
        setRecipients(results.data);
      },
    });
  };

  const sendEmails = async () => {
    for (const recipient of recipients) {
      try {
        await axios.post('http://localhost:5000/api/email/send', { recipient });
      } catch (err) {
        console.error('Email failed for:', recipient.email);
      }
    }
    alert('Emails sent!');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Upload Recipients CSV</h1>
      <input type="file" accept=".csv" onChange={handleCSV} />
      <button onClick={sendEmails} className="bg-blue-500 text-white px-4 py-2 mt-3">
        Send Personalized Emails
      </button>
    </div>
  );
};

export default EmailDashboard;
