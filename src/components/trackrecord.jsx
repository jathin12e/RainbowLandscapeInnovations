import React from 'react';
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
  return (
    <section className="track-alt-section">
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

export default TrackRecord;
