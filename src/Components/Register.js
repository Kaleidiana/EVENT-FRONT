import React, { useState, useContext } from 'react';
import { EventContext } from './Context/EventContext'; // Ensure path is correct


const Register = () => {
  const { selectedEvent, selectEvent } = useContext(EventContext);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    event: selectedEvent ? selectedEvent.id : '' // default to selected event id
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit the registration form
    const response = await fetch('/users/registerUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      // Handle success
      alert('Registration successful');
    } else {
      // Handle error
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Gender"
        />
        <div className="event-selection">
          <button type="button" onClick={() => selectEvent(1)}>Select Event 1</button>
          <button type="button" onClick={() => selectEvent(2)}>Select Event 2</button>
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
