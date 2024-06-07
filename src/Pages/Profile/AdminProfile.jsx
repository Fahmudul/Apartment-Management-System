import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAdmin from "../../Hooks/useAdmin/useAdmin";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import "./CommonProfile.css";
const AdminProfile = () => {
  const { user } = useAuthInfo();
  const { data } = useAdmin();
  // console.log(data);
  return (
    <div>
      <div className="w-full flex justify-center min-h-screen items-center ">
        <div className="xsm:p-2 lg:p-5 flex xsm:w-[90%] lg:w-[80%] lg:h-[60%]  xsm:flex-col lg:flex-row">
          <div className="lg:w-[35%] ">
            <div className="containerrr ">
              <div
                className="card_box w-[370px] h-[400px] image-border shadow-2xl"
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
          <div className="flex-1 py-6 overflow-x-auto min-w-[270px] xsm:mt-6  flex  justify-center items-center shadow-2xl rounded-3xl lg:ml-5">
            <div className="w-[90%] h-[80%]">
              <div className="flex justify-between overflow-x-auto">
                <h1 className="text-3xl font-bold">
                  Welcome back,
                  <span className="textColor"> {user?.displayName}!</span>{" "}
                </h1>
                <button className="hidden textColor outline-double px-3 py-2 outlinedColor  rounded-full active:scale-95 transition-all duration-300 cursor-pointer">
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

                  <TabPanel className="overflow-x-auto">
                    <div className="flex justify-between px-2 mb-3 overflow-x-auto">
                      <p className="text-xl font-semibold">Name:</p>{" "}
                      <p className="text-xl font-bold text-right">
                        {user?.displayName}
                      </p>
                    </div>
                    <div className="flex justify-between px-2 mb-3">
                      <p className="text-xl font-semibold">Email:</p>{" "}
                      <p className="text-xl font-bold text-right">
                        {user?.email}
                      </p>
                    </div>
                    <div className="flex justify-between px-2">
                      <p className="text-xl font-semibold">Member since:</p>{" "}
                      <p className="text-xl font-bold">12/23/24</p>
                    </div>
                  </TabPanel>
                  <TabPanel className="overflow-x-auto">
                    <div className="flex justify-between px-2 mb-3">
                      <p className="text-xl  font-semibold">Aggrements date:</p>{" "}
                      <p className="text-xl font-bold">12/23/24</p>
                    </div>
                    <div className="flex justify-between px-2 mb-3">
                      <p className="text-xl font-semibold">Floor:</p>{" "}
                      <p className="text-xl font-bold">2</p>
                    </div>
                    <div className="flex justify-between px-2 mb-3">
                      <p className="text-xl font-semibold">Bloock:</p>{" "}
                      <p className="text-xl font-bold">{"A"}</p>
                    </div>
                    <div className="flex justify-between px-2">
                      <p className="text-xl font-semibold">Room no:</p>{" "}
                      <p className="text-xl font-bold">101</p>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
