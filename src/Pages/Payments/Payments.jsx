import { useQuery } from "@tanstack/react-query";
import "./Payment.css";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import { Link } from "react-router-dom";
const Payments = () => {
  const { user } = useAuthInfo();
  //
  const axiosToken = useAxiosToken();
  //Get agreement details from backend
  const { data } = useQuery({
    queryKey: ["aggrementDetails", user?.email],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await axiosToken(`/agreements/?email=${user?.email}`);

      return data;
    },
  });
  function getMonthName(dateString) {
    // Use Date.parse() to convert the string to a timestamp (milliseconds since epoch)
    const timestamp = Date.parse(dateString);

    // If parsing is successful (returns a number, not NaN)
    if (!isNaN(timestamp)) {
      // Create a new Date object from the timestamp
      const dateObject = new Date(timestamp);

      // Get the month index (0-indexed) and convert it to month name
      const monthIndex = dateObject.getMonth();
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
      const monthName = monthNames[monthIndex];

      return monthName;
    } else {
      // Handle parsing error (invalid date string)
      return "Invalid date string format.";
    }
  }

  //
  // const { block_name, floor_no } = data;
  //
  if (!data) {
    return (
      <div
        className=" h-screen flex justify-center items-center"
        style={{ border: "1px solid" }}
      >
        <h1 className="text-3xl font-semibold italic mb-5">
          You have cleared all payments 😊
        </h1>
      </div>
    );
  }
  return (
    <div>
      <div className="containerr h-screen">
        <div className="carddd flex justify-center items-center p-5">
          <a className="loginn">Proceed to Payment</a>
          <div className="flex md:flex-row lg:flex-row xsm:flex-col justify-between gap-x-4 xsm:gap-y-4">
            <div className="flex flex-col gap-y-5">
              <div className="inputBoxx ">
                <input
                  type="email"
                  disabled
                  defaultValue={data?.customerEmail}
                  className="cursor-not-allowed"
                />
              </div>

              <div className="inputBoxx">
                <input
                  type="text"
                  disabled
                  className="cursor-not-allowed"
                  defaultValue={"Block:" + data?.block_name}
                />
              </div>
              <div className="inputBoxx">
                <input
                  type="text"
                  disabled
                  className="cursor-not-allowed"
                  defaultValue={"Floor:" + data?.floor_no}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div className="inputBoxxRight ">
                <input
                  type="email"
                  disabled
                  defaultValue={getMonthName(data?.agreemtentDate)}
                  className="cursor-not-allowed"
                />
              </div>
              <div className="inputBoxxRight ">
                <input
                  type="email"
                  disabled
                  defaultValue={data?.apartment_no}
                  className="cursor-not-allowed"
                />
              </div>
              <div className="inputBoxxRight">
                <input
                  type="email"
                  disabled
                  defaultValue={"$ " + data?.rent}
                  className="cursor-not-allowed"
                />
              </div>
            </div>
          </div>
          <Link
            to="/checkout"
            className="enter text-base flex justify-center items-center"
          >
            Pay Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payments;
