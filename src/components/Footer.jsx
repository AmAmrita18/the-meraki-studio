import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-transparent relative ">
      <div className="md:w-[90%] absolute top-[-4.5rem] z-50 w-full flex md:flex-row flex-col md:pl-20 md:pr-5 bg-transparent md:gap-y-0 gap-y-3  h-full max-w-[1200px]  md:justify-between justify-center items-center pb-16">
        <div className="flex md:flex-row flex-col gap-x-8 gap-y-3 items-center">
          <h1 className="text-black  text-[10px] font-[800] tracking-wider">
            SOCIAL:
          </h1>
          <ul className="text-black md:pl-3 text-[10px] font-[800] flex flex-row gap-x-4 tracking-wider">
            <li>/FACEBOOK</li>
            <li>/INSTAGRAM</li>
            <li>/LINKEDIN</li>
          </ul>
        </div>

        <div>
          <button className="">
            <h1 className="text-white bg-black text-[9px] font-[700] mr-48 tracking-wider">
              SCROLL DOWN
            </h1>
          </button>
        </div>
        <div className="flex flex-row md:ml-20 md:mt-0 mt-4 md:justify-normal justify-center gap-x-3">
          <h1 className="text-black md:pl-3 text-[10px] font-[800] tracking-wider">
            2024
          </h1>
          <h1 className="text-black pl-3 text-[10px] font-[800] tracking-wider">
            {" "}
            ©THE MERAKI STUDIO
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
