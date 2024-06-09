import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
// import required modules
import {
  EffectCreative,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import apartment_1 from "../../assets/apartment-1.jpg";
import apartment_2 from "../../assets/apartment-2.jpg";
import apartment_3 from "../../assets/apartment-3.jpg";
import apartment_4 from "../../assets/apartment-4.jpg";
// import apartment_1
const Banner = () => {
  const [theme, setTheme] = useState("");
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  //Check current theme
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    setTheme(selectedTheme);
  }, []);
  return (
    <div className="banner-container grid grid-cols-2">
      <div
        className="banner-text flex flex-col justify-center items-center"
        // style={{ border: "1px solid red" }}
      >
        <div className="lg:w-[65%] xsm:w-[90%] xsm:py-7">
          <h1
            style={{ fontFamily: "Josefin Sans" }}
            className={`lg:tracking-[10px] xsm:tracking-widest font-josefin uppercase sm:text-2xl lg:text-xl tracking- sm:text-center xsm:text-center lg:text-left ${
              theme == "light" ? "text-[#b18045]" : "text-[#6a58dd] "
            }`}
          >
            Your Dream Home Awaits
          </h1>
          <h1
            style={{ fontFamily: "Josefin Sans" }}
            className={`lg:text-[120px] lg:h-[200px] lg:leading-[110px] sm:text-center lg:text-left  lg:font-light mt-10 mb-12 xsm:text-center xsm:text-3xl xsm:font-semibold ${
              theme == "light" ? "text-[#b18045]" : "text-[#6a58dd]"
            }`}
          >
            Luxury Apartments
          </h1>
          <div className="xsm:flex xsm:justify-center  lg:block gap-5 lg:gap-0">
            <button
              className={`button-banner lg:px-5 lg:py-4 py-3 px-3 rounded-xl font-bold mr-2 xsm:text-xs lg:text-lg   ${
                theme === "light"
                  ? "hover:outline outline-[#d19b59] text-[#ECE3CA]  hover:transition-all hover:duration-500 bg-[#b18045] hover:bg-transparent hover:text-[#b18045]"
                  : "hover:outline outline-[#6a58dd] text-[#352f91] hover:transition-all hover:duration-500 bg-[#6a58dd] hover:bg-transparent hover:text-[#6a58dd]"
              } `}
            >
              TAKE A TOUR
            </button>
            <button
              className={`button-banner lg:px-5 lg:py-4  rounded-xl font-bold py-3 px-3 xsm:text-xs lg:text-lg xsm:hidden md:inline  ${
                theme === "light"
                  ? "hover:bg-[#b18045] text-[#b18045] hover:text-[#ECE3CA] hover:transition-all hover:duration-500"
                  : "hover:bg-[#6a58dd] text-[#6a58dd] hover:text-[#352f91] hover:transition-all hover:duration-500"
              } `}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <div className="carouselContainer flex justify-end">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={apartment_1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={apartment_2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={apartment_3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={apartment_4} alt="" />
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
