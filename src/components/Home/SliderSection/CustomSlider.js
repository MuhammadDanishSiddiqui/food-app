import React from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";

const CustomSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col px-4 py-4 pb-24 md:px-8 lg:px-12">
      <Slider {...settings}>
        {Array.from({ length: 8 }, () => {
          return <SliderCard />;
        })}
      </Slider>
    </div>
  );
};

export default CustomSlider;
