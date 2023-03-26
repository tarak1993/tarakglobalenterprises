import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import background from "../Assets/img/logo.png";
import MobileMenu from "../MobileMenu/MobileMenu";
const Navbar = () => {
  const [showMobileMenu, setSHowMobileMenu] = useState(false);
  return (
    <div className="flex flex-row items-center justify-between overflow-hidden w-full">
      <div className="mt-6 lg:mt-0 md:mt-2">
        <img src={background} alt="logo" className="h-20 w-20" />
      </div>
      <button
        onClick={() => setSHowMobileMenu(!showMobileMenu)}
        className="visible mr-3 lg:invisible md:invisible"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="invisible lg:visible md:visible max-w-4xl w-max absolute top-8 left-20">
        <ul className="flex flex-row text-xl font-semibold -mt-4">
          <li className="mr-16">
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
          <li className="mr-16">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block bg-black text-white px-5 py-2 rounded-full"
                  : "block hover:bg-black hover:text-white hover:px-5 hover:py-2 hover:rounded-full px-5 py-2"
              }
            >
              About us
            </NavLink>
          </li>
          <li className="mr-16">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "block bg-black text-white px-5 py-2 rounded-full"
                  : "block hover:bg-black hover:text-white hover:px-5 hover:py-2 hover:rounded-full bg-white text-black px-5 py-2"
              }
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
      {showMobileMenu && <MobileMenu />}
    </div>
  );
};

export default Navbar;
