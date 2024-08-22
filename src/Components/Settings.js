import React, { useState } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    document.body.className = event.target.value; // Apply the selected theme class to the body
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <div className="settings-section">
        <h2>Theme and Appearance</h2>
        <label htmlFor="theme-select">Choose a theme:</label>
        <select id="theme-select" value={theme} onChange={handleThemeChange}>
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
          <option value="blue">Blue Mode</option>
        </select>
      </div>
      {/* Other settings sections */}
    </div>
  );
};

export default Settings;
