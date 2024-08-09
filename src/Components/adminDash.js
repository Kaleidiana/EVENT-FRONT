// AdminDash.js
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './Card'; // Import the Card component

const AdminDash = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all events
  useEffect(() => {
    fetch('/api/admin/events')  // Adjust endpoint to match your backend
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching events: ' + error.message);
        setLoading(false);
      });
  }, []);

  // Fetch all users
  useEffect(() => {
    fetch('/api/admin/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        setError('Error fetching users: ' + error.message);
      });
  }, []);

  // Handle deleting an event
  const handleDeleteEvent = (eventId) => {
    fetch(`/api/admin/events/${eventId}`, { method: 'DELETE' })
      .then(response => {
        if (response.status === 204) {
          setEvents(events.filter(event => event._id !== eventId));
          toast.success('Event deleted successfully');
        } else {
          setError('Failed to delete event');
        }
      })
      .catch(error => {
        setError('Error deleting event: ' + error.message);
      });
  };

  // Handle deleting a user
  const handleDeleteUser = (userId) => {
    fetch(`/api/admin/users/${userId}`, { method: 'DELETE' })
      .then(response => {
        if (response.status === 204) {
          setUsers(users.filter(user => user._id !== userId));
          toast.success('User deleted successfully');
        } else {
          setError('Failed to delete user');
        }
      })
      .catch(error => {
        setError('Error deleting user: ' + error.message);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <h2 className="text-xl font-bold mb-2">Manage Events</h2>
      <div className="card-container">
        {events.map(event => (
          <Card 
            key={event._id}
            title={event.title}
            image={event.image || '/path/to/default/image.jpg'} // Provide a default image if none exists
            content={event.description}
            onEdit={() => console.log('Edit', event._id)} // Add edit functionality
            onView={() => console.log('View', event._id)} // Add view functionality
            onDelete={() => handleDeleteEvent(event._id)}
          />
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">Manage Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id} className="mb-2">
            <strong>{user.firstName} {user.lastName}</strong> - {user.email}
            <br />
            <button 
              onClick={() => handleDeleteUser(user._id)} 
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <ToastContainer />
    </div>
  );
};

export default AdminDash;
