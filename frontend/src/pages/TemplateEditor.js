import React, { useState } from 'react';

const TemplateEditor = () => {
  const [template, setTemplate] = useState(
    `Dear {{firstName}},\n\nWe are pleased to invite you to VBDA 2025...`
  );

  const handleSave = () => {
    localStorage.setItem('emailTemplate', template);
    alert('Template saved!');
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Edit Email Template</h2>
      <textarea
        className="w-full h-60 border p-2"
        value={template}
        onChange={(e) => setTemplate(e.target.value)}
      />
      <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 mt-2">
        Save Template
      </button>
    </div>
  );
};

export default TemplateEditor;
