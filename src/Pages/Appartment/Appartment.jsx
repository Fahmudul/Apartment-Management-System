import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";

const Appartment = () => {
  const axiosToken = useAxiosToken();
  const { data } = useQuery({
    queryKey: "appartment",
    queryFn: async () => {
      const { data } = await axiosToken("/allRooms");
      // console.log(data);
      return data;
    },
  });
  return <div>This is Appartment</div>;
};

export default Appartment;
