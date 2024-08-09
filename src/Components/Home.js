import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Sample event categories and descriptions
  const eventCategories = [
    {
      id: 1,
      title: 'CONFERENCES',
      description: 'Professional gatherings for sharing industry knowledge and networking.',
      image: 'https://www.pexels.com/photo/group-of-people-on-conference-room-1181396/',
      details: 'Conferences bring together industry professionals, experts, and enthusiasts to discuss recent trends, share research, and network. They typically feature keynote speakers, panel discussions, and breakout sessions.'
    },
    {
      id: 2,
      title: 'EXHIBITIONS',
      description: 'Showcase of products and services to the public.',
      image: 'https://www.pexels.com/photo/paintings-in-side-room-1839919/',
      details: 'Exhibitions provide a platform for companies to showcase their products and services. Attendees can explore various booths, interact with exhibitors, and learn about new innovations.'
    },
    {
      id: 3,
      title: 'BUSINESS',
      description: 'Corporate events aimed at enhancing business growth and networking.',
      image: 'https://www.pexels.com/photo/group-of-people-sitting-on-chair-in-front-of-wooden-table-inside-white-painted-room-1181329/',
      details: 'Business events include meetings, workshops, and seminars designed to foster business development, share knowledge, and build professional relationships.'
    },
    {
      id: 4,
      title: 'MUSIC',
      description: 'Live music events featuring performances by various artists.',
      image: 'https://www.pexels.com/photo/people-inside-building-while-light-turned-off-1494665/',
      details: 'Music events include concerts, festivals, and performances where attendees can enjoy live music from a range of genres and artists. These events often feature multiple stages and a vibrant atmosphere.'
    },
    {
      id: 5,
      title: 'SPORTS',
      description: 'Competitive events showcasing athletic skills and team spirit.',
      image: 'https://www.pexels.com/photo/soccer-ball-on-grass-field-during-daytime-46798/',
      details: 'Sports events include matches, tournaments, and competitions where athletes and teams compete. These events often aim to engage fans and support charitable causes or community initiatives.'
    },
    {
      id: 6,
      title: 'FINE-ARTS',
      description: 'Artistic events showcasing various forms of art and performances.',
      image: 'https://www.pexels.com/photo/composed-glassware-with-wine-and-macaroons-6069749/',
      details: 'Fine arts events include art exhibitions, gallery openings, and theatrical performances. They celebrate creativity and offer opportunities to appreciate and purchase art.'
    },
    {
      id: 7,
      title: 'TECHNOLOGY',
      description: 'Events focused on the latest technological advancements and innovations.',
      image: 'https://www.pexels.com/photo/silver-imac-displaying-collage-photos-1779487/',
      details: 'Technology events feature the latest advancements in tech, including product demos, workshops, and talks. These events are ideal for tech enthusiasts and professionals looking to explore new innovations.'
    },
    {
      id: 8,
      title: 'FESTIVALS',
      description: 'Celebrations of cultural and artistic traditions.',
      image: 'https://www.pexels.com/photo/group-of-people-watching-concert-625644/',
      details: 'Festivals celebrate various themes, including cultural heritage, arts, and community events. They often include performances, food, and activities that bring people together to enjoy and celebrate.'
    },
    {
      id: 9,
      title: 'GAMING',
      description: 'Events focused on video games, including tournaments and expos.',
      image: 'https://www.pexels.com/photo/two-people-holding-black-gaming-consoles-442576/',
      details: 'Gaming events include eSports tournaments, game conventions, and expos where gamers can compete, try out new games, and meet developers and other enthusiasts.'
    }
  ];

  return (
    <div className="home">
      <h1>Popular Events in EventsPro</h1>
      <div className="category-container">
        {eventCategories.map(category => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.title} className="category-image" />
            <h2>{category.title}</h2>
            <p>{category.description}</p>
            <p className="category-details">{category.details}</p>
            <Link to="/register" className="view-more-button">View More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
