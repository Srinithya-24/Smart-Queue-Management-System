import { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "30px" }}>Settings</h1>

      <div
        style={{
          maxWidth: "500px",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            {" "}Enable Notifications
          </label>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            {" "}Dark Mode
          </label>
        </div>

        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;