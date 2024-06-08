import { useQuery } from "@tanstack/react-query";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";

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
  return (
    <div className="w-[90%] mx-auto mt-5">
    <h1 className="text-5xl text-center underline textColor mb-5">Payment History</h1>
      <div className="overflow-x-auto   px-1 py-2">
        <table className="table" style={{ width: "90%" }}>
          {/* head */}
          <thead>
            <tr className="">
              <th className="text-lg">Email</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Month</th>
              <th className="text-lg">Transaction ID</th>
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
