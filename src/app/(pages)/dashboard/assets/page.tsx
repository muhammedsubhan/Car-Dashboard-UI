import SplineAreaChart from "@/app/ChartsUI/SplineAreaChart";
import AssetsCard from "@/app/MaterialUI/AssetsCard";
import NotiesCard from "@/app/MaterialUI/NotiesCard";
import ReminderCard from "@/app/MaterialUI/ReminderCard";

import Image from "next/image";
import React from "react";

const Assets = () => {
  return (
    <>
      <div className="bg-slate-100 border-2 border-red-500 py-5 px-8">
        <div className="flex flex-col gap-5 w-full">
          <div>
            <h1 className="text-2xl font-semibold">Assets</h1>
          </div>
          <div className="flex justify-between gap-6">
            <div className="bg-blue-400 w-[370px] h-[600px] rounded-2xl  relative">
              <div className="flex items-center justify-around py-5">
                <div className="flex flex-col gap-4 ">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-base font-light  text-gray-100">
                      Fuel Usage
                    </h1>
                    <p className="text-xl text-white font-semibold">
                      2903.89 Ltr
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-base font-light  text-gray-100">
                      KM Driven
                    </h1>
                    <p className="text-xl text-white font-semibold">
                      2703.84 Ltr
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 ">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-base font-light   text-gray-100">
                      Total Cost
                    </h1>
                    <p className="text-xl text-white font-semibold">
                      $3,00,290.00
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-base font-light   text-gray-100">
                      Top Speed
                    </h1>
                    <p className="text-xl text-white font-semibold">$5.2K</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-52 right-7 ">
                <Image
                  src="/horizental-car.png"
                  alt="hori-car"
                  width={320}
                  height={320}
                />
              </div>
            </div>
            <div className=" flex flex-col gap-8">
              <div className="flex flex-col py-5  w-[800px] bg-white h-[320px] rounded-2xl">
                <div className="ml-6">
                  <h1 className="text-xl font-semibold">Activity</h1>
                </div>
                <SplineAreaChart />
              </div>
              <div className="flex gap-8">
                <NotiesCard />
                <AssetsCard />
              </div>
              <ReminderCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;
