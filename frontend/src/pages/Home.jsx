import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };

  return (
    <div className="relative bg-slate-700 text-white min-h-screen flex items-center justify-center">
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome</h1>
        <p className="text-lg md:text-2xl mb-8">
          Unlock your ial with our extensive library of resources and expert
          guidance.
        </p>
        <div>
          <button
            onClick={handleGetStarted}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
