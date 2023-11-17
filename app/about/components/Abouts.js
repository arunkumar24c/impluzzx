import Link from 'next/link';
import React from 'react'

const Abouts = () => {
  return (
    <div className="bg mt-[5rem] px-10 py-44 h-[60vh]">
      <h1 className="text-[red] text-[45px] py-3">About us</h1>
      <div className="text-white flex gap-3">
        {" "}
        <Link href="/">
          <p className='text-black cursor-pointer'>Home</p>
        </Link>
        <p className='text-black'>/</p>
        <p className='text-black'>About Us</p>
      </div>
    </div>
  );
}

export default Abouts