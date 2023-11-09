"use client";
import React, { useState, useRef, useCallback } from "react";
import Glider from "react-glider";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsStarFill, BsStar } from "react-icons/bs";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";
import "glider-js/glider.min.css";

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    stars: 3,
    location: "New York",
    quote:
      "Impluzz's deep understanding of international trade was evident from the start. They provided invaluable insights into the global market, helping us identify new opportunities and navigate potential challenges. Their guidance and market analysis were instrumental in our decision-making process.",
  },
  {
    id: 2,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "What stood out most was Impluzz's ability to tailor their services to our specific needs. They worked closely with us to develop a strategy that aligned perfectly with our business goals. This customized approach ensured that our import and export operations were both efficient and cost-effective.",
  },
  {
    id: 3,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "Impluzz's commitment to reliability and punctuality was evident in every shipment they managed for us. Our goods consistently arrived on time, and their real-time tracking systems provided peace of mind. We could always count on them to deliver as promised.",
  },
  {
    id: 4,
    name: "Jane Smith",
    stars: 3,
    location: "Los Angeles",
    quote:
      "Navigating complex customs regulations and compliance issues can be a daunting task, but Impluzz made it seem effortless. They ensured that our shipments were fully compliant with all relevant laws and regulations, saving us from potential delays and complications",
  },
  {
    id: 5,
    name: "Jane Smith",
    stars: 5,
    location: "Los Angeles",
    quote:
      "Working with Impluzz felt like a true partnership. They were responsive, always available to answer our questions, and were proactive in addressing any concerns that arose. Their customer-centric approach made a significant difference in our overall experience",
  },
];

const Test = () => {
  const gliderRef = useRef(null);

  const handleGliderNext = useCallback(() => {
    gliderRef.current.scrollItem("next");
  }, [gliderRef]);

  const handleGliderPrev = useCallback(() => {
    gliderRef.current.scrollItem("prev");
  }, [gliderRef]);

  return (
    <div className="relative container mx-auto mmb-5 mt-10">
      <Glider
        className="glider-container"
        draggable
        hasDots={true}
        slidesToShow={3}
        scrollLock
        hasArrows={false}
        ref={gliderRef}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: "3",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: "2",
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
        {testimonialData.map((testimonial) => (
          <div className="mx-1" key={testimonial.id}>
            <PopularDestinationCard {...testimonial} />
          </div>
        ))}
      </Glider>
      <div className="glider-arrows flex items-center justify-center gap-3 relative">
        <button
          className="glider-arrow absolute bottom-[22rem] right-[5rem]"
          onClick={handleGliderPrev}
        >
          <GoArrowLeft size={32} />
        </button>
        <button
          className="glider-arrow absolute bottom-[22rem] right-[2rem]"
          onClick={handleGliderNext}
        >
          <GoArrowRight size={32} />
        </button>
      </div>
    </div>
  );
};

const PopularDestinationCard = ({ id, name, stars, location, quote }) => {
  return (
    <div className="brand-container py-5 mt-5 mb-5 px-5 hover:shadow-lg shadow-md border ">
      <div className="">
        <div className="flex flex-col gap-4 px-5 py-5">
          <div className="flex items-center gap-2">
            <Image
              src="/assest/testimonial.jpg"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <div className="flex gap-2">
                <p>{name}</p>
                {Array.from({ length: stars }, (_, i) => (
                  <p className="text-[red]" key={i}>
                    <BsStarFill />
                  </p>
                ))}
                {Array.from({ length: 5 - stars }, (_, i) => (
                  <p key={i}>
                    <BsStar />
                  </p>
                ))}
              </div>
              <p>{location}</p>
            </div>
          </div>
          <div>
            <p>{quote}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
