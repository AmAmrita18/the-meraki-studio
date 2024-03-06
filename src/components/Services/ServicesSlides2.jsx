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
const ServicesSlides2 = () => {
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
                    MOBILE
                  </h1>
                </div>
                <button className="w-[180px]  h-[38px] text-[12px] mr-28 font-[600] text-white bg-black">
                  HIRE US
                </button>
              </div>
              <div className="flex flex-row justify-center gap-20 mt-20">
                <div className="w-[20%] flex flex-col gap-y-4">
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    OUR TEAM CRAFTS EXCEPTIONAL MOBILE APP DESIGNS, NO MATTER
                    HOW INTRICATE THE REQUIREMENTS
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE TAKE A HOLISTIC APPROACH TO YOUR APP’S DESIGN DELIVERING
                    WELL-CONSIDERED LAYOUTS THAT ADHERE TO MODERN UI STANDARDS.
                  </p>
                  <button className='bg-black w-[70px] mt-16'>
                    <h1 className='text-white text-[9px] font-[700]'>SCROLL DOWN</h1>
                  </button>
                </div>
                <ul className="w-[40%] flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
                  <li className="flex  flex-row gap-1">
                    <TbPointFilled />
                    IOS APPLICATION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    ANDROID APPLICATION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    SAAS AND MICRO SAAS APPLICATION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    MULTI PLATFORM{" "}
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
                    SELL
                  </h1>
                </div>
                <button className="w-[180px]  h-[38px] text-[12px] mr-28 font-[600] text-white bg-black">
                  HIRE US
                </button>
              </div>
              <div className="flex flex-row justify-center gap-20 mt-20">
                <div className="w-[20%] flex flex-col gap-y-4">
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    SELL MORE WITH MERAKI.
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE GIVE YOU THE TOOLS TO MAKE SALES SOAR. FROM ONLINE STORES
                    TO IN-PERSON SALES, WE HAVE YOU COVERED.
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE HELP YOU CONNECT WITH CUSTOMERS AND CLOSE DEALS. SIMPLE,
                    FAST, EFFECTIVE.
                  </p>
                  <button className='bg-black w-[70px] mt-16'>
                    <h1 className='text-white text-[9px] font-[700]'>SCROLL DOWN</h1>
                  </button>
                </div>
                <ul className="w-[40%] flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    SALES STRATEGY{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    E-COMMERCE SETUP{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    LEAD GENERATION{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    CUSTOMER ENGAGEMENT{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    PAYMENT SOLUTIONS{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    INVENTORY MANAGEMENT{" "}
                  </li>
                  <li className="flex flex-row gap-1">
                    <TbPointFilled />
                    SALES ANALYTICS{" "}
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

export default ServicesSlides2;
