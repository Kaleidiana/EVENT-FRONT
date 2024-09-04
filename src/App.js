import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import AdminDash from './Components/AdminDash';
import Events from './Components/Events';
import Income from './Components/Income';
import NotFound from './Components/NotFound';
import ContactUs from './Components/ContactUs';
// import ProtectedRoutes from './Components/ProtectedRoutes'; // Ensure this is correct
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
      <div className="App">
        <Sidebar setActiveComponent={setActiveComponent} activeComponent={activeComponent} />
        <div className="content">
          <Routes>
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/admindash" element={<AdminDash />} />
            <Route path="/events" element={<Events />} />
            <Route path="/income" element={<Income />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    }
  />
</Routes>

    </Router>
  );
}

export default App;
