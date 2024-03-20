import React, { useRef, useState } from "react";
import homeServicesImg from "../../assets/FILTER.png";
import logoWhite from "/logo-white.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeServices = () => {
  return (
    <Swiper
    
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      /*  pagination={{
        clickable: true,
       
      }}
      */
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      speed={1500} 
      effect={"fade"} 
      fadeEffect={{ crossFade: true }} 
      className="mySwiper "
    >
      <SwiperSlide>
        <div className="w-full">
          <div className="w-full h-full  mx-auto m-w-[1200px] flex lg:flex-row flex-col">
            <div
              className="lg:w-[48%] h-[816px]"
              style={{
                backgroundImage: `url('${homeServicesImg}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            >
              <div className="px-10">
                <img
                  src={logoWhite}
                  width={70}
                  height={70}
                  alt=""
                  className="py-20"
                />
                <h1 className="text-white text-[38px] font-[700] leading-[46.32px]">
                  DIGITAL SOLUTIONS:
                </h1>
                <h1 className="text-white text-[38px] font-[700] leading-[46.32px]">
                  THE MERAKI TRADEMARK
                </h1>
                <div className="bg-[#486249] mt-7 py-4 ">
                  <h1 className="text-white text-[100px] leading-[121.9px] text-center font-[900]">
                    WEB
                  </h1>
                </div>
              </div>
            </div>
            <div className="lg:w-[48%] h-[816px] lg:mb-0 mb-8">
              <div className="px-10">
                <div className="flex justify-end lg:mr-0 mr-8">
                  <button className="text-left pl-5 w-[180px] h-[38px] transition-all duration-700 ease-in-out  hover:scale-95 my-24  text-[12px] font-[600] text-white bg-black ">
                    HIRE US
                  </button>
                </div>
                <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                  BEYOND DIGITAL
                </h1>
                <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                  THE MERAKI BLUEPRINT{" "}
                </h1>
                <div className="bg-black mt-7 py-4 ">
                  <h1 className="text-white text-[100px] leading-[121.9px] text-center font-[900]">
                    LAUNCH
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full">
          <div className="w-full h-full  mx-auto m-w-[1200px] flex lg:flex-row flex-col">
            <div
              className="lg:w-[48%] h-[816px]"
              style={{
                backgroundImage: `url('${homeServicesImg}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            >
              <div className="px-10">
                <img
                  src={logoWhite}
                  width={70}
                  height={70}
                  alt=""
                  className="py-20"
                />
                <h1 className="text-white text-[38px] font-[700] leading-[46.32px]">
                  DIGITAL SOLUTIONS:
                </h1>
                <h1 className="text-white text-[38px] font-[700] leading-[46.32px]">
                  THE MERAKI TRADEMARK
                </h1>
                <div className="bg-[#486249] mt-7 py-4 ">
                  <h1 className="text-white text-[95px] text-center font-[900]">
                    APP
                  </h1>
                </div>
              </div>
            </div>
            <div className="lg:w-[48%] h-[816px] ">
              <div className="px-10 lg:mb-0 mb-10">
                <div className="flex justify-end lg:mr-0 mr-8">
                  <button className="text-left pl-5 w-[180px] h-[38px] transition-all duration-700 ease-in-out  hover:scale-95 my-24  text-[12px] font-[600] text-white bg-black ">
                    HIRE US
                  </button>
                </div>
                <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                  BEYOND DIGITAL
                </h1>
                <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                  THE MERAKI BLUEPRINT{" "}
                </h1>
                <div className="bg-black mt-7 py-4 ">
                  <h1 className="text-white text-[95px] text-center font-[900]">
                    SELL
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full">
          <div className="w-full h-full  mx-auto m-w-[1200px] flex lg:flex-row flex-col">
            <div
              className="lg:w-[48%] h-[816px]"
              style={{
                backgroundImage: `url('${homeServicesImg}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            >
              <div className="px-10">
                <img
                  src={logoWhite}
                  width={70}
                  height={70}
                  alt=""
                  className="py-20"
                />
                <h1 className="text-white text-[38px] font-[700] leading-[46.32px]">
                  DIGITAL SOLUTIONS:
                </h1>
                <h1 className="text-white text-[38px] font-[700] leading-[46.32px]">
                  THE MERAKI TRADEMARK
                </h1>
                <div className="bg-[#486249] mt-7 py-4 ">
                  <h1 className="text-white text-[95px] text-center font-[900]">
                    SEO
                  </h1>
                </div>
              </div>
            </div>
            <div className="lg:w-[48%]  h-[816px]">
              <div className="px-10 lg:mb-0 mb-10">
                <div className="flex justify-end">
                  <button className="text-left pl-5 w-[180px] h-[38px] lg:mr-0 mr-8 transition-all duration-700 ease-in-out  hover:scale-95 my-24  text-[12px] font-[600] text-white bg-black ">
                    HIRE US
                  </button>
                </div>
                <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                  BEYOND DIGITAL
                </h1>
                <h1 className="text-black text-[38px] font-[700] leading-[46.32px]">
                  THE MERAKI BLUEPRINT{" "}
                </h1>
                <div className="bg-black mt-7 py-4 ">
                  <h1 className="text-white text-[95px] text-center font-[900]">
                    GROW
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeServices;
