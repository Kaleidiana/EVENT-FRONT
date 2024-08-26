import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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
      toast.success('Resource deleted successfully');
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
    <div className={styles.container}>
      <h3 className={styles.heading}>Admin Dashboard</h3>
      {loading && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.manageSection}>
        <h3 className={styles.sectionHeading}>Manage Events</h3>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
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
                    <DropdownButton
                      id={`dropdown-${event._id}`}
                      title="Actions"
                      variant="success"
                      className="custom-dropdown"
                    >
                      <Dropdown.Item href={`#/editEvent/${event._id}`}>Edit Event</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteEvent(event._id)}>
                        Delete Event
                      </Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.manageSection}>
        <h3 className={styles.sectionHeading}>Manage Users</h3>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
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
                    <DropdownButton
                      id={`dropdown-${user._id}`}
                      title="Actions"
                      variant="success"
                      className="custom-dropdown"
                    >
                      <Dropdown.Item href={`#/editUser/${user._id}`}>Edit User</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleDeleteUser(user._id)}>
                        Delete User
                      </Dropdown.Item>
                    </DropdownButton>
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
