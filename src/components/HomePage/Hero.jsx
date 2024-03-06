import React from "react";
import heroImg from "../../assets/hero.png";
import HomeInfo from "./HomeInfo";
import Header from "./Header";
const Hero = () => {
  return (
    <div className="w-full">
      <Header/>
      <div
      className="w-full h-[135px] m-w-[1200px] relative  mt-28"
      style={{
        backgroundImage: `url('${heroImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      
      <h1 className="text-white text-[195px] pl-28 mx-auto font-[700] top-[-75px] absolute ">
        MERAKI
      </h1>
      <HomeInfo/>
    </div>
    </div>
  );
};

export default Hero;
