import React from "react";
import "./Service.css";
import Resume from './resume.pdf';
import Card from "../Card/Card";
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";

const Service = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>service</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download="Debleena resume.pdf">
          <button className="button s-button">Download CV</button>
        </a>
        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        {/* first card */}
        {/* <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        > */}
        <div style={{left:'20rem'}}>
          <Card
            emoji={Glasses}
            heading={"Design"}
            detail={"Photoshop, Adobe Illustrator, Adobe xd"}
          />
          </div>
        {/* </motion.div> */}
        {/* second card */}
        {/* <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        > */}
        <div style={{top:'12rem', left:'4rem'}}>
          <Card
            emoji={HeartEmoji}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, ReactJs"}
          />
          </div>
        {/* </motion.div> */}
        {/* 3rd */}
        {/* <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        > */}
         <div style={{top:'19rem', left:'20rem'}}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          </div>
        {/* </motion.div> */}
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        
      </div>
    </div>
  );
};

export default Service;
