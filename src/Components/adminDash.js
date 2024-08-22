import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const AdminDash = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchResource = async (url, config) => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (err) {
      if (err.response && err.response.status === 401) {
        console.error('Unauthorized access. Please check your authentication token.');
        setError('Unauthorized access. Please check your authentication token.');
      } else {
        console.error('Error fetching data:', err.response?.data || err.message);
        setError('Error fetching data: ' + (err.response?.data?.message || err.message));
      }
      return [];
    }
  };

  const handleDeleteResource = async (url, id, config) => {
    try {
      await axios.delete(`${url}/${id}`, config);
      toast.success(`Resource deleted successfully`);
    } catch (err) {
      console.error('Error deleting resource:', err.message);
      toast.error('Error deleting resource: ' + err.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          throw new Error('No authentication token found.');
        }
  
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        };
  
        const eventsResponse = await fetchResource('http://localhost:4000/api/events', config);
        setEvents(eventsResponse);
  
        const usersResponse = await fetchResource('http://localhost:4000/api/users/getAllUsers', config);
        setUsers(usersResponse);
      } catch (err) {
        console.error('Error fetching data:', err.message);
        setError('Error fetching data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };
  

    fetchData();
  }, []);

  const handleDeleteEvent = async (eventId) => {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No authentication token found.');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    await handleDeleteResource('http://localhost:4000/api/events', eventId, config);
    setEvents(events.filter(event => event._id !== eventId));
  };

  const handleDeleteUser = async (userId) => {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No authentication token found.');

    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    await handleDeleteResource('http://localhost:4000/api/users/deleteUser', userId, config);
    setUsers(users.filter(user => user._id !== userId));
  };

  return (
    <div className="admin-dash container mx-auto p-4">
      <h3 className="text-2xl font-bold mb-4">Admin Dashboard</h3>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="manage-section">
        <h3 className="text-xl font-bold mb-2">Manage Events</h3>
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
                    <div className="dropdown">
                      <button className="btn btn-success dropdown-toggle" type="button" id={`dropdown-event-${event._id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Actions
                      </button>
                      <div className="dropdown-menu" aria-labelledby={`dropdown-event-${event._id}`}>
                        <a className="dropdown-item" href={`#/editEvent/${event._id}`}>Edit Event</a>
                        <button className="dropdown-item" onClick={() => handleDeleteEvent(event._id)}>Delete Event</button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
      </div>

      <div className="manage-section">
        <h3 className="text-xl font-bold mt-6 mb-2">Manage Users</h3>
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
                    <div className="dropdown">
                      <button className="btn btn-success dropdown-toggle" type="button" id={`dropdown-user-${user._id}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Actions
                      </button>
                      <div className="dropdown-menu" aria-labelledby={`dropdown-user-${user._id}`}>
                        <a className="dropdown-item" href={`#/editUser/${user._id}`}>Edit User</a>
                        <button className="dropdown-item" onClick={() => handleDeleteUser(user._id)}>Delete User</button>
                      </div>
                    </div>
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