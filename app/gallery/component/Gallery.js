"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const imageSources = [
  { id: 1, src: "/assest/g1.webp" },
  { id: 2, src: "/assest/g2.jpg" },
  { id: 3, src: "/assest/g3.webp" },
  { id: 4, src: "/assest/g4.jpg" },
  { id: 5, src: "/assest/g5.jpg" },
  { id: 6, src: "/assest/g6.webp" },
  { id: 7, src: "/assest/g7.webp" },
  { id: 8, src: "/assest/g8.jpeg" },
  { id: 9, src: "/assest/g9.avif" },
  { id: 10, src: "/assest/g10.webp" },
  { id: 11, src: "/assest/g11.jpg" },
  { id: 12, src: "/assest/g12.jpg" },
  { id: 13, src: "/assest/g13.webp" },
  { id: 14, src: "/assest/g14.avif" },
  { id: 15, src: "/assest/g15.webp" },
  { id: 16, src: "/assest/g16.jpg" },
  { id: 17, src: "/assest/g17.jpg" },
  { id: 18, src: "/assest/g18.webp" },
  { id: 19, src: "/assest/g19.webp" },
  { id: 20, src: "/assest/g20.jpg" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="brand-container px-5 py-10 shadow-md">
        {" "}
        <h1 className="text-center text-[] text-[red] py-10">Gallery Page</h1>
        <div className="  px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-8 py-10">
          {imageSources.map(({ id, src }) => (
            <div key={id} className="relative shadow-lg  ">
              {" "}
              <div
                className="cursor-pointer shadow-white border border-black"
                onClick={() => openImage(src)}
              >
                <Image
                  width={300}
                  height={500}
                  className="w-full h-[500px]"
                  src={src}
                  alt={`img-${id}`}
                />
                <div className="absolute flex justify-center items-center top-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity text-center ease-in-out duration-300">
                  <div className="bg-white w-[300px] h-[370px] m-16 flex items-center justify-center">
                    <FiPlus size={45} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* selected image  */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-transparent backdrop-blur-3xl z-50 flex items-center justify-center cursor-pointer"
          onClick={closeImage}
        >
          <div className="w-full h-full p-32 mx-auto shadow-lg">
            {" "}
            <Image
              
              layout="fill" 
              objectFit="contain"
              className="w-full "
              src={selectedImage}
              alt="selected-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
