import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "./CommonProfile.css";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
const CommonProfile = () => {
  const { user } = useAuthInfo();
  const { data } = useAdmin();
  // console.log(data.role);
  return (
    <div className=" p-5 flex ">
      <div className="lg:w-[30%]">
        <div className="containerrr">
          <div
            className="card_box w-[400px] h-[400px] image-border"
            style={{
              background: `url(${user?.photoURL}) no-repeat center center/cover`,
            }}
          >
            <span
              className={`${
                data?.role === "admin"
                  ? "before:content-['admin']"
                  : data?.role === "member"
                  ? "before:content-['member']"
                  : "before:content-['user']"
              } `}
            ></span>
          </div>
        </div>
        {/*Social links */}
        <div className="flex gap-x-3 justify-center custom-shadow mt-4  py-3 animation-scale px-8">
          <Link
            to=""
            className=" bg-white p-2 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <FcGoogle className="w-[30px] h-[30px]  text-[#405de6] " />
          </Link>
          <Link
            to=""
            className=" bg-white p-2 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <FaFacebook className="w-[30px] h-[30px]  text-[#405de6] " />
          </Link>
          <Link
            to=""
            className=" bg-white p-2 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <FaInstagram className="w-[30px] h-[30px]  text-[#405de6] " />
          </Link>
          <Link
            to=""
            className=" bg-white p-2 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl"
          >
            <FaLinkedinIn className="w-[30px] h-[30px]  text-[#405de6] " />
          </Link>
        </div>
      </div>
      <div className="ml-5 p-6">
        <div>
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back,
              <span className="textColor"> {user?.displayName}!</span>{" "}
            </h1>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonProfile;
