import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
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

    // Simulate successful registration
    toast.success('Registration successful! Redirecting to login...', {
      position: toast.POSITION.TOP_CENTER
    });

    // Simulate API call or async logic, then redirect
    setTimeout(() => {
      navigate('/login'); // Redirect to /login route after registration
    }, 2000); // Delay to show toast message
  };

  return (
    <div className="register-container">
      <Form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <Form.Group controlId="firstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
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
            required
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
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login" className="button-link">Login</Link>
        </p>
      </Form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Register;
