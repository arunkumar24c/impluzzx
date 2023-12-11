"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const Services1 = () => {
  const blogData = [
    {
      id: 1,
      imageSrc: "/assest/s1.jpeg",
      title: "15 Years Of Experience Import ",
      content:
        "Impluzz is a global leader in AI-powered Data Analytics, delivering cutting-edge solutions and services to transform data into actionable insights. Since our inception in [year], Impluzz has been at the forefront of revolutionizing how businesses harness the power of data worldwide.",
      elements: [
        "Innovative Solutions",
        "Client-Centric Approach",
        "Cutting-Edge Technology",
      ],
    },
    {
      id: 2,
      imageSrc: "/assest/s2.jpeg",
      title: "15 Years Of Experience Export ",
      content:
        "Impluzz is a globally renowned player in the export industry, providing comprehensive solutions and services to facilitate seamless trade and international business operations. Established , Impluzz has been instrumental in simplifying global trade processes and fostering international partnerships.",
      elements: [
        "Global Trade Platform",
        "Customized Export Solutions",
        " Supply Chain Tools",
      ],
    },
    {
      id: 3,
      imageSrc: "/assest/s3.jpeg",
      title: "Import and Export Documentation Services by Impluzz",
      content:
        "Impluzz offers comprehensive export documentation services to facilitate seamless international trade operations. Our expertise in export documentation ensures compliance with regulations, smooth transactions, and hassle-free global business interactions. ",
      elements: [
        "Customs Clearance Documents",
        "Trade Compliance Reports",
        "Export Licensing Support",
      ],
    },
    {
      id: 4,
      imageSrc: "/assest/s4.jpeg",
      title: "Logistics Solutions by Impluzz",
      content:
        "Impluzz offers comprehensive logistics solutions designed to optimize global trade operations. Our logistics expertise ensures efficient and reliable movement of goods across borders, enabling seamless international business transactions.",
      elements: [
        "Warehousing and Distribution",
        "Transportation Management:",
        "Customs Brokerage",
      ],
    },
    {
      id: 5,
      imageSrc: "/assest/s4.jpeg",
      title: "Our Academy Offerings",
      content:
        "Impluzz Academy is a hub for comprehensive learning and skill development in the realm of international trade and business. We offer specialized courses and training programs designed to equip individuals and businesses with the knowledge and skills necessary to excel in the global marketplace.",
      elements: [
        "Industry Experts",
        "Practical Learning",
        "Customized Programs",
      ],
    },
  ];
  const buttonData = [
    {
      id: 1,
      label: "Imports",
    },
    {
      id: 2,
      label: "Exports",
    },
    {
      id: 3,
      label: "Documentation",
    },
    {
      id: 4,
      label: "Logistics",
    },
    {
      id: 5,
      label: "Academy",
    },
  ];
  const [selectedCard, setSelectedCard] = useState(1);

  const handleButtonClick = (id) => {
    setSelectedCard(id);
  };

  return (
    <div>
      <div className="bana mt-[5rem] px-10 py-44 w-full h-[60vh]">
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
          <div className="flex xl:flex-row md:flex-col lg:flex-row flex-col  justify-between gap-4 py-5 ">
            {/* 1 section */}
            <div className="w-full  xl:w-1/5 md:w-full lg:w-1/5 flex flex-col gap-4">
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
            <div className="w-full xl:w-4/5 md:w-full lg:w-4/5">
              {blogData
                .filter((blog) => blog.id === selectedCard)
                .map((blog) => (
                  <div
                    key={blog.id}
                    className="flex flex-col xl:flex-row lg:flex-row md:flex-col gap-6"
                  >
                    <div className="w-full ">
                      <Image
                        src={blog.imageSrc}
                        width={300}
                        height={600}
                        className="w-full object-cover h-full"
                        alt="#"
                      />
                    </div>
                    <div className="flex flex-col gap-4 w-full ">
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
                      <div>
                        <button className="bg-[red] text-white px-5 py-5">
                          Read more
                        </button>
                      </div>
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
