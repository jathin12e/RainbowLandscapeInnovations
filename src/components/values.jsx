import React, { useEffect, useRef } from 'react';
import './values.css';

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
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId;
    let scrollAmount = 1;

    const scroll = () => {
      if (container) {
        container.scrollLeft += scrollAmount;

        // Reset to start if end is reached
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="core-values-section">
      <h2 className="core-values-heading">Our Core Values</h2>
      <div className="values-grid auto-scroll" ref={scrollRef}>
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
