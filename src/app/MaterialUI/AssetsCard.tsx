import React from "react";
import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  Typography,
} from "@mui/material";
import Image from "next/image";

const AssetsCard = () => {
  return (
    <>
      <div>
        <Card
          sx={{
            minHeight: 410,
            minWidth: 390,
            borderRadius: 5,
            boxShadow: "none",
          }}
        >
          <CardContent className="mt-2">
            <Typography
              sx={{ fontSize: 24, fontWeight: "bold", mb: 2 }}
              variant="h1"
            >
              Available Sensors
            </Typography>

            <Divider />

            <div className="flex flex-col gap-2 mt-3">
              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                  <p className="text-base font-medium text-red-500">
                    Asset - Fuel Consumed (10
                  </p>
                </div>
                <Image
                  src="/icons/stock-red.png"
                  alt="danger-icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center justify-between  py-2">
                <div className="flex items-center">
                  <Checkbox
                    sx={{
                      color: "",
                      "&.Mui-checked": {
                        color: "gray",
                      },
                    }}
                  />
                  <p className="text-base font-medium text-black">
                    Asset - Odometer <span className="text-gray-400">(km)</span>
                  </p>
                </div>
                <Image
                  src="/icons/stock.png"
                  alt="danger-icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center justify-between  py-2">
                <div className="flex items-center">
                  <Checkbox
                    sx={{
                      color: "",
                      "&.Mui-checked": {
                        color: "gray",
                      },
                    }}
                  />
                  <p className="text-base font-medium text-black">
                    Asset - Runtime <span className="text-gray-400">(km)</span>
                  </p>
                </div>
                <Image
                  src="/icons/stock.png"
                  alt="danger-icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center justify-between  py-2">
                <div className="flex items-center">
                  <Checkbox
                    sx={{
                      color: "",
                      "&.Mui-checked": {
                        color: "gray",
                      },
                    }}
                  />
                  <p className="text-base font-medium text-black">
                    Asset - Speed <span className="text-gray-400">(hr)</span>
                  </p>
                </div>
                <Image
                  src="/icons/stock.png"
                  alt="danger-icon"
                  width={20}
                  height={20}
                />
              </div>
              <div className="flex items-center justify-between  py-2">
                <div className="flex items-center">
                  <Checkbox
                    sx={{
                      color: "",
                      "&.Mui-checked": {
                        color: "gray",
                      },
                    }}
                  />
                  <p className="text-base font-medium text-black">
                    Engine Temperature{" "}
                    <span className="text-gray-400">(deg C)</span>
                  </p>
                </div>
                <Image
                  src="/icons/stock.png"
                  alt="danger-icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AssetsCard;
