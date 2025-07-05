import React, { useState } from 'react';
import './App.css';
import UploadPortal from './UploadPortal';

function App() {
  const [role, setRole] = useState('');
  
  return (
    <div className="app">
      <div className="branding">
        <img src="/verum-omnis-logo.png" alt="Verum Omnis Logo" className="logo" />
        <h1>Verum Omnis: The Whole Truth</h1>
        <p className="tagline">
          Forensic AI for individuals, businesses & institutions — self-verifying, sealed, and secured.
        </p>
      </div>

      {!role ? (
        <div className="role-selector">
          <h2>Who are you?</h2>
          <button onClick={() => setRole('private')}>Private Individual</button>
          <button onClick={() => setRole('business')}>Business</button>
          <button onClick={() => setRole('institution')}>Institution</button>
        </div>
      ) : (
        <UploadPortal userRole={role} />
      )}
    </div>
  );
}

export default App;
