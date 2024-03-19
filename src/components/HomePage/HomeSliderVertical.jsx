import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import Hero from "./Hero";
import HomeServices from "./HomeServices";
import HomeContact from "./HomeContact";

const HomeSliderVertical = () => {
  return (
    <div className="md:flex hidden">
      <SwiperSlide>
        <Swiper
          className="mySwiper2 swiper-v"
          direction={"vertical"}
          spaceBetween={50}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          speed={1500} 
          effect={"fade"} 
          fadeEffect={{ crossFade: true }} 
        >
          <div className="w-full">
            <div>
              <SwiperSlide >
                <Hero />
              </SwiperSlide>
              <SwiperSlide >
                <HomeServices />
              </SwiperSlide>
              <SwiperSlide>
                <HomeContact />
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </SwiperSlide>
    </div>
  );
};

export default HomeSliderVertical;
