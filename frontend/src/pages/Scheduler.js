import React, { useState } from 'react';
import axios from 'axios';

const Scheduler = () => {
  const [date, setDate] = useState('');

  const scheduleEmails = async () => {
    try {
      await axios.post('http://localhost:5000/api/email/schedule', { date });
      alert('Emails scheduled!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Schedule Email</h2>
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2"
      />
      <button onClick={scheduleEmails} className="bg-purple-600 text-white px-4 py-2 ml-2">
        Schedule
      </button>
    </div>
  );
};

export default Scheduler;
