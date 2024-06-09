import { useQuery } from "@tanstack/react-query";
import RequestCard from "./RequestCard";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import Loader from "../../Components/Loader/Loader";

const AggrementRequests = () => {
  const axiosToken = useAxiosToken();
  //Get all requests from backend
  const {
    data: RequestLists = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: async () => {
      const { data } = await axiosToken("/agreementRequest");
      return data;
    },
  });
  if (isLoading) return <Loader />;
  if (RequestLists.length === 0)
    return (
      <div className=" h-screen flex justify-center items-center" style={{ border: "1px solid" }}>
        <h1
          className="text-3xl font-semibold italic mb-5"
        >
          No Requests Yet
        </h1>
      </div>
    );
  return (
    <div>
      <h1 className="text-3xl font-semibold italic mb-5">
        Requests: {RequestLists.length}
      </h1>
      {
        //Display all requests

        RequestLists.map((request) => (
          <RequestCard key={request._id} request={request} refetch={refetch} />
        ))
      }
    </div>
  );
};

export default AggrementRequests;
