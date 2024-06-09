import { useQuery } from "@tanstack/react-query";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import { IoSearch } from "react-icons/io5";

const PaymentHistory = () => {
  const axiosToken = useAxiosToken();
  const { user } = useAuthInfo();
  const { data: paymentHistoryDetails = [] } = useQuery({
    queryKey: ["paymentHistory"],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await axiosToken.get(`/payments/?email=${user?.email}`);
      return data;
    },
  });
  if (paymentHistoryDetails.length === 0) {
    return (
      <div
        className=" h-screen flex justify-center items-center"
        style={{ border: "1px solid" }}
      >
        <h1 className="text-3xl font-semibold italic mb-5">
          Please pay first! 🙂
        </h1>
      </div>
    );
  }
  return (
    <div className="w-[90%] mx-auto mt-5">
      <div className="">
        <h1 className="text-5xl text-center underline textColor mb-5">
          Payment History
        </h1>
        <div className="coupon-field flex items-center relative ">
          <input
            placeholder="Title"
            className="subscribe-input  textColor absolute right-0"
            name="title"
            type="text"
          />
          <IoSearch className="absolute right-3 button-hover" />
        </div>
      </div>
      <div className="overflow-x-auto   px-1 py-2 mt-5">
        <table className="table" style={{ width: "90%" }}>
          {/* head */}
          <thead>
            <tr className="">
              <th className="text-lg">Email</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Transaction ID</th>
              <th className="text-lg">Month</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {paymentHistoryDetails.map((details) => (
              <tr key={details._id} className="">
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold text-lg">{details?.email}</div>
                    </div>
                  </div>
                </td>
                <td className="text-lg">
                  ${details?.price}
                  <br />
                </td>
                <td className="text-lg ">
                  <span className=" px-2 pt-[5px] rounded-full text-center font-semibold uppercase inline-block">
                    {details?.transactionId}
                  </span>
                </td>
                <td className="text-lg">01/01/2020</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
