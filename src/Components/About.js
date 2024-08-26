import React from 'react';


const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>ABOUT EVENTPRO</h1>
      <p className="fade-in" style={styles.paragraph}>
        Welcome to Event Pro! We are your one-stop solution for managing and attending events with ease. Whether you're organizing a small gathering or a large conference, Event Pro provides the tools and services you need to make your event a success.
      </p>
      <p className="fade-in" style={styles.paragraph}>
        Our platform allows you to create, manage, and track events effortlessly. With a user-friendly interface, powerful features, and seamless integration with various services, Event Pro is designed to meet all your event management needs.
      </p>
      <p className="fade-in" style={styles.paragraph}>
        Event Pro is committed to helping you deliver unforgettable experiences. We believe in the power of events to bring people together, and we're here to ensure that your events are planned and executed to perfection.
      </p>
      <p className="fade-in" style={styles.paragraph}>
        Join us at Event Pro and take the stress out of event planning. Let us help you create memorable moments that will leave a lasting impression on your attendees.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    color: 'yellow',
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '20px',
    fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
    color: 'black',
    fontWeight: 'medium',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

export default About;
