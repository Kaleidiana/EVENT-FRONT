import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4000/api/auth/registerUser', { // Correct endpoint for login
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Login failed:', errorText);
        toast.error('Invalid email or password.', {
          position: 'top-right',
          style: {
            width: 'auto',
            whiteSpace: 'nowrap',
            marginLeft: '100px',
            textAlign: 'center',
          },
        });
      } else {
        const data = await response.json();
        console.log('Login successful:', data);
        
        // Store the token in local storage
        localStorage.setItem('authToken', data.token); 
        
        toast.success('Login successful!', {
          position: 'top-right',
          style: {
            width: 'auto',
            whiteSpace: 'nowrap',
            marginLeft: '100px',
            textAlign: 'center',
          },
        });
        
        // Redirect after successful login
        setTimeout(() => {
          navigate('/sidebar');
        }, 2000);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('There was an issue with your login.', {
        position: 'top-right',
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
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <ToastContainer className="toast-container" />
    </div>
  );
}

export default Login;
