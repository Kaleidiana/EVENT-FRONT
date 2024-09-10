import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';
import AdminDash from './Components/Admin/AdminDash';
import Events from './Components/Events';
import NotFound from './Components/NotFound';
import CreateEvent from './Components/CreateEvent';
import ContactUs from './Components/ContactUs';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminLayout from './Components/Admin/AdminLayout';
import Layout from './Components/Layout'; // Ensure path is correct
import Booking from './Components/Booking'; // Import the Booking component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="createevent" element={<CreateEvent />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="booking/:eventId" element={<Booking />} /> {/* Correct route path */}
        </Route>
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="admindash" element={<AdminDash />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
