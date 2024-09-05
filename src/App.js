import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import AdminDash from './Components/AdminDash';
import Events from './Components/Events';
import Booking from './Components/Booking'; // Correctly imported Booking component
import NotFound from './Components/NotFound';
import ContactUs from './Components/ContactUs';
import EventDetails from './Components/EventDetails';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = React.useState('');

  // Dummy currentUserId. Replace with actual logic.
  const currentUserId = 'dummyUserId'; // Define this variable to avoid 'no-undef' error

  return (
    <Router>
      <div className="App">
        <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        <div className="content">
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/about" element={<About />} />
  <Route path="/admindash" element={<AdminDash />} />
  <Route path="/events" element={<Events />} />
  <Route path="/event/:id" element={<EventDetails />} />
  <Route path="/booking" element={<Booking userId={currentUserId} />} />
  <Route path="/contactus" element={<ContactUs />} />
  <Route path="*" element={<NotFound />} />
</Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
