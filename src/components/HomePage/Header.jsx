import React from "react";
import logoGreen from "/logo-green.svg";


const Header = () => {
  return (
    <div className="w-full">
      <div className="w-[90%]  pl-20 pr-5  h-full max-w-[1200px] py-16">
        <div className="flex flex-row justify-between items-center">
          <img src={logoGreen} width={80} height={80} alt="" />
          <button className="w-[180px] h-[38px] text-[12px] font-[600] text-white bg-black">
            HIRE US
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
