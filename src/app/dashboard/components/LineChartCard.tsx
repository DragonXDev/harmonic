"use client";
import React, { useState, useEffect } from "react";
import Card from "../../components/card";
import {
  MdArrowDropUp,
  MdBarChart,
  MdOutlineCalendarToday,
} from "react-icons/md";
import LineChart from "../../components/charts/LineChart";

function LineGraph(result) {
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  useEffect(() => {
    if (result && result.result) {
      // Extract x and y values from coordinates
      const xVals = result.result.map((coord) => coord.x);
      const yVals = result.result.map((coord) => coord.y);

      // Set the state with the received x and y arrays
      setXValues(xVals);
      setYValues(yVals);
    }
  }, [result]);
  const averageValue =
    yValues.length > 0
      ? yValues.reduce((acc, val) => acc + Number(val), 0) / yValues.length
      : 0;

  const lineChartDataTotalSpent = [
    {
      name: "Pitch",
      data: yValues,
      color: "#4318FF",
    },
  ];

  const lineChartOptionsTotalSpent = {
    legend: {
      show: false,
    },

    theme: {
      mode: "light",
    },
    chart: {
      type: "line", // Specify the chart type as "line"
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      range: undefined,
      categories: xValues,
    },

    yaxis: {
      show: false,
    },
  };
  console.log(
    "NO WAY!!: ",
    Array.isArray(xValues),
    Array.isArray(yValues),
    Array.isArray(lineChartDataTotalSpent),
    Array.isArray(lineChartOptionsTotalSpent)
  );
  return (
    <Card className="!p-[30px] text-center">
      <div className="flex justify-between"></div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
            $
            {averageValue.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 4,
            })}
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">Total Spent</p>
            <div className="flex flex-row items-center justify-center">
              <MdArrowDropUp className="font-medium text-green-500" />
              <p className="text-sm font-bold text-green-500"> +2.45% </p>
            </div>
          </div>
        </div>
        <div className="h-[500px] w-full">
          <LineChart
            // @ts-ignore
            options={lineChartOptionsTotalSpent}
            series={lineChartDataTotalSpent}
          />
        </div>
      </div>
    </Card>
  );
}

export default LineGraph;
