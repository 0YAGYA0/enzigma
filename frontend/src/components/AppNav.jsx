import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { FiSearch } from "react-icons/fi";

const AppNav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-4 flex justify-between items-center m-2 border-b-2 border-b-200">
      <div className="font-bold text-2xl text-gray-700 ml-4"></div>

      {/* Centered search bar with search button */}
      <div className="flex items-center justify-center flex-grow">
        <div className="flex items-center w-full max-w-lg bg-white p-2 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-none focus:outline-none focus:ring-0 text-gray-700"
          />
          <button className="bg-indigo-600 text-white p-2 rounded-r-lg hover:bg-indigo-700 transition">
            <FiSearch className="text-xl" />
          </button>
        </div>
      </div>

      {/* Icons section */}
      <div className="flex items-center space-x-4 mr-4">
        <div className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600">
          <DarkModeOutlinedIcon />
        </div>
        <div className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600">
          <NotificationsNoneIcon />
        </div>
        <div className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600">
          <AccountCircleOutlinedIcon />
        </div>
        <div className="flex items-center justify-center h-10 w-10 rounded-full text-gray-600">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default AppNav;
