import React, { useRef, useState } from "react";
import logoGreen from "/logo-green.svg";
import { TbPointFilled } from "react-icons/tb";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Keyboard, Pagination } from "swiper/modules";
const ServicesSlides = () => {
  return (
    <div>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination]}
      >
        <SwiperSlide>
          <div className="w-full bg-white">
            <div className="w-full py-16 pl-10 h-full mx-auto max-w-[1200px] ">
              <div className="flex flex-row  justify-between items-center">
                <div className=" flex flow-row gap-x-28 items-center">
                  <img
                    src={logoGreen}
                    width={80}
                    height={80}
                    alt=""
                    className=""
                  />
                  <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                    SERVICES
                  </h1>
                  <h1 className="text-black text-[38px] font-[700] pl-8 leading-[46.32px]">
                    WEB
                  </h1>
                </div>
                <button className="w-[180px] transition-all duration-700 ease-in-out  hover:scale-95  h-[38px]  text-[12px] mr-28 font-[600] text-white bg-black">
                  HIRE US
                </button>
              </div>
              <div className="flex flex-row justify-center gap-20 mt-20">
                <div className="w-[20%] flex flex-col gap-y-4">
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    OUR TEAM EXCEL IN DESIGNING AND DEVELOPING USER-FRIENDLY
                    SITES.
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE APPLY ADVANCED METHODS AND TECHNOLOGIES TO CURATE QUICK,
                    POTENT, AND EFFECTIVE WEBSITES.
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE FOCUS ON WHAT YOU NEED.
                  </p>
                  {/* <button className="bg-black w-[70px] mt-16">
                    <h1 className="text-white text-[9px] font-[700]">
                      SCROLL DOWN
                    </h1>
                  </button> */}
                </div>
                <ul className="w-[40%] flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
                  <li className="flex  flex-row gap-1">
                    <TbPointFilled />
                    E-COMMERCE-WEBSITE
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    LANDING PAGE
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    WEB APPLICATION
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    PROMO SITE
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    CORPORATE SITE
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full bg-white">
            <div className="w-full py-16 pl-10 h-full mx-auto max-w-[1200px] ">
              <div className="flex flex-row justify-between items-center">
                <div className=" flex flow-row gap-x-28 items-center">
                  <img src={logoGreen} width={80} height={80} alt="" />
                  <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                    SERVICES
                  </h1>
                  <h1 className="text-black text-[38px] font-[700] pl-8 leading-[46.32px]">
                    LAUNCH
                  </h1>
                </div>
                <button className="w-[180px]  h-[38px] transition-all duration-700 ease-in-out  hover:scale-95 text-[12px] mr-28 font-[600] text-white bg-black">
                  HIRE US
                </button>
              </div>
              <div className="flex flex-row justify-center gap-20 mt-20">
                <div className="w-[20%] flex flex-col gap-y-4">
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    START SMART WITH MERAKI.
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE GUIDE YOU STEP-BY-STEP THROUGH THE LAUNCH OF YOUR
                    BUSINESS. WE PROVIDE ESSENTIAL TOOLS AND KNOW-HOW TO SET YOU
                    UP FOR SUCCESS.
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    FROM INITIAL IDEA TO OPENING DAY, WE'RE WITH YOU ALL THE
                    WAY. WE MAKE SURE YOUR BUSINESS GETS OFF TO A FLYING START.
                  </p>
                  {/* <button className="bg-black w-[70px] mt-16">
                    <h1 className="text-white text-[9px] font-[700]">
                      SCROLL DOWN
                    </h1>
                  </button> */}
                </div>
                <ul className="w-[40%] flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
                  <li className="flex  flex-row gap-1">
                    <TbPointFilled />
                    BUSINESS PLAN GUIDANCE
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    MARKET RESEARCH{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    BRAND CREATION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    MARKETING STRATEGY
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    POST-LAUNCH SUPPORT
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesSlides;
