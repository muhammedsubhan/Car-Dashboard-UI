import React from "react";
import { BookingData, carCondition } from "./data";
import ServicesTimeLine from "@/app/MaterialUI/ServicesTimeLine";
import ServiceRadio from "@/app/MaterialUI/ServiceRadio";
import Image from "next/image";
import ProgressBar from "@/app/MaterialUI/ProgressBar";
const Services = () => {
  return (
    <>
      <div className="bg-slate-100 py-5 px-8 ">
        <div className="flex gap-5">
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
              <div className="bg-white rounded-lg min-w-[250px] min-h-[300px] flex flex-col items-center justify-center gap-4">
                <div>
                  <p className="text-xl font-semibold ">Your Order</p>
                </div>
                <div className="rounded-full border-8 border-red-500 p-4  flex items-center justify-center">
                  <div className="w-[170px]  rounded-full border-8 border-purple-500 h-[170px] flex items-center justify-center ">
                    <div className="w-[130px]  rounded-full border-8 border-green-500 h-[130px] flex items-center justify-center ">
                      <div className="bg-gray-200 w-[110px] h-[110px] rounded-full flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-1">
                          <small className="font-semibold text-gray-600">
                            Service{" "}
                          </small>
                          <small className="font-semibold text-gray-600">
                            Time
                          </small>
                          <p className="text-2xl text-purple-500 font-bold">
                            5, 2h
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
        <div className="bg-white h-[250px] flex items-center justify-between  rounded-2xl mt-5 mb-5">
          {carCondition.map((condition) => {
            return (
              <div
                key={condition.id + condition.title}
                className="flex flex-col gap-4 px-14 "
              >
                <Image
                  src={condition.image}
                  alt={condition.title}
                  width={120}
                  height={120}
                />
                <h1 className="text-xl font-semibold text-black">
                  {condition.title}
                </h1>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium text-gray-400">
                    {condition.part}
                  </p>
                  <span className="border-l h-5 border-gray-300 border"></span>
                  <p className="text-sm  font-medium text-gray-400">
                    {condition.replace}
                  </p>
                </div>
                <ProgressBar condition={condition} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
