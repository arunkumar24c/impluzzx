import React from 'react'
import { TiTick } from "react-icons/ti";
import { BsArrowRight } from "react-icons/bs";
const Pricing = () => {
  
  return (
    <div>
      <div className="bg mt-[5rem] px-10 py-44">
        <h1 className="text-white text-[45px] py-3">Pricing</h1>
        <div className="text-white flex gap-3">
          {" "}
          <p>Home</p>
          <p>/</p>
          <p>pages</p>
          <p>/</p>
          <p>Pricing</p>
        </div>
      </div>
      <div className="brand-container py-10 px-5">
        <div className="flex flex-col justify-center items-center gap-5 py-10">
          <h1 className="text-xl text-[red] ">OUR SERVICES</h1>
          <h1 className="text-3xl font-semibold">Explore Our Services</h1>

          <div className="py-10 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 justify-center gap-8 px-5">
            {/* 1 */}
            <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 py-5 px-10 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-[red] text-[18px]">Basic Plan</p>
                <h1 className="flex items-center text-[25px]">
                  $<span className="text-[45px]">49.00</span>/ Month
                </h1>
              </div>
              <hr />
              <div className="flex flex-col gap-3 px-5 py-4">
                <h3>Lead Management</h3>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Lead Tracking
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Lead Qualification
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Lead Scoring
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Custom Fields
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Duplicate Blocking
                </p>
                <hr className="border-black" />
                <h3>Sales Management</h3>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Smart Views
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Sales Tracking
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Tasks and Follow-ups
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Conversation Tracking
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Sales Reporting
                </p>
                <div className="relative cursor-pointer group">
                  <div className="mt-2">
                    <p className="flex items-center ">
                      <BsArrowRight
                        className="bg-[red] rounded-s-md h-9 w-9 text-white px-2"
                        size={25}
                      />
                      <span className="absolute text-white rounded-e-md text-[18px] font-semibold bg-[red] py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[10%]">
                        Read more
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 py-5 px-10 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-[red] text-[18px]">Pro Plan</p>
                <h1 className="flex items-center text-[25px]">
                  $<span className="text-[45px]">249.00</span>/ Month
                </h1>
              </div>
              <hr />
              <div className="flex flex-col gap-3 px-5 py-4">
                <h3>Everything in Lite, plus Email Campaigns</h3>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Drag-and-drop Builder
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Responsive Templates
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Email Personalization
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Email Campaign Reports
                </p>
                <hr className="border-black" />
                <h3>Advanced Lead Management</h3>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Lead Distribution
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Custom Tabs
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Custom Actions
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Sales Notifications
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Role-based access
                </p>

                <div className="relative cursor-pointer group">
                  <div className="mt-2">
                    <p className="flex items-center ">
                      <BsArrowRight
                        className="bg-[red] rounded-s-md h-9 w-9 text-white px-2"
                        size={25}
                      />
                      <span className="absolute text-white rounded-e-md text-[18px] font-semibold bg-[red] py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[10%]">
                        Read more
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="flex flex-col justify-center gap-4 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300 py-5 px-10 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-[red] text-[18px]">Super Plan</p>
                <h1 className="flex items-center text-[25px]">
                  $<span className="text-[45px]">499.00</span>/ Month
                </h1>
              </div>
              <hr />
              <div className="flex flex-col gap-3 px-5 py-4">
                <h3>Everything in Pro, plus Workflow Automation</h3>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Visual Workflow Designer
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Communication Automation
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Sales Automation
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Escalations
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Zip Code Based Distribution
                </p>
                <hr className="border-black" />
                <h3>Sales Process Designer</h3>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Customizable Sales Processes
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Dynamic Forms
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Advanced Sales Signals
                </p>
                <p className="flex items-center gap-4 text-[18px]">
                  <span className="text-[green]">
                    <TiTick size={25} />
                  </span>
                  Sales Sequences
                </p>

                <div className="relative cursor-pointer group">
                  <div className="mt-2">
                    <p className="flex items-center ">
                      <BsArrowRight
                        className="bg-[red] rounded-s-md h-9 w-9 text-white px-2"
                        size={25}
                      />
                      <span className="absolute text-white rounded-e-md text-[18px] font-semibold bg-[red] py-2 px-2 left-0 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:left-[10%]">
                        Read more
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing