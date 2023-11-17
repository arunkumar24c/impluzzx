"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsInstagram, BsLinkedin, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiFillContacts } from "react-icons/ai";
import Image from "next/image";

export default function Footer() {
  let Links = [
    { name: "About Us", link: "/" },
    { name: "Contact Us ", link: "/" },
    { name: "Our Services", link: "/" },
    { name: "Terms & Condition", link: "/" },
    { name: "privacy-policy", link: "/" },
  ];

  return (
    <div className="bg-black">
      <footer className="brand-container pt-10 px-5">
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-y-5 justify-between items-start pb-5">
          {/* text  */}
          {/* 1 */}
          <div className="text-white py-2 flex flex-col gap-2 ">
            <Link href="/">
              <Image
                src={"/assest/logo-white1.png"}
                width={250}
                height={80}
                className=""
              />
            </Link>
            <p className="flex gap-2 text-[#6b7280] items-center">
              <CiLocationOn />
              #689,VKK Menon Road, New Siddha Pudur, Coimbatore-641044 Tamilnadu
              (India)
            </p>
            <p className="flex gap-2 text-[#6b7280] items-center">
              <AiFillContacts />
              +91 9025833351
            </p>
            <p className="flex gap-2 text-[#6b7280] items-center">
              <AiOutlineMail />
              impulzzinfo@gmail.com
            </p>
            <div className="flex gap-5 items-center py-5">
              <p className=" text-[#6b7280] cursor-pointer hover:text-[red] rounded-md">
                <a href=" " target="_blank">
                  <BsInstagram size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-[red] rounded-md">
                <a href=" " target="_blank">
                  <RiTwitterXLine size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-[red] rounded-md">
                <a href="" target="_blank">
                  <BsLinkedin size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-[red] rounded-md">
                <a href="" target="_blank">
                  <BsYoutube size={25} />
                </a>
              </p>
              <p className=" text-[#6b7280] cursor-pointer hover:text-[red] rounded-md">
                <a href="https://wa.me/+919025833351" target="_blank">
                  <BsWhatsapp size={25} />
                </a>
              </p>
            </div>
          </div>
          {/* link 2 */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-[18px]">Services</h1>
            <div className="flex flex-col gap-6">
              <p className="text-[#6b7280] text-[14px] cursor-pointer font-semibold  hover:text-white ">
                Air Freight
              </p>

              <p className="text-[#6b7280] text-[14px] cursor-pointer font-semibold  hover:text-white  ">
                Sea Freight
              </p>

              <p className="text-[#6b7280] text-[14px] cursor-pointer font-semibold  hover:text-white  ">
                Road Freight
              </p>

              <p className="text-[#6b7280] text-[14px] cursor-pointer font-semibold  hover:text-white  ">
                Logistic Solutions
              </p>

              <p className="text-[#6b7280] text-[14px] cursor-pointer font-semibold  hover:text-white  ">
                Industry Solutions
              </p>
            </div>
          </div>
          {/* email 3 section */}
          <div className="flex flex-col gap-5">
            <h1 className="text-white text-[18px] cursor-pointer">
              Quick Links
            </h1>
            <div className="flex flex-col gap-6">
              {Links.map((link) => (
                <p
                  key={link.name}
                  className="text-[#6b7280] text-[14px] cursor-pointer font-semibold  hover:text-white"
                >
                  {link.name}
                </p>
              ))}
            </div>
          </div>
          {/* 4 */}
          <div className="flex flex-col h-full justify-center  gap-5 ">
            <p className="text-[18px]  text-[#ffffff] font-bold ">Newsletter</p>
            <p className="text-[16px] text-[#6b7280]">
              Impulse is the best parts shop of your daily nutritions. What kind
              of nutrition do you need you can get here soluta nobis
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                class=" w-full h-[47px]  text-[15px] bg-white pl-4 text-black border-b border-black focus:outline-none"
                required
              />
              <button class="w-[87px] h-[47px] text-[15px] bg-[red] text-white focus:outline-none p-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
