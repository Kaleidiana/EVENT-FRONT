import React, { useState, useEffect } from 'react';

const UsersDash = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard - Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.title} - {new Date(event.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersDash;
