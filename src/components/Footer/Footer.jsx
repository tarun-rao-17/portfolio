import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A beatae
            animi numquam suscipit nam mol hvfewvflfl molestiae suscipit animi, nam illo perspiciatis! Natus, temporibus? Aliquid!
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="footer-sub">
            <button>Subscribe</button>

          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
      <p className="fooyer-bottom-left">&copy; 2024 Tarun. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
      </div>
    </div>
  );
};

export default Footer;
