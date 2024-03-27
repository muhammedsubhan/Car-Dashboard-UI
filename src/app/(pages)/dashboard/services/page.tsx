import React from "react";
import { BookingData } from "./data";
import ServicesTimeLine from "@/app/MaterialUI/ServicesTimeLine";
import ServiceRadio from "@/app/MaterialUI/ServiceRadio";
const Services = () => {
  return (
    <>
      <div className="bg-slate-100 py-5 px-8 flex gap-5">
        <div className="min-w-[700px]">
          <div>
            <h1 className="text-2xl font-semibold">Service Station</h1>
          </div>
          <div className="py-6 flex flex-wrap gap-5">
            {BookingData.map((item) => {
              return (
                <div
                  key={item.id + item.bookingTitle}
                  className={`${item.bgcolor} w-[50px] h-[70px] flex items-center justify-center rounded-md shadow-sm`}
                >
                  <h1 className={`text-xl font-semibold ${item.textcolor}`}>
                    {item.bookingTitle}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-3">
              <p className="bg-white w-[15px] h-[15px] rounded-full border border-gray-300 "></p>
              <p className="text-gray-500 font-medium">Ready</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="bg-red-500 w-[15px] h-[15px] rounded-full "></p>
              <p className="text-gray-500 font-medium">Booked</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="bg-purple-500 w-[15px] h-[15px] rounded-full "></p>
              <p className="text-gray-500 font-medium">Current Station</p>
            </div>
          </div>
          <div className="mt-16  flex justify-between gap-8">
            <div className="bg-white rounded-lg min-w-[250px] min-h-[290px] flex flex-col items-center justify-center">
              <div>
                <p className="text-xl font-semibold ">Your Order</p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="bg-white w-full h-[60px]  px-6 flex justify-between items-center rounded-lg">
                <div className="flex items-center gap-3">
                  <p className="bg-green-500 w-[15px] h-[15px] rounded-full "></p>
                  <p className="text-gray-500 font-semibold text-xl">
                    Brake fluid change
                  </p>
                </div>
                <div className="bg-purple-200 px-5 py-2 rounded-md">
                  <p className="text-purple-600 font-bold">$32</p>
                </div>
              </div>
              <div className="bg-white w-full h-[60px]  px-6 flex justify-between items-center rounded-lg">
                <div className="flex items-center gap-3">
                  <p className="bg-red-500 w-[15px] h-[15px] rounded-full "></p>
                  <p className="text-gray-500 font-semibold text-xl">
                    Diagnostics
                  </p>
                </div>
                <div className="bg-purple-200 px-5 py-2 rounded-md">
                  <p className="text-purple-600 font-bold">$32</p>
                </div>
              </div>
              <div className="bg-white w-full h-[60px]  px-6 flex justify-between items-center rounded-lg">
                <div className="flex items-center gap-3">
                  <p className="bg-purple-500 w-[15px] h-[15px] rounded-full "></p>
                  <p className="text-gray-500 font-semibold text-xl">
                    External Washing
                  </p>
                </div>
                <div className="bg-purple-200 px-5 py-2 rounded-md">
                  <p className="text-purple-600 font-bold">$10</p>
                </div>
              </div>

              <button className="bg-purple-100 hover:bg-purple-300 transition-all delay-100 ease-in-out border-dashed	border-gray-300 border-2 w-full h-[60px]  flex justify-center items-center rounded-lg">
                <p className="text-base font-semibold text-gray-500">
                  Add Services
                </p>
              </button>
            </div>
          </div>
          <button className="bg-purple-500 text-white font-semibold text-xl w-full py-4 rounded-lg mt-6">
            Pay $86
          </button>
        </div>
        <div className="w-full">
          <div>
            <h1 className="text-2xl font-semibold">Service Required</h1>
          </div>
          <div className="bg-white mt-5 rounded-lg">
            <ServicesTimeLine />
          </div>
          <div className="py-5">
            <div>
              <h1 className="text-2xl font-semibold">Service Schedule</h1>
            </div>
            <div>
              <ServiceRadio />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
