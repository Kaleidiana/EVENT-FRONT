import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import './App.css';

// Retrieve the user role from local storage
const userRole = localStorage.getItem('userRole');

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for Home, Register, and Login */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Routes with Sidebar */}
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
      </Routes>
    </Router>
  );
}

export default App;
