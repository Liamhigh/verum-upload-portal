import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '3em', fontFamily: 'Arial, sans-serif' }}>
      <img
        src="/logo512.png"
        alt="Verum Omnis Logo"
        style={{ width: '120px', marginBottom: '1em' }}
      />
      <h1>Verum Upload Portal</h1>
      <p>Welcome to the global forensic gateway. Upload your document to begin verification.</p>
      <input type="file" style={{ margin: '2em auto', display: 'block' }} />
      <button style={{ padding: '0.5em 1.5em', fontSize: '1em', cursor: 'pointer' }}>
        Upload
      </button>
    </div>
  );
}

export default App;
