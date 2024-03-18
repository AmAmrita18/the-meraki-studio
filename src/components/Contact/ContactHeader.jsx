import React from "react";
import logoGreen from "/logo-green.svg";

const ContactHeader = () => {
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
              CONTACT
            </h1>
          </div>
          <div className="lg:px-24 md:pt-0  pt-16">
              <p className="text-black font-[700] text-[10px] tracking-wider leading-snug">
                GET IN TOUCH TODAY - WE’RE AT YOUR SERVICE.
              </p>
              <p className="text-black font-[700] text-[10px] tracking-wider leading-snug">
                DROP A NOTE, AND WE’LL GET BACK TO YOU PROMPTLY
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
