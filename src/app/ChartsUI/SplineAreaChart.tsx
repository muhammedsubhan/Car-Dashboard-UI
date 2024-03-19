"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

const SplineAreaChart = () => {
  const options = {
    series: [
      {
        name: "Traveled last month",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
    chart: {
      height: 260,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Custom labels
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    colors: ["#A162F7"],
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="area"
        height={options.chart.height}
      />
    </div>
  );
};

export default SplineAreaChart;
