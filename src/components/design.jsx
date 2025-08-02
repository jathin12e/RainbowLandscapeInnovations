import React, { useState, useEffect } from 'react';
import './pool.css';
import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';
import ScrollReveal from './scrollreveal';

const images = [
  'https://res.cloudinary.com/dfzliqupz/image/upload/v1754117762/Screenshot_2025-07-19_233358_f1tiqx.png',
  '/images/Screenshot 2025-07-20 180308.png',
  '/images/WhatsApp Image 2025-07-20 at 23.26.15_fedf3317.jpg',
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
        <div className="carousel-text-overlay">
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
            <img src="https://res.cloudinary.com/dfzliqupz/image/upload/v1754121263/Screenshot_2025-07-20_000944_nmxvkk.png" alt="About Us" />
            
          </div>
          
          <div className="about-content">
            <p style={{ fontFamily: "serif", color: "gray", fontSize: "1.3rem" }}>
              With extensive experience in both design and execution, we are well-equipped to cater to your project requirements.
Our approach emphasizes efficient planning and optimal utilization of available resources, ensuring that every aspect is thoughtfully considered.
We recommend and incorporate state-of-the-art products sourced from around the world to enhance both cost-efficiency and aesthetic appeal, delivering high-quality results from start to finish.
            </p>
            <div className="about-extra-images">
              <img src="https://res.cloudinary.com/dfzliqupz/image/upload/v1754116155/istockphoto-480651803-612x612_tiv0ec.jpg" alt="Extra 1" />
              <img src="/images/Screenshot 2025-07-20 235513.png" alt="Extra 2" />
              
            </div>
           
          </div>
          
        </div>
      </div>

      {/* Our Services Section */}
      <div className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          <Link to="/pool"  style={{color:"black" , textDecoration:"none"}}><div className="service-card">
            <img src="https://res.cloudinary.com/dfzliqupz/image/upload/v1754121694/Screenshot_2025-07-20_010936_gldlki.png" alt="Design Icon" />
            <h3>Swimming Pool</h3>
            <p></p>
          </div></Link>
          <Link to="/landscape"  style={{color:"black" , textDecoration:"none"}}><div className="service-card">
            <img src="/images/Screenshot 2025-07-20 183946.png" alt="Filtration Icon" />
            <h3>Landscape Irrigation</h3>
            <p></p>
          </div></Link>
          <Link to="/fountain"  style={{color:"black" , textDecoration:"none"}}><div className="service-card">
            <img src="/images/Screenshot 2025-07-20 235234.png" alt="Lighting Icon" />
            <h3>Fountain Technology</h3>
            <p></p>
          </div></Link>
          <Link to="/bioponds" style={{color:"black" , textDecoration:"none"}}><div className="service-card">
            <img src="/Screenshot 2025-07-21 010814.png" alt="Maintenance Icon" />
            <h3>Bio Ponds</h3>
            <p></p>
          </div></Link>
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
