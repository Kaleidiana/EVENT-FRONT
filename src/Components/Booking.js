// Booking.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation(); // Access passed state from Link
  const event = location.state?.event; // Get event data from location state

  if (!event) {
    return <p>No event details available.</p>;
  }

  return (
    <div className="booking">
      <h2>Booking for: {event.title}</h2>
      <img src={`http://localhost:4000/uploads/${event.image}`} alt={event.title} className="booking-image" />
      <p>{event.content}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Price:</strong> {event.price}</p>
      {/* Add booking form or any other relevant details here */}
    </div>
  );
};

export default Booking;
