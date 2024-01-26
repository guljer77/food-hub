import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineRestaurantMenu, MdLogout } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaWallet, FaAddressBook, FaUsers } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

function Sidebar({signOutHandle}) {
  return (
    <div>
      <div className="pl-10 py-10">
        <Link to="/dashboard">
          <h3 className="text-[30px] font-semibold uppercase">Food Hub</h3>
          <h6 className="text-[16px] font-medium uppercase tracking-[0.36em]">
            Restaurant
          </h6>
        </Link>
      </div>
      <div>
        <ul>
          <li className="py-3 border-y border-gray-200 pl-10 text-[16px] uppercase">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <span className="flex items-center gap-2">
                <IoMdHome />
                Admin Home
              </span>
            </NavLink>
          </li>
          <li className="py-3 border-b border-gray-200 pl-10 text-[16px] uppercase">
            <NavLink
              to="/dashboard/add-item"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <span className="flex items-center gap-2">
                <MdOutlineRestaurantMenu /> Add Items
              </span>
            </NavLink>
          </li>
          <li className="py-3 border-b border-gray-200 pl-10 text-[16px] uppercase">
            <NavLink
              to="/dashboard/manage"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <span className="flex items-center gap-2">
                <TfiMenuAlt /> Manage Item
              </span>
            </NavLink>
          </li>
          <li className="py-3 border-b border-gray-200 pl-10 text-[16px] uppercase">
            <NavLink
              to="/dashboard/booking"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <span className="flex items-center gap-2">
                <FaAddressBook /> Manage Bookings
              </span>
            </NavLink>
          </li>
          <li className="py-3 border-b border-gray-200 pl-10 text-[16px] uppercase">
            <NavLink
              to="/dashboard/payments"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <span className="flex items-center gap-2">
                <FaWallet /> Payments
              </span>
            </NavLink>
          </li>
          <li className="py-3 border-b border-gray-200 pl-10 text-[16px] uppercase">
            <NavLink
              to="/dashboard/users"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <span className="flex items-center gap-2">
                <FaUsers /> All Users
              </span>
            </NavLink>
          </li>
          <li onClick={signOutHandle} className="py-3 border-b border-gray-200 pl-10 text-[16px] text-secondary uppercase">
            <NavLink
              className=""
            >
              <span className="flex items-center gap-2">
                <MdLogout /> Logout
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
