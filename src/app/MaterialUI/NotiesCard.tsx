import Image from "next/image";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
const NotiesCard = () => {
  return (
    <>
      <div>
        <Card
          sx={{
            maxHeight: 410,
            maxWidth: 390,
            borderRadius: 5,
            boxShadow: "none",
          }}
        >
          <CardContent className="mt-2">
            <Typography sx={{ fontSize: 24, fontWeight: "bold" }} variant="h1">
              Noties
            </Typography>

            <div className="py-5">
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 shadow-lg rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/message-icon.png"
                    alt="icons"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-1 leading-relaxed">
                  <h1 className="text-base font-semibold">
                    Monday, 6th Apirl 2020
                  </h1>
                  <p className="text-sm font-normal text-gray-400">
                    Book for General Services
                  </p>
                  <div>
                    <small className="text-white text-xs font-medium uppercase bg-green-400 px-6 py-1 rounded-md">
                      Completed
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 shadow-lg rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/error-icon.png"
                    alt="icons"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-1 leading-relaxed">
                  <h1 className="text-base font-semibold">
                    Thursday, 24th October 2021
                  </h1>
                  <p className="text-sm font-normal text-gray-400">
                    Vehicle LV 001 has been marked for recall.
                  </p>
                  <div>
                    <small className="text-black text-xs font-medium uppercase bg-gray-300 px-6 py-1 rounded-md">
                      14:07-21/11/2021
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 shadow-lg rounded-full flex items-center justify-center">
                  <Image
                    src="/icons/setting-icon.png"
                    alt="icons"
                    width={20}
                    height={20}
                  />
                </div>
                <div className="flex flex-col gap-1 leading-relaxed">
                  <h1 className="text-base font-semibold">
                    Monday, 13th August 2018
                  </h1>
                  <p className="text-sm font-normal text-gray-400">
                    Maintenance Completed, Collect
                  </p>
                  <div>
                    <small className="text-black text-xs font-medium uppercase bg-gray-300 px-6 py-1 rounded-md">
                      14:07-21/11/2021
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NotiesCard;
