import React from "react";

const WelcomeSection = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Section: Text Content */}
      <div className="w-full md:w-1/2 space-y-2">
        <h3 className="text-gray-500 text-lg">Welcome To</h3>
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-black">Your </span>
          <span className="text-black font-extrabold">Task Management Area</span>
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Bibendum risus urna tortor praesent.
        </p>
        <button className="mt-4 bg-indigo-400 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg shadow-md transition">
          Learn More
        </button>
      </div>

      {/* Right Section: Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="/image 1.svg" alt="Welcome Illustration" className="w-60 md:w-80" />
      </div>

    </div>
  );
};

export default WelcomeSection;
