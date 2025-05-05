import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const res = await axios.get('http://localhost:5000/api/email/analytics');
      setData(res.data);
    };
    fetchAnalytics();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Email Analytics</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th>Email</th>
            <th>Status</th>
            <th>Opened</th>
            <th>RSVP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, idx) => (
            <tr key={idx} className="text-center border-t">
              <td>{r.email}</td>
              <td>{r.status}</td>
              <td>{r.opened ? 'Yes' : 'No'}</td>
              <td>{r.rsvp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;
