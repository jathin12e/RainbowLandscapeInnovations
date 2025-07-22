import React, { useState, useEffect } from 'react';
import './pool.css';
import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';

const images = [
  '/images/WhatsApp Image 2025-07-20 at 23.26.15_fedf3317.jpg',
  '/images/Fountain-1.jpg',
  '/public/Screenshot 2025-07-21 004518.png'
];

const CarouselPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-page" >
      <div className='navbar-overlay'>
        <Nav />
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <div className="dark-overlay"></div>
        <div className="carousel-text-overlay" style={{alignItems:"center"}}>
          <h1> Fountain Technologies</h1>
          
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h5 style={{color:"blue"}}></h5>
        <h1 style={{fontFamily:"serif" , fontSize:"4rem"}}>Complete Fountain Systems <br />with Global Standards</h1>
        <div className="about-container">
          <div className="about-image">
            <img src="/images/Screenshot 2025-07-21 003958.png" alt="About Us" />
          </div>
          <div className="about-content">
            
            <p style={{fontFamily:"serif" ,color:"gray" , fontSize:"1.3rem"}}>
              With a strong foundation in hydraulic engineering, fountain technology stands as one of our core strengths. Our expertise spans across design, planning, and complete execution of fountain systems. We integrate world-class nozzle effects and utilize premium global fountain technology products.
              All components — including IP65-certified underwater lights, advanced fountain nozzles, filtration systems, underwater cabling, and plumbing — are covered under our scope to ensure high performance, durability, and aesthetic brilliance.
            </p>
            <div className="about-extra-images">
              <img src="/images/Screenshot 2025-07-20 235234.png" alt="Extra 1" />
              <img src="/images/WhatsApp Image 2024-11-25 at 10.34.44 AM.jpeg" alt="Extra 2" />
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section */}
<div className="services-section">
  <h2 className="section-title">Our Services</h2>
  <div className="services-container">
    <div className="service-card">
      
      <h3>Design & Consultancy</h3>
      <p>Custom pool designs tailored to your space and vision.</p>
    </div>
    <div className="service-card">
      <h3>Filtration Systems</h3>
      <p>Installation of efficient and high-performance filtration systems.</p>
    </div>
    <div className="service-card">
      <h3>Underwater Lighting</h3>
      <p>Modern LED and ambient lighting solutions.</p>
    </div>
    <div className="service-card">
      <h3>Maintenance</h3>
      <p>Reliable routine and emergency pool maintenance services.</p>
    </div>
  </div>
</div>
<div style={{margin:"2rem"}}>
  <video width="100%" autoPlay muted controls loop style={{borderRadius:"20px"}}>
    <source src="https://res.cloudinary.com/dfzliqupz/video/upload/v1753162480/Dry_Deck_Fountain_rajazt.mp4" type="video/mp4" />
      Your browser does not support the video tag.
  </video>
</div>
{/* Pool Models Section 
  <section className="models-section">
    <h2 className="section-title">Fountain Models</h2>
    <div className="models-container">
      <div className="model-card">
        <img src="/images/WhatsApp Image 2025-05-07 at 2.07.02 PM.jpeg" alt="Rectangle Pool" />
        <h3>Rectangle</h3>
      </div>
      <div className="model-card">
        <img src="/images/Screenshot 2025-07-20 010936.png" alt="Classic Pool" />
        <h3>Classic</h3>
      </div>
      <div className="model-card">
        <img src="/images/Screenshot 2025-07-19 233358.png" alt="Curved Pool" />
        <h3>Curved</h3>
      </div>
      <div className="model-card">
        <img src="/images/pool-kidney.jpg" alt="Kidney Pool" />
        <h3>Kidney</h3>
      </div>
    </div>
  </section>*/}
  <div className='position'>
    <h3 style={{fontFamily:"serif" , fontSize:"2rem" , color:"gray"}}>We are ready to</h3>
    <h1 style={{fontSize:"5rem" ,fontFamily:"serif"}}>SERVE YOU</h1>
    <Link to='/contact' ><button className='btn1'>Contact Us</button></Link>
  </div>


      <Footer />
    </div>
  );
};

export default CarouselPage;
