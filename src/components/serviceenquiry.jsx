import React from "react";
import './enquiry.css'; // assuming you place styles in this CSS file
import Nav from './nav'
import Footer from './footer'

export default function ServiceEnquiry() {
  function Submit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxHX-ZubQ1AaX9CQwgxsWjz_ucOcVlc_iEGeUsgj6yN00QVFf0EAZA1OCq7U8hAM3eFKg/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        alert("Form submitted successfully!");
        formEle.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("not submitted");
      });
  }

  return (
    <div >
      <Nav />
    <div className="enquiry-container">
      
      <div className="left-image">
        
        <img src="/images/5124556.png" alt="service" />
      </div>

      <div className="right-form">
        <h1>Service Enquiry</h1>
        <p>Fill in the form below and we’ll get in touch with you shortly</p>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" required />
          <input placeholder="Your Email" name="Email" type="text" required />
          <input placeholder="Phone Number" name="Phone" type="text" required />

          <select name="Service" required>
            <option value="">Select a Service</option>
            <option value="Swimming Pools">Swimming Pools</option>
            <option value="Swimming Constructions">Swimming Constructions / Design / Consultation</option>
            <option value="Swimming Equipments">Swimming Equipments</option>
            <option value="Fountain Technology">Fountain Technology</option>
            <option value="Jacuzzi Pools">Bio Ponds</option>
            <option value="Irrigation Systems">Irrigation Systems</option>
            <option value="Maintenance">Maintenance</option>
          </select>

          <textarea name="Message" placeholder="Your message or requirements..." required />

          <button type="submit">Submit</button>
        </form>
      </div>
      
    </div>
    <Footer />
  </div>
  );
}
