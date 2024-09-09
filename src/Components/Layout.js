import React from 'react';
import Sidebar from './Sidebar'; // Ensure path is correct


const Layout = ({ children, setActiveComponent, activeComponent }) => {
  return (
    <div className="layout">
      <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
