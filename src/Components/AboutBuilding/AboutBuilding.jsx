import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutBuilding = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    setTheme(selectedTheme);
  }, []);
  return (
    <div>
      <div>{/* Todo: facilities goes here */}</div>
      <div>
        <div className="hero ">
          <div className="hero-content textColor">
            <div className="max-w-xl">
              <p className="text-2xl font-semibold">About Building</p>
              <h1
                className="lg:text-6xl font-normal "
                style={{ lineHeight: "80px" }}
              >
                Discover Our <br /> Apartments.
              </h1>
              <p className="py-6 text-xl mb-4">
                Nestled in the heart of Mexico, Our building boasts a unique
                blend of historic charm and modern amenities. Built in 2024, it
                offers residents a comfortable and stylish living experience.
              </p>
              <Link
                className={`button-banner lg:px-5 lg:py-4 py-3 px-3 rounded-xl font-bold  ${
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
