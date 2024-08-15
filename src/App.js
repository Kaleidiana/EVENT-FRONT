import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import AdminDash from './Components/AdminDash';
import UsersDash from './Components/UsersDash';
import SidebarPage from './Components/SidebarPage'; 
import Income from './Components/Income';
import Events from './Components/Events';
import NotFound from './Components/NotFound';
import ProtectedRoutes from './Components/ProtectedRoutes';
import './App.css';

const userRole = localStorage.getItem('userRole');

function App() {
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
              <Sidebar />
              <div className="content">
                <Routes>
                  {userRole === 'admin' ? (
                    <Route path="AdminDash" element={<AdminDash />} />
                  ) : (
                    <Route path="UsersDash" element={<UsersDash />} />
                  )}
                  <Route path="events" element={<Events />} />
                  <Route path="sidebarpage" element={<SidebarPage />} />
                  <Route
                    path="income"
                    element={<ProtectedRoutes allowedRoles={['admin']} element={<Income />} />}
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
