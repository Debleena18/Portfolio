import React from "react";
import './Profile.css';
import Typical from "react-typical";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { pink } from "@mui/material/colors";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <InstagramIcon
                sx={{ color: pink[500] }}
                onClick={(e) =>
                  (window.location.href =
                    "https://www.instagram.com/i_m_debleena_sarkar/")
                }
              />
              <GitHubIcon
                onClick={(e) =>
                  (window.location.href = "https://github.com/Debleena18")
                }
              />
              <LinkedInIcon
                color="primary"
                onClick={(e) =>
                  (window.location.href =
                    "https://www.linkedin.com/in/debleena-sarkar-69172b175/")
                }
              />
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am{" "}
              <span className="highlighted-text">Debleena Sarkar</span>.
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-End Developer 💻",
                    1000,
                    "React Js Developer 🖥️",
                    1000,
                    "Ethusiastic Dev 😎",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building Front-end Applications.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="resume.pdf" download="Debleena resume.pdf">
              <button className="btn highlighted-btn ">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
