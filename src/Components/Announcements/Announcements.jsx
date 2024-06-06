import AnnouncementCard from "./AnnouncementCard";

const Announcements = () => {
  return (
    <div className="px-5 py-5 flex flex-col items-center">
      <h1 className="lg:text-5xl textColor mb-5">Announcements: 5</h1>
      <hr />
      <AnnouncementCard />
      <AnnouncementCard />
      <AnnouncementCard />
      <AnnouncementCard />
      <AnnouncementCard />
    </div>
  );
};

export default Announcements;
