import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import AdminDash from './Components/AdminDash'; 
import Events from './Components/Events';
import UsersDash from './Components/UsersDash';
import CreateEvent from './Components/createEvent';
import Income from './Components/Income';
import NotFound from './Components/NotFound';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/*" 
          element={
            <div className="App">
              <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
              <div className="content">
                <Routes>
                  <Route path="/AdminDash" element={<AdminDash />} />
                  <Route path="/UsersDash" element={<UsersDash />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/create-event" element={<CreateEvent />} />
                  <Route path="/income" element={<Income />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          } 
        />
        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
}

export default App;
