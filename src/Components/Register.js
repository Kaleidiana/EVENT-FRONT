import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

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
      const response = await fetch('/users/registerUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        toast.error('There was an issue with your registration.');
      } else {
        const successData = await response.json();
        console.log('Registration successful:', successData);
        toast.success('Registration successful!');
        navigate('/dashboard'); // Redirect to the dashboard page after successful registration
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('There was an issue with your registration.');
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
        <p>Already have an account? <a href="/login" className="button-link">Login</a></p> {/* Link to login page */}
      </div>
    </div>
  );
};

export default Register;
