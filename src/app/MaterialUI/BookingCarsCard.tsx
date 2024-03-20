import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface Car {
  id: number;
  title: string;
  image: string;
  rate: number;
}

interface BookingCarsCardProps {
  car: Car;
}

const BookingCarsCard: React.FC<BookingCarsCardProps> = ({ car }) => {
  return (
    <>
      <div>
        <Card
          sx={{
            minWidth: 390,
            boxShadow: "none",
            borderRadius: 4,
          }}
        >
          <CardContent className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <Typography
                  sx={{
                    fontSize: 17,
                    fontWeight: 600,
                  }}
                >
                  {car.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#72767C",
                    fontSize: 17,
                  }}
                >
                  Coupe
                </Typography>
              </div>
              <button>
                <Image
                  src="/icons/heart-icon.png"
                  alt="heart-icon"
                  height={25}
                  width={25}
                />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <Image
                className="transition-transform duration-300 transform hover:scale-110 cursor-pointer"
                src="/porshe-718.png"
                alt="porshe-image"
                width={270}
                height={270}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/passengers-icon.png"
                    alt="passenger-icon"
                    width={22}
                    height={22}
                  />
                  <p className="text-gray-400 text-xl">4</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/manual-icon.png"
                    alt="passenger-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-gray-400 ">Manual</p>
                </div>
              </div>
              <div>
                <p className="text-xl text-black font-semibold">
                  ${car.rate}
                  <span className="text-xl font-normal text-gray-400">/d</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BookingCarsCard;
