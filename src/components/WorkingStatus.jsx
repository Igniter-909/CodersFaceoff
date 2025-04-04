import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const WorkingStatus = () => {
  const percentage = 70;

  return (
    <div className="bg-gray-100 p-4 rounded-2xl shadow-md w-64">
      <h2 className="text-lg font-semibold mb-2">Working Status</h2>
      <div className="w-40 h-40 mx-auto relative">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%\nMember Working`}
          styles={buildStyles({
            textSize: "10px",
            pathColor: "#7b5cff",
            textColor: "#000",
            trailColor: "#e6e6e6",
          })}
        />
      </div>
    </div>
  );
};

export default WorkingStatus;
