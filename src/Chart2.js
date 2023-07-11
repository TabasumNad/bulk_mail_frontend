import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Emails", "per Day"],
  ["Work", 30],
  ["Promotional", 20],
  ["Educational", 15],
  ["Newletter", 25],
  ["Survey", 10],
];

export const options = {
  title: "Emails received per hours",
};

export default function Chart2() {
  return (
    
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
   
  );
}
