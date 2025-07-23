import React from 'react';
import './careers.css';
import Nav from './nav';
import Footer from './footer';

const CareersPage = () => {
  return (
    <div>
      <Nav />
    <div className="careers-page">
      

      <header className="careers-hero">
        
        <div className="overlay">
          <h1 style={{marginTop:"70px"}}>Join Our Team</h1>
          <p>We’re always looking for passionate individuals to grow with us.</p>
        </div>
      </header>

      <div className="job-section">
        <h2>We're Not Hiring Right Now</h2>
        <p className="no-openings">
          There are currently no job openings. However, we’re always open to
          connecting with talented people. Feel free to send your resume to:
          <br />
          <strong>ram@rliindia.com</strong>
        </p>
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default CareersPage;
