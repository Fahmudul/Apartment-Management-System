import { useQuery } from "@tanstack/react-query";
import useAxiosToken from "../useAxiosToken/useAxiosToken";

const useCoupon = () => {
  const axiosToken = useAxiosToken();

  const { data } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const { data } = await axiosToken.get("/coupon");
   
      return data;
    },
  });
  return { data };
};

export default useCoupon;
