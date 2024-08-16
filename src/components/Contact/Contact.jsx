import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import phone_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  return (
    <div  id="contact"className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            iure quae recusandae omnis beatae, eveniet culpa laudantium
            consequuntur eligendi fugiat! Inventore repudiandae fuga pariatur
            nesciunt? Blanditiis in voluptatum atque quae.
          </p>
          <div className="contact-details">
          <div className="contact-detail">
            <img src={mail_icon} alt="" />
            <p>2004raotarun@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={phone_icon} alt="" />
            <p>01223455</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" />
            <p>Bengaluru</p>
          </div>
            
          </div>

        </div>

        <form className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="your name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="your email" />
          <label htmlFor="">Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
