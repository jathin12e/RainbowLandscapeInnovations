import React, { useState, useEffect } from 'react';
import './pool.css';
import Nav from './nav';
import Footer from './footer';
import { Link } from 'react-router-dom';

const images = [
  '/images/Screenshot 2025-07-20 180308.png',
  '/images/istockphoto-480651803-612x612.jpg',
  '/images/image.png'
];

const services = [
  {
    name: "Sprinkler Systems",
    description: "Efficient water distribution for lawns and gardens through automated sprinklers."
  },
  {
    name: "Micro Drippers",
    description: "Targeted irrigation ideal for precise watering of plants and shrubs."
  },
  {
    name: "Rotors",
    description: "Ideal for covering large lawn areas with adjustable spray patterns."
  },
  {
    name: "Sub-soil Drainage",
    description: "Underground solutions to manage excess water and prevent waterlogging."
  },
  {
    name: "Storm Water Management",
    description: "Effective systems to control runoff and prevent flooding in landscapes."
  },
  {
    name: "Rain Water Harvesting",
    description: "Capture and store rainwater for sustainable irrigation use."
  }
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
          <h1>LandScape Irrigation <br /> Design & Planning</h1>
          
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h1 style={{fontFamily:"serif" , fontSize:"4rem"}}> We Will Plan And Desgin <br /> Landscape Irrigation <br /></h1>
        <div className="about-container">
          <div className="about-image">
            <img src="/image.png" alt="About Us" />
          </div>
          <div className="about-content">
            
            <p style={{fontFamily:"serif" ,color:"gray" , fontSize:"1.3rem"}}>
              We offer complete design and planning solutions for both large-scale and small-scale landscape irrigation systems. Our expertise ensures efficient water usage, healthy landscapes, and long-term sustainability.
            </p>
            <div className="about-extra-images">
              <img src="/images/Screenshot 2025-07-20 182925.png" alt="Extra 1" />
              <img src="/images/Screenshot 2025-07-20 183946.png" alt="Extra 2" />
            </div>
            <div className='d-flex flex-row justify-content-center m-2 ml-5'>
               <button className='btn btn-primary btn-inline-primary' >More images</button>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section */}

{/*<video width="100%" autoPlay muted controls loop>
  <source src="/images/Raibow Landscape Innovations - 01.mp4" type="video/mp4" />
    Your browser does not support the video tag.
</video>
 Pool Models Section */}
  <div style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Landscape Irrigation Design & Planning</h2>
        <p style={styles.description}>
          We provide complete design and planning solutions for both large and small landscape irrigation areas.
          Our expert services cover all aspects of landscape engineering to ensure effective water distribution and sustainability.
        </p>
        <div style={styles.serviceGrid}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
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

const styles = {
  section: {
    padding: '60px 20px',
    backgroundColor: '#f4f9f6',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#2c3e50',
  },
  description: {
    fontSize: '16px',
    marginBottom: '40px',
    color: '#34495e',
  },
  serviceGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    width: '200px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  icon: {
    width: '40px',
    height: '40px',
    marginBottom: '10px',
  }
};

export default CarouselPage;
