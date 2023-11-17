"use client"
import Image from "next/image";
import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Blog = () => {
  const blogPosts = [
    {
      imgSrc: "/assest/imp1.jpg",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "A Stroke of Genius",
      content:
        "The Impulzz Ace of Diamonds is a marvel to behold. Its exquisite design and durability make it a standout in my collection. Impulzz's attention to detail is truly unparalleled.",
    },
    {
      imgSrc: "/assest/imp1.jpg",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Artistry in Every Card",
      content:
        "I've never seen such craftsmanship before encountering Impulzz's Queen of Spades. The intricate patterns and quality surpass any other deck I've owned. It's more than just a card; it's a piece of art!",
    },
    {
      imgSrc: "/assest/imp1.jpg",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Quality Beyond Compare",
      content:
        "The Three of Clubs from Impulzz is a testament to their commitment to excellence. The quality and finish make every game an experience. Impulzz has set a new standard in card craftsmanship",
    },
    {
      imgSrc: "/assest/imp1.jpg",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Logistics and Compliance",
      content:
        "Navigating the intricacies of international logistics and compliance can be challenging. Impluzz takes the guesswork out of the equation. We provide comprehensive support, ensuring your products move seamlessly across borders while adhering to all relevant regulations and standards.",
    },
    {
      imgSrc: "/assest/imp1.jpg",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Sustainability in International Trade",
      content:
        "Sustainability is a growing concern in the global market. At Impluzz, we are committed to environmentally responsible business practices. We help our clients adopt sustainable strategies and offer guidance on reducing their environmental footprint, aligning with the evolving expectations of conscious consumers.",
    },
    {
      imgSrc: "/assest/imp1.jpg",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Your Global Success Partner",
      content:
        "Impluzz is more than just an export and import company; we are your partner for global success. Our dedication to excellence, industry expertise, and commitment to your goals make us the right choice for businesses looking to expand their horizons.",
    },
  ];

  return (
    <div className="mt-[5rem]">
      <div className="brand-container py-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[red] font-semibold text-[24px] text-center">
            LATEST BLOG
          </h1>
          <h1 className="leading-normal text-black font-bold text-[35px] text-center ">
            Read The Latest Articles from
          </h1>
          <h1 className="leading-normal text-black font-bold text-[35px] text-center ">
            Our Blog Post
          </h1>
          <div className="py-10 grid grid-cols-1  xl:grid-cols-3 lg:grid-cols-3  md:grid-cols-2 justify-center items-center gap-5  px-10">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                className="flex flex-col border shadow-md px-4 py-5 justify-center gap-4"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <Image
                    src={post.imgSrc}
                    width={post.imgWidth}
                    height={post.imgHeight}
                    alt="Image Alt Text"
                    className="transition-transform transform scale-100 group-hover:scale-110 cursor-pointer w-full"
                  />
                </div>
                <div className="flex flex-col justify-center gap-3 px-2">
                  <div className="flex gap-3">
                    <p className="flex gap-2 items-center">
                      <AiFillContacts className="text-[red]" /> {post.author}
                    </p>
                    <p className="flex gap-2 items-center">
                      <AiFillContacts className="text-[red]" /> {post.date}
                    </p>
                  </div>
                  <h1 className="text-[black] font-bold">{post.title}</h1>
                  <p className="text-[18px] flex justify-center leading-normal">
                    {post.content}
                  </p>
                  <p className="flex gap-2 text-[18px] items-center text-[red]">
                    Read More
                    <BsArrowRight />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
