import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              ad similique dolores nesciunt alias repellat esse excepturi totam,
              ?
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              quibusdam praesentium amet eos saepe dolorum nostrum recusandae
              repellat delectus ab. Aspernatur facere nesciunt aliquam
              praesentium
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>html&css</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="about-skill">
              <p>React.js</p>
              <hr style={{ width: "75%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>

          <p>years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>60+</h1>

          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Happy clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
