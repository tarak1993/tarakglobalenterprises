import React, { useState } from "react";
import { services } from "../Data/data";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";

const Services = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="flex flex-col w-full">
      <div>
        <Navbar />
      </div>
      <div className="mt-8 text-left px-6 flex flex-col">
        <header className="text-3xl font-semibold">Services we offer</header>
        <div className="h-[0.145rem] w-16 my-2 bg-amber-400"></div>
      </div>
      <div className="flex h-full w-full justify-center items-center px-6">
        <div>
          {services.map((values, index) => (
            <div key={index} className="my-5 shadow-lg">
              <header
                onClick={() => toggle(index)}
                className="text-lg flex flex-row items-center justify-between font-roboto font-semibold my-3 h-16 align-middle bg-gradient-to-b from-amber-500 via-amber-400 to-white px-3 cursor-pointer"
              >
                <p>{values.title}</p>
                <span>
                  {selected === index ? (
                    <KeyboardControlKeyIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </span>
              </header>
              <article
                className={`text-base leading-8 font-roboto px-3 transition-all ${
                  selected === index
                    ? "max-h-auto overflow-visible"
                    : "max-h-0 overflow-hidden"
                }`}
              >
                {values.description}
              </article>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
