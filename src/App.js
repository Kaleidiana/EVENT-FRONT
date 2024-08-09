import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
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
  const [activeComponent, setActiveComponent] = useState(''); // Default empty or a suitable default

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/*" 
          element={
            <div className="App">
              <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
              <div className="content">
                <Routes>
                <Route path="/Home" element={<Home />} />
                  <Route path="/AdminDash" element={<AdminDash />} />
                  <Route path="/UsersDash" element={<UsersDash />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/income" element={<Income />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          } 
        />
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
