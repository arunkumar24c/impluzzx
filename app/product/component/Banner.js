import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg mt-[5rem] px-10 py-44">
        <h1 className="text-white text-[45px] py-3">Products</h1>
        <div className="text-white flex gap-3">
          {" "}
          <Link href="/">
            <p className=" cursor-pointer">Home</p>
          </Link>
         
          <p>/</p>
          <p>Products</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
