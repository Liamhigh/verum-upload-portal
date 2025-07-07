import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [hash, setHash] = useState('');

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
    setHash('');
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please choose a file first.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const arrayBuffer = e.target.result;
      const buffer = new Uint8Array(arrayBuffer);

      const hashBuffer = await crypto.subtle.digest('SHA-512', buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

      setHash(hashHex);
      setMessage('File verified successfully.');
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="100" />
      <h1>Verum Upload Portal</h1>
      <p>Welcome to the global forensic gateway. Upload your document to begin verification.</p>
      <input type="file" onChange={handleChange} />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>
      <br /><br />
      {message && <p><strong>{message}</strong></p>}
      {hash && (
        <div style={{ wordBreak: 'break-all', maxWidth: '80%', margin: '0 auto', textAlign: 'left' }}>
          <p><strong>SHA-512 Hash:</strong></p>
          <code>{hash}</code>
        </div>
      )}
    </div>
  );
}

export default App;
