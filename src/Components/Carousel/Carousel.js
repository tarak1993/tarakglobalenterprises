import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselImages } from "../Data/data";

const Carousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
  };
  return (
    <Slider {...settings}>
      {carouselImages.map((values, index) => (
        <div
          className="w-full h-52 lg:mt-0 md:h-[25rem] lg:h-[35rem] lg:mx-40 brightness-50 relative"
          key={index}
        >
          <img
            className="object-contain"
            src={values.source}
            alt={values.name}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
