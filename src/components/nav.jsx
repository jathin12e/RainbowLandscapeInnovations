import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './nav.css';

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src="/images/Screenshot_2025-07-14_155808-removebg-preview.png" alt="logo" width={130} />
      </Link>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        {[
          { path: '/', label: 'Home' },
          { path: '/about', label: 'About Us' },
          { path: '/newinnovation', label: 'New Innovation' },
          { path: '/services', label: 'Services' },
          { path: '/careers', label: 'Careers' },
          { path: '/contact', label: 'Contact Us' },
          { path: '/enquiry', label: 'Service Enquiry' },
        ].map(({ path, label }) => (
          <li key={label}>
            <Link to={path} onClick={closeMenu} className="nav-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
