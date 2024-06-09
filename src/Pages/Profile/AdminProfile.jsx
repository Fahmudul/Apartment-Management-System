import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import "./CommonProfile.css";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import { useQuery } from "@tanstack/react-query";
import StatisticCard from "../../Components/StatisticCard/StatisticCard";
import useMember from "../../Hooks/useMember/useMember";
const AdminProfile = () => {
  const { user } = useAuthInfo();
  const { data } = useAdmin();

  const axiosToken = useAxiosToken();
  const { members } = useMember();
  const User = members.filter((member) => member?.role === "user").length;
  const Member = members.filter((member) => member?.role === "member").length;
  const { data: rooms = [] } = useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const { data } = await axiosToken("/allRooms");

      return data;
    },
  });
  const AvailableRooms = rooms.filter(
    (room) => room?.ready === "Ready For You!"
  ).length;
  const UnavailableRooms = rooms.length - AvailableRooms;
  const averageOfAvailableRooms = String(
    Math.round((AvailableRooms / rooms.length) * 100)
  );
  const averageOfUnavailableRooms = String(
    Math.round((UnavailableRooms / rooms.length) * 100)
  );

  return (
    <div className="mt-14">
      <h1 className="text-center text-6xl mb-6 textColor underline">
        Dashboard
      </h1>
      <div
        className="w-full  min-h-screen  "
        // style={{ border: "1px solid red" }}
      >
        <div className="xsm:p-2 lg:p-5 flex xsm:w-[90%] lg:w-[80%] lg:h-[60%]  xsm:flex-col  lg:flex-row mx-auto">
          <div
            className="lg:w-[35%] "
            // style={{ border: "1px solid red" }}
          >
            <div className="containerr ">
              <div
                className="card_box w-[350px] h-[350px] image-border shadow-2xl"
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
            <div className="flex gap-x-3 justify-center custom-shadow mt-6  py-3 animation-scale w-[20%] min-w-[250px] mx-auto">
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
          <div className="flex-1  lg:w-full py-6 overflow-x-auto min-w-[270px] xsm:mt-6  flex  justify-center items-center shadow-2xl rounded-3xl lg:ml-5">
            <div className="w-[90%] h-[80%] ">
              <div className="flex justify-between overflow-x-auto py-2 px-2">
                <h1 className="text-3xl font-bold">
                  Welcome back,
                  <span className="textColor"> {user?.displayName}!</span>{" "}
                </h1>
                <button className=" textColor outline-double px-3 py-2 outlinedColor  rounded-full active:scale-95 transition-all duration-300 cursor-pointer">
                  Edit your profile
                </button>
              </div>
              {/* Tab section */}
              <div className="lg:mt-10">
                <div className="flex justify-between px-2 mb-3 overflow-x-auto">
                  <p className="text-xl font-semibold">Name:</p>{" "}
                  <p className="text-xl font-bold text-right">
                    {user?.displayName}
                  </p>
                </div>
                <div className="flex justify-between px-2 mb-3">
                  <p className="text-xl font-semibold">Email:</p>{" "}
                  <p className="text-xl font-bold text-right">{user?.email}</p>
                </div>
                <div className="flex justify-between px-2">
                  <p className="text-xl font-semibold">Member since:</p>{" "}
                  <p className="text-xl font-bold">12/23/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Statistics section */}
        <div
          className=" mt-10 xsm:w-[90%] lg:w-[80%] mx-auto place-items-center shadow-2xl rounded-3xl pt-7"
          // style={{ border: "1px solid red" }}
        >
          <h1 className="text-4xl font-bold italic text-center mb-10 textColor underline">
            Statistics
          </h1>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
            <StatisticCard text={rooms.length} value={"Rooms"} />
            <div>
              <p className="text-xl font-bold text-center mb-4 textColor">
                Available Rooms
              </p>
              <div
                className="radial-progress text-xl bg-primary text-primary-content card_color textColor border-4 border-primary"
                style={{
                  "--value": averageOfAvailableRooms,
                  "--size": "12rem",
                  "--thickness": "0.7rem",
                }}
                role="progressbar"
              >
                {averageOfAvailableRooms}%
              </div>
            </div>
            <div>
              <p className="text-xl font-bold text-center mb-4 textColor">
                Unavailable Rooms
              </p>
              <div
                className="radial-progress text-xl bg-primary text-primary-content card_color textColor border-4 border-primary"
                style={{
                  "--value": averageOfUnavailableRooms,
                  "--size": "12rem",
                  "--thickness": "0.7rem",
                }}
                role="progressbar"
              >
                {averageOfUnavailableRooms}%
              </div>
            </div>
            <StatisticCard text={User} value={"User"} />

            <StatisticCard text={Member} value={"Member"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
