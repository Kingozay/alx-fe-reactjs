import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/');
  
  // Style objects
  const navStyle = {
    padding: '1rem',
    backgroundColor: '#2c3e50',
    display: 'flex',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const linkStyle = {
    margin: '0 1.5rem',
    color: '#ecf0f1',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.1rem',
    padding: '0.5rem',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#3498db',
    color: 'white'
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav style={navStyle}>
      <Link 
        to="/" 
        style={activeLink === '/' ? activeLinkStyle : linkStyle}
        onClick={() => handleLinkClick('/')}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        style={activeLink === '/about' ? activeLinkStyle : linkStyle}
        onClick={() => handleLinkClick('/about')}
      >
        About
      </Link>
      <Link 
        to="/services" 
        style={activeLink === '/services' ? activeLinkStyle : linkStyle}
        onClick={() => handleLinkClick('/services')}
      >
        Services
      </Link>
      <Link 
        to="/contact" 
        style={activeLink === '/contact' ? activeLinkStyle : linkStyle}
        onClick={() => handleLinkClick('/contact')}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;