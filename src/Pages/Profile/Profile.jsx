import React from "react";
import CoverBanner from "../../Components/CoverBanner/CoverBanner";
import Container from "../../Components/Container";
import { FaUser, FaShoppingBag } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useAuth } from "../../Hooks/useAuth";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineRestaurantMenu } from "react-icons/md";

function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <CoverBanner heading={"User Dashboard"} subHeading={"Dashboard"} />
      <Container>
        <div className="py-20">
          <div className="lg:flex items-start justify-between">
            <div className="lg:w-1/4 w-full lg:mb-0 mb-5 border border-primary bg-primary text-white rounded-s-md">
              <div className="py-10">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="w-[140px] h-[140px] rounded-full mx-auto p-1 bg-white"
                />
                <h4 className="text-[20px] font-bold py-2 text-center">
                  {user?.displayName}
                </h4>
              </div>
              <div className="">
                <ul>
                  <li className="pl-5 border-y border-gray-100 py-3 text-[17px] font-semibold">
                    <Link to="/profile" className="flex items-center gap-3">
                      <FaUser />
                      Personal Info
                    </Link>
                  </li>
                  <li className="pl-5 py-3 text-[17px] font-semibold border-b border-gray-100 flex items-center gap-3">
                    <Link to="/profile/order" className="flex items-center gap-3">
                      <FaShoppingBag />
                      Order
                    </Link>
                  </li>
                  <li className="pl-5 py-3 text-[17px] font-semibold border-b border-gray-100 flex items-center gap-3">
                    <Link
                      to="/profile/bookings"
                      className="flex items-center gap-3"
                    >
                      <MdOutlineRestaurantMenu /> Bookings
                    </Link>
                  </li>
                  <li className="pl-5 py-3 text-[17px] font-semibold flex items-center gap-3">
                    <LuLogOut /> Logout
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-3/4 w-full border border-primary h-[468px] bg-bg-primary rounded-e-md">
              <div className="p-5">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Profile;
