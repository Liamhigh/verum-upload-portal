import React, { useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [hash, setHash] = useState('');
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first.');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const buffer = event.target.result;
      const hashBuffer = await crypto.subtle.digest('SHA-512', buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      setHash(hashHex);
      setMessage('File hashed successfully.');
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/verum_logo.jpg" alt="Verum Omnis Logo" width="200" />
        <h1>Verum Upload Portal</h1>
        <p style={{ maxWidth: '90%', fontSize: '16px', marginTop: '1em' }}>
          This is the global forensic gateway built by Verum Omnis — a zero-telemetry AI system that protects victims of fraud in every country.
          It verifies documents, guides you legally, and prepares full case files. Private individuals receive help for free.
          Institutions and corporations only pay 20% of fraud recovered. It works in every jurisdiction in the world.
        </p>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ marginTop: '1em' }}
        />
        <br /><br />
        <button onClick={handleUpload}>Upload</button>
        <br /><br />
        {message && <p><strong>{message}</strong></p>}
        {hash &&
