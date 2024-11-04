import React, { useState } from 'react';
import { db } from '../firebase/firebaseConfig';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('formSubmissions').add(formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
