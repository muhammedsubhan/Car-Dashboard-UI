import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import RadialBarChart from "../ChartsUI/RadialBarChart";

const GuageCard = ({ item }) => {
  return (
    <>
      <div>
        <Card
          sx={{
            maxWidth: 270,
            minHeight: 280,
            background: `${item.background}`,
            boxShadow: "none",
            borderRadius: 5,
          }}
          className="flex items-center justify-center "
        >
          <CardContent>
            <div>
              <div className="flex flex-col items-center gap-2">
                <div className={`${item.iconBgColor} rounded-full px-4 py-3.5`}>
                  <Image
                    src={item.image}
                    alt="guage-icon"
                    width={10}
                    height={10}
                  />
                </div>
                <p className={`text-${item.textColor} text-xl font-semibold`}>
                  {item.title}
                </p>
                <div className="flex items-center justify-center">
                  <RadialBarChart item={item} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GuageCard;
