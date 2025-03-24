import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Inline styles
  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    margin: '0.5rem 0',
    borderRadius: '4px',
    border: '1px solid #ddd'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(Thank you ! Your message has been sent.);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={formStyle}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: '150px' }}
          required
        />
        <button 
          type="submit"
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
