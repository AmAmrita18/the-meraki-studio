import React from "react";
import centreDAmitie from "../../assets/centre-d-amitie.png";
import GMLSeafood from "../../assets/GML-seafood.png";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Favourite5 = () => {
  return (
    <div className="w-full">
      <div className="w-[90%]  pl-20 ml-6 pr-5 flex flex-col gap-y-28  h-full  py-16">
        <div className="flex flex-row mt-8">
          <div className="w-[48%] mr-16 flex flex-col gap-y-8 py-8">
            <h1 className="text-black text-[38px] font-[700] leading-[46.32px] text-end">
              CENTRE D’AMITIÉ
            </h1>
            <div className="flex flex-col">
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-end ">
                FAVOURITE #5
              </h2>
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-end ">
                NON-PROFIT ORGANISATION
              </h2>
              <h2 className="text-black text-[10px] leading-[40px] font-[700] space-x-2 ">
                DESIGN & DEV
              </h2>
            </div>
            <div className="flex justify-end gap-x-8">
              <FaArrowUpRightFromSquare className="text-black text-[34px] " />
              <button className="w-[180px] h-[38px]   text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
            </div>
          </div>
          <div className="w-[48%] ">
            <img src={centreDAmitie} alt="" width={541} height={753} />
          </div>
        </div>

        <div className="flex flex-row-reverse">
          <div className="w-[48%] ml-16 flex flex-col gap-y-8 py-8">
            <h1 className="text-black text-[38px] font-[700] leading-[46.32px] text-start">
            GML SEAFOOD
            </h1>
            <div className="flex flex-col">
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-start ">
                FAVOURITE #4
              </h2>
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-start ">
              SEAFOOD SUPPLIER
              </h2>
              <h2 className="text-black text-end text-[10px] leading-[40px] font-[700] space-x-2 ">
                DESIGN & DEV
              </h2>
            </div>
            <div className="flex justify-start gap-x-8">
              <FaArrowUpRightFromSquare className="text-black text-[34px] " />
              <button className="w-[180px] h-[38px]   text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
            </div>
          </div>
          <div className="w-[48%] ">
            <img src={GMLSeafood} alt="" width={541} height={753} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-[48%] mr-16 flex flex-col gap-y-8 py-8">
            <h1 className="text-black text-[38px] font-[700] leading-[46.32px] text-end">
            BELINDA TOURS
            </h1>
            <div className="flex flex-col">
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-end ">
                FAVOURITE #3
              </h2>
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-end ">
              BOAT CRUISES
              </h2>
              <h2 className="text-black text-[10px] leading-[40px] font-[700] space-x-2 ">
                DESIGN & DEV
              </h2>
            </div>
            <div className="flex justify-end gap-x-8">
              <FaArrowUpRightFromSquare className="text-black text-[34px] " />
              <button className="w-[180px] h-[38px]   text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
            </div>
          </div>
          <div className="w-[48%] ">
            <img src={centreDAmitie} alt="" width={541} height={753} />
          </div>
        </div>

        <div className="flex flex-row-reverse">
          <div className="w-[48%] ml-16 flex flex-col gap-y-8 py-8">
            <h1 className="text-black text-[38px] font-[700] leading-[46.32px] text-start">
            LEAVE BLANK
            </h1>
            <div className="flex flex-col">
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-start ">
                FAVOURITE #3
              </h2>
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-start ">
              LOREM IPSUM
              </h2>
              <h2 className="text-black text-end text-[10px] leading-[40px] font-[700] space-x-2 ">
                DESIGN & DEV
              </h2>
            </div>
            <div className="flex justify-start gap-x-8">
              <FaArrowUpRightFromSquare className="text-black text-[34px] " />
              <button className="w-[180px] h-[38px]   text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
            </div>
          </div>
          <div className="w-[48%] ">
            <img src={GMLSeafood} alt="" width={541} height={753} />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-[48%] mr-16 flex flex-col gap-y-8 py-8">
            <h1 className="text-black text-[38px] font-[700] leading-[46.32px] text-end">
            LEAVE BLANK
            </h1>
            <div className="flex flex-col">
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-end ">
                FAVOURITE #1
              </h2>
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-end ">
              LOREM IPSUM
              </h2>
              <h2 className="text-black text-[10px] leading-[40px] font-[700] space-x-2 ">
                DESIGN & DEV
              </h2>
            </div>
            <div className="flex justify-end gap-x-8">
              <FaArrowUpRightFromSquare className="text-black text-[34px] " />
              <button className="w-[180px] h-[38px]   text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
            </div>
          </div>
          <div className="w-[48%] ">
            <img src={centreDAmitie} alt="" width={541} height={753} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite5;
