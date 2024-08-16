import React from "react";
import "./Hero.css";
import profileimg from "../../assets/profile_img.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id="home"className="hero">
      <img src={profileimg} alt="" />
      <h1>My name is Slim shady From Bengaluru</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, eum at.
        Laboriosam sequi eaque perferendis{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
