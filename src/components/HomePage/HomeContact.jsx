import React, { useState } from "react";

const HomeContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full">
      <div className="w-full  md:pl-20 pl-5 pr-5 h-full md:pt-20 pt-4 md:pb-10   flex lg:flex-row flex-col lg:gap-y-0 md:gap-y-20 gap-y-0">
        <div className="lg:w-[48%] w-full">
          <div>
            <h1 className="text-black lg::text-[85px] md:text-[73px] text-[49px] md:px-8 font-[700] md:leading-[75px] leading-[45px] ">
              SEND US A REQUEST TO CREATE UNIQUE PROJECT FOR YOU
            </h1>
          </div>
        </div>

        <div className="lg:w-[48%] w-full lg:pr-0 md:pr-8 pr-0">
          <div className="md:px-24 md:pt-0 pt-16">
            <p className="text-black font-[700] text-[10px] tracking-wider leading-[12.19px]">
              GET IN TOUCH TODAY - WE’RE AT YOUR SERVICE.
            </p>
            <p className="text-black font-[700] text-[10px] tracking-wider leading-[12.19px]">
              DROP A NOTE, AND WE’LL GET BACK TO YOU PROMPTLY
            </p>
          </div>
          <form className="flex flex-col items-end md:pr-28 gap-y-6 lg:ml-20 py-16">
            <div className="text-[#0A385A] w-full border-b border-t pt-4 border-[#8D8D8D] ">
                <label className="text-black tracking-wider pl-3 text-[12px] leading-[14.63px] text-center font-[600] ">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                className="bg-transparent tracking-wider pl-3 text-[14px]  font-[500]  w-full  placeholder:text-black outline outline-0 focus:outline-0"
              />
            </div>
            <div className="text-[#0A385A]  w-full border-b border-[#8D8D8D] ">
            <label className="text-black tracking-wider pl-3 text-[12px] leading-[14.63px] text-center font-[600] ">EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="bg-transparent tracking-wider pl-3  text-[14px] font-[500]  w-full  placeholder:text-black outline outline-0 focus:outline-0"
              />
            </div>
            <div className="text-[#0A385A] w-full border-b border-[#8D8D8D] ">
            <label className="text-black tracking-wider pl-3 text-[12px] leading-[14.63px] text-center font-[600] ">MESSAGE</label>
              <input
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder=""
                className="bg-transparent tracking-wider pl-3  text-[14px] font-[500]  w-full  placeholder:text-black outline outline-0 focus:outline-0"
              />
            </div>
            <div className="md:flex hidden">
              <button className="text-left pl-5 leading-[14.63px] w-[180px] h-[38px] transition-all duration-700 ease-in-out  hover:scale-95 tracking-wider my-24  text-[12px] font-[600] text-white bg-black ">
                SEND
              </button>
            </div>
            <div className="md:hidden mt-16 flex w-full justify-center  bg-black">
          <button className=" text-white py-6 text-[18px] font-[600] text-center">
            SEND
          </button>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;



