import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + Contact Info */}
        <div className="footer-section footer-logo-section">
          <img
            src="/images/Screenshot 2025-07-14 155808.png"
            alt="Rainbow Landscape Innovations Logo"
            className="footer-logo-img"
          />
          <div className="contact-info">
            <p>Email: <a href="mailto:ram@rliindia.com">ram@rliindia.com</a></p>
            <p>
              Phone: <a href="tel:+919845057127">+91 98450 57127</a><br />
              <a href="tel:+919663000039">+91 96630 00039</a>
            </p>
            <p>Office Hours: 9:30 AM - 6:30 PM (Mon - Sat)</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className='position-5'>
        <div className="footer-section footer-links-section" >
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/newinnovation">New Innovations</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/enquiry">Enquiry</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-links-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/pool">Swimming Pool</Link></li>
            <li><Link to="/design">Design and Consultancy</Link></li>
            <li><Link to="/landscape">Landscape Irrigation</Link></li>
            <li><Link to="/fountain">Fountain Technologies</Link></li>
            <li><Link to="/bioponds">Bio Ponds</Link></li>
          </ul>
        </div>
        </div>
        {/* Get In Touch */}
        <div className="footer-section footer-contact-section">
          <h4>Get In Touch</h4>
          <p><Link to="/contact" className="contact-link">Questions or Feedback?</Link></p>
          <p>We'd love to hear from you.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Rainbow Landscape Innovations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
