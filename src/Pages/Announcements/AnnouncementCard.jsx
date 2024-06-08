/* eslint-disable react/prop-types */
import { BsThreeDots } from "react-icons/bs";
const AnnouncementCard = ({ announcement }) => {
  return (
    <div className="lg:w-[40%] min-h-[100px] mb-5 outline-double textColor font-semibold rounded-3xl shadow-2xl">
      <div className="flex p-5 justify-between">
        <p className="w-[90%]">{announcement.description}</p>
        <BsThreeDots className="textColor text-2xl cursor-pointer" />
      </div>
      <div className="flex justify-between px-7 mb-5">
        <div>
          <img src="" alt="" />
          <p>{announcement.title}</p>
        </div>
        <div>{announcement.time}</div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
