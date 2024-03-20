import React from "react";
import centreDAmitie from "../../assets/centre-d-amitie.png";
import GMLSeafood from "../../assets/GML-seafood.png";
import visit from "../../assets/visit2.png";

const Favourite5 = () => {
  return (
    <div className="w-full">
      <div className="md:w-[90%] md:mr-0 mr-6  md:pl-20 ml-6 lg:pr-5 md:pr-16 flex flex-col gap-y-28  h-full  py-16">
        <div className="flex md:flex-row flex-col-reverse md:mt-8 ">
          <div className="md:w-[48%] md:mr-16 flex flex-col  py-8">
            <h1 className="text-black md:flex hidden text-[38px] pb-8 font-[700] leading-[46.32px] justify-end">
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
              <img src={visit} width={37} height={32} alt="" />
              <button className="w-[180px] h-[38px] text-left pl-5 leading-[14.63px]  text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
            </div>
          </div>
          <div className="md:w-[48%] ">
            <h1 className="text-black md:hidden flex mb-8 text-[22px] font-[700] leading-[46.32px] text-end">
              CENTRE D’AMITIÉ
            </h1>
            <img src={centreDAmitie} alt="" width={541} height={753} />
          </div>
        </div>

        <div className="flex md:flex-row-reverse flex-col-reverse">
          <div className="md:w-[48%] md:ml-16 flex flex-col  py-8">
            <h1 className="text-black md:flex hidden text-[38px] pb-8 font-[700] leading-[46.32px] text-start">
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
            <div className="flex  justify-start gap-x-8">
             
              <button className="w-[180px] h-[38px] text-left pl-5 leading-[14.63px]  text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
              <img src={visit} width={37} height={32} alt="" />
            </div>
          </div>
          <div className="md:w-[48%] ">
            <h1 className="text-black md:hidden flex mb-8 text-[22px] font-[700] leading-[46.32px] justify-start">
              GML SEAFOOD
            </h1>
            <img
              src={GMLSeafood}
              alt=""
              width={541}
              height={753}
              className=" ml-0"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse md:mt-8">
          <div className="md:w-[48%] md:mr-16 flex flex-col  py-8">
            <h1 className="text-black md:flex hidden text-[38px] pb-8 font-[700] leading-[46.32px] justify-end">
              BELINDA TOURS
            </h1>
            <div className="flex flex-col">
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-end ">
                FAVOURITE #3
              </h2>
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-end ">
                BOAT CRUISES{" "}
              </h2>
              <h2 className="text-black text-[10px] leading-[40px] font-[700] space-x-2 ">
                DESIGN & DEV
              </h2>
            </div>
            <div className="flex justify-end gap-x-8">
              <img src={visit} width={37} height={32} alt="" />
              <button className="w-[180px] h-[38px]  text-left pl-5 leading-[14.63px] text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
            </div>
          </div>
          <div className="md:w-[48%] ">
            <h1 className="text-black md:hidden flex mb-8 text-[22px] font-[700] leading-[46.32px] text-end">
              BELINDA TOURS{" "}
            </h1>
            <img src={centreDAmitie} alt="" width={541} height={753} />
          </div>
        </div>

        <div className="flex md:flex-row-reverse flex-col-reverse">
          <div className="md:w-[48%] md:ml-16 flex flex-col  py-8">
            <h1 className="text-black md:flex hidden text-[38px] pb-8 font-[700] leading-[46.32px] justify-start">
              COMING SOON
            </h1>
            <div className="flex flex-col">
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-start ">
                FAVOURITE #2
              </h2>
              <h2 className="text-black text-[10px] leading-[24px] font-[700] space-x-2 text-start ">
                LOREM IPSUM
              </h2>
              <h2 className="text-black text-end text-[10px] leading-[40px] font-[700] space-x-2 ">
                DESIGN & DEV
              </h2>
            </div>
            <div className="flex justify-start gap-x-8">
              
              <button className="w-[180px] h-[38px] text-left pl-5 leading-[14.63px]  text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
              <img src={visit} width={37} height={32} alt="" />
            </div>
          </div>
          <div className="md:w-[48%] ">
            <h1 className="text-black md:hidden flex mb-8 text-[22px] font-[700] leading-[46.32px] text-start">
              COMING SOON
            </h1>
            <img
              src={GMLSeafood}
              alt=""
              width={541}
              height={753}
              className=" ml-0"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse md:mt-8">
          <div className="md:w-[48%] md:mr-16 flex flex-col py-8">
            <h1 className="text-black md:flex hidden text-[38px] pb-8 font-[700] leading-[46.32px] justify-end">
              COMING SOON
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
              <img src={visit} width={37} height={32} alt="" />
              <button className="w-[180px] h-[38px] text-left pl-5 leading-[14.63px]  text-[12px] font-[600] text-white bg-black ">
                VIEW
              </button>
            </div>
          </div>
          <div className="md:w-[48%] ">
            <h1 className="text-black md:hidden flex mb-8 text-[22px] font-[700] leading-[46.32px] text-end">
              COMING SOON
            </h1>
            <img src={centreDAmitie} alt="" width={541} height={753} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite5;
