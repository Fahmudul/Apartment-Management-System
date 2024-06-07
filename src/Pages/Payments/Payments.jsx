import { useQuery } from "@tanstack/react-query";
import "./Payment.css";
import useAuthInfo from "../../Hooks/useAuthInfo/useAuthInfo";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
const Payments = () => {
  const { user } = useAuthInfo();
  // console.log(user?.email);
  const axiosToken = useAxiosToken();
  //Get agreement details from backend
  const { data } = useQuery({
    queryKey: ["aggrementDetails", user?.email],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await axiosToken(`/agreements/?email=${user?.email}`);
      // console.log(data);
      return data;
    },
  });

  // console.log(agreementInfo);
  // const { block_name, floor_no } = data;
  // console.log(block_name, floor_no);
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
                  defaultValue={data?.customerEmail}
                  className="cursor-not-allowed"
                />
              </div>
              <div className="inputBoxxRight ">
                <input
                  type="email"
                  disabled
                  defaultValue={data?.customerEmail}
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
          <button className="enter text-base">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Payments;
