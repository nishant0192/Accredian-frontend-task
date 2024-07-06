import React from "react";
import call from "../assets/call.svg";
import arrow from "../assets/right.svg";

const GetInTouch = () => {
  return (
    <div className="bg-[#1A73E8] w-[90vw] flex h-48 mb-20 overflow-hidden rounded-[10px]">
      <div className="flex justify-between w-[100%] items-center">
        <div className="flex justify-between w-[55%] ml-12">
          <img
            src={call}
            className="bg-white rounded-[12px] border-[8px] border-[#609CEB] mr-12"
            alt=""
          />
          <div className="flex flex-col mr-24">
            <div>
              <h1 className="text-white text-[1.7rem] font-[600]">
                Want to delve deeper into the program?
              </h1>
            </div>
            <div>
              <h2 className="text-white ">
                Share your details to receive expert insights from our program
                team!
              </h2>
            </div>
          </div>
        </div>
        <div className="mr-12 z-50">
          <button className="bg-white text-[#3B82F6] p-3 px-6 rounded-[10px] flex justify-around items-center font-[500]">
            Get In Touch
            <img src={arrow} className="" alt="" />
          </button>
        </div>
      </div>
      <div className="circles relative">
        <div className="bg-[#237CF2] w-[631px] h-[631px] rounded-[50%] flex justify-center items-center absolute right-[4rem] top-1 z-1">
          <div className="bg-[#3289FC] w-[514.94px] h-[514.94px] rounded-[50%] flex justify-center items-center">
            <div className="bg-[#4696FF] w-[374.14px] h-[374.14px] rounded-[50%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
