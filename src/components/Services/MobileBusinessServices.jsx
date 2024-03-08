import React, { useState } from "react";
import { TbPointFilled } from "react-icons/tb";
import logoGreen from "/logo-green.svg";


const MobileBusinessServices = () => {
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
        <h1 className="text-black text-[26px] font-[700] leading-[31px]">
          BEYOND DIGITAL
        </h1>
        <h1 className="text-black text-[26px] font-[700] leading-[31px]">
          THE MERAKI BLUEPRINT
        </h1>
      </div>
      <div className="flex gap-x-0">
        <p
          className={`w-[33%] py-3 text-center text-[18px] font-[600] leading-[21px] px-4 ${
            isActive === 0 && "bg-black text-white"
          } text-black border border-black`}
          onClick={() => setIsActive(0)}
        >
          LAUNCH
        </p>
        <p
          className={`w-[33%] py-3 text-center text-[18px] font-[600] leading-[21px] px-4 ${
            isActive === 1 && "bg-black text-white"
          } text-black border border-black`}
          onClick={() => setIsActive(1)}
        >
          SELL
        </p>
        <p
          className={`w-[33%] py-3 text-center text-[18px] font-[600] leading-[21px] px-4 ${
            isActive === 2 && "bg-black text-white"
          } text-black border border-black`}
          onClick={() => setIsActive(2)}
        >
          GROW
        </p>
      </div>

      {isActive == 0 && (
        <div>
           <div className="flex flex-col justify-center gap-10 mt-2">
                <div className="w-full flex flex-col gap-y-4">
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
                <ul className="w-full flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
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
      )}
      {isActive == 1 && (
        <div>
          <div className="flex flex-col justify-center gap-10 mt-2">
                <div className="w-full flex flex-col gap-y-4">
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
                  {/* <button className='bg-black w-[70px] mt-16'>
                    <h1 className='text-white text-[9px] font-[700]'>SCROLL DOWN</h1>
                  </button> */}
                </div>
                <ul className="w-full flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
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
      )}
      {isActive == 2 && (
        <div>
          <div className="flex flex-col justify-center gap-10 mt-2">
                <div className="w-full flex flex-col gap-y-4">
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
                <ul className="w-full flex flex-col gap-y-4 text-[10px] text-black font-[700] tracking-wider">
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
      )}
    </div>
  );
};

export default MobileBusinessServices;
