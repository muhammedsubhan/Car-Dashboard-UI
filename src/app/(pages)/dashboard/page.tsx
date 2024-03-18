import Image from "next/image";
import React from "react";
import { carData } from "./data";

const Dashboard = () => {
  return (
    <div className="bg-slate-100 ">
      <div className="flex items-center justify-between border-2 border-red-600 px-10 ">
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
      </div>
    </div>
  );
};

export default Dashboard;
