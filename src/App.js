import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import Admin from './Components/Admin';
import Events from './Components/Events';
import Users from './Components/Users';
import Income from './Components/Income';
import './App.css'; // Make sure to include your CSS file

function App() {
  const [activeComponent, setActiveComponent] = useState('dashboard'); // Default to 'dashboard'

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/*" element={<MainApp setActiveComponent={setActiveComponent} activeComponent={activeComponent} />} />
        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

const MainApp = ({ setActiveComponent, activeComponent }) => (
  <div className="App">
    <Sidebar setActiveComponent={setActiveComponent} />
    <Routes>
    <Route path="/events" element={<Events activeComponent={activeComponent} />} />
      <Route path="/dashboard" element={<Dashboard activeComponent={activeComponent} />} />
      <Route path="/admin" element={<Admin activeComponent={activeComponent} />} />
      <Route path="/users" element={<Users activeComponent={activeComponent} />} />
      <Route path="/income" element={<Income activeComponent={activeComponent} />} />
    </Routes>
  </div>
);

export default App;
