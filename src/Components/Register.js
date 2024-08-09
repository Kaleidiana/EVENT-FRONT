import React, { useState, useContext } from 'react';
import { EventContext } from './Context/EventContext'; // Ensure path is correct
import Swal from 'sweetalert2'; // Ensure SweetAlert2 is installed and imported

const Register = () => {
  const { selectedEvent } = useContext(EventContext);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: ''
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
      body: JSON.stringify({ ...formData, event: selectedEvent })
    });

    if (response.ok) {
      Swal.fire({
        title: 'Success!',
        text: 'Registration completed successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue with your registration.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-heading">Register</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="register-input"
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="register-input"
        />
        <div className="gender-select">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
