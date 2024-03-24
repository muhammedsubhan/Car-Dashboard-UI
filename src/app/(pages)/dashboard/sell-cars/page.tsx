import TrackingHistoryChart from "@/app/ChartsUI/TrackingHistoryChart";
import CarModelSelector from "@/app/MaterialUI/CarModelSelector";
import ConditionSelector from "@/app/MaterialUI/ConditionSelector";
import SellCarsOffers from "@/app/components/SellCarsOffers";
import Image from "next/image";
import React from "react";
import { Offers } from "./data";

const SellCars = () => {
  return (
    <>
      <div className="bg-slate-100 py-5 px-8">
        <div>
          <h1 className="text-2xl font-semibold">Sell Cars</h1>
        </div>
        <div className="py-10 flex justify-between">
          <div className="bg-white h-[410px] w-[750px] flex flex-col justify-center gap-2 rounded-2xl">
            <div className="px-8">
              <h1 className="text-2xl font-semibold">2022 Mercedes Benz</h1>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/car-frame.png"
                alt="sell-cars-image"
                width={550}
                height={550}
                priority
              />
            </div>
          </div>
          <div>
            <div className="bg-white w-[460px] flex flex-col rounded-2xl">
              <div className="px-8 mt-3 py-3">
                <p className="text-black text-2xl font-semibold">
                  Tracking History
                </p>
              </div>
              <TrackingHistoryChart />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Offers</h1>
          </div>
          <div className="flex items-center gap-2">
            <ConditionSelector />
            <CarModelSelector />
          </div>
        </div>
        <div>
          {Offers.map((item) => {
            return <SellCarsOffers key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default SellCars;
