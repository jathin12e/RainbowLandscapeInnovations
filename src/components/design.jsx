import React, { useState, useEffect } from 'react';
import './pool.css';
import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';

const images = [
  '/images/Screenshot 2025-07-19 233358.png',
  '/images/Screenshot 2025-07-20 180308.png',
  '/images/WhatsApp Image 2025-07-20 at 23.26.15_fedf3317.jpg',
  '/public/Screenshot 2025-07-21 010146.png'
];

const CarouselPage = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

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
        <div className="carousel-text-overlay" style={{ alignItems: "center" }}>
          <h1>Design And Consultancy</h1>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h1 style={{ fontFamily: "serif", fontSize: "4rem" }}>
          Efficient Design & <br/>Expert Execution 
        </h1>
        <div className="about-container">
          <div className="about-image">
            <img src="/images/Screenshot 2025-07-20 000944.png" alt="About Us" />
            
          </div>
          
          <div className="about-content">
            <p style={{ fontFamily: "serif", color: "gray", fontSize: "1.3rem" }}>
              With extensive experience in both design and execution, we are well-equipped to cater to your project requirements.
Our approach emphasizes efficient planning and optimal utilization of available resources, ensuring that every aspect is thoughtfully considered.
We recommend and incorporate state-of-the-art products sourced from around the world to enhance both cost-efficiency and aesthetic appeal, delivering high-quality results from start to finish.
            </p>
            <div className="about-extra-images">
              <img src="/images/istockphoto-480651803-612x612.jpg" alt="Extra 1" />
              <img src="/images/Screenshot 2025-07-20 235513.png" alt="Extra 2" />
              
            </div>
            
          </div>
          
        </div>
      </div>

      {/* Our Services Section */}
      <div className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src="/images/Screenshot 2025-07-20 010936.png" alt="Design Icon" />
            <h3>Swimming Pool</h3>
            <p></p>
          </div>
          <div className="service-card">
            <img src="/images/Screenshot 2025-07-20 183946.png" alt="Filtration Icon" />
            <h3>Landscape Irrigation</h3>
            <p></p>
          </div>
          <div className="service-card">
            <img src="/images/Screenshot 2025-07-20 235234.png" alt="Lighting Icon" />
            <h3>Fountain Technology</h3>
            <p></p>
          </div>
          <div className="service-card">
            <img src="/Screenshot 2025-07-21 010814.png" alt="Maintenance Icon" />
            <h3>Bio Ponds</h3>
            <p></p>
          </div>
          <div className="service-card">
            <img src="/images/1.jfif" alt="Maintenance Icon" />
            <h3>Maintenance</h3>
            <p></p>
          </div>
        </div>
      </div>

     
      
     
      {/*
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
      </section>
      */}

      {/* Final CTA Section */}
      <div className='position'>
        <h3 style={{ fontFamily: "serif", fontSize: "2rem", color: "gray" }}>We are ready to</h3>
        <h1 style={{ fontSize: "5rem", fontFamily: "serif" }}>SERVE YOU</h1>
        <Link to='/contact' ><button className='btn1'>Contact Us</button></Link>
      </div>

      <Footer />
    </div>
    </div>
  );
};

export default CarouselPage;
