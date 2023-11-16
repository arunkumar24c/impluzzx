import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
  const serviceData = [
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "A Look into Impluzz Export Co.'s International Success",
      content:
        "n today's interconnected world, international trade has become a cornerstone of economic growth. Businesses worldwide are venturing into import and export to expand their horizons and increase profitability. One such thriving company at the forefront of this movement is Impluzz Export Co.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "Diverse Product Range",
      content:
        "Impluzz Export Co. offers a diverse portfolio of products, catering to a variety of industries. From agricultural commodities to consumer electronics, they have strategically established partnerships with manufacturers worldwide. This diversity not only helps mitigate risks but also ensures a steady supply of in-demand products.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "Global Network",
      content:
        "What sets Impluzz Export Co. apart is its extensive network of partners and clients across the globe. They have successfully built relationships with suppliers and buyers in different countries, which has led to a robust and sustainable trading network. With a strong presence in key markets, they can efficiently source and distribute products on a global scale.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "Quality Assurance",
      content:
        "Quality is a top priority for Impluzz Export Co. They adhere to strict quality control measures and certifications to ensure that their products meet or exceed international standards. This commitment to quality has garnered trust among their clients and has been a cornerstone of their success.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "Innovative Solutions",
      content:
        "In an ever-changing global market, innovation is essential. Impluzz Export Co. invests in the latest technology and logistics solutions to streamline their import and export processes. This results in cost-effective operations and faster delivery times for their customers.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      title: "Sustainability and Ethical Practices",
      content:
        "Impluzz Export Co. believes in responsible and sustainable business practices. They actively promote eco-friendly initiatives and support ethical trading. This approach not only resonates with conscious consumers but also aligns with international regulations and standards.",
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
                      <p className="flex items-center ">
                        <BsArrowRight
                          className="bg-[red] rounded-s-md h-9 w-11 text-white px-2"
                          size={25}
                        />
                        <span className="absolute text-white rounded-e-md text-[18px] font-semibold bg-[red] py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[10%]">
                          Read more
                        </span>
                      </p>
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
