import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ allowedRoles, element }) => {
  // Retrieve the user role from local storage (set during login)
  const userRole = localStorage.getItem('userRole');

  // Check if the user's role is allowed to access the route
  if (!allowedRoles.includes(userRole)) {
    // Redirect to a "Not Found" or "Unauthorized" page if not allowed
    return <Navigate to="/not-found" />;
  }

  // If the user has the required role, render the element (component)
  return element;
};

export default ProtectedRoutes;
