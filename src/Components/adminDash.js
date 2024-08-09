import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const AdminDash = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all events
  useEffect(() => {
    fetch('/api/admin/events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching events: ' + error.message);
        setLoading(false);
      });
  }, []);

  // Function to delete an event
  const handleDelete = (eventId) => {
    fetch(`/api/admin/events/${eventId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 204) {
          setEvents(events.filter(event => event._id !== eventId));
          toast.success('Event deleted successfully');
        } else {
          setError('Failed to delete event');
        }
      })
      .catch((error) => {
        setError('Error deleting event: ' + error.message);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Manage Events</h1>
      {loading && <p className="text-blue-500">Loading events...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {events.map((event) => (
          <li key={event._id} className="mb-2">
            <strong>{event.title}</strong> - {new Date(event.date).toLocaleDateString()}
            <br />
            Location: {event.location}
            <br />
            <button 
              onClick={() => handleDelete(event._id)} 
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
