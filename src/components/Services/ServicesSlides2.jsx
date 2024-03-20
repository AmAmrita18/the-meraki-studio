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
        speed={1500} 
        effect={"fade"} 
        fadeEffect={{ crossFade: true }} 
      >
        <SwiperSlide>
          <div className="w-full bg-white">
            <div className="w-full py-16 lg:pl-10 pl-56 h-full mx-auto max-w-[1200px] ">
              <div className="flex flex-row  justify-between items-center">
                <div className=" flex flow-row lg:gap-x-28 gap-x-4 items-center">
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
                <button className="w-[180px] text-left pl-5 leading-[14.63px] transition-all duration-700 ease-in-out  hover:scale-95  h-[38px] text-[12px]  lg:mr-28 mr-72 font-[600] text-white bg-black">
                  HIRE US
                </button>
              </div>
              <div className="flex lg:flex-row flex-col justify-center gap-20 mt-20">
                <div className="lg:w-[20%] md:w-[60%] flex flex-col gap-y-5">
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    OUR TEAM CRAFTS EXCEPTIONAL MOBILE APP DESIGNS, NO MATTER
                    HOW INTRICATE THE REQUIREMENTS
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE TAKE A HOLISTIC APPROACH TO YOUR APP’S DESIGN DELIVERING
                    WELL-CONSIDERED LAYOUTS THAT ADHERE TO MODERN UI STANDARDS.
                  </p>
                  <button className='bg-black w-[80px] mt-12'>
                    <h1 className='text-white text-[9px] font-[700] leading-[10.97px] tracking-wider'>SCROLL DOWN</h1>
                  </button>
                </div>
                <ul className="w-[40%] flex flex-col  text-[10px] leading-[40px] text-black font-[700] tracking-wider">
                  <li className="flex  flex-row items-center gap-1">
                    <TbPointFilled />
                    IOS APPLICATION{" "}
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <TbPointFilled />
                    ANDROID APPLICATION{" "}
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <TbPointFilled />
                    SAAS AND MICRO SAAS APPLICATION{" "}
                  </li>
                  <li className="flex flex-row items-center gap-1">
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
            <div className="w-full py-16 lg:pl-10 pl-56 h-full mx-auto max-w-[1200px] ">
              <div className="flex flex-row justify-between items-center">
                <div className=" flex flow-row lg:gap-x-28 gap-x-4 items-center">
                  <img src={logoGreen} width={80} height={80} alt="" />
                  <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                    SERVICES
                  </h1>
                  <h1 className="text-black text-[38px] font-[700] pl-8 leading-[46.32px]">
                    SELL
                  </h1>
                </div>
                <button className="w-[180px] text-left pl-5 leading-[14.63px] transition-all duration-700 ease-in-out  hover:scale-95  h-[38px] text-[12px]  lg:mr-28 mr-72 font-[600] text-white bg-black">
                  HIRE US
                </button>
              </div>
              <div className="flex lg:flex-row flex-col justify-center gap-20 mt-20">
                <div className="lg:w-[20%] md:w-[60%] flex flex-col gap-y-5">
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
                  <button className='bg-black w-[80px] mt-12'>
                    <h1 className='text-white text-[9px] font-[700] leading-[10.97px] tracking-wider'>SCROLL DOWN</h1>
                  </button>
                </div>
                <ul className="w-[40%] flex flex-col leading-[40px] text-[10px] text-black font-[700] tracking-wider">
                  <li className="flex flex-row items-center gap-1">
                    <TbPointFilled />
                    SALES STRATEGY{" "}
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <TbPointFilled />
                    E-COMMERCE SETUP{" "}
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <TbPointFilled />
                    LEAD GENERATION{" "}
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <TbPointFilled />
                    CUSTOMER ENGAGEMENT{" "}
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <TbPointFilled />
                    PAYMENT SOLUTIONS{" "}
                  </li>
                  <li className="flex flex-row items-center gap-1">
                    <TbPointFilled />
                    INVENTORY MANAGEMENT{" "}
                  </li>
                  <li className="flex flex-row items-center gap-1">
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
