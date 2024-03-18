import React, { useState } from "react";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="w-full">
        <div className="w-full  md:pl-20 pl-5 md:pr-5 pr-8 h-full pt-8  m-w-[1200px]  flex  lg:flex-row flex-col">
          <div className="lg:w-[48%] md:flex hidden">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-row gap-x-20 items-center">
                <h2 className="text-[10px] text-black font-[800] tracking-wider leading-[12px]">
                  WORK EMAIL:
                </h2>
                <h1 className="text-black font-[700]  text-[20px] leading-[24.38px] tracking-wider">
                  HELLO@THEMERAKISTUDIO.CO
                </h1>
              </div>
              <div className="flex flex-row gap-x-20 items-center">
                <h2 className="text-[10px] text-black font-[800] tracking-wider leading-[12px]">
                  SALES EMAIL:
                </h2>
                <h1 className="text-black font-[700] text-[20px] leading-[24.38px] tracking-wider">
                  HIRE@THEMERAKISTUDIO.CO
                </h1>
              </div>
              <div className="flex flex-row gap-x-20 mt-8 ">
                <h2 className="text-[10px] text-black font-[800] tracking-wider leading-[12px]">
                  OUR SOCIALS:
                </h2>
                <ul className="text-black font-[700] text-[20px] leading-[24px] tracking-wider flex flex-col gap-y-4">
                  <li>LINKEDIN</li>
                  <li>FACEBOOK</li>
                  <li>INSTAGRAM</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-[48%] md:hidden flex w-full">
            <div>
              <h1 className="text-black md:text-[85px] text-[49px] md:px-8   font-[700] md:leading-[75px] leading-[45px]">
                SEND US A REQUEST TO CREATE UNIQUE PROJECT FOR YOU
              </h1>
            </div>
          </div>
          <div className="lg:w-[48%]  w-full">
           
            <form className="flex flex-col items-end lg:pr-16 md:pr-28 gap-y-6 lg:ml-20 md:pt-0 pt-16">
              <div className="text-[#0A385A] w-full border-b border-[#8D8D8D] ">
                <label className="text-black tracking-wider pl-3 text-[12px] font-[600] ">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  className="bg-transparent tracking-wider pl-3 text-[14px]  font-[500] mb-2 w-full  placeholder:text-black outline outline-0 focus:outline-0"
                />
              </div>
              <div className="text-[#0A385A]  w-full border-b border-[#8D8D8D] ">
                <label className="text-black tracking-wider pl-3 text-[12px] font-[600] ">
                  EMAIL
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  className="bg-transparent tracking-wider pl-3 mb-2 text-[14px] font-[500]  w-full  placeholder:text-black outline outline-0 focus:outline-0"
                />
              </div>
              <div className="text-[#0A385A] w-full border-b border-[#8D8D8D] ">
                <label className="text-black tracking-wider pl-3 text-[12px] font-[600] ">
                  MESSAGE
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder=""
                  className="bg-transparent tracking-wider pl-3 mb-2 text-[14px] font-[500]  w-full  placeholder:text-black outline outline-0 focus:outline-0"
                />
              </div>
              <div className="md:flex hidden">
                <button className="w-[180px] h-[38px] transition-all duration-700 ease-in-out  hover:scale-95 tracking-wider mt-16 mb-12  text-[12px] font-[600] text-white bg-black ">
                  SEND
                </button>
              </div>
              <div className="md:hidden mt-16 flex transition-all duration-700 ease-in-out  hover:scale-95 w-full justify-center  bg-black">
                <button className=" text-white py-6 text-[18px] font-[600] text-center">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* for mobile  */}
      </div>
    </div>
  );
};

export default ContactInfo;
