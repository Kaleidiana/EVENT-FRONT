import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal'; // Import Modal Library

const AdminDash = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editEvent, setEditEvent] = useState(null);

  const fetchResource = async (url, config) => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (err) {
      console.error('Error fetching resource:', err); 
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
            Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
      },
    };

    await handleDeleteResource('http://localhost:4000/api/events', eventId, config);
    setEvents(events.filter((event) => event._id !== eventId));
  };

  const handleDeleteUser = async (userId) => {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No authentication token found.');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await handleDeleteResource('http://localhost:4000/api/users/deleteUser', userId, config);
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleViewEvent = (event) => {
    setSelectedEvent(event);
  };

  const handleEditEvent = (event) => {
    setEditEvent(event);
  };

  const handleSaveEvent = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No authentication token found.');

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.put(`http://localhost:4000/api/events/${editEvent._id}`, editEvent, config);
      setEvents(events.map((event) => (event._id === editEvent._id ? editEvent : event)));
      setEditEvent(null);
      toast.success('Event updated successfully');
    } catch (err) {
      toast.error('Error updating event: ' + err.message);
    }
  };

  return (
    <div className="container">
      <h3 className="heading">Admin Dashboard</h3>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* Manage Events */}
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
              {events.map((event) => (
                <tr key={event._id}>
                  <td>{event.title}</td>
                  <td>{event.location}</td>
                  <td>{event.content}</td>
                  <td>{event.price}</td>
                  <td>
                    <div className="actionsContainer">
                      <button onClick={() => handleViewEvent(event)}>View Event</button>
                      <button onClick={() => handleEditEvent(event)}>Edit Event</button>
                      <button onClick={() => handleDeleteEvent(event._id)}>Delete Event</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Event Modal */}
      {selectedEvent && (
        <Modal isOpen={true} onRequestClose={() => setSelectedEvent(null)}>
          <h2>{selectedEvent.title}</h2>
          <p>{selectedEvent.content}</p>
          <p>Location: {selectedEvent.location}</p>
          <p>Price: {selectedEvent.price}</p>
          <button onClick={() => setSelectedEvent(null)}>Close</button>
        </Modal>
      )}

      {/* Edit Event Modal */}
      {editEvent && (
        <Modal isOpen={true} onRequestClose={() => setEditEvent(null)}>
          <h2>Edit Event</h2>
          <input
            type="text"
            value={editEvent.title}
            onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
          />
          <input
            type="text"
            value={editEvent.location}
            onChange={(e) => setEditEvent({ ...editEvent, location: e.target.value })}
          />
          <textarea
            value={editEvent.content}
            onChange={(e) => setEditEvent({ ...editEvent, content: e.target.value })}
          />
          <input
            type="text"
            value={editEvent.price}
            onChange={(e) => setEditEvent({ ...editEvent, price: e.target.value })}
          />
          <button onClick={handleSaveEvent}>Save Changes</button>
          <button onClick={() => setEditEvent(null)}>Cancel</button>
        </Modal>
      )}

      <ToastContainer />
    </div>
  );
};

export default AdminDash;
