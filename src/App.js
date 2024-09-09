import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';
import AdminDash from './Components/Admin/AdminDash';
import Events from './Components/Events';
import NotFound from './Components/NotFound';
import ContactUs from './Components/ContactUs';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminLayout from './Components/Admin/AdminLayout';
import Layout from './Components/Layout'; // Ensure path is correct
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/user/"
          element={
            <Layout />}>
                <Route path="/user/about" element={<About />} />
                <Route path="/user/events" element={<Events />} />
                <Route path="/user/contactus" element={<ContactUs />} />
                
                <Route path="/user/notfound" element={<NotFound />} />
              
            
          
                </Route>

           <Route path="adminlogin" element={<AdminLogin/>} />
              
       <Route path="/admin/" element={<AdminLayout />}>
        <Route path="/admin/admindash" element={<AdminDash />} />
       </Route>

      </Routes>
    </Router>
  );
}

export default App;
