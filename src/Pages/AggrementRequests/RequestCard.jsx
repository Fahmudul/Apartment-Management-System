import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import { useMutation } from "@tanstack/react-query";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import { toast } from "react-toastify";
const RequestCard = ({ request, refetch }) => {
  const {
    customerName,
    customerEmail,
    customerPhoto,
    agreemtentDate,
    rent,
    floor_no,
    apartment_no,
    block_name,
    ready,
    roomId,
  } = request;
  function getDateTimeFromString(dateString) {
    // Use Date.parse() to convert the string to a timestamp (milliseconds since epoch)
    const timestamp = Date.parse(dateString);

    // If parsing is successful (returns a number, not NaN)
    if (!isNaN(timestamp)) {
      // Create a new Date object from the timestamp
      const dateObject = new Date(timestamp);

      // Extract and format the date and time components
      const year = dateObject.getFullYear();
      const month = String(dateObject.getMonth() + 1).padStart(2, "0"); // Add leading zero for single-digit months
      const day = String(dateObject.getDate()).padStart(2, "0");
      const hours = String(dateObject.getHours()).padStart(2, "0");
      const minutes = String(dateObject.getMinutes()).padStart(2, "0");
      const seconds = String(dateObject.getSeconds()).padStart(2, "0");

      const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      return formattedDateTime;
    } else {
      // Handle parsing error (invalid date string)
      return "Invalid date string format.";
    }
  }
  const newDate = getDateTimeFromString(agreemtentDate);
  console.log(newDate);
  const { user } = useAuthInfo();
  const axiosToken = useAxiosToken();
  // Todo : 1. by clicking accept status will be changed into chekced and the user's role will be changed to member
  // Todo : 2. by clicking decline status will be changed into chekced
  // Todo : 3. after completing the operation the data will be removed from here

  // Api request for accepting/declining the agreement
  const { mutateAsync } = useMutation({
    mutationFn: async (action) => {
      const { data } = await axiosToken.patch(
        `/agreements/?email=${customerEmail}`,
        {
          action,
          roomId,
        }
      );

      return data;
    },
    onSuccess: (data) => {
      if (data["deletedCount"] > 0) {
        toast.success("Agreement Updated Successfully");
        refetch();
      }
    },
  });
  const handleAcceptAgreement = async () => {
    await mutateAsync("accepted");
    // console.log("clicked");
  };
  const handleDeclineAgreement = async () => {
    await mutateAsync("declined");
    // console.log("clicked");
  };
  return (
    <div className="xsm:w-[90%] lg:w-[60%] xsm:flex-col lg:flex-row mx-auto mt-5 shadow-2xl rounded-2xl hover:scale-[1.01] transition-all duration-300 xsm:p-1  lg:p-4 flex justify-between">
      <div
        className="flex xsm:w-[100%] lg:w-[50%] xsm:flex-col lg:flex-row"
        // style={{ border: "1px solid red" }}
      >
        <img
          src={customerPhoto}
          className="xsm:min-w-[40px] xsm:min-h-[60px] lg:min-w-[160px]  w-[10%] image-border mr-4 xsm:mx-auto lg:mx-0"
          alt=""
        />

        <div className="flex flex-col justify-center xsm:items-center lg:items-start xsm:text-center lg:text-left xsm:my-2 lg:ml-2">
          <div>
            <div className="xsm:space-y-2 space-y-1">
              <h1 className="card_color pl-3 py-1 rounded-2xl ">
                {customerName}
              </h1>
              <h1 className="card_color pl-3 py-1 rounded-2xl">
                Email: {customerEmail}
              </h1>
              <div className="flex gap-3">
                <span
                  className=" px-2 rounded-full card_color py-1"
                  // style={{ border: "1px solid" }}
                >
                  {`"${block_name}"`}
                </span>
                <span
                  className=" px-2 rounded-full card_color py-1"
                  // style={{ border: "1px solid" }}
                >
                  Floor no: {floor_no}
                </span>
                <span
                  className=" px-2 rounded-full card_color py-1"
                  // style={{ border: "1px solid" }}
                >
                  Apartment no: {apartment_no}
                </span>
              </div>
            </div>
          </div>
          <div className="xsm:mt-3 ">
            <span className="card_color px-2 py-2 rounded-2xl">
              Requested at: <span className="font-bold">{newDate}</span>
            </span>
            <span className="ml-2 px-3 py-2 shadow-lg rounded-3xl card_color">
              ${rent}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center xsm:justify-center gap-x-5 pr-3">
        <button
          className="active:scale-75 transition-all duration-300"
          onClick={handleAcceptAgreement}
        >
          <TiTick className="w-10 h-10 fill-green-500" />
        </button>
        <button
          className="active:scale-75 transition-all duration-300"
          onClick={handleDeclineAgreement}
        >
          <ImCross className="w-5 h-5 fill-red-500" />
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
