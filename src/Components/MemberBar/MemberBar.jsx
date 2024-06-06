import React from "react";
import { MdOutlineAnnouncement } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { MdOutlinePayment } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
const MemberBar = () => {
  return (
    <>
      <NavLink to="profileM">
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

      <NavLink to="payment">
        <span>
          <MdOutlinePayment className="w-6 h-6" />
        </span>
        <p>Make payment</p>
      </NavLink>
      <NavLink to="paymentHistory">
        <span>
          <GrHistory className="w-6 h-6" />
        </span>
        <p>Payment History</p>
      </NavLink>
    </>
  );
};

export default MemberBar;
