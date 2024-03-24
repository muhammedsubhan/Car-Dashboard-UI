"use client";
import React from "react";
import ReactApexCharts from "react-apexcharts";

const OffersGuagesChart = ({ item }) => {
  const options = {
    series: [44, 55, 67, 83],
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // By default, this function returns the average of all series. The below is just an example to show the use of a custom formatter function
              return `$ ${item.price}`;
            },
          },
        },
      },
    },
    labels: [""],
  };

  return (
    <div id="chart">
      <ReactApexCharts
        options={options}
        series={options.series}
        type="radialBar"
        height={220}
      />
    </div>
  );
};
export default OffersGuagesChart;
