import React from "react";
import { MdOutlineAnnouncement } from "react-icons/md";
import { RiProfileLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { BiSolidCoupon } from "react-icons/bi";
import { FaUsersLine } from "react-icons/fa6";
import { VscRequestChanges } from "react-icons/vsc";
const AdminBar = () => {
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
        <p>Make Announcement</p>
      </NavLink>

      <NavLink>
        <span>
          <FaUsersLine className="w-6 h-6" />
        </span>
        <p>Manage Members</p>
      </NavLink>
      <NavLink>
        <span>
          <VscRequestChanges className="w-6 h-6" />
        </span>
        <p>Agreement Requests</p>
      </NavLink>
      <NavLink>
        <span>
          <BiSolidCoupon className="w-6 h-6" />
        </span>
        <p>Manage Coupons</p>
      </NavLink>
    </>
  );
};

export default AdminBar;
