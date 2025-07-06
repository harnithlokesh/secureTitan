import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/contact', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
