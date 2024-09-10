import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card'; // Adjust the path if needed

const Events = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/events');
        console.log('Fetched Events:', response.data); // Log the response data
        setCards(response.data);
      } catch (err) {
        setError(`Error fetching events: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="events">
      <h1 className="evv">EVENTS</h1>
      <div className="card-container">
        {cards.map((card) => (
          <Card 
            key={card._id} 
            title={card.title} 
            image={card.image} 
            content={card.content}
            ticket={card.price}
            location={card.location}
            event={card} // Pass the entire event object
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
