import React, { useState, useEffect } from "react";
import './feedback.css';
import Nav from './nav.jsx';
import Footer from './footer.jsx';
import { FaUser, FaStar, FaComment, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Feedback() {
  const [buttonText, setButtonText] = useState("Send Feedback");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");

    const formEle = e.target;
    const formData = new FormData(formEle);

    fetch("https://script.google.com/macros/s/AKfycbxQNiyqdjG0D56S23Bpqd8ok6tt_p6IGS_Rt3wZug8c_m0gY1kEB9RCp0lCmu696CG_/exec", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        setButtonText("✓ Sent!");
        setSubmitted(true);
        formEle.reset();
        setFormData({ name: '', rating: '', feedback: '' });
        setTimeout(() => {
          setButtonText("Send Feedback");
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
        setButtonText("Failed! Try Again");
        setTimeout(() => setButtonText("Send Feedback"), 3000);
      })
      .finally(() => setLoading(false));
  };

  // Rating options
  const ratingOptions = [
    { value: "Excellent", emoji: "🌟", color: "#10b981" },
    { value: "Good", emoji: "👍", color: "#3b82f6" },
    { value: "Average", emoji: "😊", color: "#f59e0b" },
    { value: "Poor", emoji: "😐", color: "#ef4444" },
    { value: "Very Poor", emoji: "😞", color: "#dc2626" }
  ];

  return (
    <div>
      <Nav />
      
      <section className="feedback-section">
        <div className="feedback-container">
          {/* Left Side - Image & Info */}
          <div className="feedback-left">
            <div className="feedback-image-wrapper">
              <img 
                src="https://res.cloudinary.com/dfzliqupz/image/upload/v1754120648/5342014_rmv60s.png" 
                alt="Feedback Illustration" 
                className="feedback-image"
              />
              <div className="feedback-image-badge">
                <FaCheckCircle className="badge-icon" />
                <span>We Value Your Opinion</span>
              </div>
            </div>
            
            <div className="feedback-info">
              <div className="info-item">
                <div className="info-icon">
                  <FaStar />
                </div>
                <div>
                  <h4>Rate Your Experience</h4>
                  <p>Help us improve our services</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FaComment />
                </div>
                <div>
                  <h4>Share Your Thoughts</h4>
                  <p>We value every feedback</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="feedback-right">
            <div className="feedback-form-wrapper">
              <div className="form-header">
                <span className="form-badge">FEEDBACK</span>
                <h1 className="form-title">We Value Your <span>Feedback</span></h1>
                <p className="form-description">Help us serve you better by sharing your experience</p>
              </div>

              <form className="feedback-form" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="form-group">
                  <div className="input-icon">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Rating Select */}
                <div className="form-group">
                  <div className="input-icon">
                    <FaStar />
                  </div>
                  <select
                    name="Rating"
                    required
                    value={formData.rating}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select Your Rating</option>
                    {ratingOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.emoji} {option.value}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Selected Rating Display */}
                {formData.rating && (
                  <div className="selected-rating">
                    {ratingOptions.map((option) => {
                      if (option.value === formData.rating) {
                        return (
                          <div key={option.value} className="rating-display" style={{ borderColor: option.color }}>
                            <span className="rating-emoji">{option.emoji}</span>
                            <span className="rating-text" style={{ color: option.color }}>
                              {option.value}
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}

                {/* Feedback Textarea */}
                <div className="form-group">
                  <div className="input-icon">
                    <FaComment />
                  </div>
                  <textarea
                    name="FeedBack"
                    placeholder="Share your experience, suggestions, or requirements..."
                    required
                    value={formData.feedback}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="5"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className={`submit-btn ${submitted ? 'submitted' : ''}`}
                  disabled={loading}
                >
                  {submitted ? (
                    <>
                      <FaCheckCircle className="btn-icon" />
                      Thank You!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      {buttonText}
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="success-message">
                    <FaCheckCircle />
                    <span>Your feedback has been submitted successfully!</span>
                  </div>
                )}
              </form>

              {/* Trust Indicators */}
              <div className="trust-indicators">
                <div className="trust-item">
                  <span className="trust-number">100%</span>
                  <span className="trust-label">Confidential</span>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                  <span className="trust-number">24/7</span>
                  <span className="trust-label">Support</span>
                </div>
                <div className="trust-divider"></div>
                <div className="trust-item">
                  <span className="trust-number">⭐ 4.8</span>
                  <span className="trust-label">Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}