import React from "react";
import "./Intro.css";
import FloatingDiv from "../Floating/FloatingDiv";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
// import boy from "../../assets/img/boy.png";
import Image from "../../assets/img/Image.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import thumbup from "../../assets/img/thumbup.png";
import crown from "../../assets/img/crown.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>Debleena Sarkar</span>
          <span>
            Frontend Developer with experience in web designing and development,
            producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/Debleena18">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/debleena-sarkar-69172b175/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/i_m_debleena_sarkar/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right"> 
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={Image} alt='' />

        <div>
            <FloatingDiv />
        </div>
      </div>
    </div>
  );
};

export default Intro;