import { useEffect } from "react";
import "./style.css";
import { Helmet } from "react-helmet";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import getImageUrl from "../../Utils/GetImageUrl/GetImageUrl";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginSignUp = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem("selectedTheme");
    // console.log(currentTheme)
    document.querySelector("body").setAttribute("data-theme", currentTheme);
  });
  const { CreateUser, SignIn, SignInWithGoogle, UpdateUserProfile, SignOut } =
    useAuthInfo();
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    SignIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success("Logged In Successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.file?.files[0];
    const photoUrl = await getImageUrl(photo);
    CreateUser(email, password)
      .then((result) => {
        UpdateUserProfile(userName, photoUrl)
          .then((res) => {
            toast.success("User Created Successfully!");
            setTimeout(() => {
              SignOut()
                .then(() => {})
                .catch((error) => {
                  console.log(error);
                });
              window.location.reload();
            }, 1000);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    SignInWithGoogle()
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        toast.success("Logged In Successfully!", {
          position: "top-center",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".containerr");
    const sign_in_btn2 = document.querySelector("#sign-in-btn2");
    const sign_up_btn2 = document.querySelector("#sign-up-btn2");
    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
    sign_up_btn2.addEventListener("click", () => {
      container.classList.add("sign-up-mode2");
    });
    sign_in_btn2.addEventListener("click", () => {
      container.classList.remove("sign-up-mode2");
    });
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen main-screen">
      <Helmet>
        <title>Damn | Sign in-Sign up</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="containerr">
        <div className="signin-signup">
          {/*Sign In Form*/}
          <form onSubmit={handleSignIn} className="form sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field flex items-center px-4 relative">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                required
                placeholder="Username"
                name="email"
                className="ml-2 absolute left-10 top-[11px]  "
              />
            </div>
            <div className="input-field flex items-center px-4 relative">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className=" absolute left-10 top-[11px] ml-2"
              />
            </div>
            <input type="submit" value="Sign In" className="btnn " />

            <p
              className="social-text before:bg-gradient-to-r before:min-w-[70px] after:min-w-[70px] from-gray-100 to-[#804545] before:mr-2 after:bg-gradient-to-r from-gray-100 to-[#804545] after:ml-2"
              style={{ margin: "20px 0px" }}
            >
              Or Sign in with
            </p>

            <div className="social-media">
              <button
                className="social-icon shadow-lg"
                onClick={handleGoogleSignIn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </button>
              <button className="social-icon shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 30 30"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </button>
              <button className="social-icon shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="_zRckIf366dQufSrDA5IFa_91AZsA4BDGzd_gr1"
                    x1="-10.294"
                    x2="50.002"
                    y1="-10.294"
                    y2="50.002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#262626" stopOpacity="0"></stop>
                    <stop
                      offset="1"
                      stopColor="#262626"
                      stopOpacity=".8"
                    ></stop>
                  </linearGradient>
                  <path
                    fill="url(#_zRckIf366dQufSrDA5IFa_91AZsA4BDGzd_gr1)"
                    d="M36,6H12c-3.314,0-6,2.686-6,6v24c0,3.314,2.686,6,6,6h24c3.314,0,6-2.686,6-6V12 C42,8.686,39.314,6,36,6z M17,36h-5V21c0-1.105,0.895-2,2-2h3V36z M15.122,16.925c-1.861,0.449-3.496-1.186-3.047-3.047 c0.211-0.875,0.928-1.592,1.803-1.803c1.861-0.448,3.495,1.186,3.047,3.047C16.714,15.997,15.997,16.714,15.122,16.925z M36,36h-3 c-1.105,0-2-0.895-2-2l0-6.83c0-1.624-1.216-3.081-2.839-3.166C26.431,23.914,25,25.29,25,27v9h-5V21c0-1.105,0.895-2,2-2h3v2 c0,0,1.5-2,4.5-2c3.866,0,6.5,2.768,6.5,7V36z"
                  ></path>
                  <linearGradient
                    id="_zRckIf366dQufSrDA5IFb_91AZsA4BDGzd_gr2"
                    x1="6.932"
                    x2="83.561"
                    y1="9.182"
                    y2="100.504"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#262626" stopOpacity="0"></stop>
                    <stop
                      offset="1"
                      stopColor="#262626"
                      stopOpacity=".8"
                    ></stop>
                  </linearGradient>
                  <path
                    fill="url(#_zRckIf366dQufSrDA5IFb_91AZsA4BDGzd_gr2)"
                    d="M14,19h3v17h-5V21C12,19.895,12.895,19,14,19z M14.5,12c-1.381,0-2.5,1.119-2.5,2.5 s1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5S15.881,12,14.5,12z M29.5,19c-3,0-4.5,2-4.5,2v-2h-3c-1.105,0-2,0.895-2,2v15h5l0-8.83 c0-1.624,1.216-3.081,2.839-3.166C29.569,23.914,31,25.29,31,27v7c0,1.105,0.895,2,2,2h3V26C36,21.768,33.366,19,29.5,19z"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="account-text">
              {" Don't have an account? "}
              <a
                href="#"
                id="sign-up-btn2"
                className="text-[#a8826c] font-semibold"
              >
                Sign up
              </a>
            </p>
            {/*Sign Up Form*/}
          </form>
          <form onSubmit={handleSignUp} className="form sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field flex items-center px-4 relative">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="text"
                required
                placeholder="Username"
                name="username"
                className="ml-2 absolute left-10 top-[11px] "
              />
            </div>
            <div className="input-field flex items-center px-4 relative">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z"
                  fill="#0F0F0F"
                />
              </svg>
              <input
                type="text"
                placeholder="Email"
                required
                name="email"
                className="absolute left-10 top-[11px] ml-2"
              />
            </div>
            <div className="input-field flex items-center px-4 relative justify-between">
              <h1
                className=""
                style={{
                  color: "#9ca3af",
                  fontSize: "18px",
                  fontWeight: "700px",
                }}
              >
                Upload Your Photo
              </h1>
              <label className="button px-3 py-1 rounded-full" htmlFor="upload">
                Upload Photo
              </label>
              <input
                type="file"
                name="file"
                required
                id="upload"
                className="custom-file-input"
                style={{
                  background: "transparent",
                  width: "50%",
                }}
              />
            </div>
            <div className="input-field flex items-center px-4 relative">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className=" absolute left-10 top-[11px] ml-2"
              />
            </div>
            <input
              type="submit"
              value="Sign up"
              required
              className="btnn"
              style={{ marginTop: "25px" }}
            />
            <p
              className="social-text  before:min-w-[70px] after:min-w-[70px] before:bg-gradient-to-r from-gray-100 to-[#804545] before:mr-2 after:bg-gradient-to-r from-gray-100 to-[#804545] after:ml-2"
              style={{ margin: "20px 0px" }}
            >
              Or Sign in with
            </p>

            <div className="social-media">
              <button className="social-icon shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </button>
              <button className="social-icon shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 30 30"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </button>
              <button className="social-icon shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="_zRckIf366dQufSrDA5IFa_91AZsA4BDGzd_gr1"
                    x1="-10.294"
                    x2="50.002"
                    y1="-10.294"
                    y2="50.002"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#262626" stopOpacity="0"></stop>
                    <stop
                      offset="1"
                      stopColor="#262626"
                      stopOpacity=".8"
                    ></stop>
                  </linearGradient>
                  <path
                    fill="url(#_zRckIf366dQufSrDA5IFa_91AZsA4BDGzd_gr1)"
                    d="M36,6H12c-3.314,0-6,2.686-6,6v24c0,3.314,2.686,6,6,6h24c3.314,0,6-2.686,6-6V12 C42,8.686,39.314,6,36,6z M17,36h-5V21c0-1.105,0.895-2,2-2h3V36z M15.122,16.925c-1.861,0.449-3.496-1.186-3.047-3.047 c0.211-0.875,0.928-1.592,1.803-1.803c1.861-0.448,3.495,1.186,3.047,3.047C16.714,15.997,15.997,16.714,15.122,16.925z M36,36h-3 c-1.105,0-2-0.895-2-2l0-6.83c0-1.624-1.216-3.081-2.839-3.166C26.431,23.914,25,25.29,25,27v9h-5V21c0-1.105,0.895-2,2-2h3v2 c0,0,1.5-2,4.5-2c3.866,0,6.5,2.768,6.5,7V36z"
                  ></path>
                  <linearGradient
                    id="_zRckIf366dQufSrDA5IFb_91AZsA4BDGzd_gr2"
                    x1="6.932"
                    x2="83.561"
                    y1="9.182"
                    y2="100.504"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#262626" stopOpacity="0"></stop>
                    <stop
                      offset="1"
                      stopColor="#262626"
                      stopOpacity=".8"
                    ></stop>
                  </linearGradient>
                  <path
                    fill="url(#_zRckIf366dQufSrDA5IFb_91AZsA4BDGzd_gr2)"
                    d="M14,19h3v17h-5V21C12,19.895,12.895,19,14,19z M14.5,12c-1.381,0-2.5,1.119-2.5,2.5 s1.119,2.5,2.5,2.5s2.5-1.119,2.5-2.5S15.881,12,14.5,12z M29.5,19c-3,0-4.5,2-4.5,2v-2h-3c-1.105,0-2,0.895-2,2v15h5l0-8.83 c0-1.624,1.216-3.081,2.839-3.166C29.569,23.914,31,25.29,31,27v7c0,1.105,0.895,2,2,2h3V26C36,21.768,33.366,19,29.5,19z"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="account-text">
              Already have an account?{" "}
              <a
                href="#"
                id="sign-in-btn2"
                className="text-[#a8826c] font-semibold"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
        <div className="panels-containerr">
          <div className="panel left-panel">
            <div className="content">
              <h3>Member of Brand?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                accusantium dolor, eos incidunt minima iure?
              </p>
              <button
                className="btnn  font-semibold"
                style={{
                  color: "#fff",
                }}
                id="sign-in-btn"
              >
                Sign in
              </button>
            </div>
            <img src="signin.svg" alt="" className="image" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>New to Brand?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                accusantium dolor, eos incidunt minima iure?
              </p>
              <button className="btnn" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src="signup.svg" alt="" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
