import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactFooter = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-row justify-between w-full  pl-20 pr-40 mt-6 pb-2-4  h-full  m-w-[1200px] ">
        <div className="flex flex-row gap-2">
          <p className="text-[10px] text-black font-[800] leading-[12px] tracking-wider">
            A MATTER OF LIFE AND DEATH? WRITE US HERE:
          </p>
          <FaWhatsapp className="text-[10px] text-black font-[800] leading-[12px] tracking-wider" />
        </div>
        <div className="flex flex-row gap-x-3">
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
