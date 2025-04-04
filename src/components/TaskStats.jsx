import React from 'react';
import Card from './Cards';

const TaskStats = () => {
  return (
    <div className="flex space-x-4">
      <Card 
        color="linear-gradient(to right, #838478, #838478)" 
        icon="/Icon(6).svg" 
        number="1220" 
        content="Total Task" 
      />
      <Card 
        color="linear-gradient(to right, #96C9D1, #ADDCE3)" 
        icon="/Icon(7).svg" 
        number="07" 
        content="In Progress" 
      />
      <Card 
        color="linear-gradient(to right, #FB958D, #F8B0A9)" 
        icon="/Icon(8).svg" 
        number="43" 
        content="Pending" 
      />
      <Card 
        color="linear-gradient(to right, #87ECAF, #87ECAF)" 
        icon="/Icon(9).svg" 
        number="1550" 
        content="Completed" 
      />
    </div>
  );
};

export default TaskStats;
