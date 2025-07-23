import React, { useState } from 'react';
import Nav from './nav.jsx';
import './home.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Scroll from './scroll.jsx';
import Footer from './footer.jsx';

const images = [
  { src: '/images/Rainbow PIX 1.jpg', label: 'Rainbow Landscape Innovations', para: '' },
  { src: '/images/Screenshot 2025-07-16 115709.png', label: 'Design and Technologies', para: '' },
  { src: '/images/Rainbow PIX 8.jpg', label: 'Swimming Pools', para: '' },
  { src: '/images/istockphoto-480651803-612x612.jpg', label: 'Landscape Irrigation', para: '' },
  { src: '/images/WhatsApp Image 2025-07-20 at 23.26.15_fedf3317.jpg', label: 'Fountain Technology', para: '' },
  { src: '/Screenshot 2025-07-21 010146.png', label: 'Bio Ponds', para: '' }
];

const services = [
  { id: 1, src: "/images/Screenshot 2025-07-19 233358.png", name: "Design and Consultancy", url: "/design" },
  { id: 2, src: "/images/Screenshot 2025-07-20 000944.png", name: "Swimming Pool", url: "/pool" },
  { id: 3, src: "/images/istockphoto-480651803-612x612.jpg", name: "Landscape Irrigation", url: "/landscape" },
  { id: 4, src: "/Screenshot 2025-07-21 004518.png", name: "Fountain Technology", url: "/fountain" },
  { id: 5, src: "/Screenshot 2025-07-21 010559.png", name: "Bio Ponds", url: "/bioponds" }
];

const reviews = [
  {
    name: "Ravi Menon",
    comment: "We recently got our swimming pool installed and the entire experience was smooth and professional. Right from the design stage to execution, the team was responsive and explained everything patiently. The final result exceeded our expectations.",
    rating: 4
  },
  {
    name: "Prashanth Kumar",
    comment: "We've signed a monthly maintenance contract with them for our apartment complex pool. Water quality has been consistently great, and their service team is punctual and well-trained. Highly recommended.",
    rating: 5
  },
  {
    name: "Niharika S",
    comment: "I wanted an infinity pool for my farmhouse and had a very specific vision in mind. The team was open to ideas and worked with my architect perfectly. The result is stunning—looks like something out of a resort.",
    rating: 5
  }
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [disableClick, setDisableClick] = useState(false);
  const [ref, isVisible] = Scroll();

  const updateIndexWithFade = (newIndex) => {
    if (disableClick) return;
    setDisableClick(true);
    setFade(false);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(true);
      setTimeout(() => setDisableClick(false), 300);
    }, 300);
  };

  const prevSlide = () => {
    const newIndex = index === 0 ? images.length - 1 : index - 1;
    updateIndexWithFade(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (index + 1) % images.length;
    updateIndexWithFade(newIndex);
  };

  const setBackgroundImage = (imgIndex) => {
    updateIndexWithFade(imgIndex);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  const renderStars = (count) => "★".repeat(count) + "☆".repeat(5 - count);

  return (
    <div>
      <div className='carousel-section'>
        <div>
            <Nav />
          </div>
        <div className='carousel-hero'>
          <img
            src={images[index].src}
            alt='background'
            className={`carousel-bg ${fade ? 'fade-in-image' : 'fade-out-image'}`}
          />
          <div className='gradient-overlay'></div>
          
          <div className='carousel-nav'>
            <button className='nav-arrow left' onClick={prevSlide}><FaArrowLeft /></button>
            <button className='nav-arrow right' onClick={nextSlide}><FaArrowRight /></button>
          </div>
          <div className={`carousel-caption ${fade ? 'fade-in-text' : 'fade-out-text'}`}>
            <h1 style={{ fontSize: "4rem", fontFamily: "serif", marginRight: "4rem" }}>{images[index].label}</h1>
            <p>{images[index].para}</p>
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

      <div className='bg-image'>
        <div ref={ref} className={`scroll-slide-in ${isVisible ? 'visible' : ''}`}>
          <h4 className='h1'>About Us</h4>
          <p style={{ color: "gray", fontSize: "15px" }}>
            Rainbow Technologies is involved in structural, hydraulic and Technical design of <br />
            Swimming Pools, Fountain Technology, Jacuzzi Pools, and Irrigation Systems for <br />
            the last 20 years. Apart from Design we are extensively involved in implementation <br />
            of the above.
          </p>
          <p style={{ color: "gray", fontSize: "15px" }}>
            Aesthetically and Technologically advanced Swimming Pool Designs are our basic <br />
            strength. We are involved in Commercial and Residential pools. Each pool is designed <br />
            and executed with the requirement of our clients and architects.
          </p>
          <Link to="/about"><button className='button'>Know More</button></Link>
        </div>
        <img src="/images/WhatsApp Image 2023-12-06 at 11.20.58(1).jpeg" alt="image" width={400} style={{ borderRadius: "20px" }} />
      </div>

      <div className='bg-image-1'>
        <h3 style={{ marginLeft: "30px", fontFamily: "sans-serif" }}>We Offer Best Services </h3>
        <div className='service-position-1'>
          {services.map((u) => (
            <Link to={u.url} key={u.id} style={{ textDecoration: "none" }}>
              <div className='service-card-1'>
                <img src={u.src} alt='service' className='service-image' />
                <h2 className='service-title'>{u.name}</h2>
              </div>
            </Link>
          ))}
          <Link to='/Services' className='btn btn-primary btn-inline-primary' style={{ marginTop: "70px", height: "50px", width: "200px" , textAlign:"center" }}>
            Know More
          </Link>
        </div>
      </div>

      <div style={{ margin: "2rem" }}>
        <video width="100%" autoPlay muted controls loop style={{ borderRadius: "20px" }}>
          <source src="https://res.cloudinary.com/dfzliqupz/video/upload/v1753163375/Raibow_Landscape_Innovations_-_01_1_1_wkz1ib.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={{ width: "60%", margin: "auto", padding: "40px 0" }}>
        <h2 style={{ textAlign: "center", fontFamily: "arial", marginBottom: "20px" }}>What Our Customers Say</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} style={{ textAlign: "center", padding: "20px" }}>
              <h3>{review.name}</h3>
              <div style={{ fontSize: "24px", color: "#FFD700" }}>
                {renderStars(review.rating)}
              </div>
              <p style={{ fontStyle: "italic", marginTop: "10px" }}>
                "{review.comment}"
              </p>
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
