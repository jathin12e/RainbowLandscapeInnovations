import React, { useState } from 'react';
import Nav from './nav';
import Footer from './footer';
import Feed from './feedback';
import './enquiry.css';

const location = [
  {
    name: "Bangalore",
    place: "Main office: No. 1, 1st Floor, Deepa Towers, Esther Enclave, Horamavu, Bangalore – 560043",
    number: "+91 96630 00039",
    number1:"+91 98450 57127"
  },
  {
    name: "Hyderabad",
    place: "Branch Office: #401, 4th Floor, Central Park - Phase 2, Kondapur, Telangana, Pincode: 500084",
    number: "+91 98450 57127"
  }
];

const ServiceEnquiry = () => {
  const [buttonText, setButtonText] = useState("Submit");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setButtonText("Sending...");
    const formEle = e.target;
    const formData = new FormData(formEle);
    fetch("https://script.google.com/macros/s/AKfycbwiteX5wiYm0J8a1r8MbaiJKlxJezpFFpbVoZAL4o5j2st8xYbo1RP-sjmdOh0GfkbGhg/exec", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        setButtonText("Thank you");
        formEle.reset();
        setTimeout(() => setButtonText("Submit"), 2000);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit feedback.");
      })
      .finally(() => setLoading(false));
  };

  return (

        <div>
          <Nav />
        <div>
      

      <div className="enquiry-container">
        <div className="left-image">
          <img src="https://res.cloudinary.com/dfzliqupz/image/upload/v1754120836/Screenshot_2025-07-17_172044_1_-Pica_dfbdjv.png" alt="service" />
        </div>

        <div className="right-form">
          <h1>Contact Us</h1>
          <p>Fill in the form below and we’ll get in touch with you shortly</p>
          <form onSubmit={handleSubmit} className="form">
            <input placeholder="Your Name" name="Name" type="text" required />
            <input placeholder="Your Email" name="Email" type="text" required  />
            <input placeholder="Your Phone" name="Phone" type="text" required />
            <textarea name="Message" placeholder="Your message or requirements..." required ></textarea>
            <button type="submit">{buttonText}</button>
          </form>
        </div>
      </div>

      <div className='locate-position' style={{ textAlign: "center", marginBottom:"2rem" }}>
        <h1 style={{ fontFamily: 'sans-serif' }}>Office Locations</h1>
        <p style={{ color: "grey" }}>
          We have strong presence across India with multiple branches in major cities. Our regional offices<br />
          ensure quick service, better coordination, and on-ground project support for every client
        </p>
        <div className='locate1'>
          {location.map((u, index) => (
            <div className='locate2' key={index}>
              <h4>{u.name}</h4>
              <p style={{ color: "grey" }}>{u.place}</p>
              <p>{u.number}</p>
              <p>{u.number1}</p>
            </div>
          ))}
        </div>
      </div>

      <Feed />
      <Footer />
    </div>
    </div>
  );
};

export default ServiceEnquiry;
