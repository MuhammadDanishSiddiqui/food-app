import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-center px-4 py-4 md:px-8 lg:px-12">
      <div className="flex flex-col w-full xl:w-2/4 pr-12">
        <p className="font-GilroyBold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-darkPrimary">
          Book <span className="text-secondary">Private Chef</span>
          <br /> for your <br /> Dinner{" "}
          <span className="text-secondary">Party</span>
        </p>
        <p className="font-GilroyRegular text-lightPrimary text-sm lg:text-xl pt-3">
          We’re providing the best Chef booking platform.
        </p>
        <p className="font-GilroyRegular text-lightPrimary text-sm lg:text-xl">
          Choose a menu and book your Chef instantly
        </p>
        <div className="flex flex-col md:flex-row justify-around xl:justify-between items-center mt-8">
          <div className="flex shadow-lg rounded-sm py-5">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center mb-2 cursor-pointer">
                <img className="" src="/assets/images/region-icon.png" alt="" />
                <span className="font-GilroyBold text-sm md:text-base text-darkPrimary mx-2">
                  Select region
                </span>
                <img src="/assets/images/arrow-secondary.png" alt="" />
              </div>
              <span className="font-GilroyRegular text-lightPrimary text-sm md:text-base">
                Al Shamal
              </span>
            </div>
            <div className="px-3 mx-2 lg:px-2 lg:mx-1 border-lightPrimary border-x flex flex-col justify-center items-center">
              <div className="flex items-center mb-2 cursor-pointer">
                <img className="" src="/assets/images/date-icon.png" alt="" />
                <span className="font-GilroyBold text-sm md:text-base text-darkPrimary mx-2">
                  Select date
                </span>
                <img src="/assets/images/arrow-secondary.png" alt="" />
              </div>
              <span className="font-GilroyRegular text-lightPrimary text-sm md:text-base">
                15 Jan - 20 Jan 2022
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center mb-2 cursor-pointer">
                <img src="/assets/images/persons-icon.png" alt="" />
                <span className="font-GilroyBold text-sm md:text-base text-darkPrimary mx-2">
                  Select persons
                </span>
                <img src="/assets/images/arrow-secondary.png" alt="" />
              </div>
              <div className="flex items-center">
                <img
                  className="cursor-pointer"
                  src="/assets/images/arrow-secondary.png"
                  alt=""
                />
                <span className="font-GilroyBold text-sm md:text-base text-lightPrimary mx-2">
                  5
                </span>
                <img
                  className="rotate-180 cursor-pointer"
                  src="/assets/images/arrow-secondary.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="cursor-pointer mt-8 md:mt-0 ml-4 bg-secondary w-10 md:w-12 h-10 md:h-12 rounded-full flex justify-center items-center">
              <img src="/assets/images/arrow-white.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-12 xl:mt-0 justify-center items-center w-full xl:w-2/4">
        <img className="w-full" src="/assets/images/dishes.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
