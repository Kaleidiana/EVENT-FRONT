import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
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

      <div className="settings-section">
        <h2>Subscription and Billing</h2>
        <h3>Plan Details</h3>
        <p>View and manage subscription plans and billing information.</p>
        {/* Add actual implementation for managing plans and billing here */}
        <h3>Payment Methods</h3>
        <p>Update payment methods and view billing history.</p>
        {/* Add actual implementation for payment methods and billing history here */}
      </div>

      <div className="settings-section">
        <h2>Help and Support</h2>
        <h3>Support Requests</h3>
        <p>Access support tickets or requests.</p>
        {/* Add actual implementation for support tickets here */}
        <h3>FAQs and Documentation</h3>
        <p>Provide links to FAQs, help articles, and documentation.</p>
        {/* Add links to FAQs, help articles, and documentation here */}
      </div>

      {/* Admin-specific settings */}
      {true /* Replace with a check to determine if the user is an admin */ && (
        <div className="settings-section">
          <h2>System Settings</h2>
          <h3>User Management</h3>
          <p>Admins can manage user roles, permissions, and account statuses.</p>
          {/* Add actual implementation for user management here */}
          <h3>Event Management</h3>
          <p>Configure settings related to event creation, categories, and management.</p>
          {/* Add actual implementation for event management here */}
        </div>
      )}
    </div>
  );
};

export default Settings;
