import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const TotalWorkChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Tasks',
        data: [45, 50, 40, 65, 72, 55, 50], // Sample Data
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        pointBackgroundColor: '#FFA500',
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} task`,
        },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        min: 0,
        max: 100,
        ticks: { stepSize: 20 },
      },
    },
  };

  return (
    <div className="p-5 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">Total work</h2>
        <button className="px-3 py-1 text-sm border rounded-md">6 Month</button>
      </div>
      <div className="h-60">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default TotalWorkChart;
