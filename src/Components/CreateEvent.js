import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    location: "",
    content: "",
    price: "",
    image: null, // Initialize image as null
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setEventData({
      ...eventData,
      image: e.target.files[0], // Store the selected image file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("title", eventData.title);
    formData.append("location", eventData.location);
    formData.append("content", eventData.content);
    formData.append("price", eventData.price);
    if (eventData.image) {
      formData.append("image", eventData.image); // Append the image file to the form data
    }

    try {
      // Make API call to backend to create an event
      const response = await axios.post("http://localhost:4000/api/events", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the appropriate headers for file upload
        },
      });
      console.log(response.data); // Handle success response
      alert("Event created successfully!");

      // Reset form after successful submission
      setEventData({ title: "", location: "", content: "", price: "", image: null });

      // Redirect to the events page after event creation
      navigate("/user/events");
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Failed to create event. Please try again.");
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create New Event</h2>
      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea
            name="content"
            value={eventData.content}
            onChange={handleChange}
            className="form-textarea"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Price (KSH):</label>
          <input
            type="number"
            name="price"
            value={eventData.price}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Enter price in KSH"
          />
        </div>
        <div className="form-group">
          <label>Choose Image:</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="form-input"
            accept="image/*" // Accept only image file types
          />
        </div>
        <button type="submit" className="submit-button">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
