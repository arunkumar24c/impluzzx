import Image from "next/image";
import React from "react";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";

const Company = () => {
  return (
    <div className="brand-container px-5 py-10 ">
      <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row justify-between gap-5 ">
        {/* 2 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full flex flex-col gap-8 py-4">
          <div>
            <h1>We Are Trusted Logistics Company Since 1990</h1>
          </div>
          <div className="flex flex-col justify-between gap-8">
            {/* 1st */}
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <p>
                  <BsTruck size={45} />
                </p>
              </div>
              <div>
                <h2>Export Packing and Labeling</h2>
                <p>
                  Proper packaging and labeling are essential for the safe and
                  efficient transportation of goods. These services ensure that
                  products are securely packed, labeled correctly, and comply
                  with international shipping regulations.
                </p>
              </div>
            </div>
            {/* 2nd */}
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <p>
                  <BsTruck size={45} />
                </p>
              </div>
              <div>
                <h2>Customs Clearance Services:</h2>
                <p>
                  Customs clearance services involve handling all the
                  documentation and compliance requirements needed to get goods
                  through customs authorities at the point of entry. This
                  includes tariff classification, valuation, and compliance with
                  import/export regulations.
                </p>
              </div>
            </div>
            {/* 3rd */}
            <div className="flex justify-between gap-2 px-2 py-2">
              <div>
                <p>
                  <BsTruck size={45} />
                </p>
              </div>
              <div>
                <h2>Cross-border Transportation Services</h2>
                <p>
                  Transportation services specialize in cross-border trucking,
                  facilitating the movement of goods between neighboring
                  countries or regions.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[red] text-white py-3 px-8">
              Explore More
            </button>
          </div>
        </div>
        {/* 2 */}
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-full ">
          <Image
            src={"/assest/img1.jpg"}
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
