// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/authContext'; // Ensure path is correct
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import AdminDash from './Components/AdminDash';
import Events from './Components/Events';
import UsersDash from './Components/UsersDash';
import Income from './Components/Income';
import NotFound from './Components/NotFound';
import ProtectedRoutes from './Components/ProtectedRoutes'; // Ensure path is correct
import './App.css'; // Ensure you include your CSS file

function App() {
  const [activeComponent, setActiveComponent] = useState(''); // Default empty or a suitable default

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoutes allowedRoles={['admin']} element={<AdminDash />} />
                } 
              />
              <Route 
                path="/users" 
                element={
                  <ProtectedRoutes allowedRoles={['admin', 'user']} element={<UsersDash />} />
                } 
              />
              <Route 
                path="/events" 
                element={
                  <ProtectedRoutes allowedRoles={['admin', 'user']} element={<Events />} />
                } 
              />
              <Route 
                path="/income" 
                element={
                  <ProtectedRoutes allowedRoles={['admin']} element={<Income />} />
                } 
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
