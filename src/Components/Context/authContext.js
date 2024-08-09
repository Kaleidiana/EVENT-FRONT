// src/contexts/authContext.js
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // This should be used only inside components inside <Router>

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // This is okay if AuthProvider is inside <Router>

  const login = async (credentials) => {
    // Handle login
    // Navigate if needed
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};
