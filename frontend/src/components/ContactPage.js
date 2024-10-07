import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('/api/contact', { name, email, message });
      alert('Message sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <button onClick={handleSubmit}>Send Message</button>
    </div>
  );
};

export default ContactPage;