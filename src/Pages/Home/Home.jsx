import { Helmet } from "react-helmet";
import DarkLightSwitch from "../../Components/DarkLightSwitch/DarkLightSwitch";
import wave from "../../assets/Wave.svg";
const Home = () => {
  return (
    <div className=" min-h-screen w-[90%]  mx-auto ">
      <Helmet>
        <title>Damn | Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div>Content start here</div>
    </div>
  );
};

export default Home;
