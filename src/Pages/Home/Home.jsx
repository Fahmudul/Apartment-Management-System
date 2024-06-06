import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import AboutBuilding from "../../Components/AboutBuilding/AboutBuilding";
import MapContainer from "../../Components/MapContainer/MapContainer";
const Home = () => {
  return (
    <div className=" min-h-screen w-[90%]  mx-auto ">
      <Helmet>
        <title>Damn | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="slider-auto min-h-[340px] ">
        <Banner />
      </div>
      <div className="lg:mt-[100px]">
        <AboutBuilding />
      </div>
      <div className="googleMap">
        <MapContainer />
      </div>
    </div>
  );
};

export default Home;
