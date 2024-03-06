import React from "react";

const HomeInfo = () => {
  return (
    <div className="w-full">
      <div className="w-[90%]  pl-20 pr-5 h-full max-w-[1200px] py-16 mt-28">
        <div className="flex flex-row justify-between gap-x-32 my-44">
          <div>
            <h1 className="text-black text-[38px] font-[700]">DESIGN +</h1>
            <h1 className="text-black text-[38px] font-[700]">DEVELOPMENT</h1>
          </div>

          <div className="flex flex-col gap-y-4">
            <p className="font-[700] text-black text-[12px]">MERAKI IS MORE THAN JUST A TECH HUB.</p>
            <p className="font-[700] text-black text-[12px]">
              IMMERSE YOURSELF IN A SPACE WHERE CUSTOM WEB DESIGNS MEET
              E-COMMERCE, INNOVATIVE APPS, AND STRATEGIC BUSINESS DEVELOPMENT.{" "}
            </p>
            <p className="font-[700] text-black text-[12px]">EXPERIENCE THE MERAKI METAMORPHOSIS.</p>
          </div>

          <div>
            <h1 className="text-black text-[20px] font-[700]">30 +</h1>
            <h1 className="text-black text-[20px] font-[700]">PROJECTS</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
