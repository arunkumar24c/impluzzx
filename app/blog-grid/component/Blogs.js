import Image from "next/image";
import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

const Blogs = () => {
  const blogPosts = [
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Understanding Market Trends",
      content:
        "To thrive in the global market, it's essential to stay updated with the latest market trends. At Impluzz, we regularly analyze market data and keep a close eye on emerging trends, allowing us to offer valuable insights to our clients. Whether it's shifts in consumer behavior, changes in regulations, or emerging technologies, we ensure you're well-informed.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Building Strong Partnerships",
      content:
        "Global success often depends on strong partnerships. Impluzz has a proven track record of building and nurturing relationships with suppliers, distributors, and clients worldwide. We understand the importance of trust and collaboration in international trade, and we're dedicated to helping you forge these vital connections.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Customized Solutions",
      content:
        "No two businesses are the same, and neither should their international strategies be. Impluzz specializes in creating customized solutions tailored to your unique needs. Whether you're an established enterprise or a startup, we work closely with you to develop a strategy that aligns with your goals and budget.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Logistics and Compliance",
      content:
        "Navigating the intricacies of international logistics and compliance can be challenging. Impluzz takes the guesswork out of the equation. We provide comprehensive support, ensuring your products move seamlessly across borders while adhering to all relevant regulations and standards.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Sustainability in International Trade",
      content:
        "Sustainability is a growing concern in the global market. At Impluzz, we're committed to environmentally responsible business practices. We help our clients adopt sustainable strategies and offer guidance on reducing their environmental footprint, aligning with the evolving expectations of conscious consumers.",
    },
    {
      imgSrc: "/assest/img.gif",
      imgWidth: 300,
      imgHeight: 100,
      author: "John Doe",
      date: "01 Jan, 2022",
      title: "Your Global Success Partner",
      content:
        "Impluzz is more than just an export and import company; we're your partner for global success. Our dedication to excellence, industry expertise, and commitment to your goals make us the right choice for businesses looking to expand their horizons.",
    },
  ];
  return (
    <div>
      <div className="brand-container py-10 px-5">
        <div className="flex flex-col xl:flex-row md:flex-col lg:flex-row gap-4">
          {/* left */}
          <div className="w-full xl:w-1/2 md:w-full lg:w-1/2">
            <div className="py-10 grid grid-cols-1  xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-1 justify-center items-center gap-5 px-10">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex flex-col border shadow-md px-4 py-5 justify-center  gap-4"
                >
                  <div>
                    <Image
                      src={post.imgSrc}
                      width={post.imgWidth}
                      height={post.imgHeight}
                      alt="#"
                      className="transition-transform transform scale-100 group-hover:scale-110 cursor-pointer w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center  gap-3 px-2">
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
                </div>
              ))}
            </div>
          </div>
          {/* right */}
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
};

export default Blogs;
