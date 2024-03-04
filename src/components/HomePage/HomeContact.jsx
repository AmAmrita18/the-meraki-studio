import React, { useState } from "react";

const HomeContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full">
      <div className="w-full  pl-20 pr-5 h-screen py-20 flex flex-row">
        <div className="w-[48%]">
          <div>
            <h1 className="text-black text-[85px] px-8  font-[700] leading-[75px]">
              SEND US A REQUEST TO CREATE UNIQUE PROJECT FOR YOU
            </h1>
          </div>
        </div>

        <div className="w-[48%]">
          <div className="px-28">
            <p className="text-black font-[700] text-[10px] leading-snug">
              GET IN TOUCH TODAY - WE’RE AT YOUR SERVICE.
            </p>
            <p className="text-black font-[700] text-[10px] leading-snug">
              DROP A NOTE, AND WE’LL GET BACK TO YOU PROMPTLY
            </p>
          </div>
          <form className="flex flex-col items-end pr-16 gap-y-6 ml-20 py-16">
            <div className="text-[#0A385A] w-full border-b border-[#8D8D8D] ">
                <label className="text-black pl-3 text-[12px] font-[600] ">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
               
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                className="bg-transparent pl-3 text-[14px] font-[500] mb-2 w-full  placeholder:text-black outline outline-0 focus:outline-0"
              />
            </div>
            <div className="text-[#0A385A]  w-full border-b border-[#8D8D8D] ">
            <label className="text-black pl-3 text-[12px] font-[600] ">EMAIL</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="bg-transparent pl-3 mb-2 text-[14px] font-[500]  w-full  placeholder:text-black outline outline-0 focus:outline-0"
              />
            </div>
            <div className="text-[#0A385A] w-full border-b border-[#8D8D8D] ">
            <label className="text-black pl-3 text-[12px] font-[600] ">MESSAGE</label>
              <input
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder=""
                className="bg-transparent pl-3 mb-2 text-[14px] font-[500]  w-full  placeholder:text-black outline outline-0 focus:outline-0"
              />
            </div>
            <div className="flex ">
              <button className="w-[180px] h-[38px] my-24  text-[12px] font-[600] text-white bg-black ">
                HIRE US
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;


// transition-all duration-700 ease-in-out  hover:scale-95
