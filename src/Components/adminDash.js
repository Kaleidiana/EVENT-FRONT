import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        setError('Unauthorized access. Please check your authentication token.');
      } else {
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
    <div className="container">
      <h3 className="heading">Admin Dashboard</h3>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="manageSection">
        <h3 className="sectionHeading">Manage Events</h3>
        <div className="tableContainer">
          <table className="table">
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
                    <div className="actionsContainer">
                      <button
                        className="actionsButton"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href={`#/editEvent/${event._id}`}>Edit Event</a>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDeleteEvent(event._id)}
                        >
                          Delete Event
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="manageSection">
        <h3 className="sectionHeading">Manage Users</h3>
        <div className="tableContainer">
          <table className="table">
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
                    <div className="actionsContainer">
                      <button
                        className="actionsButton"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href={`#/editUser/${user._id}`}>Edit User</a>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDeleteUser(user._id)}
                        >
                          Delete User
                        </button>
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
