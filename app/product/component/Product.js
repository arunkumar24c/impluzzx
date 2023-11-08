import Image from 'next/image';
import React from 'react'


const Product = () => {
   const imageUrls = [
     { id: 1, url: "/assest/product1.webp", name: "Rice" },
     { id: 2, url: "/assest/product2.avif", name: "Wheat" },
     { id: 3, url: "/assest/product3.jpeg", name: "Cereals" },
     { id: 4, url: "/assest/product4.webp", name: "GroundNut" },
     { id: 5, url: "/assest/product5.jpg", name: "Fresh Fruit" },
     { id: 6, url: "/assest/product6.avif", name: "Fresh Vegetables" },
     { id: 7, url: "/assest/product7.webp", name: "Processed Vegetables" },
     { id: 8, url: "/assest/product8.jpeg", name: "Processes Fruits" },
     { id: 9, url: "/assest/product9.jpg", name: "Tea" },
     { id: 10, url: "/assest/product10.jpg", name: "Coffee" },
     { id: 11, url: "/assest/product11.avif", name: "Spices" },
     { id: 12, url: "/assest/product12.jpg", name: " Coconut" },
     { id: 13, url: "/assest/product13.jpg", name: "Turmeric" },
     { id: 14, url: "/assest/product14.avif", name: "Tamarind" },
     { id: 15, url: "/assest/product15.webp", name: "Sugar" },
     { id: 16, url: "/assest/product16.webp", name: "Agriculture Machineries" },
     { id: 17, url: "/assest/product17.webp", name: "Agriculture equipments" },
     { id: 18, url: "/assest/product18.jpg", name: "Coir" },
     { id: 19, url: "/assest/product19.jpg", name: "Honey" },
     { id: 20, url: "/assest/product20.webp", name: "Processed Meat & Poultry" },
   
     { id: 21, url: "/assest/product21.jpg", name: "Cotton" },
   ];

   
  return (
    <div>
      <div className="brand-container px-5 py-10">
        <h1 className="py-10 text-[red] text-center">Our Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-4 gap-8">
          {imageUrls.map((image) => (
            <div
              key={image.id}
              className="w-58 h-58 relative group overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 cursor-pointer hover:rotate-3"
              style={{
                animation: "shadow-pulse 2s infinite", 
              }}
            >
              <div className="w-full h-full relative">
                <Image
                  src={image.url}
                  alt="#"
                  width={300}
                  height={300}
                  className="group-hover:opacity-80 transition-opacity w-full h-full duration-300"
                />
              </div>
              <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product
