import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

// Ensure Modal is attached to the app element for accessibility
Modal.setAppElement('#root');

const AdminDash = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editEvent, setEditEvent] = useState(null);
  const [image, setImage] = useState(null); // State for image upload
  const [imagePreview, setImagePreview] = useState(null); // Preview of uploaded image

  // Utility function to fetch resources
  const fetchResource = async (url, config) => {
    try {
      const { data } = await axios.get(url, config);
      return data;
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

  // Utility function to handle deletion of resources
  const handleDeleteResource = async (url, id, config) => {
    try {
      await axios.delete(`${url}/${id}`, config);
      toast.success('Resource deleted successfully');
    } catch (err) {
      toast.error('Error deleting resource: ' + err.message);
    }
  };

  // Effect to fetch data on component mount
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

        // Fetch events data
        const eventsResponse = await fetchResource('http://localhost:4000/api/events', config);
        setEvents(eventsResponse);

        // Fetch users data
        const usersResponse = await fetchResource('http://localhost:4000/api/users/getAllUsers', config);
        console.log('Fetched Users:', usersResponse); // Log the response for debugging
        setUsers(usersResponse);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Error fetching data: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle deleting an event
  const handleDeleteEvent = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const token = localStorage.getItem('authToken');
      if (!token) throw new Error('No authentication token found.');

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await handleDeleteResource('http://localhost:4000/api/events', eventId, config);
      setEvents(events.filter((event) => event._id !== eventId));
    }
  };

  // Function to handle deleting a user
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

  // Handlers for viewing and editing events
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append('image', image);

    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No authentication token found.');

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post('http://localhost:4000/api/upload', formData, config);
      toast.success('Image uploaded successfully');
      // Handle the new image URL or update event as needed
    } catch (err) {
      toast.error('Error uploading image: ' + err.message);
    }
  };

  return (
    <div className="container">
      <h3 className="heading">Admin Dashboard</h3>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* Manage Events Section */}
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
                <th>Image</th>
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
                    {event.image ? (
                      <img src={`http://localhost:4000/uploads/${event.image}`} alt={event.title} style={{ width: '100px' }} />
                    ) : (
                      'No Image'
                    )}
                  </td>
                  <td>
                    <div className="actionsContainer">
                      <button onClick={() => handleViewEvent(event)}>View</button>
                      <button onClick={() => handleEditEvent(event)}>Edit</button>
                      <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Manage Users Section */}
      <div className="manageSection">
        <h3 className="sectionHeading">Manage Users</h3>
        <div className="tableContainer">
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
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
          {selectedEvent.image && (
            <img src={`http://localhost:4000/uploads/${selectedEvent.image}`} alt={selectedEvent.title} style={{ width: '100px' }} />
          )}
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
          {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: '100px', height: 'auto' }} />}
          <input
            type="file"
            onChange={handleImageUpload}
          />
          <button onClick={handleUploadImage}>Upload Image</button>
          <button onClick={handleSaveEvent}>Save Changes</button>
          <button onClick={() => setEditEvent(null)}>Cancel</button>
        </Modal>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
};

export default AdminDash;
