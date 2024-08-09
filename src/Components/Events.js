import React from 'react';
import Card from './Card';

const Events = ({ activeComponent }) => {
  const cards = [
    {
      id: 1,
      title: 'Product Launch',
      image: 'https://images.pexels.com/photos/9391354/pexels-photo-9391354.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Join us for the launch of our exciting new product!',
    },
    {
      id: 2,
      title: 'Wedding',
      image: 'https://images.pexels.com/photos/3172566/pexels-photo-3172566.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Celebrate the beautiful union of two souls.',
    },
    {
      id: 3,
      title: 'Birthday Party',
      image: 'https://images.pexels.com/photos/1557140/pexels-photo-1557140.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'A joyful celebration of life and milestones.',
    },
    {
      id: 4,
      title: 'Festival',
      image: 'https://images.pexels.com/photos/2893330/pexels-photo-2893330.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Experience the vibrant colors and traditions of our festival.',
    },
    {
      id: 5,
      title: 'Fundraiser',
      image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Support a great cause and make a difference.',
    },
    {
      id: 6,
      title: 'Match',
      image: 'https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Cheer for your favorite team in this exciting match!',
    },
    {
      id: 7,
      title: 'Trade Show',
      image: 'https://images.pexels.com/photos/6518909/pexels-photo-6518909.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Discover the latest innovations at our trade show.',
    },
    {
      id: 8,
      title: 'Webinar',
      image: 'https://images.pexels.com/photos/24023589/pexels-photo-24023589/free-photo-of-women-sitting-and-reading-at-gathering.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Learn from experts in our upcoming webinar.',
    },
    {
      id: 9,
      title: 'Webinar',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
      content: 'Learn from experts in our upcoming webinar.',
    },
  ];

  const handleEdit = (id) => {
    console.log(`Edit card with id: ${id}`);
    // Implement the edit logic here
  };

  const handleView = (id) => {
    console.log(`View card with id: ${id}`);
    // Implement the view logic here
  };

  const handleDelete = (id) => {
    console.log(`Delete card with id: ${id}`);
    // Implement the delete logic here
  };

  return (
    <div className="events">
      {activeComponent === 'AdminDash' && (
        <div>
          <h1>Admin</h1>
          {/* Render admin-specific content here */}
        </div>
      )}
      {activeComponent === 'UsersDash' && (
        <div>
          <h1>Users</h1>
          {/* Render users content here */}
        </div>
      )}

      {activeComponent === 'events' && (
        <div>
          <h1 className='evv'>EVENTS</h1>
          <div className="card-container">
            {cards.map(card => (
              <Card 
                key={card.id} 
                title={card.title} 
                image={card.image} 
                content={card.content}
                onEdit={() => handleEdit(card.id)}
                onView={() => handleView(card.id)}
                onDelete={() => handleDelete(card.id)}
              />
            ))}
          </div>
        </div>
      )}
      {activeComponent === 'income' && (
        <div>
          <h1>Income</h1>
          {/* Render income content here */}
        </div>
      )}
    </div>
  );
};

export default Events;
