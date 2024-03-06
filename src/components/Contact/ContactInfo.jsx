import React, { useState } from "react";

const ContactInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="w-full">
        <div className="w-full  pl-20 pr-5 h-full pt-8  m-w-[1200px]  flex flex-row">
          <div className="w-[48%]">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-row gap-x-20 items-center">
                <h2 className="text-[10px] text-black font-[800] tracking-wider leading-[12px]">
                  WORK EMAIL:
                </h2>
                <h1 className="text-black font-[700] text-[20px] leading-[24px] tracking-wider">
                  HELLO@THEMERAKISTUDIO.CO
                </h1>
              </div>
              <div className="flex flex-row gap-x-20 items-center">
                <h2 className="text-[10px] text-black font-[800] tracking-wider leading-[12px]">
                  SALES EMAIL:
                </h2>
                <h1 className="text-black font-[700] text-[20px] leading-[24px] tracking-wider">
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

          <div className="w-[48%]">
            <div className="px-28">
              <p className="text-black font-[700] text-[10px] tracking-wider leading-[12px]">
                GET IN TOUCH TODAY - WE’RE AT YOUR SERVICE.
              </p>
              <p className="text-black font-[700] text-[10px] tracking-wider leading-[12px]">
                DROP A NOTE, AND WE’LL GET BACK TO YOU PROMPTLY
              </p>
            </div>
            <form className="flex flex-col items-end pr-16 gap-y-6 ml-20 pt-16">
              <div className="text-[#0A385A] w-full border-b border-[#8D8D8D] ">
                <label className="text-black pl-3 text-[12px] font-[600] ">
                  NAME
                </label>
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
                <label className="text-black pl-3 text-[12px] font-[600] ">
                  EMAIL
                </label>
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
                <label className="text-black pl-3 text-[12px] font-[600] ">
                  MESSAGE
                </label>
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
                <button className="w-[180px] h-[38px] mt-20 mb-16  text-[12px] font-[600] text-white bg-black ">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
