import React from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component correctly

const SidebarPage = () => {
  return (
    <div className="sidebar-page">
      <Sidebar />
      <div className="main-content">
        <h1>Welcome to the Sidebar Page</h1>
        <p>This is the content area. You can put any information here that you want to display alongside the sidebar.</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default SidebarPage;
