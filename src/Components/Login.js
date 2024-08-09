import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic (e.g., API call)
    // For demo purposes, assume successful login and show toast notification
    console.log(`Logged in with Email: ${email}, and Password: ${password}`);
    
    // Simulate successful login
    toast.success('Login successful! Redirecting...', {
      position: toast.POSITION.TOP_CENTER
    });

    // Simulate API call or async logic, then redirect
    setTimeout(() => {
      navigate('/sidebar'); // Redirect to /sidebar route after login
    }, 2000); // Delay to show toast message
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
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
            value={password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <p className="text-center mt-3">
          Don't have an account? <Link to="/login" className="button-link">Login</Link>
        </p>
      </Form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Login;
