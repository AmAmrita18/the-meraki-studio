import React, { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import logoGreen from "/logo-green.svg";

const MobileDigitalServices = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="flex flex-col gap-y-10 pt-10 pb-8 px-5">
        <div>
        <img
              src={logoGreen}
              width={36}
              height={36}
              alt=""
              className="w-[36px] h-[36px]"
            />
        </div>
      
      <div>
        <h1 className="text-black text-[26px] font-[700] leading-[31px]">DIGITAL SOLUTIONS:</h1>
        <h1 className="text-black text-[26px] font-[700] leading-[31px]">THE MERAKI BLUEPRINT</h1>
      </div>
      <div className="flex gap-x-0">
        <p
          className={`w-[33%] py-3 text-center text-[18px] font-[600] leading-[21px] px-4 ${
            isActive === 0 && "bg-black text-white"
          } text-black border border-black`}
          onClick={() => setIsActive(0)}
        >
          WEB
        </p>
        <p
          className={`w-[33%] py-3 text-center text-[18px] font-[600] leading-[21px] px-4 ${
            isActive === 1 && "bg-black text-white"
          } text-black border border-black`}
          onClick={() => setIsActive(1)}
        >
        MOBILE
        </p>
        <p
          className={`w-[33%] py-3 text-center text-[18px] font-[600] leading-[21px] px-4 ${
            isActive === 2 && "bg-black text-white"
          } text-black border border-black`}
          onClick={() => setIsActive(2)}
        >
          SEO
        </p>
      </div>

      {isActive == 0 && <div>
        <div className="flex flex-col justify-center gap-10 mt-2">
                <div className="w-full flex flex-col gap-y-4">
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
                <ul className="w-full flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
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
              </div></div>}
      {isActive == 1 && <div>
        <div className="flex flex-col justify-center gap-10 mt-2">
                <div className="w-full flex flex-col gap-y-4">
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    OUR TEAM CRAFTS EXCEPTIONAL MOBILE APP DESIGNS, NO MATTER
                    HOW INTRICATE THE REQUIREMENTS
                  </p>
                  <p className="text-[10px] font-[700] leading-[25px] tracking-wider text-black">
                    WE TAKE A HOLISTIC APPROACH TO YOUR APP’S DESIGN DELIVERING
                    WELL-CONSIDERED LAYOUTS THAT ADHERE TO MODERN UI STANDARDS.
                  </p>
                  {/* <button className='bg-black w-[70px] mt-16'>
                    <h1 className='text-white text-[9px] font-[700]'>SCROLL DOWN</h1>
                  </button> */}
                </div>
                <ul className="w-full flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
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
              </div></div>}
      {isActive == 2 && <div>
        <div className="flex flex-col justify-center gap-10 mt-2">
                <div className="w-full flex flex-col gap-y-4">
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
                <ul className="w-full flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
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
              </div></div>}
    </div>
  );
};

export default MobileDigitalServices;
