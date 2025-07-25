{/*import React, { useEffect, useRef } from 'react';
import './TrackRecord.css';
import { FaUserTie, FaBriefcase, FaHandshake, FaMapMarkerAlt ,FaCalendarAlt, FaCheckCircle, FaSpinner, FaUsers } from 'react-icons/fa';

const stats = [
   {
    icon: <FaCalendarAlt/>,
    count: '23',
    label: 'Years of Activity',
  },
  {
    icon: <FaCheckCircle />,
    count: '3500+',
    label: 'Completed Projects',
  },
  {
    icon: < FaSpinner />,
    count: '100+',
    label: 'Ongoing Projects ',
  },
  {
    icon: <FaHandshake />,
    count: '3000+',
    label: 'Clients',
  }
];

const TrackRecord = () => {

  const sectionRef = useRef();

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.track-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);
  return (
    <section className="track-alt-section" ref={sectionRef}>
      <h2 className="track-title">Company Track Record</h2>
      <div className="track-grid">
        {stats.map((stat, index) => (
          <div className="track-item" key={index}>
            <div className="track-icon">{stat.icon}</div>
            <h3 className="track-count">{stat.count}</h3>
            <p className="track-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrackRecord;*/}

import React, { useEffect, useRef, useState } from 'react';
import './TrackRecord.css';
import { FaUserTie, FaBriefcase, FaHandshake, FaMapMarkerAlt ,FaCalendarAlt, FaCheckCircle, FaSpinner, FaUsers } from 'react-icons/fa';

const stats = [
   {
    icon: <FaCalendarAlt/>,
    count: '23',
    label: 'Years of Activity',
  },
  {
    icon: <FaCheckCircle />,
    count: '3500',
    label: 'Completed Projects',
  },
  {
    icon: < FaSpinner />,
    count: '100',
    label: 'Ongoing Projects ',
  },
  {
    icon: <FaHandshake />,
    count: '3000',
    label: 'Clients',
  }
];


// AnimatedCount inside same file, takes `trigger` to restart animation
function AnimatedCount({ targetNumber, duration = 1500, trigger }) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      startTimeRef.current = null;
      return;
    }

    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * targetNumber));
      if (progress < duration) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetNumber); // ensure final value
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetNumber, duration, trigger]);

  return <>{count}+</>;
}

export default function TrackRecord() {
  const sectionRef = useRef();
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.track-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            setVisibleIndexes((prev) => {
              if (!prev.includes(index)) return [...prev, index];
              return prev;
            });
          } else {
            entry.target.classList.remove('fade-in-up');
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="track-alt-section" ref={sectionRef}>
      <h2 className="track-title">Company Track Record</h2>
      <div className="track-grid">
        {stats.map((stat, index) => (
          <div className="track-item" key={index} data-index={index}>
            <div className="track-icon">{stat.icon}</div>
            <h3 className="track-count">
              <AnimatedCount targetNumber={stat.count} trigger={visibleIndexes.includes(index)} />
            </h3>
            <p className="track-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
