import React from "react";

const WorkProgressCard = ({ title, progress, startDate, endDate, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-sm">
      <p className="text-gray-500 text-sm mb-1">Ongoing Project</p>
      <h2 className="font-bold text-lg mb-2">{title}</h2>

      {/* Progress Bar */}
      <div className="relative w-full h-2 rounded-full bg-gray-200 mb-2">
        <div
          className="absolute top-0 left-0 h-2 rounded-full"
          style={{ width: `${progress}%`, backgroundColor: color }}
        ></div>
      </div>
      <p className="text-gray-600 text-sm mb-3">{progress}% Complete</p>

      {/* Dates */}
      <div className="flex justify-between text-sm text-gray-700">
        <p>
          <span className="font-semibold">Start Date:</span> {startDate}
        </p>
        <p>
          <span className="font-semibold">End Date:</span> {endDate}
        </p>
      </div>
    </div>
  );
};

export default WorkProgressCard;
