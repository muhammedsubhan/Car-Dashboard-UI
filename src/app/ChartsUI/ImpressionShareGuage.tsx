"use client";
import React from "react";
import ReactApexCharts from "react-apexcharts";

const ImpressionShareGuage = ({ item }) => {
  const options = {
    series: [`${item.impression}`],

    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -120,
        endAngle: 120,
        track: {
          background: "#F3F3F3",
          strokeWidth: "97%",
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },

          value: {
            offsetY: -2,
            fontSize: "20px",
            fontWeight: "bold",
          },
        },
      },
    },

    fill: {
      colors: ["#70CF97"],
    },
  };

  return (
    <div className="w-[200px]">
      <ReactApexCharts
        options={options}
        series={options.series}
        type="radialBar"
        height={180}
      />
    </div>
  );
};

export default ImpressionShareGuage;
