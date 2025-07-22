import React from 'react';
import './footer.css'; // External CSS

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
            
            <li><a href="/about">About Us</a></li>
            <li><a href="/newinnovation">New Innovations</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/enquiry">Enquiry</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/design">Design and Consultancy</a></li>
            <li><a href="/pool">Swimming pool</a></li>
            <li><a href="/landscape">Landscape Irrigation</a></li>
            <li><a href="/fountain">Fountain Technologies</a></li>
            <li><a href="/bioponds">Bio ponds</a></li>
            
          </ul>
        </div>
        <div >
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
