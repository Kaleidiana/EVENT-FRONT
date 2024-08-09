// UsersDash.js
import React, { useState, useEffect } from 'react';
import Card from './Card'; // Import the Card component

const UsersDash = () => {
  const [profile, setProfile] = useState(null);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  // Fetch user profile
  useEffect(() => {
    fetch('/api/users/profile')
      .then(response => response.json())
      .then(data => {
        setProfile(data);
      })
      .catch(error => {
        setError('Error fetching profile: ' + error.message);
      });
  }, []);

  // Fetch user events
  useEffect(() => {
    fetch('/api/users/events')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        setError('Error fetching events: ' + error.message);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      
      {profile && (
        <div>
          <h2 className="text-xl font-bold mb-2">Profile</h2>
          <p><strong>Name:</strong> {profile.firstName} {profile.lastName}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          {/* Add other profile details as needed */}
        </div>
      )}

      <h2 className="text-xl font-bold mt-6 mb-2">My Events</h2>
      <div className="card-container">
        {events.map(event => (
          <Card 
            key={event._id}
            title={event.title}
            image={event.image || '/path/to/default/image.jpg'} // Provide a default image if none exists
            content={event.description}
            onEdit={() => console.log('Edit', event._id)} // Add edit functionality if needed
            onView={() => console.log('View', event._id)} // Add view functionality if needed
            onDelete={() => console.log('Delete', event._id)} // You might not want delete functionality for users
          />
        ))}
      </div>
    </div>
  );
};

export default UsersDash;
