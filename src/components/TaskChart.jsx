import { PieChart, Pie, Cell, Tooltip } from "recharts";
import React from 'react';

const data = [
  { name: "Total", value: 1234, color: "#8884d8" },
  { name: "Running", value: 64, color: "#82ca9d" },
  { name: "Pending", value: 42, color: "#ff7300" },
];

const TaskChart = () => {
  return (
    <div className="p-5">
      <PieChart width={200} height={200}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={60} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default TaskChart;
