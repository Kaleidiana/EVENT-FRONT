// src/Components/ProtectedRoutes.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../Context/authContext'; // Ensure path is correct

const ProtectedRoutes = ({ allowedRoles, element }) => {
  const { user } = useContext(authContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/not-found" />;
  }

  return element;
};

export default ProtectedRoutes;
