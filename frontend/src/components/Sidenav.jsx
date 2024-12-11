import React from "react";
import { NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

const sidebar = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <HomeOutlinedIcon className="mr-3" />,
  },
  {
    name: "Applications",
    link: "/applications",
    icon: <SettingsOutlinedIcon className="mr-3" />,
  },

  {
    name: "Users",
    link: "/users",
    icon: <SettingsOutlinedIcon className="mr-3" />,
  },

  {
    name: "Onboard Applicant",
    link: "/onb",
    icon: <SettingsOutlinedIcon className="mr-3" />,
  },

  {
    name: "Token",
    link: "/hr",
    icon: <SettingsOutlinedIcon className="mr-3" />,
  },

  {
    name: "Settings",
    link: "/settings",
    icon: <SettingsOutlinedIcon className="mr-3" />,
  },
  {
    name: "Logout",
    link: "/",
    icon: <ExitToAppIcon className="mr-3" />,
  },
];

const Sidenav = () => {
  return (
    <div className="flex flex-col rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 w-1/5 m-2">
      <div className="text-2xl font-bold text-center mb-5 mt-5 text-white">
        ENZIGMA
      </div>
      <div className="flex flex-col space-y-4">
        {sidebar.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              isActive
                ? "flex items-center p-4 text-lg font-semibold bg-slate-50 text-black shadow-inner"
                : "flex items-center p-4 text-lg font-medium text-white hover:bg-slate-600 hover:text-white transition-colors duration-300"
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
