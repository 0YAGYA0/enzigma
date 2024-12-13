import React, { useState, useEffect } from "react";
import { FiSearch, FiEdit, FiTrash } from "react-icons/fi";

const UserDetail = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUser] = useState([]); // Initialize as an empty array

  // Make sure users is an array before applying .filter
  const filteredUsers = Array.isArray(users)
    ? users.filter((user) => {
        const matchesSearch =
          (user.username ? user.username.toLowerCase() : "").includes(
            searchTerm.toLowerCase()
          ) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
        if (activeTab === "All") return matchesSearch;
        return (
          matchesSearch &&
          (user.isVerified ? "Verified" : "Not Verified") === activeTab
        );
      })
    : [];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/user/all/", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        if (!response.ok) {
          const result = await response.json();
          showToast(result.message || "Unable to get account info!", "error");
          return;
        }

        const result = await response.json();
        // Ensure that result.data is an array, if not set as empty array
        setUser(Array.isArray(result.data) ? result.data : []);
      } catch (error) {
        showToast("An error occurred while fetching account info.", "error");
        console.error("Fetch Error:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Users</h1>

      {/* Tabs for Filtering */}
      <div className="flex justify-between items-center mb-6">
        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-6">
          {["All", "Verified", "Not Verified"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition 
              ${
                activeTab === tab ? "bg-indigo-600 text-white" : "text-gray-600"
              }
              hover:bg-indigo-500 hover:text-white`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            <FiSearch className="text-xl" />
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-indigo-50 border-b">
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                Name
              </th>
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                Email
              </th>
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                Role
              </th>
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm">
                Status
              </th>
              <th className="px-6 py-3 text-gray-600 font-semibold text-sm text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-6">
                  No users found.
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, index) => (
                <tr
                  key={user._id}
                  className={`transition hover:shadow-md ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 text-gray-700 font-medium flex items-center space-x-3">
                    <span>{user.username || "No username"}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.role === "Admin"
                          ? "bg-green-100 text-green-600"
                          : user.role === "Editor"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.isVerified
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.isVerified ? "Verified" : "Not Verified"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center space-x-4">
                      <button className="text-indigo-500 hover:text-indigo-600 transition">
                        <FiEdit className="text-xl" />
                      </button>
                      <button className="text-red-500 hover:text-red-600 transition">
                        <FiTrash className="text-xl" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetail;
