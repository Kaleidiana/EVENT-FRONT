import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import About from './Components/About';
import AdminDash from './Components/AdminDash';
import Events from './Components/Events';
import NotFound from './Components/NotFound';
import ContactUs from './Components/ContactUs';
import Layout from './Components/Layout'; // Ensure path is correct
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = React.useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <Layout setActiveComponent={setActiveComponent} activeComponent={activeComponent}>
              <Routes>
                <Route path="about" element={<About />} />
                <Route path="admindash" element={<AdminDash />} />
                <Route path="events" element={<Events />} />
                <Route path="contactus" element={<ContactUs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
