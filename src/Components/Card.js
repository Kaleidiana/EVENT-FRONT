import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, image, content, ticket, location, event }) => (
  <div className="card">
    {image && (
      <img
        src={`http://localhost:4000/uploads/${image}`} // Correct URL format
        alt={title}
        className="card-image"
      />
    )}
    <h3 className="card-title">{title}</h3>
    <p className="card-content">{content}</p>
    <p className="card-location">Location: {location}</p>
    <p className="card-price">Ticket: {ticket}</p>
    <Link
      to={{
        pathname: `/booking/${event._id}`,
        state: { event }, // Pass event details to the Booking component
      }}
      className="view-button" // Use the same class name for styling
    >
      BOOK
    </Link>
  </div>
);

export default Card;
