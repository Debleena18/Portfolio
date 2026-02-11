import React, { useContext } from "react";
import "./Intro.css";
import FloatingDiv from "../Floating/FloatingDiv";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
//import boy from "../../assets/img/boy.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
//import Image from "../../assets/img/Image.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import thumbup from "../../assets/img/thumbup.png";
import Crown from "../../assets/img/crown.png";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" } as const;

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Debleena Sarkar</span>
          <span>
            Frontend Developer with experience in web designing and development,
            producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
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
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={Crown} text1="Front-End" text2="Developer" />
        </motion.div>

        {/* floatinDiv mein change hy dark mode ka */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={thumbup} text1="ReactJs" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
