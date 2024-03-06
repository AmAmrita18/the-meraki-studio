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
const ServicesSlides3 = () => {
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
                    SEO
                  </h1>
                </div>
                <button className="w-[180px] transition-all duration-700 ease-in-out  hover:scale-95  h-[38px] text-[12px] mr-28 font-[600] text-white bg-black">
                  HIRE US
                </button>
              </div>
              <div className="flex flex-row justify-center gap-20 mt-20">
                <div className="w-[20%] flex flex-col gap-y-4">
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    OUR TEAM CURATE TAILORED SEO SOLUTIONS, SUITABLE FOR ANY
                    BUSINESS SCOPE.{" "}
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE HANDLE EVERY FACET OF YOUR SITE’S SEARCH PRESSENCE,
                    GIVING YOU A ROBUST SEO BLUEPRINT COMPLIANT WITH THE LATEST
                    STARDARDS.{" "}
                  </p>
                  {/* <button className="bg-black w-[70px] mt-16">
                    <h1 className="text-white text-[9px] font-[700]">
                      SCROLL DOWN
                    </h1>
                  </button> */}
                </div>
                <ul className="w-[40%] flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    ON-PAGE OPTIMIZATION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    OFF-PAGE OPTIMIZATION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    LOCAL SEO STRATEGIES{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    KEYWORD RESEARCH{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full bg-white">
            <div className="w-full py-16 pl-10   h-full mx-auto max-w-[1200px] ">
              <div className="flex flex-row justify-between items-center">
                <div className=" flex flow-row gap-x-28 items-center">
                  <img src={logoGreen} width={80} height={80} alt="" />
                  <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                    SERVICES
                  </h1>
                  <h1 className="text-black text-[38px] font-[700] pl-8 leading-[46.32px]">
                    GROW
                  </h1>
                </div>
                <button className="w-[180px] transition-all duration-700 ease-in-out  hover:scale-95  h-[38px] text-[12px] mr-28 font-[600] text-white bg-black">
                  HIRE US
                </button>
              </div>
              <div className="flex flex-row justify-center gap-20 mt-20">
                <div className="w-[20%] flex flex-col gap-y-4">
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    GROW BIG WITH MERAKI.
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE DON'T JUST HELP YOU START OR SELL. WE HELP YOU SCALE.
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE PROVIDE THE STRATEGIES AND TOOLS YOU NEED TO EXPAND YOUR
                    REACH AND GROW YOUR PROFITS.
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
                    GROWTH STRATEGY{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    MARKET EXPANSION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    TEAM BUILDING{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    PRODUCT DIVERSIFICATION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    REVENUE OPTIMIZATION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    CUSTOMER RETENTION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    ADVANCED ANALYTICS{" "}
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

export default ServicesSlides3;
