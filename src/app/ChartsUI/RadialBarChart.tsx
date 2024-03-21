"use client";
import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const RadialBarChart = ({ item }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const options = {
    chart: {
      height: 200,
      type: "radialBar",
      toolbar: {
        show: false,
      },
    },
    series: [item.percent],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          size: "55%",
        },
        track: {
          background: `${item.track}`,
          startAngle: -135,
          endAngle: 135,
        },
        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -10,
            show: true,
            color: `${item.percentageColor}`,
            fontSize: "13px",
          },
          value: {
            color: `${item.valueColor}`,
            fontSize: "30px",
            show: true,
            offsetY: -2,
          },
        },
      },
    },
    fill: {
      colors: [`${item.percentageColor}`],
    },
    stroke: {
      lineCap: "round",
    },
    labels: [""],
  };

  return (
    <div>
      {isMounted && (
        <ReactApexChart
          options={options}
          series={options.series}
          type="radialBar"
          height={options.chart.height}
        />
      )}
    </div>
  );
};

export default RadialBarChart;
