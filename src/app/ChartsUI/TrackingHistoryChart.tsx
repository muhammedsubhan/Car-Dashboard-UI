"use client";
import React from "react";
import ReactApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const TrackingHistoryChart = () => {
  const options: ApexOptions = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 40],
        name: "Km/h",
      },
    ],
    chart: {
      height: 328,
      type: "bar",
      toolbar: {
        show: false, // Disable the toolbar controls
      },
    },
    colors: ["#FF6370"], // Blue color

    plotOptions: {
      bar: {
        columnWidth: "55%",

        borderRadius: 5,
        distributed: true,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        ["Mon"],
        ["Tue"],
        ["Wed"],
        ["Thu"],
        ["Fri"],
        ["Sat"],
        ["Sun"],
      ],
      labels: {
        style: {
          colors: "gray", // Blue color
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      show: true, // Disable y-axis data
    },
  };

  return (
    <div className="w-[450px]">
      <ReactApexCharts
        options={options}
        series={options.series}
        type="bar"
        height={328}
      />
    </div>
  );
};

export default TrackingHistoryChart;
