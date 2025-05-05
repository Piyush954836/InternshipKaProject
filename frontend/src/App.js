import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmailDashboard from './pages/EmailDashboard';
import TemplateEditor from './pages/TemplateEditor';
import Scheduler from './pages/Scheduler';
import Analytics from './pages/Analytics';

function App() {
  return (
    <Router>
      <nav className="flex gap-4 bg-gray-100 p-4">
        <Link to="/">Dashboard</Link>
        <Link to="/template">Template</Link>
        <Link to="/scheduler">Scheduler</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<EmailDashboard />} />
        <Route path="/template" element={<TemplateEditor />} />
        <Route path="/scheduler" element={<Scheduler />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
