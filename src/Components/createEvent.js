// src/components/CreateEvent.js
import React, { useState } from 'react';
import { createEvent } from '../Services/apiService';

const CreateEvent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent({ title, content, image });
      // Handle success (e.g., redirect or update UI)
    } catch (err) {
      console.error('Error creating event:', err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label>Image URL</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEvent;
