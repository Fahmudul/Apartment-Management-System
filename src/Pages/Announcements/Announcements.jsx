import { useQuery } from "@tanstack/react-query";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import AnnouncementCard from "./AnnouncementCard";

const Announcements = () => {
  //Get all announcements from backend
  const axiosToken = useAxiosToken();
  const { data: announcements = [] } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const { data } = await axiosToken("/announcements");

      return data;
    },
  });
  return (
    <div className="px-5 py-5 flex flex-col items-center">
      <h1 className="lg:text-5xl textColor mb-5">Announcements: 5</h1>
      <hr />
      {
        announcements.map((announcement) => (
          <AnnouncementCard key={announcement._id} announcement={announcement} />
        ))
      }
    
    </div>
  );
};

export default Announcements;
