import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    email: '',
    password: '',
    event: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/registerUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Registration successful! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Registration failed');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <Form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <Form.Group controlId="firstname">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            name="firstname"
            type="text"
            placeholder="Enter First Name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="lastname">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            name="lastname"
            type="text"
            placeholder="Enter Last Name"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender:</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
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

        <Form.Group controlId="event">
          <Form.Label>Event:</Form.Label>
          <Form.Control
            as="select"
            name="event"
            value={formData.event}
            onChange={handleChange}
            required
          >
            <option value="">Select Event</option>
            <option value="Event 1">Event 1</option>
            <option value="Event 2">Event 2</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <ToastContainer />
    </div>
  );
}

export default Register;
