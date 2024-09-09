import React from 'react';

const ContactUs = () => {
  // Array to hold contact details
  const contacts = [
    {
      href: "https://www.instagram.com/iss_deedee",
      icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
      name: "Instagram",
    },
    {
      href: "https://twitter.com/itsjustdiana",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
      name: "Twitter",
    },
    {
      href: "mailto:kaleidiana63@gmail.com",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      name: "Email Us",
    },
    {
      href: "https://wa.me/0796215088",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
      name: "WhatsApp",
    },
  ];

  // Handle successful form submission
  const handleSuccess = (response) => {
    console.log('Success response:', response);
    alert('Message sent successfully!');
  };

  // Handle form submission errors
  const handleError = (error) => {
    console.log('Error response:', error);
    alert('Error sending message.');
  };

  

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form action="https://api.web3forms.com/submit" method="POST">

        <input
          type="hidden"
          name="access_key"
          value="9d4665c7-05c1-475b-bb0b-292a2e3110a1" // Replace with your Web3 Forms API Key
        />
      

        <div className="name-fields">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="contact-input first-name"
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="contact-input last-name"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contact-input email"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="contact-input-message"
          required
        ></textarea>
        <button type="submit" className="contact-submit-button">
          Submit
        </button>
      </form>

      <div className="contact-info">
        {contacts.map((contact, index) => (
          <div className="contact-item" key={index}>
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
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
