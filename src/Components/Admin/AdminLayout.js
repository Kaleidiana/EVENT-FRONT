import React from 'react';
import  AdminSidebar from './AdminSidebar'; // Ensure path is correct
import { Outlet } from 'react-router-dom';


const AdminLayout = () => {
  return (
    <div className="layout">
      <AdminSidebar  />
      <main className="content">
        <Outlet/>
      </main>
    </div>
  );
};

export default AdminLayout;
