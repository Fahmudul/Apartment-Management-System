import axios from "axios";
const axiosBase = axios.create({
  baseURL: "https://cozyserver.vercel.app",
});
const useAxiosBase = () => {
  return axiosBase;
};

export default useAxiosBase;
