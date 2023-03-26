import React from "react";
import Divider from "@mui/material/Divider";
import { NavLink } from "react-router-dom";
import background from "../Assets/img/logo.png";

const MobileMenu = () => {
  return (
    <div className="absolute left-2.5 w-full top-16 flex flex-row bg-white z-20">
      <ul className="w-full mx-4">
        <Divider />
        <li className="px-2 py-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block bg-black text-white px-5 py-2 rounded-full"
                : "block hover:bg-black hover:text-white hover:px-5 hover:py-2 hover:rounded-full px-5 py-2"
            }
          >
            Home
          </NavLink>
        </li>
        <Divider />
        <li className="px-2 py-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block bg-black text-white px-5 py-2 rounded-full"
                : "block hover:bg-black hover:text-white hover:px-5 hover:py-2 hover:rounded-full px-5 py-2"
            }
          >
            About
          </NavLink>
        </li>
        <Divider />
        {/* <li className="px-2 py-2">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block bg-black text-white px-5 py-2 rounded-full"
                : "block hover:bg-black hover:text-white hover:px-5 hover:py-2 hover:rounded-full px-5 py-2"
            }
          >
            Contact us
          </NavLink>
        </li> */}
        <Divider />
        <li className="px-2 py-2">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "block bg-black text-white px-5 py-2 rounded-full"
                : "block hover:bg-black hover:text-white hover:px-5 hover:py-2 hover:rounded-full px-5 py-2"
            }
          >
            Services
          </NavLink>
        </li>
        <Divider />
      </ul>
    </div>
  );
};

export default MobileMenu;
