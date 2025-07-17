import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Form submitted! Thank you, " + formData.name);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2 mb-3 border rounded" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-2 mb-3 border rounded" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 mb-3 border rounded" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default ContactForm;