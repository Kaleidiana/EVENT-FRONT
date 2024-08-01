import React from 'react';


const Card = ({ title, image, content }) => (
  <div className="card">
    <img src={image} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-text">{content}</p>
    </div>
  </div>
);

export default Card;

