import React, { useState } from 'react';
import Nav from './nav';
import Footer from './footer';
import Feed from './feedback';
import './enquiry.css';

const location = [
  {
    name: "Bangalore",
    place: "Main office: No. 1, 1st Floor, Deepa Towers, Esther Enclave, Horamavu, Bangalore – 560043",
    number: "+91 96630 00039"
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

    fetch("https://script.google.com/macros/s/AKfycbzfsae7iN_EuEvyj1yHejQN9DyLzxgDMkoizLhCzy2Z5a5T2VRWohaM1GTkpWAbMgd5dg/exec", {
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
    <div style={{
      backgroundImage: `url('/images/rm222-mind-26.jpg')`,
      backgroundSize: "110% 100%",
      backgroundRepeat: "no-repeat"
    }}>
      <Nav />

      <div style={styles.container}>
        <div className="left-image">
          <img src="/images/Screenshot 2025-07-17 172044 (1)-Pica.png" alt="service" />
        </div>

        <div style={styles.contactBox}>
          <h1 style={styles.heading}>Contact Us</h1>
          <p style={styles.subText}>Fill in the form below and we’ll get in touch with you shortly</p>
          <form style={styles.form} onSubmit={handleSubmit}>
            <input placeholder="Your Name" name="Name" type="text" required style={styles.input} />
            <input placeholder="Your Email" name="Email" type="text" required style={styles.input} />
            <input placeholder="Your Phone" name="Phone" type="text" required style={styles.input} />
            <textarea name="Message" placeholder="Your message or requirements..." required style={styles.textarea}></textarea>
            <button type="submit" style={styles.button}>{buttonText}</button>
          </form>
        </div>
      </div>

      <div className='locate-position' style={{ textAlign: "center" }}>
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
            </div>
          ))}
        </div>
      </div>

      <Feed />
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    margin: 'auto',
    padding: '30px',
    fontFamily: 'Arial',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: 'wrap'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '10px',
  },
  subText: {
    textAlign: 'center',
    fontSize: '14px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '300px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    height: '100px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  contactBox: {
    marginTop: '30px',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
};

export default ServiceEnquiry;
