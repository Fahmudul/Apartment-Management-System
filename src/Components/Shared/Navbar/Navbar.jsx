import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import DarkLightSwitch from "../../DarkLightSwitch/DarkLightSwitch";
import webLogo from "../../../assets/buildingLogo.svg";
import useAuthInfo from "../../../Hooks/useAuthInfo/useAuthInfo";
import ButtonPrimary from "../../ButtonPrimary/ButtonPrimary";
import { useState } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import Loader from "../../Loader/Loader";
import LoaderNavbar from "../../LoaderNavbar/LoaderNavbar";
const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const handlePress = () => {
    setDropDown(!dropDown);
  };
  const { user, SignOut, loading } = useAuthInfo();
  //Redirect to home page button
  const home = () => {
    window.location.href = "/";
  };

  const handleSignout = () => {
    SignOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-[90%]  mx-auto mb-10 pt-3">
      <nav className="navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </label>

        <div className="logo" onClick={home}>
          <h2 style={{ textDecoration: "none" }}>C̲o̲z̲y̲N̲e̲s̲t̲ ̲</h2>
          <img src={webLogo} alt="logo" />
        </div>
        <div className="nav-items flex">
          <div className="profile-img textColor text-center min-h-[120px] ">
            <img
              className="w-20 rounded-full mb-2"
              src={user?.photoURL}
              alt=""
            />
            <span className="mt-5 font-mono text-xl tracking-[10px] italic font-semibold">
              {user?.displayName}
            </span>
          </div>
          <ul className="overview ">
            <h3>Overview</h3>
            <li>
              <NavLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-house-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/appartment">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-speedometer"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                  <path
                    fillRule="evenodd"
                    d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
                  />
                </svg>
                Appartment
              </NavLink>
            </li>
          </ul>
          <ul className="account">
            <h3>Account</h3>
            <li className="relative">
              {user ? (
                <>
                  <div
                    className="avatar online profile hover:scale-105"
                    onClick={handlePress}
                  >
                    <div
                      className="w-10 mr-2 rounded-full hover:shadow-xl cursor-pointer "
                      title={user?.displayName}
                    >
                      <img className="hover:shadow-xl" src={user?.photoURL} />
                    </div>
                  </div>
                  {dropDown && <Dropdown />}
                </>
              ) : loading ? (
                <LoaderNavbar />
              ) : (
                <>
                  <Link
                    to="/login"
                    className="  w-full rounded-full py-1 active:scale-95 transition-all duration-300 px-3 mt-1"
                    onClick={handleSignout}
                    id="sign-in-btn"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </li>
            <li>
              <DarkLightSwitch />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
