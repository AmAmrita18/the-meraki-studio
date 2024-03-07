import { useEffect, useState } from "react";
import React from "react";

import homeServicesImg from "../../assets/FILTER.png";

import logoGreen from "/logo-green.svg";
import logoWhite from "/logo-white.svg";

const Header = () => {
  
  return (
    <div className="w-full bg-white">
      <div className="w-[90%] md:pl-20 md:pr-5  h-full max-w-[1200px] md:pt-16">
        <div className="md:flex hidden flex-row justify-between items-center">
          <img src={logoGreen} width={80} height={80} alt="" />
          <button className="w-[180px] h-[38px] transition-all duration-700 ease-in-out  hover:scale-95 text-[12px] font-[600] text-white bg-black">
            HIRE US
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('${homeServicesImg}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
        className=" md:hidden flex flex-col w-full h-[300px] pt-16 "
      >
        
        <div className="flex bg-transparent items-center justify-center mt-3">
          <img
            src={logoWhite}
            width={152}
            height={131}
            alt=""
            className="md:hidden flex items-center justify-center"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Header;
