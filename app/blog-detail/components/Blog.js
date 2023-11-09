"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { ImSearch } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";


const Blog = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    freight: "Select A Freight",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
    <div>
      <div className="brand-container px-5 py-10">
        {/* container */}
        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col gap-7 justify-center">
          {/* left container */}
          <div className="py-5 w-full xl:w-1/2 lg:w-1/2 md:w-full ">
            <div className="flex flex-col gap-4">
              {/* 1st */}
              <div className="flex flex-col gap-6">
                <Image
                  src={"/assest/blogdetail.jpg"}
                  width={200}
                  height={500}
                  className="w-full "
                  alt="img"
                />
                <h1 className="text-justify leading-normal font-bold">
                  Simplifying Global Trade: A Deep Dive into Import and Export
                  Services by Impluzz
                </h1>
                <p className="text-justify leading-normal font-medium">
                  In an increasingly interconnected world, import and export
                  services play a pivotal role in the success of businesses
                  looking to expand their horizons. At Impluzz, we are committed
                  to simplifying the complexities of international trade and
                  providing comprehensive solutions for your import and export
                  needs. In this blog post, we take a closer look at the import
                  and export services offered by Impluzz and how they can
                  benefit your business.
                </p>
                <p className="text-justify leading-normal font-medium">
                  Navigating the intricacies of customs clearance can be a
                  daunting task. Impluzz's customs clearance services are
                  designed to streamline this process. Our experts are
                  well-versed in customs regulations and ensure that your goods
                  cross borders smoothly. We handle all the necessary paperwork,
                  including tariff classification, valuation, and compliance,
                  saving you time and mitigating risks.
                </p>
                <p className="text-justify leading-normal font-medium">
                  Efficient freight forwarding is essential for a successful
                  import and export business. Impluzz excels in managing the
                  logistics of your shipments. We choose the most suitable
                  transportation methods, optimize routes, and coordinate the
                  movement of your goods from the point of origin to their final
                  destination. With a global network of partners, we ensure your
                  shipments are handled with precision and care.
                </p>
                <p className="text-justify leading-normal font-medium">
                  At Impluzz, we offer end-to-end logistics solutions to meet
                  all your requirements. This includes packaging, labeling,
                  documentation preparation, transportation coordination, and
                  even last-mile delivery. We aim to provide a comprehensive
                  package that simplifies the entire logistics process.
                </p>
              </div>
              {/* 2nd */}
              <div className="flex flex-col gap-3">
                <h1>3 Comments</h1>
                {/* 1st reply */}
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={"/assest/profile.jpg"}
                      width={100}
                      height={100}
                      alt="#"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3>John Doe 01 Jan 2022</h3>
                    <p className="text-justify leading-normal">
                      Working with Impluzz has been a game-changer for our
                      business. Their import and export services are top-notch,
                      and we've seen remarkable improvements in our
                      international trade operations. The level of expertise
                      they bring to the table is unmatched. We can't thank the
                      Impluzz team enough for their dedication to our success.
                    </p>
                    <button className="shadow-md border px-4 py-2 my-4">
                      Reply
                    </button>
                  </div>
                </div>
                {/* 2nd reply */}
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={"/assest/profile.jpg"}
                      width={100}
                      height={100}
                      alt="#"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3>John Doe 01 Jan 2022</h3>
                    <p className="text-justify leading-normal">
                      Thank you for sharing your experience with Impluzz! It's
                      great to hear about your positive outcomes from working
                      with them. I'm currently considering their services for my
                      business, and your feedback certainly reinforces my
                      confidence in their capabilities. Can you tell me more
                      about which specific services you found most beneficial
                      for your international trade operations
                    </p>
                    <button className="shadow-md border px-4 py-2 my-4">
                      Reply
                    </button>
                  </div>
                </div>
                {/* 3rd reply */}
                <div className="flex gap-4 px-8">
                  <div>
                    <Image
                      src={"/assest/profile.jpg"}
                      width={100}
                      height={100}
                      alt="#"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3>John Doe 01 Jan 2022</h3>
                    <p className="text-justify leading-normal">
                      Absolutely, I'd be happy to share more about our
                      experience with Impluzz. One of the standout services for
                      us has been their customs clearance expertise. Navigating
                      customs regulations used to be a major headache, but
                      Impluzz made it seamless. Their team handled all the
                      necessary documentation and ensured our goods cleared
                      customs without a hitch. Impluzz truly delivers on their
                      promise of making global trade easier
                    </p>
                    <button className="shadow-md border px-4 py-2 my-4">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
              {/* 3rd */}
              <div>
                <h1 className="py-6">Leave A Comment</h1>
                <form onSubmit={handleSubmit} className="px-5 py-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <input
                        type="text"
                        className="form-control text-white border border-black/40 w-full bg-transparent px-2 py-2 outline-none"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control text-white border border-black/40 w-full bg-transparent px-2 py-2 outline-none"
                        placeholder="Your Email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control text-white border border-black/40 w-full bg-transparent px-2 py-2 outline-none"
                        placeholder="Your Mobile"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <textarea
                      className="form-control text-black border border-black/40 bg-transparent px-2 py-2 outline-none w-full"
                      name="message"
                      placeholder="Special Note"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="py-5">
                    <button
                      className="btn rounded-md bg-[red]  text-white w-full py-3"
                      name="submit"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Right container */}
          <div className="py-5 w-full xl:w-1/2 lg:w-1/2 md:w-full ">
            <div className="flex flex-col gap-4">
              {/* 1 card */}
              <div className=" flex-col flex gap-4">
                <div>
                  <form className="flex w-full">
                    <input
                      type="text"
                      name="text"
                      placeholder="Search.."
                      class="w-full py-4 text-[15px] bg-white pl-4 text-black border border-black/40 focus:outline-none"
                      required
                    />
                    <button class=" text-[15px] bg-[red] text-white focus:outline-none px-5">
                      <ImSearch size={25} className="text-white font-bold" />
                    </button>
                  </form>
                </div>
                {/* 2 p */}
                <div className="flex flex-col gap-6 py-5">
                  <h1>Categories</h1>
                  <div className="px-6 py-4 flex flex-col gap-4">
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Food and Beverages
                    </p>
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Energy
                    </p>
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Medical and Healthcare
                    </p>
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Machinery and Equipment
                    </p>
                    <p className="flex gap-3 font-bold text-[18px] items-center">
                      <span>
                        <BsArrowRight size={25} />
                      </span>
                      Consumer Goods
                    </p>
                  </div>
                </div>
                {/* 3rd p */}
                <div>
                  <h1>Recent Post</h1>
                  <div className="flex flex-col gap-4 py-8">
                    {/* 1st */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Understanding Market Trends</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                    {/* 2nd */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Building Strong Partnerships</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                    {/* 3rd */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Customized Solutions</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                    {/* 4th */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Logistics and Compliance</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                    {/* 5th */}
                    <div className="flex gap-2 py-5">
                      <Image
                        src={"/assest/blogimg1.jpg"}
                        width={100}
                        height={100}
                        alt="#"
                      />
                      <div>
                        <h3>Sustainability in International Trade</h3>
                        <p>01 Jan, 2022 Admin</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 4th p */}
                <div>
                  <h2> Services </h2>
                  <div className="grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4 py-6">
                    <p className="px-5 text-center text-sm py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      High-Value Luxury Goods
                    </p>
                    <p className="px-5 text-sm text-center py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Energy Resources
                    </p>
                    <p className="px-5 text-sm text-center py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Automotive Products
                    </p>
                    <p className="px-5 text-sm text-center py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Green Products
                    </p>
                    <p className="px-5 text-sm text-center py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Online Marketplaces
                    </p>
                    <p className="px-5 text-sm text-center py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Art and Antiques
                    </p>
                    <p className="px-5 text-sm text-center py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Cultural and Creative Industries
                    </p>
                    <p className="px-5 text-sm text-center py-3 border shadow-md font-semibold hover:bg-[red] hover:text-white">
                      Cross-Border Services
                    </p>
                  </div>
                </div>
                {/* 5th */}
                <div>
                  <h2 className="py-2">Article</h2>
                  <p className="text-justify leading-normal font-medium">
                    This category includes the import and export of agricultural
                    products such as grains, fruits, vegetables, meat, and
                    dairy, as well as processed food and beverages.
                  </p>
                  <p className="bg-[red] w-[9rem] text-center text-white font-semibold px-5 py-3 hover:bg-[#243238] cursor-pointer my-4">
                    Read More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog