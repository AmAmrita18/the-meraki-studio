import React from "react";
import logoGreen from "/logo-green.svg";

const HeaderWorks = () => {
  return (
    <div className="w-full">
      <div className="md:w-[90%] w-full  md:pl-20 pl-5 pr-5  h-full max-w-[1200px] md:py-16 py-8">
        <div className="flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start">
          <div className=" flex md:flex-row flex-col gap-x-28 gap-y-8 md:items-center">
            <img
              src={logoGreen}
              width={80}
              height={80}
              alt=""
              className="md:w-[80px]  md:h-[80px] w-[36px] h-[36px]"
            />
            <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
              WORKS
            </h1>
          </div>
          <button className="md:flex items-center  transition-all duration-700 ease-in-out  hover:scale-95 hidden w-[180px] h-[38px] text-[12px] text-left pl-5 leading-[14.63px] font-[600] text-white bg-black">
            HIRE US
          </button>
          <div className="flex md:hidden  w-full justify-center md:mt-0 mt-8  bg-black">
            <button className=" text-white transition-all duration-700 ease-in-out  hover:scale-95 py-6 text-[18px] font-[600] text-center">
              HIRE US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWorks;
