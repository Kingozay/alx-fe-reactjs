﻿import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/');
  
  // Inline styles
  const navStyle = {
    padding: '1rem',
    backgroundColor: '#2c3e50',
    display: 'flex',
    justifyContent: 'center'
  };

  const linkStyle = {
    margin: '0 1rem',
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  };

  const activeStyle = {
    ...linkStyle,
    backgroundColor: '#3498db'
  };

  return (
    <nav style={navStyle}>
      <Link 
        to="/" 
        style={activeLink === '/' ? activeStyle : linkStyle}
        onClick={() => setActiveLink('/')}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        style={activeLink === '/about' ? activeStyle : linkStyle}
        onClick={() => setActiveLink('/about')}
      >
        About
      </Link>
      <Link 
        to="/services" 
        style={activeLink === '/services' ? activeStyle : linkStyle}
        onClick={() => setActiveLink('/services')}
      >
        Services
      </Link>
      <Link 
        to="/contact" 
        style={activeLink === '/contact' ? activeStyle : linkStyle}
        onClick={() => setActiveLink('/contact')}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
