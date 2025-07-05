import React from 'react';

function UploadPortal({ userRole }) {
  const handleUpload = (e) => {
    e.preventDefault();
    alert(`Uploading as: ${userRole}. Upload function not wired to backend yet.`);
  };

  return (
    <div className="upload-portal">
      <h2>Upload Your Documents</h2>
      <p>You're submitting as a <strong>{userRole}</strong></p>
      <form onSubmit={handleUpload}>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadPortal;
