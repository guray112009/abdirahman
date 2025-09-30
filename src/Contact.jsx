import React, { useState } from 'react';
import './global.css';
import contactImage from '../images/FormPic.webp'; // Make sure FormPic.webp is in images/

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! Abdirahman will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="contact-page fade-in">
      <h1>Contact Me</h1>
      <p className="contact-intro">
        Whether you have a project in mind, a question, or just want to say hello — I’d love to hear from you.
      </p>

      <div className="contact-image-wrapper">
        <img src={contactImage} alt="Contact illustration" className="contact-image" />
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
          />
        </label>

        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </label>

        <label>
          Subject
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="What's this about?"
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
          />
        </label>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      {/* Social Media Links */}
      <div className="social-links">
        <h3>Connect with Me</h3>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fas fa-envelope"></i> Gmail
        </a>
        <a href="https://www.linkedin.com/in/cabdirahman-ibrahim-02a434333/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://wa.me/16472419335" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fas fa-file-alt"></i> Resume
        </a>
      </div>
    </main>
  );
}