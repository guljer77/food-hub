import React, { useState } from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { useAuth } from "../Hooks/useAuth";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";

function DashboardLayouts() {
  const navigate = useNavigate();
  const { user, userSignOut } = useAuth();
  const [openSidebar, setOpenSidebar] = useState(false);
  const signOutHandle = () =>{
    userSignOut()
    .then(()=>{
      navigate('/');
    })
    .catch(error=>{
      console.log(error);
    })
  }
  return (
    <div>
      <div className="flex items-start justify-between">
        <div className="lg:w-[22%] lg:block hidden h-screen">
          <div className="fixed top-0 left-0 bg-white border-r w-[22%] h-screen">
            <Sidebar signOutHandle={signOutHandle} />
          </div>
        </div>
        <div className="lg:w-[78%] w-full">
          <div className="flex items-center lg:justify-end justify-between py-5 px-7 border-b">  
            <div>
              {user ? (
                <>
                  <h4 className="text-[22px] font-semibold uppercase text-secondary">Admin</h4>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="lg:hidden block">
              <span
                onClick={() => setOpenSidebar(!openSidebar)}
                className="text-secondary text-[28px] cursor-pointer"
              >
                {openSidebar ? <IoClose /> : <IoMenuOutline />}
              </span>
            </div>
          </div>
          <div className="p-10">
            <Outlet />
          </div>
        </div>
      </div>
      {openSidebar && (
        <div className="w-[300px] h-screen fixed top-0 left-0">
          <div className="fixed top-0 left-0 bg-white border-r w-[300px] h-screen">
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardLayouts;
