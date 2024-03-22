import Image from "next/image";
import React from "react";
import { carData, GuageCardData } from "./data";
import GuageCard from "@/app/MaterialUI/GuageCard";
import DistributedColumnsChart from "@/app/ChartsUI/DistributedColumnsChart";
import AreaChart from "@/app/ChartsUI/AreaCharts";
import DashboardCarsCard from "@/app/MaterialUI/DashboardCarsCard";

const Dashboard = () => {
  return (
    <div className="bg-slate-100 py-5 px-8">
      <div>
        <div>
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="py-6">
            <div className="flex items-center  gap-10 flex-wrap">
              {GuageCardData.map((item) => {
                return <GuageCard key={item.id} item={item} />;
              })}
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="bg-white w-[580px] flex flex-col rounded-3xl">
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
            <div className="bg-white w-[580px] flex flex-col rounded-3xl">
              <div className="px-8 mt-3 py-3">
                <p className="text-black text-2xl font-semibold">
                  Car <span className=" font-normal">Statistics</span>
                </p>
                <div className="flex items-center justify-between mt-6 flex-row-reverse">
                  <div className="flex items-center gap-5  rounded-2xl px-2 ">
                    <p className="bg-orange-600 px-5 text-white font-medium py-0.5 rounded-2xl">
                      Day{" "}
                    </p>
                    <p className="text-gray-600 font-medium">Week </p>
                    <p className="text-gray-600 font-medium">Month </p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-500">
                      20 Feburary 2022
                    </p>
                  </div>
                </div>
              </div>
              <AreaChart />
            </div>
          </div>
          <div className="mt-3 flex items-center justify-center  gap-6">
            {carData.map((car) => {
              return <DashboardCarsCard key={car.id} car={car} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
