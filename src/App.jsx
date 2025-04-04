import React from 'react';
import Sidebar from "./components/Sidebar";
import TaskStats from "./components/TaskStats";
import TaskChart from "./components/TaskChart";
import WorkProgress from "./components/WorkProgress";
import UpcomingTasks from "./components/UpcomingTasks";
import CalendarComponent from "./components/CalendarComponent";
import WelcomeSection from './components/WelcomeSection';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <Sidebar />
      <Dashboard />

      {/* Main Content */}
      
    </div>
  );
};

export default App;
