import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/users/registerUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorText = await response.text(); // Read response as text for better error logging
        console.error('Registration failed:', errorText);
        toast.error('There was an issue with your registration.', {
          position: 'top-right',
          className: 'toast-message', // Custom class for additional styling
          style: {
            width: 'auto', // Set width to auto to fit content
            whiteSpace: 'nowrap',
            marginLeft: '100px', // Prevents wrapping to the next line
            textAlign: 'center', // Center the text
          },
        });
      } else {
        const successData = await response.json();
        console.log('Registration successful:', successData);
        toast.success('Registration successful!', {
          position: 'top-right',
          className: 'toast-message', // Custom class for additional styling
          style: {
            width: 'auto', // Set width to auto to fit content
            whiteSpace: 'nowrap',
            marginLeft: '100px', // Prevents wrapping to the next line
            textAlign: 'center', // Center the text
          },
        });
        setTimeout(() => {
          navigate('/sidebar'); // Redirect to login page after successful registration
        }, 2000); // Delay to show toast message
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('There was an issue with your registration.', {
        position: 'top-right',
        className: 'toast-message', // Custom class for additional styling
        style: {
          width: 'auto', // Set width to auto to fit content
          whiteSpace: 'nowrap',
          marginLeft: '100px', // Prevents wrapping to the next line
          textAlign: 'center', // Center the text
        },
      });
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-control">
            <label>Gender</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="button-link-container">
  Already have an account? 
  <a href="/login" className="button-link">Login</a>
</p>

      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Register;
