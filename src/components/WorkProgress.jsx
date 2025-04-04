import React from "react";
import WorkProgressCard from "./WorkProgressCard";

const WorkProgress = () => {
  const projects = [
    { id: 1, title: "Dashboard Design", progress: 90, startDate: "10 Jan", endDate: "29 Jan", color: "#7b61ff" },
    { id: 2, title: "App UI UX Design", progress: 30, startDate: "12 Jan", endDate: "25 Jan", color: "#ff6b6b" },
    { id: 3, title: "API Development", progress: 70, startDate: "15 Jan", endDate: "28 Jan", color: "#34c38f" },
    { id: 4, title: "Frontend Integration", progress: 50, startDate: "18 Jan", endDate: "30 Jan", color: "#f1c40f" }
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Work Progress</h2>
        <button className="text-blue-500 text-sm font-semibold">See All</button>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {projects.map((project) => (
          <WorkProgressCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default WorkProgress;
