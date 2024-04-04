import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ImpressionShareGuage from "../ChartsUI/ImpressionShareGuage";
import OffersGuagesChart from "../ChartsUI/OffersGuagesChart";
import Image from "next/image";

const SellCarsOffers = ({ item }: { item: any }) => {
  return (
    <>
      <div className="bg-white p-10 rounded-2xl flex items-center mt-8 justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">{item.name}</h1>
          <div className="flex items-end gap-2">
            <p className="text-red-400 text-xl font-semibold">
              ${item.avgprice}
            </p>
            <small className="text-gray-400 font-medium">average price</small>
          </div>
          <div>
            <p className="text-base font-medium text-gray-500">
              market average is ${item.marketprice}
            </p>
          </div>
          <div>
            <button className="bg-red-400 px-6 p-1 rounded-3xl mt-3">
              <FaArrowRightLong className="text-white" />
            </button>
          </div>
        </div>
        <div className=" w-[200px] flex items-center flex-col">
          <ImpressionShareGuage item={item} />
          <div className="flex items-center flex-col gap-3">
            <small className="text-sm text-green-500 font-semibold">
              Excellent
            </small>
            <p className="text-base font-semibold text-gray-500">
              Impression Share
            </p>
          </div>
        </div>
        <div>
          <OffersGuagesChart item={item} />
        </div>

        <div className="flex items-start flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Image
              src="/icons/blue-icon.png"
              alt="car-icon"
              width={43}
              height={43}
            />
            <p className="text-xl font-semibold text-blue-500">$1,174</p>
          </div>
          <small className="text-sm font-medium text-gray-500">
            Model Spend
          </small>
        </div>
        <div className="flex items-start flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Image
              src="/icons/red-icon.png"
              alt="car-icon"
              width={43}
              height={43}
            />
            <p className="text-xl font-semibold text-blue-500">$1,174</p>
          </div>
          <small className="text-sm font-medium text-gray-500">
            Model Spend
          </small>
        </div>
        <div className="flex items-start flex-col gap-2">
          <div className="flex flex-col gap-1">
            <Image
              src="/icons/purple-icon.png"
              alt="car-icon"
              width={43}
              height={43}
            />
            <p className="text-xl font-semibold text-blue-500">$811</p>
          </div>
          <small className="text-sm font-medium text-gray-500">
            Spend per Unit Turned
          </small>
        </div>
      </div>
    </>
  );
};

export default SellCarsOffers;
