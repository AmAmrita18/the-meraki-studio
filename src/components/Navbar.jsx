import { useEffect, useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { useParams, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const [tabValue, setTabValue] = useState('');

  const { tab } = useParams();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Extracting query parameters
    const searchParams = new URLSearchParams(location.search);
    const tabValue = searchParams.get('tab');

    setTabValue(tabValue);

  }, [location.search]);

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
      <div className="flex  w-[90px]  h-[90px] fixed top-0 bottom-0 right-0  md:pl-0 pl-8   justify-start md:rotate-90 items-center z-30">
        <div className="border-[#A4A4A4] md:flex hidden border-b w-screen ">
          <nav className="bg-white   md:pr-64 md:pl-20 px-0 py-[33px] ">
            <ul className="md:flex hidden lg:gap-x-14 md:gap-x-8 items-center  gap-4 md:text-[13px] tracking-wider text-[10px] font-[600] text-[#A4A4A4] leading-6">
              <li className="text-[12px] font-[600] leading-[14.63px] text-center transition-all duration-700 rotate-180 ease-in-out  hover:scale-95 ">
                <NavLink
                  to="/"
                  className={({ isActive }) => `${isActive && "text-[black]"}`}
                >
                  HOMEPAGE
                </NavLink>
              </li>
              <li className="text-[12px] font-[600] leading-[14.63px] text-center transition-all duration-700 rotate-180 ease-in-out  hover:scale-95 ">
                <NavLink
                  to="/works"
                  className={({ isActive }) => `${isActive && "text-[black]"}`}
                >
                  WORKS
                </NavLink>
              </li>
              <li className="text-[12px] font-[600] leading-[14.63px] text-center transition-all duration-700 rotate-180 ease-in-out  hover:scale-95 ">
                <NavLink
                  to="/services"
                  className={({ isActive }) => `${isActive && "text-[black]"}`}
                >
                  SERVICES
                </NavLink>
              </li>
              <li className="text-[12px] font-[600] leading-[14.63px] text-center transition-all duration-700 rotate-180 ease-in-out  hover:scale-95 ">
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

        <div className="md:hidden flex  z-40 justify-center mt-4 items-center">
          <div
            onClick={toggleMenu}
            className="    cursor-pointer focus:outline-none"
          >
            {isMenuOpen ? (
              <IoIosCloseCircle onClick={toggleMenu} className="w-10 h-10  " />
            ) : (
              <FaBars
                onClick={toggleMenu}
                className="w-6 h-6 text-white bg-black rounded-sm "
              />
            )}
          </div>
        </div>
        <div
          className={`space-y-4  z-10  w-[100%] h-screen max-w-[1200px] mx-auto px-4 md:hidden  py-32 bg-white opacity-100 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          <ul className=" flex flex-col items-center  lg:gap-x-14 md:gap-x-8  gap-8  text-[20px] font-[700] text-[#A4A4A4] tracking-wider leading-[24px]">
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
              <h2
                onClick={() => setShowServices(!showServices)}
                className={`${showServices && ""}`}
              >
                SERVICES
              </h2>
            </li>
            {
              showServices && (
                  <li className="transition-all duration-700 ease-in-out flex gap-x-4 hover:scale-95 ">
                    <NavLink
                      to="/services?tab=digital"
                      className={({ isActive }) => `${isActive && tabValue === 'digital' && "text-black underline"}`}
                    >
                      Digital
                    </NavLink>
                    <NavLink
                      to="/services?tab=business"
                      className={({ isActive }) => `${isActive && tabValue === 'business' && "text-black underline"}`}
                    >
                      Business
                    </NavLink>
                  </li>
              )
            }
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <NavLink
                to="/contact"
                className={({ isActive }) => `${isActive && "text-black"}`}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div className="flex flex-col justify-center pt-16 gap-y-10 pb-10 items-center">
            <ul className="flex flex-row justify-between gap-40 text-[10px] font-[700] text-black leading-[12px] tracking-wider">
              <li>/FACEBOOK</li>
              <li>/LINKEDIN</li>
            </ul>
            <ul className="text-[10px] font-[700] text-black leading-[12px] tracking-wider">
              <li>/INSTAGRAM</li>
            </ul>
          </div>
          <div className="flex w-full justify-center  bg-black">
          <button className=" text-white py-6 text-[18px] font-[600] text-center">SEND</button>
          </div>
          <div className="flex flex-row gap-4 justify-center pt-8">
            <p className="text-[10px] font-[700] text-black leading-[12px] tracking-wider">2024</p>
            <p className="text-[10px] font-[700] text-black leading-[12px] tracking-wider">THE MERAKI STUDIO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
