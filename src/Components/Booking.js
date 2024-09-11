import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for making HTTP requests

const Booking = () => {
  const location = useLocation(); // Access passed state from Link
  const event = location.state?.event; // Get event data from location state
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfTickets: 1,
  });
  const [bookingStatus, setBookingStatus] = useState('');

  if (!event) {
    return <p>No event details available.</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send booking data to the server
      const response = await axios.post('http://localhost:4000/api/bookings', {  // Updated URL
        eventId: event._id,
        ...formData,
      });

      // Handle successful booking response
      setBookingStatus('Booking confirmed!');
      console.log('Booking Response:', response.data);

      // Redirect to Admin Dashboard after booking
      navigate('/admin/admindash');
    } catch (error) {
      // Handle error response
      setBookingStatus('Error confirming booking.');
      console.error('Booking Error:', error);
    }
  };

  return (
    <div className="booking">
      <h2>Booking for: {event.title}</h2>
      <img
        src={`http://localhost:4000/uploads/${event.image}`} // Corrected image URL
        alt={event.title}
        className="booking-image"
      />
      <p>{event.content}</p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <p>
        <strong>Price:</strong> {event.price}
      </p>

      <form onSubmit={handleSubmit} className="booking-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="numberOfTickets">Number of Tickets:</label>
        <input
          type="number"
          id="numberOfTickets"
          name="numberOfTickets"
          value={formData.numberOfTickets}
          onChange={handleChange}
          min="1"
          required
        />

        <button type="submit" className="submit-button">
          Confirm Booking
        </button>
      </form>

      {bookingStatus && <p>{bookingStatus}</p>} {/* Show booking status */}
    </div>
  );
};

export default Booking;
