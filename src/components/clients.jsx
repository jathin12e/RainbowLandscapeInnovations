import React, { useEffect, useRef, useState } from 'react';
import './clients.css';

const Clients = () => {
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

  // Duplicate clients multiple times for seamless scrolling
  const allClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="clients-section" ref={sectionRef}>
      <div className="clients-container">
        <div className="clients-header">
          <span className="clients-subtitle">OUR CLIENTS</span>
          <h2 className="clients-title">Trusted By <span className="highlight">Industry Leaders</span></h2>
          <p className="clients-description">
            We are proud to serve some of the most prestigious organizations across India
          </p>
        </div>

        <div className={`clients-marquee-wrapper ${isVisible ? 'visible' : ''}`}>
          <div className="clients-marquee">
            <div className="clients-marquee-track">
              {allClients.map((client, index) => (
                <div key={index} className="client-marquee-item">
                  <span className="client-marquee-name">{client}</span>
                  <span className="client-marquee-dot">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pause on hover indicator */}
        <div className="marquee-hint">
          <span>⟳ Hover to pause</span>
        </div>
      </div>
    </section>
  );
};

export default Clients;