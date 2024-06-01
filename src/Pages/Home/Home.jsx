import { Helmet } from "react-helmet";
import DarkLightSwitch from "../../Components/DarkLightSwitch/DarkLightSwitch";
import wave from "../../assets/Wave.svg";
import Banner from "../../Components/Banner/Banner";
const Home = () => {
  return (
    <div className=" min-h-screen w-[90%]  mx-auto ">
      <Helmet>
        <title>Damn | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div
        className="slider-auto min-h-[340px] "
        // style={{
        //   border: "1px solid red",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // }}
      >
        <Banner />
      </div>
    </div>
  );
};

export default Home;
