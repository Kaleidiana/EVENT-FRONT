import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic (e.g., API call)
    // For demo purposes, assume successful registration and redirect to login page
    console.log('Form data:', formData);
    // Simulate API call or async logic, then redirect
    navigate('/sidebar'); // Redirect to /login route after registration
  };

  return (
    <div className="register-container">
      <Form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <Form.Group controlId="username">
          <Form.Label>User Name:</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>

        {error && <p className="error text-center mt-3">{error}</p>}

        <p className="text-center mt-3">
          Already have an account? <Link to="/login" className="button-link">Login</Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
