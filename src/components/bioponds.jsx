import React, { useState, useEffect } from 'react';
import './pool.css';
import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';

const images = [
  '/WhatsApp Image 2024-09-05 at 13.50.56.jpeg',
  '/Screenshot 2025-07-21 010559.png',
  '/Screenshot 2025-07-21 010814.png'
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
    <div>
      <Nav />
    <div className="carousel-page">
     

      {/* Carousel Section */}
      <div className="carousel-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
        <div className="dark-overlay"></div>
        <div className="carousel-text-overlay" style={{alignItems:"center"}}>
          <h1>Bio Ponds</h1>
          
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h5 style={{color:"blue"}}></h5>
        <h1 style={{fontFamily:"serif" , fontSize:"4rem"}}>Biological Pond Systems &<br /> Aquatic Design</h1>
        <div className="about-container">
          <div className="about-image">
            <img src="/WhatsApp Image 2024-09-05 at 13.50.56.jpeg" alt="About Us" />
          </div>
          <div className="about-content">
            
            <p style={{fontFamily:"serif" ,color:"gray" , fontSize:"1.3rem"}}>
             Water bodies and ponds enriched with plants and aquatic life create a visually soothing and eco-friendly environment. We specialize in
            designing and maintaining Bio Ponds with advanced biological filtration systems. Our solutions are powered by globally sourced, high-quality products that ensure healthy water quality and support the natural balance of aquatic ecosystems.
            </p>
            <div className="about-extra-images">
              <img src="/images/Bio-Ponds-1.jpg" alt="Extra 1" />
              <img src="/WhatsApp Image 2024-09-05 at 13.55.02 (1).jpeg" alt="Extra 2" />
            </div>
            <div className='d-flex flex-row justify-content-center m-2 ml-5'>
               <button className='btn btn-primary btn-inline-primary' >More images</button>
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
    <source src="/images/WhatsApp Video 2024-03-05 at 18.24.50.mp4" type="video/mp4" />
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
  </div>
  );
};

export default CarouselPage;
