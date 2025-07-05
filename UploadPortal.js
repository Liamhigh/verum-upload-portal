import React, { useState } from 'react';

function UploadPortal() {
  const [file, setFile] = useState(null);
  const [type, setType] = useState('');

  const handleUpload = () => {
    alert(\`Uploading as \${type}: \${file?.name || 'No file selected'}\`);
  };

  return (
    <div>
      <p>Are you a:</p>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="">Select...</option>
        <option value="Private Person">Private Person</option>
        <option value="Company">Company</option>
        <option value="Institution">Institution</option>
      </select>

      <div style={{ marginTop: 20 }}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button onClick={handleUpload} disabled={!file || !type}>Upload</button>
      </div>
    </div>
  );
}

export default UploadPortal;
