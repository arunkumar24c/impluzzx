import React from 'react'

const Banner = () => {
  return (
    <div>
      <div className="bg mt-[5rem] px-10 py-44">
        <h1 className="text-white text-[45px] py-3">Gallery Page</h1>
        <div className="text-white flex gap-3">
          {" "}
          <p>Home</p>
          <p>/</p>
          <p>pages</p>
          <p>/</p>
          <p>Gallery</p>
        </div>
      </div>
    </div>
  );
}

export default Banner