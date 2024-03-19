import React from "react";

const HomeInfo = () => {
  return (
    <div className="w-full">
      <div className="w-[90%]  pl-20 pr-5 h-full max-w-[1200px] lg:py-8 py-6 mt-28">
        <div className="flex md:flex-row flex-col gap-y-8 justify-between lg:gap-x-32 md:gap-x-8 my-16">
          <div>
            <h1 className="text-black lg:text-[38px] leading-[46.32px] md:text-[28px] font-[700]">DESIGN +</h1>
            <h1 className="text-black lg:text-[38px] leading-[46.32px] md:text-[28px] font-[700]">DEVELOPMENT</h1>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="font-[700] text-black text-[10px] leading-[12.19px] tracking-wider">MERAKI IS MORE THAN JUST A TECH HUB.</p>
            <p className="font-[700] text-black text-[10px] leading-[12.19px] tracking-wider">
              IMMERSE YOURSELF IN A SPACE WHERE CUSTOM WEB DESIGNS MEET
              E-COMMERCE, INNOVATIVE APPS, AND STRATEGIC BUSINESS DEVELOPMENT.{" "}
            </p>
            <p className="font-[700] text-black text-[12px] leading-[12.19px] tracking-wider">EXPERIENCE THE MERAKI METAMORPHOSIS.</p>
          </div>

          <div>
            <h1 className="text-black text-[20px] font-[700] leading-[24.38px]">70+</h1>
            <h1 className="text-black text-[20px] font-[700] leading-[24.38px]">PROJECTS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
