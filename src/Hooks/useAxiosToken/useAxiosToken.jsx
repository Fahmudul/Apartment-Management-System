import axios from "axios";
import useAuthInfo from "../useAuthInfo/useAuthInfo";
const axiosToken = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosToken = () => {
  const { SignOut } = useAuthInfo();
  // console.log(SignOut);
  axiosToken.interceptors.request.use(
    (config) => {
      console.log("interceptor called from request");
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosToken.interceptors.response.use(
    (response) => {
  

      return response;
    },
    (error) => {
      const response = error?.response?.status;
      if (response === 401 || response === 403) {
        localStorage.removeItem("access-token");
        SignOut();
      }
      return Promise.reject(error);
    }
  );

  return axiosToken;
};

export default useAxiosToken;
