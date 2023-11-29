"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Services1 = () => {
  const blogData = [
    {
      id: 3,
      imageSrc: "/assest/blog.jpg",
      title: "15 Years Of Experience stocks ",
      content:
        "These are the basic materials used in manufacturing or production. For example, in the textile industry, raw materials could include cotton, wool, or synthetic fibers.",
      elements: ["Raw Materials", "Finished Goods", "Inventory"],
    },
    {
      id: 1,
      imageSrc: "/assest/blog.jpg",
      title:
        "Efficient Supply Chain Management for Import and Export Companies",
      content:
        "In the dynamic world of international trade, an effective supply chain stands as the backbone of success for import and export companies. The core content of this intricate system comprises several key elements, each pivotal in ensuring a seamless flow of goods across borders",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 2,
      imageSrc: "/assest/blog.jpg",
      title:
        "Comprehensive Inventory Management for Import and Export Companies",
      content:
        "Efficient inventory management stands as the cornerstone of success for import and export companies. Maintaining a detailed inventory ensures a smooth flow of goods, reduces operational costs, and enhances overall productivity. By meticulously tracking incoming shipments, assessing stock levels, and managing outgoing orders, companies can optimize their supply chain processes. ",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 4,
      imageSrc: "/assest/blog.jpg",
      title: "Diverse Merchandise Solutions for Import and Export Excellence",
      content:
        "As an import and export company dedicated to delivering exceptional global trade solutions, we offer an extensive array of merchandise to meet diverse market demands. Our comprehensive range includes but isn't limited to electronics, textiles, machinery, consumer goods, and more.",
      elements: ["element1", "element2", "element3"],
    },
  ];
  const buttonData = [
    {
      id: 1,
      label: "Supply",
    },
    {
      id: 2,
      label: "Inventory",
    },
    {
      id: 3,
      label: "Stock",
    },
    {
      id: 4,
      label: "Merchandise",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(1);

  const handleButtonClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div>
      <div className="bg mt-[5rem] px-10 py-44 h-[60vh]">
        <h1 className="text-[red] text-[45px] py-3">Services</h1>
        <div className="text-white flex gap-3">
          {" "}
          <Link href="/">
            <p className="text-black cursor-pointer">Home</p>
          </Link>
          <p className="text-black">/</p>
          <p className="text-black"> Services</p>
        </div>
      </div>
      <div className="brand-container px-5 py-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[red]"> OUR SERVICES</h2>
          <h1>Explore Our Services</h1>

          {/* card */}
          <div className="flex  justify-between gap-8 py-5 ">
            {/* 1 section */}
            <div className="w-full  xl:w-1/2 md:w-full lg:w-1/2 flex flex-col gap-4">
              {buttonData.map((button) => (
                <button
                  key={button.id}
                  className={`border px-5 py-3 ${
                    selectedCard === button.id ? "bg-[red] text-white" : ""
                  }`}
                  onClick={() => handleButtonClick(button.id)}
                >
                  {button.label}
                </button>
              ))}
            </div>
            {/* 2nd */}
            <div className="w-full xl:w-1/2 md:w-full lg:w-1/2">
              {blogData
                .filter((blog) => blog.id === selectedCard)
                .map((blog) => (
                  <div
                    key={blog.id}
                    className="flex flex-col xl:flex-row lg:flex-row md:flex-col gap-6"
                  >
                    <div className="w-full xl:w-1/2 md:w-full lg:w-1/2">
                      <Image
                        src={blog.imageSrc}
                        width={100}
                        height={100}
                        className="w-full h-full"
                        alt="#"
                      />
                    </div>
                    <div className="flex flex-col gap-4 w-full xl:w-1/2 md:w-full lg:w-1/2">
                      <h1 className="text-black font-bold leading-normal ">
                        {blog.title}
                      </h1>
                      <p className="text-[18px]  leading-normal text-justify">
                        {blog.content}
                      </p>
                      <div>
                        {blog.elements.map((element, index) => (
                          <p
                            className="flex gap-2 items-center font-medium"
                            key={index}
                          >
                            <TiTick size={25} className="text-[green]" />
                            {element}
                          </p>
                        ))}
                      </div>
                      <button className="bg-[red] text-white px-5 py-5">
                        Read more
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services1;
