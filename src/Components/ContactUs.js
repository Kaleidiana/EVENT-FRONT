import React from 'react';
import { Web3Forms } from '@web3forms/react'; // Use named import

const ContactUs = () => {
  const contacts = [
    {
      href: "https://www.instagram.com/yourprofile",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
      name: "Instagram",
    },
    {
      href: "https://twitter.com/yourprofile",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
      name: "Twitter",
    },
    {
      href: "mailto:youremail@example.com",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      name: "Email Us",
    },
    {
      href: "https://wa.me/yourphonenumber",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      name: "WhatsApp",
    },
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <Web3Forms
        onSuccess={(message) => alert('Message sent successfully!')} // Display success message
        onError={(message) => alert('Error sending message.')} // Display error message
        access_key="YOUR_WEB3FORMS_API_KEY" // Replace with your Web3 Forms API Key
        className="contact-form"
      >
        <div className="name-fields">
          <input type="text" name="first_name" placeholder="First Name" className="contact-input first-name" required />
          <input type="text" name="last_name" placeholder="Last Name" className="contact-input last-name" required />
        </div>
        <input type="email" name="email" placeholder="Email" className="contact-input email" required />
        <textarea name="message" placeholder="Message" className="contact-input-message" required></textarea>
        <button type="submit" className="contact-submit-button">Submit</button>
      </Web3Forms>
      
      <div className="contact-info">
        {contacts.map((contact, index) => (
          <div className="contact-item" key={index}>
            <a href={contact.href} target="_blank" rel="noopener noreferrer" className="contact-link">
              <img src={contact.icon} alt={contact.name} className="contact-icon" />
              <span>{contact.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
