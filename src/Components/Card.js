import React from 'react';

const Card = ({ title, image, content, price, location, onEdit, onView, onDelete }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <p className="card-price">Price: {price}</p>
      <p className="card-location">Location: {location}</p>
      <div className="card-actions">
        <button onClick={onView} className="card-button">View</button>
        <button onClick={onEdit} className="card-button">Edit</button>
        <button onClick={onDelete} className="card-button">Delete</button>
      </div>
    </div>
  );
};

export default Card;

