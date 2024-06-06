import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
const RequestCard = () => {
  const { user } = useAuthInfo();
  return (
    <div className="w-[60%] mx-auto mt-5 outline h-[140px] p-3 flex justify-between">
      <div
        className="flex w-[50%] px-3"
        // style={{ border: "1px solid red" }}
      >
        <img
          src={user?.photoURL}
          className="min-w-[110px] min-h-[110px] w-[10%] image-border mr-4 "
          alt=""
        />

        <div className="flex flex-col justify-center">
          <div  >
            <div className="space-y-1">
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
              <div></div>
            </div>
          </div>
          <div>
            <span>Requested at 10:00 AM</span>
            <span className="ml-2 px-3 py-2 shadow-lg rounded-3xl ">$1011.00</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-5 pr-3">
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
