import React, { useState, useEffect } from 'react';
import './pool.css';
import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';
const images = [
  '/images/Rainbow PIX 8.jpg',
  '/images/Screenshot 2025-07-19 235732.png',
  '/images/Screenshot 2025-07-19 234617.png'
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
    <div className="carousel-page">
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
        <div className="carousel-text-overlay">
          <h1>Build Your Dream <br />Swimming Pool</h1>
          
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h5 style={{color:"blue"}}>-- We Build The Best Pools</h5>
        <h1 style={{fontFamily:"serif" , fontSize:"4rem"}}>We Are Swimming Pool  <br /> Builders and Swimming <br />Pool Service Experts</h1>
        <div className="about-container">
          <div className="about-image">
            <img src="/images/Screenshot 2025-07-20 000944.png" alt="About Us" />
          </div>
          <div className="about-content">
            
            <p style={{fontFamily:"serif" ,color:"gray" , fontSize:"1.3rem"}}>
              Planning and execution of Swimming Pools, We take up turnkey Swimming solutions, from Shell work to Complete Filtration, Jacuzzi Pools, Heating Systems, Pool Covers, automatic Pool cleaning etc. We also undertake Electro Mechanical works only. Our Swimming Pool scope of work includes, Civil Works, Filtration Works, Electrical Works, Plumbing Works, and Under Water Lighting.
              <br /><span style={{color:'red'}}>click &nbsp;<a href='/pool/2025 - ROSA GRES UNIQUE POOLS.pdf'>here</a> for more about swimming pools</span>
            </p>
            <p></p>
            <div className="about-extra-images">
              <img src="/images/Screenshot 2025-07-20 001054.png" alt="Extra 1" />
              <img src="/images/WhatsApp Image 2024-11-27 at 6.18.38 PM.jpeg" alt="Extra 2" />
            </div>
            <div className='d-flex flex-row justify-content-center m-2 ml-5'>
               <Link to="/pool/images"><button className='btn btn-primary btn-inline-primary' >More images</button></Link>
               
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
<div>
  <video width="100%" autoPlay muted controls loop style={{marginTop:"20px"}}>
    <source src="https://res.cloudinary.com/dfzliqupz/video/upload/v1753162637/Astral_Pool_-_lights_bpevvj.mp4" type="video/mp4" />
      Your browser does not support the video tag.
  </video>
</div>
{/* Pool Models Section */}
  <div className="models-section">
    <h2 className="section-title">Pool Models</h2>
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
      {/*<div className="model-card">
        <img src="/images/pool-kidney.jpg" alt="Kidney Pool" />
        <h3>Kidney</h3>
      </div>*/}
    </div>
  </div>
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
