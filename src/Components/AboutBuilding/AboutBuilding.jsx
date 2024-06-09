import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Apartmentimg from "../../assets/outlook.jpg";
const AboutBuilding = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    setTheme(selectedTheme);
  }, []);
  return (
    <div className="flex xsm:flex-col md:flex-row items-center justify-center lg:w-[90%] mx-auto lg:gap-x-10 xsm:gap-x-0 xsm:gap-y-5 lg:gap-y-0">
      <div className="overflow-hidden imgBorder lg:w-[50%]">
        {/* Todo: facilities goes here */}
        <img
          src={Apartmentimg}
          className=" imgBorder mx-auto  hover:scale-105 duration-300"
          alt=""
        />
      </div>
      <div>
        <div className="hero ">
          <div className="hero-content textColor">
            <div className="max-w-xl ">
              <p className="text-2xl font-semibold xsm:text-center md:text-left">
                About Building
              </p>
              <h1 className="lg:text-6xl font-normal xsm:leading-[30px] xsm:text-center md:text-left xsm:my-4 xsm:text-xl xsm:font-semibold lg:leading-[80px]">
                Discover Our <br className="xsm:hidden" /> Apartments.
              </h1>
              <p className="lg:py-6 text-xl lg:mb-4 xsm:text-center md:text-left">
                Cozy Nest is a perfect place for those who are looking for their
                cozy and comfortable home. Our apartments are designed to
                provide you with the best and most comfortable living
                experience.
              </p>
              <Link
                className={` lg:px-5 lg:py-4 py-3 px-3 rounded-xl font-bold  ${
                  theme === "light"
                    ? "hover:outline outline-[#d19b59] text-[#ECE3CA]  hover:transition-all hover:duration-500 bg-[#b18045] hover:bg-transparent hover:text-[#b18045]"
                    : "hover:outline outline-[#6a58dd] text-[#352f91] hover:transition-all hover:duration-500 bg-[#6a58dd] hover:bg-transparent hover:text-[#6a58dd]"
                } `}
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;
