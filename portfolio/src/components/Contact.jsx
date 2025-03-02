import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Mobile No." />
          <input type="text" placeholder="Email Subject" />
        </div>
        <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
