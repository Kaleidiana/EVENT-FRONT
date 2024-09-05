import React from 'react';
import { useParams } from 'react-router-dom';

// Event data
const events = [
  {
    id: 1,
    title: 'Product Launch',
    image: 'https://images.pexels.com/photos/9391354/pexels-photo-9391354.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'October 10, 2024',
    startTime: '4:00 PM',
    endTime: '7:00 PM',
    description: `
      Join us for the launch of our exciting new product! Celebrate the unveiling of our latest innovation with engaging presentations, hands-on demos, and a chance to connect with industry experts. Enjoy complimentary refreshments and be among the first to experience our groundbreaking product. Don't miss out on this exclusive event!
    `
  },
  {
    id: 2,
    title: 'Wedding',
    image: 'https://images.pexels.com/photos/3172566/pexels-photo-3172566.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'October 20, 2024',
    startTime: '2:00 PM',
    endTime: '10:00 PM',
    description: `
      Celebrate the beautiful union of two souls at our enchanting wedding event. Experience a day filled with love, joy, and unforgettable memories. From the ceremony to the reception, enjoy a delightful experience surrounded by family and friends. Join us in making this day truly special for the newlyweds.
    `
  },
  {
    id: 3,
    title: 'Birthday Party',
    image: 'https://images.pexels.com/photos/1557140/pexels-photo-1557140.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'November 5, 2024',
    startTime: '6:00 PM',
    endTime: '11:00 PM',
    description: `
      A joyful celebration of life and milestones. Join us for a fun-filled birthday party with music, games, and delicious food. This event is perfect for all ages, and we guarantee a memorable experience. Come and celebrate with us!
    `
  },
  {
    id: 4,
    title: 'Festival',
    image: 'https://images.pexels.com/photos/2893330/pexels-photo-2893330.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'December 15, 2024',
    startTime: '12:00 PM',
    endTime: '10:00 PM',
    description: `
      Experience the vibrant colors and traditions of our festival. Enjoy live music, delicious food, and various cultural performances throughout the day. This festival is a celebration of community and creativity. Don't miss out on the fun and excitement!
    `
  },
  {
    id: 5,
    title: 'Fundraiser',
    image: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'January 10, 2025',
    startTime: '7:00 PM',
    endTime: '11:00 PM',
    description: `
      Support a great cause and make a difference at our fundraising event. Enjoy an evening of entertainment and contribute to a worthy cause. Your participation helps us make a positive impact in the community. Join us for a night of giving and fun!
    `
  },
  {
    id: 6,
    title: 'Match',
    image: 'https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'February 14, 2025',
    startTime: '3:00 PM',
    endTime: '6:00 PM',
    description: `
      Cheer for your favorite team in this exciting match! Join us for an afternoon of thrilling sports action and support your team to victory. With live commentary and a lively atmosphere, this event is perfect for sports enthusiasts. Get your tickets and be part of the excitement!
    `
  },
  {
    id: 7,
    title: 'Trade Show',
    image: 'https://images.pexels.com/photos/6518909/pexels-photo-6518909.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'March 20, 2025',
    startTime: '9:00 AM',
    endTime: '5:00 PM',
    description: `
      Discover the latest innovations at our trade show. Connect with industry leaders, explore new products, and gain insights into emerging trends. This event is a must-attend for professionals and enthusiasts alike. Don't miss this opportunity to expand your knowledge and network!
    `
  },
  {
    id: 8,
    title: 'Webinar',
    image: 'https://images.pexels.com/photos/24023589/pexels-photo-24023589/free-photo-of-women-sitting-and-reading-at-gathering.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'April 5, 2025',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    description: `
      Learn from experts in our upcoming webinar. Gain valuable knowledge and insights on various topics from the comfort of your home. This online event features engaging presentations and interactive Q&A sessions. Register now and enhance your skills!
    `
  },
  {
    id: 9,
    title: 'Workshop',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'May 10, 2025',
    startTime: '2:00 PM',
    endTime: '5:00 PM',
    description: `
      Hands-on learning with industry professionals. Join us for a workshop that offers practical experience and expert guidance. This event is designed for those who want to improve their skills and knowledge. Sign up today and take your learning to the next level!
    `
  },
  {
    id: 10,
    title: 'Workshop',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'June 15, 2025',
    startTime: '1:00 PM',
    endTime: '4:00 PM',
    description: `
      Hands-on learning with industry professionals. Join us for a workshop that offers practical experience and expert guidance. This event is designed for those who want to improve their skills and knowledge. Sign up today and take your learning to the next level!
    `
  },
  {
    id: 11,
    title: 'Workshop',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'July 20, 2025',
    startTime: '3:00 PM',
    endTime: '6:00 PM',
    description: `
      Hands-on learning with industry professionals. Join us for a workshop that offers practical experience and expert guidance. This event is designed for those who want to improve their skills and knowledge. Sign up today and take your learning to the next level!
    `
  },
  {
    id: 12,
    title: 'Workshop',
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: 'August 25, 2025',
    startTime: '10:00 AM',
    endTime: '1:00 PM',
    description: `
      Hands-on learning with industry professionals. Join us for a workshop that offers practical experience and expert guidance. This event is designed for those who want to improve their skills and knowledge. Sign up today and take your learning to the next level!
    `
  },
];

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) return <div>Event not found</div>;

  return (
    <div className="event-detail">
      <h1>{event.title}</h1>
      <div className="event-image">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-info">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Start Time:</strong> {event.startTime}</p>
        <p><strong>End Time:</strong> {event.endTime}</p>
      </div>
      <div className="event-description">
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventDetail;
