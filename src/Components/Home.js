import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample event categories and descriptions
  const eventCategories = [
    {
      id: 1,
      title: 'CONFERENCES',
      description: 'Professional gatherings for sharing industry knowledge and networking.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'EXHIBITIONS',
      description: 'Showcase of products and services to the public.',
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'BUSINESS',
      description: 'Corporate events aimed at enhancing business growth and networking.',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'MUSIC',
      description: 'Live music events featuring performances by various artists.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      title: 'SPORTS',
      description: 'Competitive events showcasing athletic skills and team spirit.',
      image: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: 'FINE-ARTS',
      description: 'Artistic events showcasing various forms of art and performances.',
      image: 'https://images.pexels.com/photos/6069749/pexels-photo-6069749.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 7,
      title: 'TECHNOLOGY',
      description: 'Events focused on the latest technological advancements and innovations.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 8,
      title: 'FESTIVALS',
      description: 'Celebrations of cultural and artistic traditions.',
      image: 'https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 9,
      title: 'GAMING',
      description: 'Events focused on video games, including tournaments and expos.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="home">
      <nav className="nav">
        <ul className="nav-list">
        <h2 className='nav-head'>EVENTSPRO</h2>
          <li className="nav-item"><Link to="/register">Register</Link></li>
          <li className="nav-item"><Link to="/login">Login</Link></li>
         
        </ul>
      </nav>
      <h1 className="popular">Popular Events in EventsPro</h1>
      <div className="category-container">
        {eventCategories.map(category => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.title} className="category-image" />
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <Link to="/register" className="view-more-button">View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Home;
