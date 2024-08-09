import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import AdminDash from './Components/AdminDash';
import UsersDash from './Components/UsersDash';
import Events from './Components/Events';
import Income from './Components/Income';
import NotFound from './Components/NotFound';
import ProtectedRoutes from './Components/ProtectedRoutes'; // Ensure import path is correct
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import './App.css';

// Retrieve the user role and authentication status from local storage
const userRole = localStorage.getItem('userRole');
const isAuthenticated = !!localStorage.getItem('authToken');

function App() {
  return (
    <Router>
      <ToastContainer /> {/* Add ToastContainer here */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />

        {/* Routes with Sidebar */}
        {isAuthenticated && (
          <Route
            path="/*"
            element={
              <div className="App">
                <Sidebar />
                <div className="content">
                  <Routes>
                    {userRole === 'admin' ? (
                      <Route path="AdminDash" element={<AdminDash />} />
                    ) : (
                      <Route path="UsersDash" element={<UsersDash />} />
                    )}
                    <Route path="events" element={<Events />} />
                    <Route
                      path="income"
                      element={<ProtectedRoutes allowedRoles={['admin']} element={<Income />} />}
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </div>
            }
          />
        )}

        {/* Redirect to login if not authenticated */}
        {!isAuthenticated && <Route path="*" element={<Navigate to="/login" />} />}
      </Routes>
    </Router>
  );
}

export default App;
