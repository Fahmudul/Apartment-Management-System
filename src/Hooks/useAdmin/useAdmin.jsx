import { useQuery } from "@tanstack/react-query";
import useAxiosToken from "../useAxiosToken/useAxiosToken";
import useAuthInfo from "../useAuthInfo/useAuthInfo";

const useAdmin = () => {
  const { user } = useAuthInfo();
  const axiosToken = useAxiosToken();
  const { data } = useQuery({
    queryKey: ["admin"],
    enabled: !!user,
    queryFn: async () => {
      const { data } = await axiosToken(`/users/${user?.email}`);
      // clg
      // console.log(data);
      return data;
    },
  });
  return { data };
};

export default useAdmin;
