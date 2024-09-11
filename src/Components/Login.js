import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Importing icons

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle the password visibility state
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
          navigate('/user/events');
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
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'} // Conditional type for input
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={{ paddingRight: '7px' }} // Space for the eye icon
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
        <button type="submit">Login</button>
      </form>

      <ToastContainer className="toast-container" />
    </div>
  );
}

export default Login;
