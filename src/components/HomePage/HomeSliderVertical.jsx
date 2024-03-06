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
    <div>
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
        >
          <div className="w-full">
            <div className="w-full  h-full mx-auto max-w-[1200px] ">
              {" "}
              <SwiperSlide className="h-full">
               
                <Hero />
                {/* <HomeInfo /> */}
              </SwiperSlide>
              <SwiperSlide className="h-full">
                <HomeServices />
              </SwiperSlide>
              <SwiperSlide className="h-full">
                <HomeContact />{" "}
              </SwiperSlide>
            </div>
          </div>
        </Swiper>
      </SwiperSlide>
    </div>
  );
};

export default HomeSliderVertical;
