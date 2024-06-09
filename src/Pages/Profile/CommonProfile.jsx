import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import "./CommonProfile.css";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import { useQueries, useQuery } from "@tanstack/react-query";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
const CommonProfile = () => {
  const axiosToken = useAxiosToken();
  const { user } = useAuthInfo();
  const { data } = useAdmin();
  const { data: memberInfo } = useQuery({
    queryKey: ["memberInfo"],

    queryFn: async () => {
      const { data } = await axiosToken(`/acceptedUsers/?email=${user?.email}`);

      return data;
    },
  });
  function getMonthDay(dateString) {
    // Use Date.parse() to convert the string to a timestamp (milliseconds since epoch)
    const timestamp = Date.parse(dateString);

    // If parsing is successful (returns a number, not NaN)
    if (!isNaN(timestamp)) {
      // Create a new Date object from the timestamp
      const dateObject = new Date(timestamp);

      // Extract day and month index (0-based)
      const day = dateObject.getDate();
      const monthIndex = dateObject.getMonth();
      const year = dateObject.getFullYear();
      // Month names array
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Get the month name
      const monthName = monthNames[monthIndex];

      // Return an object with month name and day
      return {
        monthName,
        day,
        year,
      };
    } else {
      // Handle parsing error (invalid date string)
      return "Invalid date string format.";
    }
  }
  //
  return (
    <div className="w-full flex justify-center min-h-screen items-center">
      <div className=" p-5 flex w-[80%] h-[60%]">
        <div className="lg:w-[35%] ">
          <div className="containerr ">
            <div
              className="card_box w-[400px] h-[450px] image-border shadow-2xl"
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
          <div className="flex gap-x-3 justify-center custom-shadow mt-6  py-3 animation-scale w-[55%] min-w-[250px] mx-auto">
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
        <div className="flex-1 flex justify-center items-center shadow-2xl rounded-3xl ml-5 card_color">
          <div className="w-[90%] h-[80%]">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">
                Welcome back,
                <span className="textColor"> {user?.displayName}!</span>{" "}
              </h1>
              <button className="textColor outline-double px-3 py-2 outlinedColor  rounded-full active:scale-95 transition-all duration-300 cursor-pointer">
                Edit your profile
              </button>
            </div>
            {/* Tab section */}
            <div className="lg:mt-10">
              <Tabs>
                <TabList>
                  <Tab>About</Tab>
                  <Tab>Agreements</Tab>
                </TabList>

                <TabPanel>
                  <div className="flex justify-between px-2 mb-3">
                    <p className="text-xl font-semibold">Name:</p>{" "}
                    <p className="text-xl font-bold">{user?.displayName}</p>
                  </div>
                  <div className="flex justify-between px-2 mb-3">
                    <p className="text-xl font-semibold">Email:</p>{" "}
                    <p className="text-xl font-bold">{user?.email}</p>
                  </div>
                  {memberInfo && (
                    <>
                      <div className="flex justify-between px-2">
                        <p className="text-xl font-semibold">Member since:</p>{" "}
                        <p className="text-xl font-bold">
                          {getMonthDay(memberInfo?.agreemtentDate).day}{" "}
                          {getMonthDay(memberInfo?.agreemtentDate).monthName}{" "}
                          {getMonthDay(memberInfo?.agreemtentDate).year}
                        </p>
                      </div>
                    </>
                  )}
                </TabPanel>
                <TabPanel>
                  <>
                    <div className="flex justify-between px-2 mb-3">
                      <p className="text-xl font-semibold">Member since:</p>{" "}
                      <p className="text-xl font-bold">
                        {getMonthDay(memberInfo?.agreemtentDate).day || "None"}{" "}
                        {getMonthDay(memberInfo?.agreemtentDate).monthName}{" "}
                        {getMonthDay(memberInfo?.agreemtentDate).year}
                      </p>
                    </div>
                  </>

                  <div className="flex justify-between px-2 mb-3">
                    <p className="text-xl font-semibold">Floor:</p>{" "}
                    <p className="text-xl font-bold">
                      {memberInfo?.floor_no || "None"}
                    </p>
                  </div>
                  <div className="flex justify-between px-2 mb-3">
                    <p className="text-xl font-semibold">Block:</p>{" "}
                    <p className="text-xl font-bold">
                      {memberInfo?.block_name || "None"}
                    </p>
                  </div>
                  <div className="flex justify-between px-2">
                    <p className="text-xl font-semibold">Room no:</p>{" "}
                    <p className="text-xl font-bold">
                      {memberInfo?.apartment_no || "None"}
                    </p>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonProfile;
