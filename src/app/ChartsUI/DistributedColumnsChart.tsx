"use client";
import React from "react";
import ReactApexCharts from "react-apexcharts";

const DistributedColumnsChart = () => {
  const options = {
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 40],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false, // Disable the toolbar controls
      },
    },
    colors: ["#007FFF"], // Blue color
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
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
        ["1PM"],
        ["2PM"],
        ["3PM"],
        ["4PM"],
        ["5PM"],
        ["6PM"],
        ["7PM"],
      ],
      labels: {
        style: {
          colors: "gray", // Blue color
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      show: false, // Disable y-axis data
    },
  };

  return (
    <div className="w-[550px]">
      <ReactApexCharts
        options={options}
        series={options.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default DistributedColumnsChart;
