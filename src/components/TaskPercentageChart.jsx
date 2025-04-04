import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskPercentageChart = () => {
  const data = {
    labels: ['Total Task 1234', 'Running 04', 'Pending 02'],
    datasets: [
      {
        data: [1234, 4, 2],
        backgroundColor: ['#6C63FF', '#FF8C8C', '#73D8C2'],
        borderWidth: 4,
        cutout: '75%', // Makes it a ring-style chart
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'right' },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3 border-b-2 inline-block">Task Percentage</h2>
      <div className="h-52 flex justify-center items-center">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default TaskPercentageChart;
