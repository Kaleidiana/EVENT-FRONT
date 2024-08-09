import React from 'react';

const Card = ({ title, image, content, onEdit, onView, onDelete }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
        <div className="card-actions">
          <button onClick={onEdit}>Edit</button>
          <button onClick={onView}>View</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
