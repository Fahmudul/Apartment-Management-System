import { useMutation } from "@tanstack/react-query";
import "./Announcements.css";
import useAxiosToken from "../../Hooks/useAxiosToken/useAxiosToken";
import { toast } from "react-toastify";
import useMember from "../../Hooks/useMember/useMember";
const MakeAnnouncement = () => {
  const { refetch } = useMember();
  const axiosToken = useAxiosToken();
  const { mutateAsync } = useMutation({
    mutationFn: async (announcementData) => {
      const { data } = await axiosToken.post(
        "/announcements",
        announcementData
      );

      return data;
    },
    onSuccess: (data) => {
      if (data.insertedId) {
        toast.success("Announcement Created Successfully");
        refetch();
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  const handleAnnouncement = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    //

    mutateAsync({ title, description, time: new Date().toLocaleDateString() });
  };
  return (
    <div
      className="min-h-screen flex items-center"
      // style={{ border: "1px solid red" }}
    >
      <form className="w-full" onSubmit={handleAnnouncement}>
        <div className="subscribe  w-[90%] h-96 mx-auto">
          <p className="textColor xsm:text-base">ANNOUNCEMENT</p>
          <input
            placeholder="Title"
            className="subscribe-input absolute bottom-40 textColor xsm:w-[85%] w-[95%]"
            name="title"
            type="text"
            required
          />
          <textarea
            placeholder="Description"
            className="subscribe-input absolute bottom-14 textColor xsm:w-[85%] w-[95%]"
            name="description"
            type="text"
            required
          />
          <br />
          <button className="submit-btn">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
