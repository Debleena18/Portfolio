import React from "react";
import "./Footer.css";
import Wave from "../../assets/img/wave.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sarkardebleena18@gmail.com</span>
        <div className="f-icons">
        <InstagramIcon
                style={{ color: 'white' }}
                sx={{ fontSize: "40px" }}
                onClick={(e) =>
                  (window.location.href =
                    "https://www.instagram.com/i_m_debleena_sarkar/")
                }
              />
              <GitHubIcon
              style={{ color: 'white' }}
              sx={{ fontSize: "40px" }}
                onClick={(e) =>
                  (window.location.href = "https://github.com/Debleena18")
                }
              />
              <LinkedInIcon
                style={{ color: 'white' }}
                sx={{ fontSize: "40px" }}
                onClick={(e) =>
                  (window.location.href =
                    "https://www.linkedin.com/in/debleena-sarkar-69172b175/")
                }
              />
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
