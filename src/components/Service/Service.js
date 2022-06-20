import React, { useContext } from "react";
import "./Service.css";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import Card from "../Card/Card";
import { Link } from "react-scroll";
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";

const Service = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>service</span>
        <spane>
          I have worked for our client ASDA (UK retail unit of Walmart)
          <br />
          and have successfully delivered the projects.
        </spane>
        <a href={Resume} download="Debleena resume.pdf">
          <button className="button s-button">Download CV</button>
        </a>
        <Link to="contact" smooth={true} spy={true}>
        <button className="button s-button">Hire Me</button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
        <div style={{left:'20rem'}}>
          <Card
            emoji={Glasses}
            heading={"Development"}
            detail={"Developed TMS App, BWS Markdown App for our client"}
          />
          </div>
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
        <div style={{top:'12rem', left:'4rem'}}>
          <Card
            emoji={HeartEmoji}
            heading={"Skills"}
            detail={"Html, Css, JavaScript, ReactJs, SQL"}
          />
          </div>
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
         <div style={{top:'19rem', left:'20rem'}}>
          <Card
            emoji={Humble}
            heading={"Database Migration"}
            detail={
              "Worked on the Db Migration of NewsFlash App from Maria Db to Axure SQL and successfully deliver it."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
          </div>
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        
      </div>
    </div>
  );
};

export default Service;
