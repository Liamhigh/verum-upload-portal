import React, { useState } from "react";

function UploadPortal() {
  const [userType, setUserType] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!userType || !file) {
      setStatus("Please select a user type and a file.");
      return;
    }
    setStatus("File ready for processing (local only).");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Verum Omnis Upload Portal</h1>
      <div>
        <button onClick={() => setUserType("private")}>Private</button>
        <button onClick={() => setUserType("company")}>Company</button>
        <button onClick={() => setUserType("institution")}>Institution</button>
      </div>
      <p>Selected User Type: <strong>{userType || "None"}</strong></p>
      <input type="file" onChange={handleFileChange} />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>Submit</button>
      <p>{status}</p>
    </div>
  );
}

export default UploadPortal;
