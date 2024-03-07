import React from "react";

import homeServicesImg from "../../assets/FILTER.png";

import logoWhite from "/logo-white.svg";
import HomeContact from "./HomeContact";

const HeaderMobile = () => {
  return (
    <div className="w-full md:hidden flex flex-col bg-white">
      {/* header */}
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

      {/* home info  */}
      <div className="px-5 pt-5 border-b border-opacity-40 border-black">
        <div className="flex flex-col mt-4 mb-8">
          <h1 className="text-[28px] font-[700] leading-[34px] text-black">
            DESIGN +
          </h1>
          <h1 className="text-[28px] font-[700] leading-[34px] text-black">
            DEVELOPMENT
          </h1>
        </div>
        <div className="flex w-full justify-center  bg-black">
          <button className=" text-white transition-all duration-700 ease-in-out  hover:scale-95 py-6 text-[18px] font-[600] text-center">
            HIRE US
          </button>
        </div>
        <div className="flex flex-col my-8 gap-y-4">
          <p className="text-black text-[10px] tracking-wider leading-[12px] font-[700]">
            MERAKI IS MORE THAN JUST A TECH HUB.
          </p>
          <p className="text-black text-[10px] tracking-wider leading-[12px] font-[700]">
            IMMERSE YOURSELF IN A SPACE WHERE CUSTOM WEB DESIGNS MEET
            E-COMMERCE, INNOVATIVE APPS, AND STRATEGIC BUSINESS DEVELOPMENT.{" "}
          </p>
          <p className="text-black text-[10px] tracking-wider leading-[12px] font-[700]">
            EXPERIENCE THE MERAKI METAMORPHOSIS.
          </p>
          <div className="flex flex-row gap-8 my-4">
            <h1 className="text-[20px] font-[700] leading-[24px] text-black">
              60+
            </h1>
            <h1 className="text-[20px] font-[700] leading-[24px] text-black">
              PROJECTS
            </h1>
          </div>
        </div>
      </div>

      {/* home about  */}
      <div className="px-5 py-16 text-black">
        <h1 className="text-[28px] font-[700] leading-[34px] text-black">
          ABOUT US
        </h1>
        <p className="text-black my-4 pb-4 text-[10px] tracking-wider leading-[12px] font-[700]">
          SOME DATA ABOUT THE MERAKI STUDIO
        </p>
        <div className="flex flex-row justify-between my-8">
          <ul className="text-black flex flex-col gap-y-4  text-[10px] tracking-wider leading-[12px] font-[700]">
            <li>COUNTRY:</li>
            <li>FOUNDED</li>
            <li>3 WORDS</li>
            <li>SPECIALITY</li>
            <li>COFFEES/MONTH</li>
          </ul>
          <ul className="text-black flex flex-col gap-y-4 text-[10px] tracking-wider leading-[12px] font-[700]">
            <li>MAURITIUS</li>
            <li>2022</li>
            <li>SCALE YOUR BUSINESS</li>
            <li>SOFTWARE ENGINEERING</li>
            <li>720+</li>
          </ul>
        </div>
      </div>

      {/* digital solutions  */}
      <div
        className="w-full py-20"
        style={{
          backgroundImage: `url('${homeServicesImg}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      >
        <h1 className="mx-5 text-[27px]  font-[700] leading-[34px] text-white">
          DIGITAL SOLUTIONS
        </h1>
        <h1 className="mx-5 text-[27px] font-[700] leading-[34px] text-white">
          THE MERAKI TRADEMARK
        </h1>
        <div className="bg-[#486249] mt-16 relative ml-5">
          <h1 className="text-white py-8 px-2 text-[80px] leading-[97px] text-right font-[900]">
            APP
          </h1>
          <div className="bg-white mr-5 w-[90%]  absolute bottom-[-20px]  ">
            <h1 className="text-black flex flex-col gap-y-4 p-3  text-[10px] tracking-wider leading-[12px] font-[700]">
              OPTIMIZE YOUR OPERATIONS &gt;
            </h1>
          </div>
        </div>
      </div>

      {/* beyond digital solutions  */}
      <div
        className="w-full py-20"
       
      >
        <h1 className="mx-5 text-[27px]  font-[700] leading-[34px] text-black">
          BEYOND DIGITAL
        </h1>
        <h1 className="mx-5 text-[27px] font-[700] leading-[34px] text-black">
          THE MERAKI BLUEPRINT
        </h1>
        <div className="bg-black mt-16 relative ml-5">
          <h1 className="text-white py-8 px-2 text-[80px] leading-[97px] text-right font-[900]">
            LAUNCH
          </h1>
          <div className="bg-[#486249] mr-5 w-[90%]  absolute bottom-[-20px]  ">
            <h1 className="text-white flex flex-col gap-y-4 p-3  text-[10px] tracking-wider leading-[12px] font-[700]">
              LUNCH YOUR BUSINESS &gt;
            </h1>
          </div>
        </div>
      </div>

      {/* contact  */}
      <HomeContact/>

      
    </div>
  );
};

export default HeaderMobile;
