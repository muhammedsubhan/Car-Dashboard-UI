import Image from "next/image";
import React from "react";
import { carData, GuageCardData } from "./data";
import GuageCard from "@/app/MaterialUI/GuageCard";
import DistributedColumnsChart from "@/app/ChartsUI/DistributedColumnsChart";

const Dashboard = () => {
  return (
    <div className="bg-slate-100 py-5 px-8">
      <div>
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="py-6">
          <div className="flex items-center  gap-10 flex-wrap">
            {GuageCardData.map((item) => {
              return <GuageCard key={item.id} item={item} />;
            })}
          </div>
        </div>
        <div>
          <div className="bg-white w-[560px] flex flex-col rounded-3xl">
            <div className="px-8 mt-3 py-3">
              <p className="text-black text-2xl font-semibold">
                Miles <span className=" font-normal">Statistics</span>
              </p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-5">
                  <p className="bg-blue-500 px-4 text-white font-medium py-0.5 rounded-2xl">
                    Day{" "}
                  </p>
                  <p className="text-gray-600 font-medium">Week </p>
                  <p className="text-gray-600 font-medium">Month </p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-500">
                    265 Miles
                  </p>
                </div>
              </div>
            </div>
            <DistributedColumnsChart />
          </div>
          <div></div>
        </div>
      </div>
      {/* <div className="flex items-center justify-between border-2 border-red-600 px-10 ">
        {carData.map((car) => {
          return (
            <div
              key={car.id}
              className={`flex flex-col rounded-2xl  ${car.bgColor} w-[350px] space-y-4 py-4 px-8 justify-center`}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/car-icon-1.png"
                  alt="icon"
                  width={22}
                  height={22}
                />
                <p className="text-base font-semibold">
                  {car.recommend}% Recommend
                </p>
              </div>
              <div>
                <Image
                  src={car.image}
                  alt="car-image"
                  width={250}
                  height={250}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">{car.title}</h1>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/car-icon-2.png"
                      alt="icon-2"
                      width={16}
                      height={16}
                    />
                    <p className="text-gray-400">{car.likes}K</p>
                    <Image
                      src="/icons/car-icon-3.png"
                      alt="icon-2"
                      width={16}
                      height={16}
                    />
                    <Image
                      src="/icons/car-icon-4.png"
                      alt="icon-2"
                      width={13}
                      height={13}
                    />
                  </div>
                  <div>
                    <p className="text-gray-400">${car.perhour}/h</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Dashboard;
