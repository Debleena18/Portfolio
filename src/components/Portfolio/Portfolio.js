import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Ecommerce from "../../assets/img/ecommerce.png";
import NetflixClone from "../../assets/img/NetflixClone.png";
import GymApp from "../../assets/img/GymApp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img
            src={Ecommerce}
            alt=""
            width="400rem"
            heigh="400rem"
            filter="drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))"
            border-radius="15px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://gym-master1c2691.netlify.app/">
            <img
              src={GymApp}
              alt=""
              width="400rem"
              heigh="400rem"
              filter="drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))"
              border-radius="15px"
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://netflix-movieapp.web.app/">
            <img
              src={NetflixClone}
              alt=""
              width="480rem"
              heigh="400rem"
              filter="drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))"
              border-radius="15px"
            />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
