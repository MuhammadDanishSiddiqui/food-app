import React from "react";
import { categories } from "../../../constants/home-constants";
import CategoriesCard from "./CategoriesCard";

const CategoriesSection = () => {
  return (
    <div className="flex flex-col px-4 py-4 md:px-8 lg:px-12">
      <div className="flex justify-center xl:justify-start py-12">
        <p className="pl-20 md:pl-28 font-GilroyBold text-2xl md:text-4xl lg:text-5xl text-darkPrimary relative before:content-[''] before:absolute before:w-16 md:before:w-24 before:bg-secondary before:h-1 before:top-4 lg:before:top-6 before:left-0">
          Browse by <span className="text-secondary">Categories</span>
        </p>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="basis-full lg:basis-1/2 mb-8 lg:mb-0 px-4 lg:px-0">
          <div className="relative flex justify-center">
            <img
              className="w-full h-[15rem] md:h-[27rem] xl:h-[34rem]"
              src="/assets/images/explore-food.png"
              alt=""
            />
            <p className="font-GilroyMedium z-10 text-white text-3xl md:text-5xl absolute bottom-4">
              Explore Food
            </p>
            <div className="w-full z-0 bg-black opacity-40 h-20 absolute bottom-0 rounded-b-3xl"></div>
          </div>
        </div>
        <div className="flex flex-wrap basis-full lg:basis-1/2">
          {categories.map(({ image, title }) => {
            return <CategoriesCard key={title} image={image} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
