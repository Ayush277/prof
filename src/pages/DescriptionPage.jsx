// src/pages/DescriptionPage.jsx

import React, { useState } from "react";

const DescriptionPage = () => {
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSaveDescription = () => {
    // For now, just log the description. You can later save it to a database or local storage
    console.log(description);
  };

  return (
    <div className="description-page">
      <h2>Hospital/Doctor Visit Description</h2>
      <textarea
        value={description}
        onChange={handleInputChange}
        placeholder="Enter visit details here..."
      />
      <button onClick={handleSaveDescription}>Save Description</button>

      <div className="saved-description">
        <h3>Saved Description:</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionPage;
