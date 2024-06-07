import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
const RequestCard = () => {
  const { user } = useAuthInfo();
  return (
    <div className="xsm:w-[90%] lg:w-[60%] xsm:flex-col lg:flex-row mx-auto mt-5 outline xsm:p-1 lg:p-3 flex justify-between">
      <div
        className="flex xsm:w-[100%] lg:w-[50%] xsm:flex-col lg:flex-row"
        // style={{ border: "1px solid red" }}
      >
        <img
          src={user?.photoURL}
          className="xsm:min-w-[40px] xsm:min-h-[60px] lg:min-w-[160px]  w-[10%] image-border mr-4 xsm:mx-auto lg:mx-0"
          alt=""
        />

        <div className="flex flex-col justify-center xsm:items-center lg:items-start xsm:text-center lg:text-left xsm:my-2 lg:ml-2">
          <div>
            <div className="xsm:space-y-2 space-y-1">
              <h1>Henry barbara</h1>
              <h1>Email: nVHbJ@example.com</h1>
              <div className="flex gap-3">
                <span
                  className=" px-2 rounded-full"
                  style={{ border: "1px solid" }}
                >
                  {"A"}
                </span>
                <span
                  className=" px-2 rounded-full"
                  style={{ border: "1px solid" }}
                >
                  Floor no: 2
                </span>
                <span
                  className=" px-2 rounded-full"
                  style={{ border: "1px solid" }}
                >
                  1022
                </span>
              </div>
            </div>
          </div>
          <div className="xsm:mt-2">
            <span>Requested at 10:00 AM</span>
            <span className="ml-2 px-3 py-2 shadow-lg rounded-3xl ">
              $1011.00
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center xsm:justify-center gap-x-5 pr-3">
        <button className="active:scale-75 transition-all duration-300">
          <TiTick className="w-10 h-10 fill-green-500" />
        </button>
        <button className="active:scale-75 transition-all duration-300">
          <ImCross className="w-5 h-5 fill-red-500" />
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
