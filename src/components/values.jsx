import React from 'react';
import './values.css'; // CSS file below


import { 
  FaHandsHelping, 
  FaUserShield, 
  FaLightbulb, 
  FaPeopleArrows, 
  FaSmile, 
  FaCheckCircle, 
  FaClock 
} from 'react-icons/fa';

const values = [
  {
    icon: <FaHandsHelping className="icon" />,
    title: 'Integrity',
    description: 'We act with honesty and transparency in all our actions.',
  },
  {
    icon: <FaUserShield className="icon" />,
    title: 'Accountability',
    description: 'We take responsibility and deliver on our promises.',
  },
  {
    icon: <FaLightbulb className="icon" />,
    title: 'Innovation',
    description: 'We strive to lead with creativity and new ideas.',
  },
  {
    icon: <FaPeopleArrows className="icon" />,
    title: 'Collaboration',
    description: 'We believe in teamwork and achieving success together.',
  },
  {
    icon: <FaSmile className="icon" />,
    title: 'Customer First',
    description: 'We put our customers at the heart of everything we do.',
  },
  {
    icon: <FaCheckCircle className="icon" />,
    title: 'Quality',
    description: 'We are committed to excellence in every detail.',
  },
  {
    icon: <FaClock className="icon" />,
    title: 'On Time',
    description: 'We respect time and ensure punctual delivery.',
  }
];


export default function CoreValues() {
  return (
    <section className="core-values-section">
      <h2 className="core-values-heading">Our Core Values</h2>
      <div className="values-grid">
        {values.map((value, index) => (
          <div className="value-card" key={index}>
            <div className="icon-wrapper">{value.icon}</div>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
