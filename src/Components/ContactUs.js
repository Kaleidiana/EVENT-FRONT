import React from 'react';


const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
            <img src="path/to/instagram-icon.png" alt="Instagram" className="contact-icon" />
            Instagram
          </a>
        </div>
        <div className="contact-item">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
            <img src="path/to/twitter-icon.png" alt="Twitter" className="contact-icon" />
            Twitter
          </a>
        </div>
        <div className="contact-item">
          <a href="mailto:youremail@example.com" className="contact-link">
            <img src="path/to/email-icon.png" alt="Email" className="contact-icon" />
            Email Us
          </a>
        </div>
        <div className="contact-item">
          <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="contact-link">
            <img src="path/to/whatsapp-icon.png" alt="WhatsApp" className="contact-icon" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
