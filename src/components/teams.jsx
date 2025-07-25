import React from 'react';
import './TeamSection.css';

const teamMembers = [
  {
    name: "Ramachandra",
    role: "Managing Director",
    image: "/images/IMG_3998a.jpg",
  },
  {
    name: "Prabhavathi",
    role: "Director",
    image: "/images/1(1).jpeg",
  },
  
];

const TeamSection = () => {
  return (
    <section className="team-simple-section">
      <h2 className="team-title">Meet the Experts</h2>
      <p style={{color:"grey"}}>We show results.Backed by experiences ,Driven by purpose , and Powered by teamwork.
        We are <br />here to help you move forward with confidence </p>
      <div className="team-cards-wrapper">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info-overlay">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
