"use client";
import React from "react";
import ReactApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const AreaChart = () => {
  const generateDayWiseTimeSeries = (baseval: any, count: any, yrange: any) => {
    let i = 0;
    let series = [];
    while (i < count) {
      let x = baseval;
      let y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  };

  const options: ApexOptions = {
    series: [
      {
        name: "South",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 60,
          }
        ),
      },
      {
        name: "North",
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          20,
          {
            min: 10,
            max: 20,
          }
        ),
      },
    ],
    chart: {
      type: "area",
      height: 350,
      // Disable controls
      toolbar: {
        show: false,
      },
      // Disable zoom
      zoom: {
        enabled: false,
      },
      stacked: true,
    },
    colors: ["#008FFB", "#00E396"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },

    xaxis: {
      type: "datetime",
    },
    yaxis: {
      show: false, // Disable y-axis data
    },
  };

  return (
    <>
      <div className="w-[580px] ">
        <ReactApexCharts
          options={options}
          series={options.series}
          type="area"
          height={350}
        />
      </div>
    </>
  );
};

export default AreaChart;
