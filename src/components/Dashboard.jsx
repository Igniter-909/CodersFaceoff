import React from "react";
import WelcomeSection from "./WelcomeSection";
import TaskStats from "./TaskStats";
import TotalWorkChart from "./TotalWorkChart";
import TaskPercentageChart from "./TaskPercentageChart";
import WorkProgress from "./WorkProgress";
import WorkingStatus from "./WorkingStatus";
import Schedule from "./CalendarComponent";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <span className="text-gray-500">13 March 2021</span>
      </div>

      {/* Search and Date Selection */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
        <input 
          type="text" 
          placeholder="Search" 
          className="w-1/3 p-2 border border-gray-300 rounded-md" 
        />
        <button className="flex items-center p-2 border border-gray-300 rounded-md bg-white cursor-pointer">
          📅 13 March 2021
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-8 space-y-6">
          <WelcomeSection />
          <TaskStats />

          <div className="grid grid-cols-2 gap-6">
            <TotalWorkChart />
            <TaskPercentageChart />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <WorkProgress />
            <WorkingStatus />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-4">
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;