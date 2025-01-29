import React, { useState } from "react";
import profileImage from "../assets/profile.jpg"; // Corrected import path
import "../App.css"; // Go up one level from the components folder


function App() {
  // State to store profile information
  const [profileData, setProfileData] = useState({
    height: "170 cm",
    weight: "60 kg",
    bloodGroup: "A+",
    age: 24,
  });

  // State to toggle edit mode for profile and description
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  // Handler to toggle edit mode for profile
  const handleEditProfileClick = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  // Handler to toggle edit mode for description
  const handleEditDescriptionClick = () => {
    setIsEditingDescription(!isEditingDescription);
  };

  // Handler to update profile data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // State to store description
  const [description, setDescription] = useState(
    "Detailed information about Ivan Jackson's medical history, current condition, and any important notes related to the patient will go here. This section can be expanded as needed to include more information."
  );

  // Handler to update description
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div style={styles.body}>
      {/* Navbar on the left side */}
      <div style={styles.navbar}>
        <a href="#" style={styles.navLink}>A</a>
        <a href="#" style={styles.navLink}>B</a>
        <a href="#" style={styles.navLink}>C</a>
      </div>

      {/* Main Content Section */}
      <div style={styles.mainContent}>
        {/* Left Profile Card */}
        <div style={styles.profile}>
          {/* Profile Image */}
          <img
            src={profileImage} // Use the imported image here
            alt="Profile Picture"
            style={styles.profileImage}
          />
          <h2>Sushant Chavan</h2>
          {/* Profile Details List */}
          <ul style={styles.profileList}>
            <li>
              Height:{" "}
              {isEditingProfile ? (
                <input
                  type="text"
                  name="height"
                  value={profileData.height}
                  onChange={handleChange}
                  style={styles.inputField}
                />
              ) : (
                profileData.height
              )}
            </li>
            <li>
              Weight:{" "}
              {isEditingProfile ? (
                <input
                  type="text"
                  name="weight"
                  value={profileData.weight}
                  onChange={handleChange}
                  style={styles.inputField}
                />
              ) : (
                profileData.weight
              )}
            </li>
            <li>
              Blood Group:{" "}
              {isEditingProfile ? (
                <input
                  type="text"
                  name="bloodGroup"
                  value={profileData.bloodGroup}
                  onChange={handleChange}
                  style={styles.inputField}
                />
              ) : (
                profileData.bloodGroup
              )}
            </li>
            <li>
              Age:{" "}
              {isEditingProfile ? (
                <input
                  type="number"
                  name="age"
                  value={profileData.age}
                  onChange={handleChange}
                  style={styles.inputField}
                />
              ) : (
                profileData.age
              )}
            </li>
          </ul>

          {/* Edit Button for Profile */}
          <button onClick={handleEditProfileClick} style={styles.editButton}>
            {isEditingProfile ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Right Description */}
        <div style={styles.description}>
          <h3>Patient's Detailed Description</h3>
          {isEditingDescription ? (
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              style={styles.textArea}
            />
          ) : (
            <p>{description}</p>
          )}

          {/* Edit Button for Description */}
          <button onClick={handleEditDescriptionClick} style={styles.editButton}>
            {isEditingDescription ? "Save Description" : "Edit Description"}
          </button>

          {/* Moved Hoverable Button to bottom */}
          <div style={styles.buttonContainer}>
            <button style={styles.hoverButton}>Go to Main Content</button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        <p>Health Hive</p>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row", // Horizontal layout for navbar and main content
    height: "100vh", // Full viewport height
    backgroundColor: "#0000", // Black background for the body
    color: "#fff", // White text color
  },
  navbar: {
    backgroundColor: "#000000", // Navbar background color
    position: "fixed", // Fixed on the left side
    top: 0,
    left: 0,
    height: "100%", // Full height of the screen
    paddingTop: "20px",
    paddingLeft: "40px",
    display: "flex",
    flexDirection: "column", // Vertical layout for links
    alignItems: "center", // Center the links
    justifyContent: "center", // Center vertically
    width: "150px", // Fixed width for the navbar
    borderTopRightRadius: "80px", // Rounded top-right corner
    borderBottomRightRadius: "80px",
    boxShadow: "2px 0 5px rgb(255, 0, 0)", // Optional shadow for navbar
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    margin: "15px 0", // More space between the links when centered
    fontSize: "28px",
    transition: "border-bottom 0.3s ease",
  },
  mainContent: {
    display: "flex",
    justifyContent: "space-between", // Space out profile and description
    marginLeft: "200px", // Offset for fixed navbar width
    width: "100%",
    padding: "20px 20px 20px 20px",
  },
  profile: {
    backgroundColor: "#333", // Dark background for the profile card
    padding: "20px",
    borderRadius: "10px", // Rounded corners for profile card
    width: "45%", // 45% of the screen width for profile card
    textAlign: "left",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Soft shadow around the card
  },
  profileImage: {
    width: "120px", // Fixed width for profile picture
    height: "120px", // Fixed height for profile picture
    borderRadius: "30%", // Circular profile picture
    marginBottom: "20px", // Space below image
  },
  profileList: {
    listStyleType: "circle", // Bullet points for the list
    padding: 0, // Remove default padding
    margin: "15px 0", // Space around the list
    textAlign: "left", // Align list to the left
  },
  description: {
    backgroundColor: "#fff", // White background for the description
    color: "#000", // Black text color for readability
    padding: "20px",
    borderRadius: "10px", // Rounded corners for the description box
    width: "45%", // 45% of the screen width for description
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Soft shadow around the description
    height: "fit-content", // Adjust height based on content
  },
  editButton: {
    marginTop: "20px", // Space above the button
    padding: "10px 20px", // Button padding
    backgroundColor: "#28a745", // Green background color
    color: "white",
    border: "none",
    borderRadius: "5px", // Rounded corners for the button
    fontSize: "16px", // Button text font size
    cursor: "pointer", // Change cursor to pointer
  },
  inputField: {
    marginLeft: "10px", // Space between label and input
    padding: "5px",
    borderRadius: "5px", // Rounded input corners
    border: "1px solid #ccc", // Border color
  },
  textArea: {
    width: "100%",
    height: "150px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  hoverButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff", // Blue background color
    color: "white",
    border: "none",
    borderRadius: "5px",
  }
};

export default App;
