import { Link } from "react-router-dom";
import React from "react";
import background from "../Assets/bg/bg.mp4";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Home = () => {
  return (
    <div className="fixed inset-0 flex flex-col">
      <div>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 h-full w-full bg-blend-darken brightness-[15%] object-cover"
        >
          <source src={background} />
        </video>
      </div>
      <section className="absolute top-[8%] lg:top-[35%] text-center mx-3 lg:mx-24 leading-12 lg:leading-10 font-roboto text-white">
        <header className="text-xl lg:text-3xl font-semibold mx-3 my-2.5">
          WELCOME TO TARAK GLOBAL ENTERPRISES
        </header>
        <article className="text-base mb-8 lg:mb-6">
          At Tarak Global Enterprises, we believe it is essential to identify
          what opportunities are available in the market that can be seized to
          achieve growth objectives, before entering new markets or penetrating
          existing ones. We conduct market opportunity assessment studies to
          identify and quantify latent, existing and emerging growth
          opportunities that help marketers in allocating resources in the right
          direction, and in devising sound marketing strategies.
        </article>
        <span className="border-2 border-white px-16 py-5 hover:bg-white hover:text-black cursor-pointer">
          <Link to="/about">Explore</Link>
          <ArrowForwardIcon />
        </span>
      </section>
    </div>
  );
};

export default Home;
