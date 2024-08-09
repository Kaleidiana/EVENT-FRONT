import React from 'react';


const Card = ({ title, image, content, onEdit, onView, onDelete }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <div className="card-actions">
        <button onClick={onView}>View</button>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Card;
