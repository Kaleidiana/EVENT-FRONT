import React, { useState } from 'react';
import Modal from 'react-modal'; // Import Modal from 'react-modal'
import Card from './Card'; // Ensure this path is correct

// Ensure you call Modal.setAppElement to prevent accessibility issues
Modal.setAppElement('#root');

const Events = () => {
  // State for managing the selected event and modal visibility
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [
    {
      id: 1,
      title: 'Product Launch',
      image: 'https://images.pexels.com/photos/9391354/pexels-photo-9391354.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Join us for the launch of our exciting new!',
      location: 'Mpaka',
      ticket: 'Ksh.1500'
    },
    {
      id: 2,
      title: 'Wedding',
      image: 'https://images.pexels.com/photos/3172566/pexels-photo-3172566.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Celebrate the beautiful union of 2 souls.',
      location: 'Sweden',
      ticket: 'Ksh.2000'
    },
    {
      id: 3,
      title: 'Birthday Party',
      image: 'https://images.pexels.com/photos/1557140/pexels-photo-1557140.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'A joyful celebration of life and milestones party.',
      location: 'Shinzy',
      ticket: 'Ksh.2350'
    },
    {
      id: 4,
      title: 'Festival',
      image: 'https://images.pexels.com/photos/2893330/pexels-photo-2893330.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Experience the vibrant colors and tradition.',
      location: 'Miles',
      ticket: 'Ksh.3300'
    },
    {
      id: 5,
      title: 'Fundraiser',
      image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Support a great cause and make a difference.',
      location: 'Bora',
      ticket: 'Ksh.5000'
    },
    {
      id: 6,
      title: 'Match',
      image: 'https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Cheer for your favorite team in this match!',
      location: 'Iowa',
      ticket: 'Ksh.1450'
    },
    {
      id: 7,
      title: 'Trade Show',
      image: 'https://images.pexels.com/photos/6518909/pexels-photo-6518909.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Discover the latest innovations at our trade show.',
      location: 'Venice',
      ticket: 'Ksh.2500'
    },
    {
      id: 8,
      title: 'Webinar',
      image: 'https://images.pexels.com/photos/24023589/pexels-photo-24023589/free-photo-of-women-sitting-and-reading-at-gathering.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Learn from experts in our upcoming webinar.',
      location: 'Salem',
      ticket: 'Ksh.4000'
    },
    {
      id: 9,
      title: 'Webhook',
      image: 'https://images.pexels.com/photos/28103053/pexels-photo-28103053/free-photo-of-a-panoramic-view-of-timeout-market.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Allows you to receive notifications event occurs',
      location: 'Kidel',
      ticket: 'Ksh.4000'
     
    },
    {
      id: 10,
      title: 'WorksLive Streams',
      image: 'https://images.pexels.com/photos/7648474/pexels-photo-7648474.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Real-time broadcasts, live performances.hop',
      location: 'Tiara',
      ticket: 'Ksh.3200'
    },
    {
      id: 11,
      title: 'Cruise Events',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Themed cruises, special voyages',
      location: 'Choka',
      ticket: 'Ksh.2000'
    },
    {
      id: 12,
      title: 'Virtual Conferences',
      image: 'https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: ' Online networking, remote learning',
      location: 'CapeT',
      ticket: 'Ksh.2000'
    },
    // ... add more events as needed
  ];

  const handleView = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

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
            ticket={card.ticket}
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
          <div>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.content}</p>
            <p>Location: {selectedEvent.location}</p>
            <p>Price: {selectedEvent.price}</p>
            <button className="close-button" onClick={handleCloseModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Events;
