import { useEffect, useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full relative ">
      <div className="flex  w-[90px]  h-[90px] fixed top-0 bottom-0 right-0   justify-start rotate-90 items-center z-30">
        <div className="border-[#A4A4A4] border-b w-screen ">
          <nav className="bg-white   md:pr-64 md:pl-20 px-0 py-[33px] ">
            <ul className="md:flex hidden lg:gap-x-14 md:gap-x-8 items-center  gap-4 md:text-[13px] tracking-wider text-[10px] font-[600] text-[#A4A4A4] leading-6">
              <li className="transition-all duration-700 rotate-180 ease-in-out  hover:scale-95 ">
                <NavLink
                  to="/"
                  className={({ isActive }) => `${isActive && "text-[black]"}`}
                >
                  HOMEPAGE
                </NavLink>
              </li>
              <li className="transition-all duration-700 rotate-180 ease-in-out  hover:scale-95 ">
                <NavLink
                  to="/works"
                  className={({ isActive }) => `${isActive && "text-[black]"}`}
                >
                  WORKS
                </NavLink>
              </li>
              <li className="transition-all duration-700 rotate-180 ease-in-out  hover:scale-95 ">
                <NavLink
                  to="/services"
                  className={({ isActive }) => `${isActive && "text-[black]"}`}
                >
                  SERVICES
                </NavLink>
              </li>
              <li className="transition-all duration-700 rotate-180 ease-in-out  hover:scale-95 ">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `${isActive && "text-[black]"}`}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="md:hidden flex justify-center items-center">
          <div
            onClick={toggleMenu}
            className="text-[#FFFFFF] cursor-pointer focus:outline-none"
          >
            {isMenuOpen ? (
              <IoIosCloseCircle onClick={toggleMenu} className="w-10 h-10 " />
            ) : (
              <FaBars onClick={toggleMenu} className="w-6 h-6" />
            )}
          </div>
        </div>
        <div
          className={`space-y-4  w-[85%]  rounded-2xl max-w-[1200px] mx-auto px-4 md:hidden mt-16 py-32 bg-[#0A385A] opacity-90 ${
            isMenuOpen ? "block fixed top-14 right-0 left-0" : "hidden"
          }`}
        >
          <ul className=" flex flex-col items-center  lg:gap-x-14 md:gap-x-8  gap-8 md:text-[17px] text-[15px] font-[700] text-[#A4A4A4] leading-6">
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink
                to="/"
                className={({ isActive }) => `${isActive && "text-black"}`}
              >
                HOMEPAGE
              </NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink
                to="/works"
                className={({ isActive }) => `${isActive && "text-black"}`}
              >
                WORKS
              </NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink
                to="/services"
                className={({ isActive }) => `${isActive && "text-black"}`}
              >
                SERVICES
              </NavLink>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink
                to="/contact"
                className={({ isActive }) => `${isActive && "text-black"}`}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
