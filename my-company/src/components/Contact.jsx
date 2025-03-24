import { useState } from 'react';

function Contact() {
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Inline styles
    const containerStyle = {
        maxWidth: '600px',
        margin: '2rem auto',
        padding: '2rem',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '8px'
    };

    const inputStyle = {
        width: '100%',
        padding: '0.8rem',
        margin: '0.5rem 0',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem'
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '0.8rem 1.5rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        marginTop: '1rem'
    };

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(Thank you ! We'll contact you soon.);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Contact Us</h2>
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
                <button type="submit" style={buttonStyle}>
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contact;
