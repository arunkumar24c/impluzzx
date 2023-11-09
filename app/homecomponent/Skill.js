import Image from "next/image";
import React from "react";


const Skill = () => {
  return (
    <div className="brand-container px-5 py-10 ">
      <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-between gap-5 w-full ">
        {/* 1 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full ">
          <Image
            src={"/assest/img1.jpg"}
            width={300}
            height={100}
            alt="#"
            className=" w-full h-[600px] cursor-pointer"
          />
        </div>
        {/* 2 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-5">
          <div>
            <h2 className="text-[red] text-[20px] font-medium">OUR SKILLS</h2>
            <h1 className="xl:text-[38px] lg:text-[38px] md:text-[30px] text-2xl font-bold leading-normal pr-8">
              We Offers You
              <span className="text-[red] "> Best </span>
            </h1>
            <h1 className="xl:text-[38px] lg:text-[38px] md:text-[30px] text-2xl  font-bold leading-normal pr-8">
              <span className="xl:text-[38px] lg:text-[38px] md:text-[30px] text-2xl text-[red]">
                {" "}
                Transportation
              </span>
              Service
            </h1>
          </div>
          <p className="leading-normal text-black text-[18px] font-medium">
            At impulzz Cosmo impex Pvt Ltd, we take pride in providing top-tier
            transportation services that cater to a wide range of needs and
            requirements. With a commitment to excellence and a focus on your
            convenience and satisfaction, we are your trusted partner in all
            your transportation needs.
          </p>
          <div className="flex flex-col gap-6">
            {/* 1 */}
            <div>
              <p className="text-black font-semibold text-[18px]">
                Air Freight 85%
              </p>
              <div className="py-2 flex">
                <div className="  bg-orange-600 w-[85%] h-5"></div>
                <div className=" bg-slate-200 w-[15%] h-5"></div>
              </div>
            </div>
            {/* 2nd */}
            <div>
              <p className="text-black font-semibold text-[18px]">
                Ocean Freight 65%
              </p>
              <div className="py-2 flex">
                <div className="  bg-orange-600 w-[65%] h-5"></div>
                <div className=" bg-slate-200 w-[35%] h-5"></div>
              </div>
            </div>
            {/* 3rd */}
            <div>
              <p className="text-black font-semibold text-[18px]">
                Road Freight 75%
              </p>
              <div className=" flex py-2">
                <div className="  bg-orange-600 w-[75%] h-5"></div>
                <div className=" bg-slate-200 w-[25%] h-5"></div>
              </div>
            </div>
            <div>
              <button className="bg-[red] text-white py-3 px-8">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
