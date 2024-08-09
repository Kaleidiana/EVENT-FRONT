import React, { useState } from 'react';
import Card from './Card'; // Ensure this path is correct

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const cards = [
    // Your event data
  ];

  const handleView = (event) => {
    console.log(`View card with id: ${event.id}`);
    setSelectedEvent(event);
    // Optionally, navigate to another page or display more details
  };

  return (
    <div className="events">
      <h1 className='evv'>EVENTS</h1>
      <div className="card-container">
        {cards.map(card => (
          <Card 
            key={card.id} 
            title={card.title} 
            image={card.image} 
            content={card.content}
            price={card.price} 
            onView={() => handleView(card)}
            onEdit={() => handleEdit(card.id)}
            onDelete={() => handleDelete(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
