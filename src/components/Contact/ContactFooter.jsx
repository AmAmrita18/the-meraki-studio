import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex md:flex-row flex-col md:justify-between gap-y-3 justify-center items-center w-full md:mt-0 mt-16  md:pl-20 md:pr-40 md:pb-0 pb-8  h-full  m-w-[1200px] ">
        <div className="flex flex-row gap-1">
          <p className="text-[10px] text-black font-[800] leading-[12px] tracking-wider">
            A MATTER OF LIFE AND DEATH? WRITE US HERE:
          </p>
          <FaWhatsapp className="text-[12px] text-black font-[900] leading-[12px] " />
        </div>
        <div className="flex flex-row  gap-x-3">
          <p className="text-[10px] text-black font-[800] leading-[12px] tracking-wider">
            2024
          </p>
          <p className="text-[10px] text-black font-[800] leading-[12px] tracking-wider">
            THE MERAKI STUDIO
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
