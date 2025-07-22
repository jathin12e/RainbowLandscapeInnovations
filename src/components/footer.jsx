import React from 'react';
import './footer.css'; // External CSS
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Logo/Brand */}
        <div className="footer-section">
          <img src='/images/Screenshot_2025-07-14_155808-removebg-preview.png' height={100}  width={250}/>
          <div className="footer-section" style={{marginTop: "20px"}}>
          
            <p>Email: ram@rliindia.com</p>
            <p>+91 98450 57127 <br /> +91 96630 00039</p>
            <p>Office Hours : 9:30 AM - 6:30 PM (Mon - Sat)</p>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-section">
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
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/pool">Swimming pool</Link></li>
            <li><Link to="/design">Design and Consultancy</Link></li>
            <li><Link to="/landscape">Landscape Irrigation</Link></li>
            <li><Link to="/fountain">Fountain Technologies</Link></li>
            <li><Link to="/bioponds">Bio ponds</Link></li>
            
          </ul>
        </div>
        <div>
          <h4>Get In Touch</h4>
          <p><a href='/contact' style={{color:"black"}}>Question or Feedback?</a></p>
          <p>We'd love to hear from you</p>
          <a href='/'><button className='btn  btn-outline-primary' style={{color:"black" , borderInlineColor:"black"}}>Back to home</button></a>
        </div>
    
        
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Rainbow Landscape Innovations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
