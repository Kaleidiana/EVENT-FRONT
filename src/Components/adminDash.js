import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AdminDash = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('authToken');

    // Configure the headers with the token
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.get('http://localhost:4000/api/events', config)
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching events: ' + error.message);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('authToken');

    // Configure the headers with the token
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.get('http://localhost:4000/api/users/getAllUsers', config)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setError('Error fetching users: ' + error.message);
      });
  }, []);

  const handleDeleteEvent = (eventId) => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('authToken');

    // Configure the headers with the token
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.delete(`http://localhost:4000/api/events/${eventId}`, config)
      .then(() => {
        setEvents(events.filter(event => event._id !== eventId));
        toast.success('Event deleted successfully');
      })
      .catch(error => {
        setError('Error deleting event: ' + error.message);
      });
  };

  const handleDeleteUser = (userId) => {
    // Retrieve the token from local storage
    const token = localStorage.getItem('authToken');

    // Configure the headers with the token
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.delete(`http://localhost:4000/api/users/${userId}`, config)
      .then(() => {
        setUsers(users.filter(user => user._id !== userId));
        toast.success('User deleted successfully');
      })
      .catch(error => {
        setError('Error deleting user: ' + error.message);
      });
  };

  return (
    <div className="admin-dash container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="manage-section">
        <h2 className="text-xl font-bold mb-2">Manage Events</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Title</th>
                <th>Location</th>
                <th>Content</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event._id}>
                  <td>{event.title}</td>
                  <td>{event.location}</td>
                  <td>{event.content}</td>
                  <td>{event.price}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id={`dropdown-event-${event._id}`} size="sm">
                        Actions
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href={`#/editEvent/${event._id}`}>Edit Event</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeleteEvent(event._id)}>Delete Event</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="manage-section">
        <h2 className="text-xl font-bold mt-6 mb-2">Manage Users</h2>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Gender</th>
                <th>Event</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.event}</td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id={`dropdown-user-${user._id}`} size="sm">
                        Actions
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href={`#/editUser/${user._id}`}>Edit User</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDeleteUser(user._id)}>Delete User</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminDash;
