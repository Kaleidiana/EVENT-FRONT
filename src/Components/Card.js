import React from 'react';

const Card = ({ title, image, content, ticket, location, onView }) => (
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
    <button className="view-button" onClick={onView}>
      View Details
    </button>
  </div>
);

export default Card;
