import React, { useEffect, useRef, useState } from 'react';
import Nav from './nav.jsx';
import Footer from './footer.jsx';
import './clientspage.css';
import { FaBuilding, FaTrophy, FaGem } from 'react-icons/fa';
import { MdLocationCity, MdVerified } from 'react-icons/md';

const ClientsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const clients = [
    "Sycon PMC Projects",
    "Marasa Tirupathi Star Hotel",
    "Paramount Buildwell Mumbai",
    "Pristina Hotel Goa",
    "Earth Line Services",
    "Nambiar Builders",
    "Aditya Developers",
    "Ozone Group",
    "Adarsh Group",
    "Goan Real Estate and Construction",
    "Sreenidhi International Institute of Science and Technology",
    "InfoTech Group",
    "Chourasia Group",
    "Srinivas Developers",
    "Malaris Construction Nagaland",
    "Pragathi Developers",
    "Bangalore International Airport",
    "Hyderabad Sudheer Reddy Residency",
    "Arvind Constructions Hyderabad",
    "CCCL Company Hyderabad",
    "GMR Group Bangalore & Hyderabad",
    "Karle Group",
    "Bagmane Group",
    "QVC Reality Bangalore",
    "Indian Gymkhana Club",
    "Ajmal Group",
    "Abhi Developers",
    "Dream Flower Resorts",
    "DRN Infrastructure",
    "DRN Hospitalities",
    "IOCL Projects",
    "Star Worth Infrastructure",
    "Pastina Beach Resorts",
    "Hotel W Goa",
    "Ocean Park Residency Goa",
    "Grand Hyatt",
    "Kaveri Seeds",
    "Kumar Builders",
    "Concorde Group",
    "Brigade Group",
    "L&T",
    "Dasari Builders",
    "Vaishnavi Group",
    "Divyasree",
    "Salarpuriya",
    "Indian Builders Corporation",
    "Puravankara",
    "IDEB",
    "ETA Constructions",
    "IVRCL Group",
    "Value Design Build",
    "RMZ",
    "HCL Technologies",
    "Century Group",
    "Hinduja Group",
    "Raksha Group",
    "Ahad Builders and Developers",
    "Astro Builders and Developers",
    "Ittina Developers",
    "MANA Properties and Developers",
    "Embassy Group",
    "KIMS Group",
    "BGR Group",
    "Sridhar Chaithanya Residency",
    "Apollo Group",
    "Ace Constructions",
    "Reliance IT Park Mumbai",
    "Pramodh Residency",
    "Ramesh Sundaramurthy (MPL)",
    "eMudhra",
    "IndusGene Group",
    "Highraise Infrastructures",
    "Titan Group",
    "Nagaraj Residency",
    "Johnson Pool",
    "The Sreenidhi International School",
    "Crysalis School",
    "VIBGYOR High International School",
    "BGS International School",
    "Greenwood International School",
    "Sunrise International School",
    "Doric Infra - VIBGYOR School",
    "Florence School",
    "GPS International School",
    "Clarence High School",
    "Concord International School",
    "PSS Residential School",
    "Taj GVK Hotels",
    "Royal Orchid Hotels",
    "Carmel School",
    "Suchitra International School",
    "Mandya Residency",
    "JSW Bellary",
    "Grand Canopy Hyderabad",
    "RDB Ocarina Hyderabad",
    "Theerth House Coimbatore",
    "Embassy Boulevard",
    "Mr. Shankar Residency",
    "Bubble Brewery",
    "RGA Marriott Hotel Tirupati",
    "Aditya Reserve Hyderabad",
    "Concorde Equity"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Nav />
      <section className="clients-page-section" ref={sectionRef}>
        <div className="clients-page-container">
          {/* Header */}
          <div className="clients-page-header">
            <div className="header-badge">
              <span className="badge-icon">✦</span>
              <span className="clients-page-subtitle">OUR PRESTIGIOUS CLIENTS</span>
            </div>
            
            <h1 className="clients-page-title">
              Trusted By <span className="highlight">Industry Leaders</span>
            </h1>
            
            <p className="clients-page-description">
              Partnering with India's most respected organizations across real estate, 
              hospitality, education, and infrastructure sectors
            </p>

            {/* Stats */}
            <div className="header-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaBuilding />
                </div>
                <span className="stat-number">100+</span>
                <span className="stat-label">Prestigious Clients</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-icon">
                  <FaTrophy />
                </div>
                <span className="stat-number">23+</span>
                <span className="stat-label">Years of Trust</span>
              </div>
              <div className="stat-divider"></div>
              
            </div>
          </div>

          {/* Client Grid */}
          <div className={`clients-page-grid ${isVisible ? 'fade-up' : ''}`}>
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="clients-page-card"
                style={{ animationDelay: `${(index % 20) * 0.03}s` }}
              >
                <div className="card-icon-wrapper">
                  <div className="card-icon">
                    <FaGem />
                  </div>
                </div>
                <span className="clients-page-name">{client}</span>
                <div className="card-hover-line"></div>
                <div className="card-verified">
                  <MdVerified />
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <div className="trust-icon">🏆</div>
              <div className="trust-content">
                <h4>Industry Recognition</h4>
                <p>Award-winning solutions for 23+ years</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🤝</div>
              <div className="trust-content">
                <h4>Long-term Partnerships</h4>
                <p>Building lasting relationships with clients</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">⭐</div>
              <div className="trust-content">
                <h4>Excellence Guaranteed</h4>
                <p>Committed to quality and innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ClientsPage;