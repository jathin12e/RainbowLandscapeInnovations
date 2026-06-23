import React, { useState, useEffect, useRef } from 'react';
import Nav from './nav.jsx';
import './home.css';
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Scroll from './scroll.jsx';
import Footer from './footer.jsx';
import Carousels from './carousels.jsx';
import Clients from './clients.jsx';

const services = [
  { 
    id: 1, 
    src: "https://res.cloudinary.com/dfzliqupz/image/upload/v1754117762/Screenshot_2025-07-19_233358_f1tiqx.png", 
    name: "Design and Consultancy", 
    url: "/services/design",
    description: "Expert architectural and engineering design solutions"
  },
  { 
    id: 2, 
    src: "https://res.cloudinary.com/dfzliqupz/image/upload/v1754121263/Screenshot_2025-07-20_000944_nmxvkk.png", 
    name: "Swimming Pool", 
    url: "/services/pool",
    description: "Luxury swimming pool design and construction"
  },
  { 
    id: 3, 
    src: "https://res.cloudinary.com/dfzliqupz/image/upload/v1753532867/istockphoto-480651803-612x612_jb7tk4.jpg", 
    name: "Landscape Irrigation", 
    url: "/services/landscape",
    description: "Smart and sustainable irrigation systems"
  },
  { 
    id: 4, 
    src: "/Screenshot 2025-07-21 004518.png", 
    name: "Fountain Technology", 
    url: "/services/fountain",
    description: "Innovative water feature and fountain solutions"
  },
  { 
    id: 5, 
    src: "/Screenshot 2025-07-21 010559.png", 
    name: "Bio Ponds", 
    url: "/services/bioponds",
    description: "Eco-friendly biological pond systems"
  }
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
  const [ref, isVisible] = Scroll();
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Horizontal scroll functionality for services
  const scrollServices = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      const container = scrollContainerRef.current;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  // Settings for testimonials slider - NO ARROWS, NO DOTS
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    fade: true,
    cssEase: "ease-in-out"
  };

  const renderStars = (count) => {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += i < count ? '★' : '☆';
    }
    return stars;
  };

  return (
    <div className="home-container">
      {/* Navigation */}
      <Nav />

      {/* Hero Carousel */}
      <Carousels />

      {/* Clients Section with Auto-Scrolling Marquee */}
      

      {/* About Section */}
      <div className='bg-image'>
        <div ref={ref} className={`scroll-slide-bottom ${isVisible ? 'visible' : ''}`}>
          <div className="about-badge">ABOUT US</div>
          <h4 className='h1'>Building Excellence</h4>
          <p style={{ color: "#4a5568", fontFamily: "Arial", fontSize: "16px", margin: "30px", textAlign: "left", lineHeight: "1.8" }}>
            Rainbow Technologies is involved in structural, hydraulic and technical design of 
            swimming Pools, fountain technology, jacuzzi pools, and irrigation systems for 
            the last 23 years. Apart from design we are extensively involved in implementation 
            of the above.
            <br /><br />
            Aesthetically and Technologically advanced swimming pool Designs are our basic 
            strength. We are involved in commercial and residential pools. Each pool is designed 
            and executed with the requirement of our clients and architects.
          </p>
          <Link to="/about">
            <button className='button-2'>
              <span>Know More</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </Link>
        </div>
        <div className="about-image-wrapper">
          <img 
            src="https://res.cloudinary.com/dfzliqupz/image/upload/v1754121813/WhatsApp_Image_2023-12-06_at_11.20.58_1_rgjq6l.jpg" 
            alt="Rainbow Technologies" 
            className='img-4' 
          />
          <div className="about-image-badge">
            <span>23+ Years</span>
          </div>
        </div>
      </div>

      {/* Services Section with Horizontal Scroll */}
      <div className='services-horizontal-section'>
        <div className='services-header'>
          <div className='services-header-content'>
            <span className='services-badge'>OUR SERVICES</span>
            <h2 className='services-title'>We Offer Best <span className='highlight'>Services</span></h2>
            <p className='services-description'>Comprehensive solutions for all your landscape and water feature needs</p>
          </div>
          <div className='services-nav-buttons'>
            <button 
              className={`scroll-btn ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scrollServices('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
            >
              <FaChevronLeft />
            </button>
            <button 
              className={`scroll-btn ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scrollServices('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className='services-scroll-wrapper'>
          <div className='services-scroll-container' ref={scrollContainerRef}>
            {services.map((service, index) => (
              <Link to={service.url} key={service.id} style={{ textDecoration: 'none' }}>
                <div className='service-card-horizontal'>
                  <div className='service-card-image-wrapper'>
                    <img src={service.src} alt={service.name} className='service-card-image' />
                    <div className='service-card-overlay'>
                      <span className='service-number'>0{index + 1}</span>
                    </div>
                  </div>
                  <div className='service-card-content'>
                    <h3 className='service-card-title'>{service.name}</h3>
                    <p className='service-card-description'>{service.description}</p>
                    <div className='service-card-link'>
                      <span>Learn More</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                  <div className='service-card-glow'></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className='scroll-progress'>
          <div className='scroll-progress-bar' style={{ 
            width: scrollContainerRef.current ? 
              `${(scrollContainerRef.current.scrollLeft / (scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth)) * 100}%` 
              : '0%' 
          }}></div>
        </div>
      </div>
      <Clients />
      {/* Video Section */}
      <div className="video-section">
        <div className="video-wrapper">
          <video width="100%" autoPlay muted controls loop>
            <source src="/InShot_20250809_163326059.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Testimonials Section - NO ARROWS, NO DOTS */}
      <div className="testimonials-section">
        <div className="testimonials-header">
          <span className="testimonials-badge">TESTIMONIALS</span>
          <h2 className="testimonials-title">What Our <span className="highlight">Customers Say</span></h2>
          <p className="testimonials-description">Real feedback from our valued clients</p>
        </div>
        <div className="testimonials-slider-wrapper">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {renderStars(review.rating)}
                </div>
                <p className="testimonial-comment">"{review.comment}"</p>
                <h3 className="testimonial-name">{review.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;