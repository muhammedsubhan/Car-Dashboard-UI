import BookingCarsCard from "@/app/MaterialUI/BookingCarsCard";
import CarModelSelector from "@/app/MaterialUI/CarModelSelector";
import ConditionSelector from "@/app/MaterialUI/ConditionSelector";
import Image from "next/image";
import React from "react";
import { CarsBooking } from "./data";

const Booking = () => {
  return (
    <>
      <div className="bg-slate-100 py-5 px-8">
        <div className="flex gap-6 flex-col">
          <div>
            <h1 className="text-2xl font-semibold">Booking</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ConditionSelector />
              <CarModelSelector />
            </div>
            <div className="flex items-center gap-5">
              <button className="bg-white p-3 rounded-full shadow-xl">
                <Image
                  src="/icons/grid-icon.png"
                  alt="grid-icon"
                  width={20}
                  height={20}
                />
              </button>
              <button className="bg-purple-500 p-3 rounded-full shadow-xl">
                <Image
                  src="/icons/flex-icon.png"
                  alt="grid-icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-6">
          {CarsBooking.map((car) => (
            <BookingCarsCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Booking;
