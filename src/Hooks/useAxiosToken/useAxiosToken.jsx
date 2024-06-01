import axios from "axios";
const axiosToken = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosToken = () => {
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
  return axiosToken;
};

export default useAxiosToken;
