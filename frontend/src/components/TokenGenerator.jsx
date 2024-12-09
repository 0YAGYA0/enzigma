import React, { useState } from "react";

const TokenGenerator = () => {
  const [email, setEmail] = useState("");
  const [numTokens, setNumTokens] = useState(1);
  const [tokens, setTokens] = useState([]);
  const [sendingToken, setSendingToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateTokens = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-tokens", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: numTokens }),
      });
      const data = await response.json();
      if (data.success) {
        setTokens(data.tokens);
      } else {
        alert("Error generating tokens");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendToken = async (token) => {
    if (!email) {
      alert("Please enter an email to send the token.");
      return;
    }
    setSendingToken(token);
    try {
      const response = await fetch("/api/send-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, token }),
      });
      const data = await response.json();
      if (data.success) {
        alert(`Token sent to ${email}`);
      } else {
        alert("Error sending token");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSendingToken(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Token Generator
        </h2>

        {/* Generate Tokens Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Number of Tokens
          </label>
          <input
            type="number"
            min="1"
            value={numTokens}
            onChange={(e) => setNumTokens(Number(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleGenerateTokens}
            disabled={isLoading}
            className={`mt-4 w-full px-4 py-2 text-white rounded-md ${
              isLoading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isLoading ? "Generating..." : "Generate Tokens"}
          </button>
        </div>

        {/* Token List Section */}
        {tokens.length > 0 && (
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Generated Tokens
            </h3>
            <ul className="space-y-4">
              {tokens.map((token, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm"
                >
                  <span className="font-mono text-gray-700">{token}</span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => navigator.clipboard.writeText(token)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Copy
                    </button>
                    <button
                      onClick={() => handleSendToken(token)}
                      disabled={sendingToken === token}
                      className={`px-3 py-1 rounded-md ${
                        sendingToken === token
                          ? "bg-blue-300 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600 text-white"
                      }`}
                    >
                      {sendingToken === token ? "Sending..." : "Send"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Email Input Section */}
        {tokens.length > 0 && (
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Enter Email (for sending tokens)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TokenGenerator;
