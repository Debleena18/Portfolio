import React, {useState, useEffect} from "react";
import "./Footer.css";
import Wave from "../../assets/img/wave.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  const [topButton, setTopButton] = useState(false);
   useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY>100) {
        setTopButton(true)
      } else {
        setTopButton(false)
      }
    })
   },[])

   const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
   }

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
              {topButton && (
              <ArrowCircleUpIcon sx={{
                position:"fixed",
                bottom:'50px',
                  right: '50px',
                  height: '50px',
                  width: '50px'}}
                  onClick={scrollUp}
                  />
              )}
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
