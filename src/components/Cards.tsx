import React from 'react';

const Card = ({ color, icon, number, content }) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center p-4 rounded-2xl shadow-md`} 
      style={{ background: color, width: "180px", height: "100px" }}
    >
      <img src={icon} alt="icon" className="w-8 h-8 mb-2" />
      <h2 className="text-white text-xl font-bold">{number}</h2>
      <p className="text-white text-sm">{content}</p>
    </div>
  );
};

export default Card;
