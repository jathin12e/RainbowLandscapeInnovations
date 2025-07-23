import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // FontAwesome icons

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='nav-position'>
      <Link to='/'>
        <img src='/images/Screenshot_2025-07-14_155808-removebg-preview.png' alt='logo' width={130} />
      </Link>

      <div className='menu-icon' onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
        <Link to="/" onClick={toggleMenu}><li className='hovering' style={{textDecoration:""}}>Home</li></Link>
        <Link to="/about" onClick={toggleMenu}><li className='hovering'>About Us</li></Link>
        <Link to="/newinnovation" onClick={toggleMenu}><li className='hovering'>New Innovation</li></Link>
        <Link to="/services" onClick={toggleMenu}><li className='hovering'>Services</li></Link>
        <Link to="/careers" onClick={toggleMenu}><li className='hovering'>Careers</li></Link>
        <Link to="/contact" onClick={toggleMenu}><li className='hovering'>Contact us</li></Link>
        <Link to="/enquiry" onClick={toggleMenu}><li className='hovering'>Service Enquiry</li></Link>
      </ul>
    </div>
  );
};

export default Nav;
