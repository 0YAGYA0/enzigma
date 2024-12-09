import React from "react";
import { useNavigate } from "react-router-dom";

const ApplicationCard = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/temp");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Application Form</h2>
        <div className="space-y-4">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              Apply for the Position
            </h3>
            <p className="text-gray-700">
              Fill in the form below to apply for the available position. Please
              ensure all your details are correct.
            </p>
            <button
              onClick={handleApply}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
