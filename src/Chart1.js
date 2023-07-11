import React from "react";
import { Chart } from "react-google-charts";
import './App.css';

export const data = [
  ["Email", "2023 survey", "2021 survey"],
  ["Newsletter", 8175000, 7003000],
  ["Promotions", 4792000, 3694000],
  ["Business", 3695000, 2896000],
  ["Educational", 2099000, 1953000],
  ["Survey", 1526000, 1517000],
];

export const options = {
  title: "Five most common types of emails",
  chartArea: { width: "90%" },
  hAxis: {
    title: "Total Survey",
    minValue: 0,
  },
  vAxis: {
    title: "Email",
  },
};

export  default function Chart1() {
  return (
    
    <Chart
      chartType="BarChart"
      width="80%"
      height="400px"
      data={data}
      options={options}
    />
    
  );
}
