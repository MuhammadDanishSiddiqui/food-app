import React from "react";
import PopularDishesCard from "./PopularDishesCard";

const PopularDishesSection = () => {
  return (
    <div className="flex flex-wrap xl:flex-row px-4 py-0 lg:py-8 md:px-8 lg:px-12 xl:pr-0">
      <div className="flex flex-col items-center xl:items-start  basis-full xl:basis-2/5">
        <p className="font-GilroyBold text-center xl:text-left text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-darkPrimary my-6">
          Our Most <br /> <span className="text-secondary">Popular Dishes</span>{" "}
          <br /> This Month
        </p>
        <button className="font-GilroyBold bg-secondary text-white text-xl px-8 py-2 rounded-full">
          See all
        </button>
      </div>
      <div className="flex basis-full xl:basis-3/5 mt-8 xl:mt-0 overflow-x-auto no-scrollbar">
        {Array.from({ length: 5 }, () => {
          return <PopularDishesCard />;
        })}
      </div>
    </div>
  );
};

export default PopularDishesSection;
