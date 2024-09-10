import React, { useState } from "react";
import axios from "axios"; // Assuming you're using axios for HTTP requests

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    location: "",
    content: "",
    price: "",
  });

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call to backend to create an event
      const response = await axios.post("http://localhost:4000/api/events", eventData); // Replace with your backend route
      console.log(response.data); // Handle success response
      alert("Event created successfully!");
      setEventData({ title: "", location: "", content: "", price: "" }); // Reset form after successful submission
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event. Please try again.");
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={eventData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
