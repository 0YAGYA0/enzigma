import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TokenLogin = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/token-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      if (data.success) {
        navigate("/onboarding"); // Redirect to onboarding form
      } else {
        alert("Invalid or expired token");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Token Login</h2>
        <input
          type="text"
          placeholder="Enter your token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login with Token
        </button>
      </div>
    </div>
  );
};

export default TokenLogin;
