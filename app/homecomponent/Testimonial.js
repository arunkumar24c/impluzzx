"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import "glider-js/glider.min.css";

const data = [
  {
    name: "Impulzz cosmo impex Pvt Limited",
    
    Founders: "Imports and Exports",
    span: "Products",

    content:
      "The export and import of fruits contribute significantly to global trade. Countries with favorable climates produce an abundance of diverse fruits, allowing for a rich exchange of flavors and nutrition. From tropical delights like mangoes and pineapples to temperate apples and berries, these exports enhance culinary experiences and support local economies. ",
    url: "/assest/fruitbanss.jpg",
    button: "Read More ",
    
  },
  {
    name: "Impulzz cosmo impex Pvt Limited",
    
    Founders: "Imports and Exports",
    span: "SEED",

    content:
      "Seeds form the foundation of agricultural production. The import and export of seeds enable the transfer of technology, genetic diversity, and improved crop varieties. Access to quality seeds ensures sustainable farming practices and plays a crucial role in addressing food scarcity.",
    url: "/assest/seed.jpg",
    button: "Read More ",
    
  },

  {
    name: "Impulzz cosmo impex Pvt Limited",
    
    Founders: "Imports and Exports",
    span: "MEATS",
    content:
      "The international meat trade involves a variety of products, from beef and poultry to seafood. Exporting and importing meats allow for a balanced distribution of protein sources globally. Adhering to stringent quality standards is paramount in ensuring food safety and meeting diverse cultural preferences. ",
    url: "/assest/meatban.jpg",
    button: "Read More ",
    
  },
];

const Testimonial = () => {
 

  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);
  return (
    <div className="relative  py-16 ">
      <Glider
        className="glider-container"
        draggable
        hasDots={false}
        slidesToShow={1}
        scrollLock
        hasArrows={false}
        ref={gliderRef}
        autoplay={3000} 
        settings={{
          rewind: true, 
        }}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: "1",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.55,
            },
          },
        ]}
      >
        {data.map((values, index) => (
          <div className="mx-1" key={index}>
            <PopularDestinationCard {...values} />
          </div>
        ))}
      </Glider>
      <div className="relative">
        <div className="glider-arrows flex flex-col items-center justify-center gap-3">
          <button
            className="absolute right-[1.5rem] bottom-[106px] glider-arrow bg-transparent border text-white px-3 py-3 rounded-2xl hover:bg-[red]/70"
            onClick={handleGliderPrev}
          >
            <GoArrowLeft size={32} />
          </button>
          <button
            className="absolute right-[1.5rem] bottom-[40px] glider-arrow bg-transparent border text-white px-3 py-3 rounded-2xl hover:bg-[red]/70"
            onClick={handleGliderNext}
          >
            <GoArrowRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularDestinationCard = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" py-10  "
    >
      <div className=" py-28 xl:px-10 lg:px-10 md:px-5 px-1">
        <div className="text-white py-16 flex flex-col gap-6 justify-start items-start  xl:px-10 lg:px-10 md:px-5 px-1">
          {/* text */}
          <h1 className="text-[24px] font-bold text-[red]">{props.name}</h1>
          
          <h1 className="xl:text-[38px] lg:text-[38px] md:text-[30px] text-2xl text-[red] flex gap-2 ">
            {props.Founders} <span className="text-white">{props.span}</span>
          </h1>
          <p className="leading-normal font-medium text-white text-justify text-[18px] xl:w-[32rem] lg:w-[28rem] md:w-[28rem] w-full">
            {props.content}
          </p>
          {/* button  */}
          <div className="flex xl:flex-row md:flex-col lg:flex-row flex-col gap-4 ">
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
