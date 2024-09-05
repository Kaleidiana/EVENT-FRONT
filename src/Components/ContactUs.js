import React, { useState } from 'react';
import axios from 'axios'; // Ensure axios is installed

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://your-server-endpoint/send-email', {
        firstName,
        lastName,
        email,
        message
      });
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="First Name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <textarea 
          placeholder="Message" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
      {success && <div className="success-popup">Message sent successfully!</div>}
    </div>
  );
};

export default Contact;
