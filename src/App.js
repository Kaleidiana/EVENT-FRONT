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
import ProtectedRoutes from './Components/ProtectedRoutes'; // Adjust the import as necessary
import './App.css';

// Retrieve the user role from local storage
const userRole = localStorage.getItem('userRole');

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar /> {/* Sidebar always visible */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {userRole === 'admin' ? (
              <Route path="/AdminDash" element={<AdminDash />} />
            ) : (
              <Route path="/UsersDash" element={<UsersDash />} />
            )}
            <Route path="/events" element={<Events />} />
            <Route
              path="/income"
              element={<ProtectedRoutes allowedRoles={['admin']} element={<Income />} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
