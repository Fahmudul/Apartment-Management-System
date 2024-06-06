import React from "react";
import { MdOutlineAnnouncement } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
const MemberBar = () => {
  return (
    <>
      <NavLink type="button">
        <span className="material-symbols-outlined">
          <RiProfileLine className="w-6 h-6" />
        </span>
        <p>My Profile</p>
      </NavLink>
      <NavLink>
        <span>
          <MdOutlineAnnouncement className="w-6 h-6" />
        </span>
        <p>Announcements</p>
      </NavLink>

      <NavLink>
        <span>
          <MdOutlinePayment className="w-6 h-6" />
        </span>
        <p>Make payment</p>
      </NavLink>
      <NavLink>
        <span>
          <GrHistory className="w-6 h-6" />
        </span>
        <p>Payment History</p>
      </NavLink>
    </>
  );
};

export default MemberBar;
