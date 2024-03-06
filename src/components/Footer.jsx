import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-[90%] pl-20 pr-5 bg-white  h-full max-w-[1200px] flex justify-between pt-2 pb-5">
        <div className="flex flex-row gap-x-8 items-center">
          <h1 className="text-black pl-3 text-[10px] font-[800] tracking-wider">SOCIAL:</h1>
          <ul className="text-black pl-3 text-[10px] font-[800] flex flex-row gap-x-4 tracking-wider">
            <li>/FACEBOOK</li>
            <li>/INSTAGRAM</li>
            <li>/LINKEDIN</li>
          </ul>
        </div>

        <div>
          <button className='bg-black'>
              <h1 className='text-white text-[9px] font-[700] tracking-wider'>SCROLL DOWN</h1>
            </button>
        </div>
        <div className="flex flex-row ml-20">
          <h1 className="text-black pl-3 text-[10px] font-[800] tracking-wider">2024</h1>
          <h1 className="text-black pl-3 text-[10px] font-[800] tracking-wider">
            {" "}
            THE MERAKI STUDIO
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
