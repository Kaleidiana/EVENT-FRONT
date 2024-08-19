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
import ProtectedRoutes from './Components/ProtectedRoutes'; // Ensure this is correct
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = React.useState('');

  const userRole = localStorage.getItem('userRole');

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
                  <Route path="/sidebar" element={<Sidebar />} />
                  <Route path="/adminDash" element={<AdminDash />} />
                  
                  {userRole !== 'admin' && (
                    <Route path="/usersDash" element={<UsersDash />} />
                  )}
                  <Route path="/events" element={<Events />} />
                  <Route
                    path="/income"
                    element={
                      <ProtectedRoutes allowedRoles={['admin']}>
                        <Income />
                      </ProtectedRoutes>
                    }
                  />
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
