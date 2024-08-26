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
    <div style={styles.container}>
      <h3 style={styles.heading}>Admin Dashboard</h3>
      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      <div style={styles.manageSection}>
        <h3 style={styles.sectionHeading}>Manage Events</h3>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
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
                    <div style={styles.actionsContainer}>
                      <button
                        style={styles.actionsButton}
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

      <div style={styles.manageSection}>
        <h3 style={styles.sectionHeading}>Manage Users</h3>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
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
                    <div style={styles.actionsContainer}>
                      <button
                        style={styles.actionsButton}
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

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
  },
  heading: {
    textAlign: 'center',
    color: '#343a40',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  loading: {
    textAlign: 'center',
    color: '#007bff',
    marginBottom: '20px',
  },
  error: {
    textAlign: 'center',
    color: '#dc3545',
    marginBottom: '20px',
  },
  manageSection: {
    marginBottom: '40px',
  },
  sectionHeading: {
    fontSize: '20px',
    color: '#343a40',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  tableContainer: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  actionsContainer: {
    position: 'relative',
  },
  actionsButton: {
    backgroundColor: '#28a745',
    color: 'white',
    borderRadius: '4px',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default AdminDash;
