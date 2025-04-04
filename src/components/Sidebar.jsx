import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-5 shadow-lg h-screen flex flex-col justify-between border-r border-gray-200">
      
      {/* Profile Section */}
      <div>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-l from-[#0B00F1] to-[#746EF1] text-white flex items-center justify-center rounded-full text-lg font-semibold">M</div>
          <h2 className="text-xl font-semibold text-gray-800">Mirha</h2>
        </div>

        {/* Project Dropdown */}
        <div className="mt-4">
          <p className="text-gray-500 text-sm">Project</p>
          <select className="w-full p-2 mt-1 border-none rounded-md text-gray-700 focus:ring-2 focus:ring-indigo-500">
            <option className="text-xs tracking-wider">Hope project <img src="/Icon (5).svg" /></option>
          </select>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-indigo-600 font-semibold">
              <img src="/dashboard.svg" alt="Dashboard" className="w-5 h-5" />
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-600 hover:text-indigo-500">
              <img src="/Icon.svg" alt="Tracking" className="w-5 h-5" />
              <span>Tracking</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-600 hover:text-indigo-500">
              <img src="/Icon (1).svg" alt="Projects" className="w-5 h-5" />
              <span>Projects</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-600 hover:text-indigo-500">
              <img src="/Icon (2).svg" alt="Work History" className="w-5 h-5" />
              <span>Work History</span>
            </li>

            {/* Tools Section */}
            <p className="text-gray-500 text-sm mt-4">Tools</p>
            <li className="flex items-center space-x-3 text-gray-600 hover:text-indigo-500">
              <img src="/Icon (3).svg" alt="Inbox" className="w-5 h-5" />
              <span>Inbox</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-600 hover:text-indigo-500">
              <img src="/Icon (4).svg" alt="Settings" className="w-5 h-5" />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Add New Task Button & User */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center bg-[#83800FE] text-white p-3 rounded-lg text-sm font-medium hover:bg-indigo-600 transition">
          <img src="/plus.svg" alt="Add Task" className="w-4 h-4 mr-2" /> ADD NEW TASK
        </button>
        <div className="flex items-center space-x-3 bg-gray-100 p-2 rounded-lg">
          <img src="/profile.svg" alt="User" className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-800">JOE MAX</p>
            <p className="text-xs text-gray-500">TEAM LEADER ▼</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
