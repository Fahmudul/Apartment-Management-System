import { BsThreeDots } from "react-icons/bs";
const AnnouncementCard = () => {
  return (
    <div className="lg:w-[40%] min-h-[100px] mb-5 outline-double textColor font-semibold rounded-3xl shadow-2xl">
      <div className="flex p-5 justify-between">
        <p className="w-[90%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          repellendus harum veniam rem sapiente ipsam repellat sequi dolorum
          quae iusto.
        </p>
        <BsThreeDots className="textColor text-2xl cursor-pointer" />
      </div>
      <div className="flex justify-between px-7 mb-5">
        <div>
          <img src="" alt="" />
          <p>admin</p>
        </div>
        <div>3 hours ago</div>
      </div>
    </div>
  );
};

export default AnnouncementCard;
