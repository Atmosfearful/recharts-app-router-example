"use client"; // use client for recharts animations
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

/** Pie chart for tokenized credits by bridge */
export default function Chart(props: {
  data: { name: string; value: number }[];
}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={props.data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
