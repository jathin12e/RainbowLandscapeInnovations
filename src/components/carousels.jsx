import React, { useState, useEffect } from 'react';
import './carousels.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  { src: '/images/Rainbow PIX 1.jpg', label: 'Rainbow Landscape Innovations', para: 'Rainbow Technologies has over 23 years of expertise in designing and executing swimming pools, fountains, jacuzzis, and irrigation systems. We specialize in aesthetic, high-performance solutions tailored to both residential and commercial needs.' },
  { src: '/images/Screenshot 2025-07-16 115709.png', label: 'Design and Technologies', para: 'With extensive experience in design and execution, we focus on smart resource planning and optimization using cutting-edge products. Our globally sourced materials ensure cost-effective and aesthetically pleasing implementation.' },
  { src: '/images/Rainbow PIX 8.jpg', label: 'Swimming Pools', para: 'We offer turnkey swimming pool solutions, covering everything from civil construction to filtration, heating, jacuzzi systems, lighting, and automation. We also undertake standalone electro-mechanical works.' },
  { src: '/images/istockphoto-480651803-612x612.jpg', label: 'Landscape Irrigation', para: 'We provide complete design and planning for landscape irrigation, using advanced systems like sprinklers, rotors, micro drippers, and solutions for drainage, rainwater harvesting, and stormwater management.' },
  { src: '/images/WhatsApp Image 2025-07-20 at 23.26.15_fedf3317.jpg', label: 'Fountain Technology', para: 'With strong hydraulic engineering expertise, we specialize in fountain design and execution using premium global products. Our scope includes nozzles, IP65 underwater lights, filtration, cabling, and plumbing.' },
  { src: '/WhatsApp Image 2024-09-05 at 13.50.56.jpeg', label: 'Bio Ponds', para: 'We design natural water bodies with aquatic life, offering specialized bio-filtration systems using globally sourced products to ensure a healthy and aesthetic ecosystem.' }
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  const setBackgroundImage = (i) => {
    setFade(false);
    setTimeout(() => {
      setIndex(i);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000); // 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='carousel-section'>
      <div className='carousel-hero'>
        <img
          src={images[index].src}
          alt='background'
          className='carousel-bg'
        />
        <div className='gradient-overlay'></div>

        <div className='carousel-nav'>
          <button className='nav-arrow left' onClick={prevSlide}><FaArrowLeft /></button>
          <button className='nav-arrow right' onClick={nextSlide}><FaArrowRight /></button>
        </div>

        <div className={`carousel-caption ${fade ? 'fade-in-text' : 'fade-out-text'}`}>
          <h1 className='carousel-title'>{images[index].label}</h1>
          <p className='carousel-subtext'>{images[index].para}</p>
        </div>
      </div>

      <div className='carousel-thumbnails-full'>
        {images.map((img, i) => (
          <div
            key={i}
            className={`thumb ${i === index ? 'active-thumb' : ''}`}
            onClick={() => setBackgroundImage(i)}
          >
            <img src={img.src} alt={`thumb-${i}`} />
          </div>
        ))}
      </div>
      
    </div>
  );
}; 

export default Carousel;
