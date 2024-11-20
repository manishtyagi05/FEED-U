import React from 'react';
import '../ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">
        We'd love to hear from you! Fill out the form below, or reach out to us directly.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Your Message" required className="form-textarea"></textarea>
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
      <div className="contact-info">
        <p>Or reach us at:</p>
        <p><strong>Email:</strong> support@FEED-U.com</p>
        <p><strong>Phone:</strong> +1 12345678</p>
      </div>
    </div>
  );
};

export default ContactUs;
