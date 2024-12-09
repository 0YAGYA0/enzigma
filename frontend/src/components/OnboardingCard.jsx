import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingCard = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate();

  // Function to handle redirection to the onboarding form
  const handleStartOnboarding = () => {
    if (pdfFile) {
      // Handle PDF upload logic here, for now it redirects
      console.log("PDF uploaded:", pdfFile);
      navigate("/onboarding-form"); // Redirect to onboarding form
    }
  };

  // Function to handle file change (PDF upload)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // Function to handle redirection to the home page
  const handleGoBackHome = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-lg w-full">
        {/* Card Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome to Your Onboarding Journey
        </h2>

        {/* Card Body */}
        <p className="text-gray-600 text-lg text-center mb-6">
          You've successfully logged in with your token. Now, let's get started
          with your onboarding process.
        </p>

        {/* File Upload Section */}
        <div className="mb-6 text-center">
          <label
            htmlFor="pdf-upload"
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 cursor-pointer transition duration-300"
          >
            Upload Your PDF
          </label>
          <input
            type="file"
            id="pdf-upload"
            accept="application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Button Section */}
        <div className="flex flex-col space-y-4 justify-center items-center">
          {/* Start Onboarding Button */}
          <button
            onClick={handleStartOnboarding}
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full md:w-auto"
          >
            Start Onboarding
          </button>

          {/* Go Back to Home Button */}
          <button
            onClick={handleGoBackHome}
            className="px-8 py-4 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition duration-300 w-full md:w-auto"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCard;
