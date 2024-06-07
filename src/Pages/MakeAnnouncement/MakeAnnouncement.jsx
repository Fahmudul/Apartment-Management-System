import "./Announcements.css";
const MakeAnnouncement = () => {
  return (
    <div
      className="min-h-screen flex items-center"
      // style={{ border: "1px solid red" }}
    >
      <div className="subscribe w-[80%] h-96 mx-auto">
        <p className="textColor">ANNOUNCEMENT</p>
        <input
          placeholder="Title"
          className="subscribe-input absolute bottom-40 textColor"
          name="title"
          type="text"
        />
        <textarea
          placeholder="Description"
          className="subscribe-input absolute bottom-14 textColor"
          name="description"
          type="text"
        />
        <br />
        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
};

export default MakeAnnouncement;
