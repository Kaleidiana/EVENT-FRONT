import React from 'react';

const Contact = () => {
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
      <h2 className="contact-subheading">Full Name</h2>
      <div className="name-fields">
        <input type="text" placeholder="First Name" className="contact-input first-name" />
        <input type="text" placeholder="Last Name" className="contact-input last-name" />
      </div>
      <input type="email" placeholder="Email" className="contact-input email" />
      <textarea placeholder="Message" className="contact-input-message"></textarea>
      <button type="submit" className="contact-submit-button">Submit</button>
      
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

export default Contact;
