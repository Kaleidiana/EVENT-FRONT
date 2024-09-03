// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{event.title}</h2>
        <img src={event.image} alt={event.title} />
        <p>{event.content}</p>
        <p>Location: {event.location}</p>
        <p>Price: {event.price}</p>
      </div>
    </div>
  );
};

export default Modal;
