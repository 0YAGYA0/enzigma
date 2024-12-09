import React, { useState } from "react";

const TokenGenerator = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);

  const handleGenerateToken = async () => {
    try {
      const response = await fetch("/api/generate-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setToken(data.token);
      } else {
        alert("Error generating token");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Generate Token</h2>
        <input
          type="email"
          placeholder="Enter user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleGenerateToken}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Generate Token
        </button>
        {token && (
          <div className="mt-4">
            <h4 className="text-lg font-bold">Generated Token:</h4>
            <p className="bg-gray-200 p-2 rounded-md">{token}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TokenGenerator;
