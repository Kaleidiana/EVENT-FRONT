import React from 'react';

const Card = ({ title, image, content, price, location, onView }) => (
  <div className="card">
    {image && <img src={image} alt={title} className="card-image" />}
    <h3 className="card-title">{title}</h3>
    <p className="card-content">{content}</p>
    <p className="card-location">Location: {location}</p>
    <p className="card-price">Price: {price}</p>
    <button className="view-button" onClick={onView}>
      View Details
    </button>
  </div>
);

export default Card;
