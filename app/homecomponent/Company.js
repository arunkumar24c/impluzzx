import Image from "next/image";
import React from "react";
import { GrCompliance } from "react-icons/gr";
import { FaSeedling } from "react-icons/fa6";
import { BsTruck } from "react-icons/bs";
import { FaTruckArrowRight } from "react-icons/fa6";

const Company = () => {
  return (
    <div className="brand-container px-5 py-10 ">
      <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-between gap-5 ">
        {/* 2 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-8 py-4">
          <div>
            <h1>we are trusted exports and imports company since 2008</h1>
          </div>
          <div className="flex flex-col justify-between gap-8">
            {/* 1st */}
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <p>
                  <FaSeedling size={45} />
                </p>
              </div>
              <div>
                <h2>Premium Seeds and Crop Varieties:</h2>
                <p>
                  Providing top-tier seeds and diverse crop varieties for
                  agricultural needs, enabling farmers to cultivate high-yield
                  and resilient crops.
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <p>
                  <FaTruckArrowRight size={45} />
                </p>
              </div>
              <div>
                <h2> Logistics and Supply Chain Management:</h2>
                <p>
                  Efficient transportation and storage solutions to ensure the
                  freshness and quality of perishable goods throughout the
                  import-export journey.
                </p>
              </div>
            </div>
            {/* 3rd */}
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <p>
                  <GrCompliance size={45} />
                </p>
              </div>
              <div>
                <h2>Compliance with International Standards:</h2>
                <p>
                  Adherence to strict quality standards and compliance with
                  international regulations to guarantee the safety and
                  reliability of all imported and exported agricultural
                  products.
                </p>
              </div>
            </div>
          </div>
          <div>
            {/* <button className="bg-[red] text-white py-3 px-8">
              Explore More
            </button> */}
          </div>
        </div>
        {/* 2 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full ">
          <Image
            src={"/assest/imgs.jpg"}
            width={300}
            height={100}
            alt="#"
            className=" w-full h-[500px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
