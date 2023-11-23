"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Services1 = () => {
  const blogData = [
    {
      id: 1,
      imageSrc: "/assest/blog.jpg",
      title: "15 Years Of Experience In air exporting and importing",
      content:
        "Air freight services offer swift and efficient transportation of goods via air carriers. With rapid delivery times, this mode of transportation is ideal for time-sensitive cargo or goods requiring quick global distribution. It ensures reliability and flexibility, making it a preferred choice for perishable items, high-value goods, and urgent shipments.",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 2,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of Experience In Transportation Servicing dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Sea freight, commonly known as ocean freight, involves transporting cargo in containers via ships. It is a cost-effective and reliable method for transporting large volumes of goods across long distances. Sea freight is well-suited for heavy and bulky items, offering various container sizes to accommodate different cargo types. While it might have longer transit times, it's a preferred choice for global trade due to its affordability for non-urgent shipments.",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 3,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of Experience In Transportation Servicing dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Road freight involves the transportation of goods over land via trucks or lorries. It offers flexibility and door-to-door delivery options, making it an essential part of supply chain logistics. Road freight is adaptable to varying shipment sizes and is often used for domestic or regional transportation needs. Its efficiency and accessibility to various locations make it a versatile and reliable choice.",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 4,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of ExpTransportation Servicing dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Logistic solutions encompass a range of services that optimize the movement and management of goods throughout the supply chain. This includes warehousing, inventory management, distribution, packaging, and transportation. Logistic solutions aim to streamline processes, reduce costs, and enhance overall efficiency in the delivery of goods from suppliers to consumers",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 5,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of Experience In Tran Servicing dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Industry-specific logistics solutions cater to the unique needs and requirements of different sectors such as pharmaceuticals, automotive, retail, technology, and more. These solutions are tailored to address the specific challenges and regulations of each industry, offering customized strategies and services to ensure seamless supply chain operations.",
      elements: ["element1", "element2", "element3"],
    },
    {
      id: 6,
      imageSrc: "/assest/blog.jpg",
      title:
        "15 Years Of Experience In Transportation  dgjfgjhj  hffhj dhjfhj fhj",
      content:
        "Warehouse solutions encompass a range of services and strategies aimed at optimizing the storage, management, and distribution of goods within a warehouse setting.",
      elements: ["element1", "element2", "element3"],
    },
  ];
  const buttonData = [
    {
      id: 1,
      label: "Air Freight",
    },
    {
      id: 2,
      label: "Ocean Freight",
    },
    {
      id: 3,
      label: "Road Freight",
    },
    {
      id: 4,
      label: "Train Freight",
    },
    {
      id: 5,
      label: "Customs Clearance",
    },
    {
      id: 6,
      label: "WareHouse Solution",
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
          <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col justify-between gap-8 py-16 ">
            {/* 1 section */}
            <div className="flex flex-col gap-2 w-full xl:w-1/2 md:w-full lg:w-1/2">
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
