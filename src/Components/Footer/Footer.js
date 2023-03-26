import React from "react";
import Divider from "@mui/material/Divider";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bottom-0 left-0 right-0 w-full h-auto bg-[#2C2B2B]">
      <div className="flex my-4 flex-col">
        <header className="text-xl text-white px-3 font-semibold">
          Get in touch
        </header>
        <span className="flex px-3 my-2 flex-row">
          <div className="h-[0.145rem] bg-amber-400 w-1/3 lg:w-[7%]"></div>
          <div className="h-[0.145rem] bg-slate-400 w-2/3 lg:w-0"></div>
        </span>
      </div>
      <ul className="text-base text-white px-3 lg:flex lg:flex-row justify-between my-6">
        <li className="flex flex-row items-center my-2 hover:text-amber-400">
          <LinkedInIcon />
          <a href="https://www.linkedin.com/company/tarak-global-enterprises/">
            TARAK Global Enterprises
          </a>
        </li>
        <li className="flex flex-row items-center my-2 hover:text-amber-400">
          <LinkedInIcon />
          <a href="https://www.linkedin.com/in/ramesh-achuthan-thayyil-12a93422">
            Ramesh Achuthan Thayyil
          </a>
        </li>
        <li className="flex flex-row items-center my-2 hover:text-amber-400">
          <CallIcon />
          <p>+918605373028 | +919623074249</p>
        </li>
        <li className="flex flex-row items-center my-2 hover:text-amber-400">
          <EmailIcon />
          <a href="tarakglobal@gmail.com">tarakglobal@gmail.com</a>
        </li>
        <li className="flex flex-row items-center my-2 hover:text-amber-400">
          <EmailIcon />
          <a href="thayyilramesh9@gmail.com">thayyilramesh9@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
