import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  const serviceData = [
    {
      imgSrc: "/assest/s11.jpeg",
      imgWidth: 300,
      imgHeight: 100,
      title: "Imports industry",
      content:
        "Impluzz is a global leader in AI-powered Data Analytics, delivering cutting-edge solutions and services to transform data into actionable insights. Since our inception in [year], Impluzz has been at the forefront of revolutionizing how businesses harness the power of data worldwide.",
    },
    {
      imgSrc: "/assest/s12.jpeg",
      imgWidth: 300,
      imgHeight: 100,
      title: "Exports industry",
      content:
        "Impluzz is a globally renowned player in the export industry, providing comprehensive solutions and services to facilitate seamless trade and international business operations. Established , Impluzz has been instrumental in simplifying global trade processes and fostering international partnerships.",
    },
    {
      imgSrc: "/assest/s13.jpeg",
      imgWidth: 300,
      imgHeight: 100,
      title: "Imports and Exports Documentation Services by Impluzz",
      content:
        "Impluzz offers comprehensive export documentation services to facilitate seamless international trade operations. Our expertise in export documentation ensures compliance with regulations, smooth transactions, and hassle-free global business interactions.",
    },
    {
      imgSrc: "/assest/s14.jpeg",
      imgWidth: 300,
      imgHeight: 100,
      title: "Logistics Solutions by Impluzz",
      content:
        "Impluzz offers comprehensive logistics solutions designed to optimize global trade operations. Our logistics expertise ensures efficient and reliable movement of goods across borders, enabling seamless international business transactions.",
    },
    {
      imgSrc: "/assest/s15.jpeg",
      imgWidth: 300,
      imgHeight: 100,
      title: "Our Academy Offerings",
      content:
        "Impluzz Academy is a hub for comprehensive learning and skill development in the realm of international trade and business. We offer specialized courses and training programs designed to equip individuals and businesses with the knowledge and skills necessary to excel in the global marketplace.",
    },
  ];

  return (
    <div>
      <div className="brand-container px-5 py-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-xl text-[red] ">OUR SERVICES</h1>
          <h1 className="text-3xl font-semibold">Explore Our Services</h1>

          <div className="py-10 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-center gap-8 px-5">
            {serviceData.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 py-5"
              >
                <div>
                  <Image
                    src={service.imgSrc}
                    width={service.imgWidth}
                    height={service.imgHeight}
                    alt="#"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-semibold">{service.title}</h1>
                  <p>{service.content}</p>
                  <div className="relative cursor-pointer group">
                    <div className="mt-2">
                      <Link href="/Service">
                        <p className="flex items-center ">
                          <BsArrowRight
                            className="bg-[red] rounded-s-md h-9 w-11 text-white px-2"
                            size={25}
                          />
                          <span className="absolute text-white rounded-e-md text-[18px] font-semibold bg-[red] py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[10%]">
                            Read more
                          </span>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
