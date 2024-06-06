import { RiProfileLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { MdOutlineAnnouncement } from "react-icons/md";
const UserBar = () => {
  return (
    <>
      <NavLink to="profile">
        <span className="material-symbols-outlined">
          <RiProfileLine className="w-6 h-6" />
        </span>
        <p>My Profile</p>
      </NavLink>
      <NavLink to="announcements">
        <span>
          <MdOutlineAnnouncement className="w-6 h-6" />
        </span>
        <p>Announcements</p>
      </NavLink>
    </>
  );
};

export default UserBar;
