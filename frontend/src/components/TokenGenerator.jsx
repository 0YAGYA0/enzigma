// import React, { useState } from "react";

// const TokenGenerator = () => {
//   const [email, setEmail] = useState(""); // Email input for sending tokens
//   const [token, setToken] = useState(null); // Store the single generated token
//   const [sendingToken, setSendingToken] = useState(null); // To track which token is being sent
//   const [isLoading, setIsLoading] = useState(false); // Loading state for generating the token

//   // Function to generate a single token
//   const handleGenerateToken = async () => {
//     setIsLoading(true);
//     try {
//       const response = await fetch("/api/generate-tokens", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ count: 1 }), // Generate only one token
//       });
//       const data = await response.json();
//       if (data.success) {
//         setToken(data.tokens[0] "); // Set the first (and only) token
//       } else {
//         alert("Error generating token");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Function to send the token to the provided email
//   const handleSendToken = async () => {
//     if (!email) {
//       alert("Please enter an email to send the token.");
//       return;
//     }
//     setSendingToken(token); // Track the token being sent
//     try {
//       const response = await fetch("/api/send-token", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, token }), // Sending the email and token to backend
//       });
//       const data = await response.json();
//       if (data.success) {
//         alert(`Token sent to ${email}`);
//       } else {
//         alert("Error sending token");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setSendingToken(null); // Reset sending token state
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex justify-center items-center p-6">
//       <div className="bg-white rounded-lg shadow-xl p-8 w-full sm:w-96">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
//           Token Generator
//         </h2>

//         {/* Generate Token Section */}
//         <div className="mb-6">
//           <button
//             onClick={handleGenerateToken}
//             disabled={isLoading}
//             className={`w-full py-3 text-white font-medium rounded-lg transition-all duration-200 ${
//               isLoading
//                 ? "bg-blue-300 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {isLoading ? "Generating..." : "Generate Token"}
//           </button>
//         </div>

//         {/* Token Display Section */}
//         {token && (
//           <div className="mb-6">
//             <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
//               <span className="font-mono text-gray-700">{token}</span>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => navigator.clipboard.writeText(token)} // Copy to clipboard
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                 >
//                   Copy
//                 </button>
//                 <button
//                   onClick={handleSendToken} // Send token via email
//                   disabled={sendingToken === token}
//                   className={`px-4 py-2 rounded-lg font-semibold text-white ${
//                     sendingToken === token
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-green-600 hover:bg-green-700"
//                   }`}
//                 >
//                   {sendingToken === token ? "Sending..." : "Send"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Email Input Section */}
//         {token && (
//           <div className="mb-6">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-medium mb-2"
//             >
//               Enter Email (for sending token)
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)} // Email state change
//               placeholder="Enter email address"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TokenGenerator;

import React, { useState } from "react";
import { FiCopy, FiSend } from "react-icons/fi";

const TokenUI = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Generate Token
  const handleGenerateToken = () => {
    setIsLoading(true);
    setTimeout(() => {
      const randomToken = Math.random().toString(36).substr(2, 5).toUpperCase();
      setToken(randomToken);
      setIsLoading(false);
    }, 1000);
  };

  // Copy Token
  const handleCopyToken = () => {
    if (token) {
      const tokenInput = document.getElementById("token-field");
      tokenInput.select();
      document.execCommand("copy");
    }
  };

  // Send Token
  const handleSendToken = () => {
    if (!email) {
      alert("Please enter an email to send the token.");
      return;
    }
    alert(`Token "${token}" sent to ${email}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-6">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <button className="text-gray-500 hover:text-gray-700">← Back</button>
        </div>

        {/* Token Section */}
        <div className="flex flex-col items-center space-y-4 mb-6">
          {token ? (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                Token Generator
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Generate a 5-digit token and send it to a recipient.
              </p>
              <div className="flex items-center space-x-2">
                <input
                  id="token-field"
                  value={token}
                  readOnly
                  className="w-48 px-4 py-2 border border-gray-300 rounded-lg text-center text-lg font-mono font-semibold text-gray-700"
                />
                <button
                  onClick={handleCopyToken}
                  className="text-blue-500 hover:text-blue-700"
                  title="Copy Token"
                >
                  <FiCopy className="text-2xl" />
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={handleGenerateToken}
              className={`w-full py-3 text-lg font-medium text-white rounded-lg shadow-md ${
                isLoading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {isLoading ? "Generating..." : "Generate Token"}
            </button>
          )}
        </div>

        {/* Email Input & Send Button (Visible only when token exists) */}
        {token && (
          <>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter recipient's email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              onClick={handleSendToken}
              disabled={!email}
              className={`w-full py-3 flex items-center justify-center space-x-2 text-lg font-medium text-white rounded-lg shadow-md ${
                !email
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              <FiSend className="text-xl" />
              <span>Send Token</span>
            </button>
          </>
        )}

        {/* Back to Dashboard Section */}
        {token && (
          <button
            className="mt-6 w-full py-3 text-lg font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-lg shadow-md"
            onClick={() => alert("Navigating back to dashboard...")}
          >
            Back to Dashboard
          </button>
        )}

        {/* Support Section */}
      </div>
    </div>
  );
};

export default TokenUI;
