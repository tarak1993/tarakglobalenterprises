import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import { aboutUs } from "../Data/data";
import banner from "../Assets/img/ourteam2.jpg";
import banner1 from "../Assets/img/team.jpg";
import banner2 from "../Assets/img/summary.jpeg";

const About = () => {
  const wordCount = (value) => {
    return value.split(" ").length;
  };
  return (
    <div className="flex flex-col w-full">
      <div>
        <Navbar />
      </div>

      <div className="col-span-2 z-0">
        <Carousel />
      </div>
      {aboutUs.map((values, index) => (
        <div
          className={`mt-8 text-left lg:flex ${
            index % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center px-4 mb-5 lg:mx-12 lg:mb-10`}
          key={index}
        >
          <div>
            <header className="text-3xl px-6 font-semibold">
              <p className="my-1.5">{values.title}</p>
              <div className="h-[0.145rem] w-16 mb-2 bg-amber-400"></div>
            </header>
            <article className="text-base leading-8 px-6">
              {values.description}
            </article>
          </div>
          {values.id === 1 ? (
            <img
              src={banner}
              alt={values.title}
              className="h-48 w-72 my-3 md:ml-5"
            />
          ) : values.id === 2 ? (
            <img
              src={banner1}
              alt={values.title}
              className="h-48 w-72 my-3 md:ml-5"
            />
          ) : values.id === 3 ? (
            <img
              src={banner2}
              alt={values.title}
              className="h-48 w-72 my-3 md:ml-5"
            />
          ) : (
            ""
          )}
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default About;
