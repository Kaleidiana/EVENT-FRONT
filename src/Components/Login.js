import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic (e.g., API call)
    console.log(`Logged in with Email: ${email}, and Password: ${password}`);

    // Simulate successful login
    toast.success('Login successful!', {
      position: 'top-right',
      className: 'toast-message', // Custom class for additional styling
      style: { 
        width: 'auto', // Set width to auto to fit content
        whiteSpace: 'nowrap',
        marginLeft: '100px', // Prevents wrapping to the next line
        textAlign: 'center', // Center the text
      },
    });

    // Redirect after showing the toast
    setTimeout(() => {
      navigate('/sidebar'); // Redirect to /sidebar route after login
    }, 2000); // Delay to show toast message
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
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Login;
