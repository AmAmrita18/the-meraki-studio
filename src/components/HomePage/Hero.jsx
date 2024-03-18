import React from "react";
import heroImg from "../../assets/hero.png";
import HomeInfo from "./HomeInfo";
import Header from "./Header";
import Footer from "../Footer";
const Hero = () => {
  return (
    <div className="w-full">
      <Header/>
      <div
      className="w-full lg:h-[135px] h-[115px] m-w-[1200px] relative  mt-28 md:flex flex-col hidden"
      style={{
        backgroundImage: `url('${heroImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      
      <h1 className="text-white lg:text-[195px] text-[162px] lg:pl-28 pl-4 mx-auto font-[700] lg:top-[-75px] top-[-60px] absolute ">
        MERAKI
      </h1>
      <HomeInfo/>
      
    </div>
    </div>
  );
};

export default Hero;
