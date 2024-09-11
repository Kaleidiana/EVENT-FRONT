import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importing icons

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    password: '' // Added password field
  });
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the password visibility state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/users/registerUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Registration failed:', errorText);
        toast.error('There was an issue with your registration.', {
          position: 'top-right',
          className: 'toast-message',
          style: {
            width: 'auto',
            whiteSpace: 'nowrap',
            marginLeft: '100px',
            textAlign: 'center',
          },
        });
      } else {
        const successData = await response.json();
        console.log('Registration successful:', successData);
        toast.success('Registration successful!', {
          position: 'top-right',
          className: 'toast-message',
          style: {
            width: 'auto',
            whiteSpace: 'nowrap',
            marginLeft: '100px',
            textAlign: 'center',
          },
        });
        setTimeout(() => {
          navigate('/user/events'); // Redirect to events page after successful registration
        }, 2000);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('There was an issue with your registration.', {
        position: 'top-right',
        className: 'toast-message',
        style: {
          width: 'auto',
          whiteSpace: 'nowrap',
          marginLeft: '100px',
          textAlign: 'center',
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
          <div className="form-control">
            <label>Password:</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'} // Conditional type for input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
                style={{ paddingRight: '10px' }} // Space for the eye icon
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye} // Eye icon based on state
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: 'grey',
                }}
              />
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
