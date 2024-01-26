import React, { useState } from "react";
import Container from "../../Container";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { IoMdCart } from "react-icons/io";
import Man from "../../../assets/man.png";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useAuth } from "../../../Hooks/useAuth";

function Header() {
  const [show, setShow] = useState(false);
  const { user, userSignOut } = useAuth();
  const logOut = () => {
    userSignOut()
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="py-5 bg-white text-secondary shadow-lg">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              <Link className="flex items-center gap-2">
                <img src={Logo} alt="" className="w-[50px] h-[50px]" />
                <span className="text-[20px] font-semibold uppercase">
                  Food Hub
                </span>
              </Link>
            </div>
            <div className="lg:block hidden">
              <ul className="flex items-center space-x-7">
                <li className="text-[17px] font-medium">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="text-[17px] font-medium">
                  <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="text-[17px] font-medium">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="text-[17px] font-medium">
                  <NavLink
                    to="/chefs"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Chefs
                  </NavLink>
                </li>
                <li className="text-[17px] font-medium">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="text-[17px] font-medium">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-5">
              <div className="lg:block hidden">
                <Link>
                  <IoMdCart className="text-[24px]" />
                </Link>
              </div>
              <div className="lg:block hidden">
                {user ? (
                  <div className="flex items-center gap-3">
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <ul>
                      <li
                        onClick={logOut}
                        className="text-[17px] font-medium border-gray-200"
                      >
                        <NavLink
                          className={({ isActive }) =>
                            isActive ? "text-primary" : ""
                          }
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <img
                    src={Man}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                )}
              </div>
              <div className="lg:hidden block" onClick={() => setShow(!show)}>
                {show ? (
                  <IoCloseOutline className="text-[24px]" />
                ) : (
                  <FiMenu className="text-[24px]" />
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
      {show && (
        <div className="w-[320px] h-screen z-50 bg-white absolute top-0 left-0">
          <div className="pl-10 py-10">
            <Link className="flex items-center gap-2">
              <img src={Logo} alt="" className="w-[50px] h-[50px]" />
              <span className="text-[20px] font-semibold uppercase">
                Food Hub
              </span>
            </Link>
          </div>
          <div>
            <ul className="">
              <li className="text-[17px] font-medium pl-10 py-2 border-y border-gray-200">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li className="text-[17px] font-medium pl-10 py-2 border-b border-gray-200">
                <NavLink
                  to="/menu"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Menu
                </NavLink>
              </li>
              <li className="text-[17px] font-medium pl-10 py-2 border-b border-gray-200">
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  About
                </NavLink>
              </li>
              <li className="text-[17px] font-medium pl-10 py-2 border-b border-gray-200">
                <NavLink
                  to="/chefs"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Chefs
                </NavLink>
              </li>
              <li className="text-[17px] font-medium pl-10 py-2 border-b border-gray-200">
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Blog
                </NavLink>
              </li>
              <li className="text-[17px] font-medium pl-10 py-2 border-b border-gray-200">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "text-primary" : "")}
                >
                  Contact
                </NavLink>
              </li>
              {user ? (
                <>
                  <li className="text-[17px] font-medium pl-10 py-2 border-b border-gray-200">
                    <NavLink
                      to="/profile"
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li
                    onClick={logOut}
                    className="text-[17px] font-medium pl-10 py-2 border-b border-gray-200"
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-[17px] font-medium pl-10 py-2 border-b border-gray-200">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "text-primary" : ""
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
