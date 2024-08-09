import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import AdminDash from './Components/AdminDash'; 
import Events from './Components/Events';
import UsersDash from './Components/UsersDash'; 
import Income from './Components/Income';
import NotFound from './Components/NotFound';
import './App.css'; // Ensure you include your CSS file

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
      <Route path="/events" element={<Events />} />
      <Route path="/AdminDash" element={<AdminDash />} />
      <Route path="/UsersDash" element={<UsersDash />} />
      <Route path="/income" element={<Income />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
