import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; // Ensure this path is correct

const Events = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: 'Product Launch',
      image: 'https://images.pexels.com/photos/9391354/pexels-photo-9391354.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Join us for the launch of our exciting new product!',
      price: '$150'
    },
    {
      id: 2,
      title: 'Wedding',
      image: 'https://images.pexels.com/photos/3172566/pexels-photo-3172566.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Celebrate the beautiful union of two souls.',
      price: '$200'
    },
    {
      id: 3,
      title: 'Birthday Party',
      image: 'https://images.pexels.com/photos/1557140/pexels-photo-1557140.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'A joyful celebration of life and milestones.',
      price: '$100'
    },
    {
      id: 4,
      title: 'Festival',
      image: 'https://images.pexels.com/photos/2893330/pexels-photo-2893330.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Experience the vibrant colors and traditions of our festival.',
      price: '$75'
    },
    {
      id: 5,
      title: 'Fundraiser',
      image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Support a great cause and make a difference.',
      price: '$50'
    },
    {
      id: 6,
      title: 'Match',
      image: 'https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Cheer for your favorite team in this exciting match!',
      price: '$120'
    },
    {
      id: 7,
      title: 'Trade Show',
      image: 'https://images.pexels.com/photos/6518909/pexels-photo-6518909.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Discover the latest innovations at our trade show.',
      price: '$250'
    },
    {
      id: 8,
      title: 'Webinar',
      image: 'https://images.pexels.com/photos/24023589/pexels-photo-24023589/free-photo-of-women-sitting-and-reading-at-gathering.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Learn from experts in our upcoming webinar.',
      price: '$30'
    },
    {
      id: 9,
      title: 'Workshop',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Hands-on learning with industry professionals.',
      price: '$90'
    },
  ];

  const handleView = (id) => {
    // Store the selected event ID in localStorage
    localStorage.setItem('selectedEvent', id);
    // Redirect to the registration page
    navigate('/register');
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
            onView={() => handleView(card.id)} // Update the onView handler
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
