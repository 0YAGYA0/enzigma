import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiDocumentText, HiPencilAlt, HiHome } from "react-icons/hi";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField, IconButton, Button } from "@mui/material";

const OnboardingCard = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate();

  // Handle redirection to the onboarding form
  const handleStartOnboarding = (option) => {
    if (option === "upload" && pdfFile) {
      console.log("PDF uploaded:", pdfFile);
      navigate("/onboarding-form"); // Redirect to onboarding form
    } else if (option === "manual") {
      navigate("/temp"); // Redirect to manual onboarding form
    }
  };

  const handleNavigateHome = () => {
    navigate("/token");
  };

  // Handle file change (PDF upload)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  // Handle redirection to the home page
  const handleGoBackHome = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="  rounded-lg p-8 w-full max-w-lg">
        {/* Title */}
        <div className="flex justify-between items-center mb-6">
          <IconButton
            className="hover:bg-gray-100"
            onClick={handleNavigateHome}
          >
            <ArrowBackIcon />
          </IconButton>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-4">
          Let's Start Your Onboarding
        </h2>

        {/* Introduction Text */}
        <p className="text-gray-600 text-lg text-center mb-6">
          Choose an option to begin the onboarding process:
        </p>

        {/* Options Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Option 1: Upload PDF */}
          <div className="flex flex-col items-center space-y-4">
            <HiDocumentText className="text-4xl text-indigo-600" />
            <label
              htmlFor="pdf-upload"
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 cursor-pointer transition duration-300 w-full text-center"
            >
              Upload PDF
            </label>
            <input
              type="file"
              id="pdf-upload"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Option 2: Fill Details Manually */}
          <div className="flex flex-col items-center space-y-4">
            <HiPencilAlt className="text-4xl text-green-600" />
            <button
              onClick={() => handleStartOnboarding("manual")}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 w-full text-center"
            >
              Fill Details Manually
            </button>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="flex justify-center items-center mt-8">
          {/* Start Onboarding Button */}
          <button
            onClick={() => handleStartOnboarding("upload")}
            disabled={!pdfFile}
            className={`px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-full md:w-auto ${
              !pdfFile ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Continue with PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCard;
