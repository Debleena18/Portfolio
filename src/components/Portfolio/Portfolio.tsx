import React, { useContext, useState } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Ecommerce from "../../assets/img/ecommerce.png";
import NetflixClone from "../../assets/img/NetflixClone.png";
import GymApp from "../../assets/img/GymApp.png";
import { themeContext } from "../../Context";
import PortfolioModal from "./PortfolioModal";

interface ProjectData {
  img: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      img: Ecommerce,
      title: "E-Commerce App",
      description: "A full-featured e-commerce platform with cart management, payment gateway integration, and user authentication. Built to handle high traffic and secure transactions.",
      tech: ["React", "Redux", "Node.js", "Stripe"],
      link: "https://github.com/Debleena18", // Replace with real link if available
    },
    {
      img: GymApp,
      title: "Fitness Tracker",
      description: "A comprehensive fitness application allowing users to track workouts, monitor progress, and access a library of exercises. Features real-time data visualization.",
      tech: ["React", "Material UI", "RapidAPI"],
      link: "https://gym-master1c2691.netlify.app/",
    },
    {
      img: NetflixClone,
      title: "Streaming Service Clone",
      description: "A responsive clone of a popular streaming service. Implements lazy loading, infinite scrolling, and movie trailers integration.",
      tech: ["React", "TMDB API", "Firebase"],
      link: "https://netflix-movieapp.web.app/",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} onClick={() => setSelectedProject(project)}>
            <img
              src={project.img}
              alt={project.title}
              style={{
                width: "100%",
                height: "15rem",
                objectFit: "cover",
                borderRadius: "15px",
                filter: "drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))",
                cursor: "pointer"
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <PortfolioModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Portfolio;
