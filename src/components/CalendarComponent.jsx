import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Schedule = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-2xl shadow-md w-72">
      <Calendar className="rounded-lg shadow-sm" />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Upcoming</h2>
        <p className="text-gray-500 text-sm">Wednesday, 13 March, 2021</p>
        <div className="mt-4 relative h-64 border-l border-gray-300 pl-4">
          <div className="absolute left-0 w-full flex items-center justify-between text-xs text-gray-500">
            <span>10 AM</span>
            <span>11 AM</span>
            <span>12 PM</span>
            <span>1 PM</span>
          </div>
          <div className="relative mt-8 space-y-4">
            <div className="bg-white p-2 rounded-lg shadow-md w-36 border-l-4 border-blue-500">
              <p className="text-sm font-medium">Research</p>
              <p className="text-xs text-gray-500">03 People</p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md w-40 border-l-4 border-red-400 mt-8">
              <p className="text-sm font-medium">Landing Page Design</p>
              <p className="text-xs text-gray-500">03 People</p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md w-40 border-l-4 border-teal-400 mt-8">
              <p className="text-sm font-medium">Dashboard Design</p>
              <p className="text-xs text-gray-500">03 People</p>
            </div>
            <div className="bg-white p-2 rounded-lg shadow-md w-44 border-l-4 border-green-400 mt-12">
              <p className="text-sm font-medium">Design Theory</p>
              <p className="text-xs text-gray-500">03 People</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
