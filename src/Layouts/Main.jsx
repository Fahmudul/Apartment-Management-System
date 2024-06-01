import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import "./Main.css";
import Footer from "../Components/Shared/Footer/Footer";
const Main = () => {
  return (
    <div className="main-screen min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
