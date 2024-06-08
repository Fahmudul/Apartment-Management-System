import { useQuery } from "@tanstack/react-query";
import useAxiosToken from "../useAxiosToken/useAxiosToken";

const useMember = () => {
  const axiosToken = useAxiosToken();
  const { data: members, refetch } = useQuery({
    queryKey: ["member"],
    queryFn: async () => {
      const { data } = await axiosToken("/users");
      return data;
    },
  });
  return { members, refetch };
};

export default useMember;
