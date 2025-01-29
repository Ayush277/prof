// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import FileUploadPage from "./pages/FileUploadPage";
import DescriptionPage from "./pages/DescriptionPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Health Hive</h1>
        </header>

        <Routes>
          {/* Route to ProfileCard by default */}
          <Route path="/" element={<ProfileCard />} />
          <Route path="/file-upload" element={<FileUploadPage />} />
          <Route path="/description" element={<DescriptionPage />} />
        </Routes>

        <footer>
          <p>Health Hive © 2025</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

