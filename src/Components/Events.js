import React, { useState } from 'react';
import Modal from 'react-modal'; // Import Modal from 'react-modal'
import Card from './Card'; // Ensure this path is correct

// Ensure you call Modal.setAppElement to prevent accessibility issues
Modal.setAppElement('#root');

const Events = () => {
  // State for managing the selected event and modal visibility
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data for events
  const cards = [
    {
      id: 1,
      title: 'Product Launch',
      image: 'https://images.pexels.com/photos/9391354/pexels-photo-9391354.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Join us for the launch of our exciting new product!',
      location: 'Mpaka',
      price: '$150'
    },
    {
      id: 2,
      title: 'Wedding',
      image: 'https://images.pexels.com/photos/3172566/pexels-photo-3172566.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Celebrate the beautiful union of two souls.',
      location: 'Sweden',
      price: '$200'
    },
    {
      id: 3,
      title: 'Birthday Party',
      image: 'https://images.pexels.com/photos/1557140/pexels-photo-1557140.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'A joyful celebration of life and milestones.',
      location: 'Shinzy',
      price: '$100'
    },
    {
      id: 4,
      title: 'Festival',
      image: 'https://images.pexels.com/photos/2893330/pexels-photo-2893330.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Experience the vibrant colors and traditions of our festival.',
      location: 'Miles',
      price: '$75'
    },
    {
      id: 5,
      title: 'Fundraiser',
      image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Support a great cause and make a difference.',
      location: 'Bora',
      price: '$50'
    },
    {
      id: 6,
      title: 'Match',
      image: 'https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Cheer for your favorite team in this exciting match!',
      location: 'Iowa',
      price: '$120'
    },
    {
      id: 7,
      title: 'Trade Show',
      image: 'https://images.pexels.com/photos/6518909/pexels-photo-6518909.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Discover the latest innovations at our trade show.',
      location: 'Venice',
      price: '$250'
    },
    {
      id: 8,
      title: 'Webinar',
      image: 'https://images.pexels.com/photos/24023589/pexels-photo-24023589/free-photo-of-women-sitting-and-reading-at-gathering.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Learn from experts in our upcoming webinar.',
      location: 'Salem',
      price: '$30'
    },
    {
      id: 9,
      title: 'Workshop',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Hands-on learning with industry professionals.',
      location: 'Kidel',
      price: '$90'
    },
    {
      id: 10,
      title: 'Workshop',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Hands-on learning with industry professionals.',
      location: 'Tiara',
      price: '$90'
    },
    {
      id: 11,
      title: 'Workshop',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Hands-on learning with industry professionals.',
      location: 'Choka',
      price: '$90'
    },
    {
      id: 12,
      title: 'Workshop',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Hands-on learning with industry professionals.',
      location: 'CapeT',
      price: '$90'
    },
  ];

  // Function to open the modal with event details
  const handleView = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events">
      <h1 className="evv">EVENTS</h1>
      <div className="card-container">
        {cards.map(card => (
          <Card 
            key={card.id} 
            title={card.title} 
            image={card.image} 
            content={card.content}
            price={card.price}
            location={card.location} 
            onView={() => handleView(card)}  // Pass the event handler
          />
        ))}
      </div>

      {/* Modal for viewing event details */}
      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={handleCloseModal} 
        contentLabel="Event Details"
        className="modal"  // Define modal styling in your CSS
        overlayClassName="overlay"  // Define overlay styling in your CSS
      >
        {selectedEvent && (
          <div className="modal-content">
            <h2>{selectedEvent.title}</h2>
            <img src={selectedEvent.image} alt={selectedEvent.title} className="modal-image" />
            <p>{selectedEvent.content}</p>
            <p>Location: {selectedEvent.location}</p>
            <p>Price: {selectedEvent.price}</p>
            <button onClick={handleCloseModal} className="close-button">Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Events;
