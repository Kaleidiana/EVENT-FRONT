import React from 'react';
import Sidebar from './Sidebar'; // Ensure path is correct
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div className="layout">
      <Sidebar/>
      <main className="content">
        <Outlet/>
      </main>
    </div>
  );
};

export default Layout;
