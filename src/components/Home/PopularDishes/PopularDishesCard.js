import React from "react";

const PopularDishesCard = () => {
  return (
    <div className="flex flex-col min-w-[14rem] lg:min-w-[20rem] mr-8">
      <img className="w-full" src="/assets/images/popular-dishes.png" alt="" />
      <div className="p-4">
        <p className="font-GilroyMedium text-base lg:text-xl text-darkPrimary">
          Menu Title Here
        </p>
        <p className="font-GilroyRegular text-sm lg:text-base">
          Pick <span className="text-secondary">5</span> out of{" "}
          <span className="text-secondary">10</span> dishes
        </p>
        <p className="font-GilroyBold text-darkPrimary text-xl lg:text-2xl">
          QAR 200
        </p>
        <hr className="text-lightPrimary my-4" />
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img className="w-8" src="/assets/images/chef-avatar.png" alt="" />
            <p className="font-GilroyMedium text-sm lg:text-lg ml-2">
              Marriot Head Chef
            </p>
          </div>
          <div className="flex items-center">
            <img src="/assets/images/star.png" alt="" />
            <span className="font-GilroyMedium text-darkPrimary text-sm lg:text-lg ml-2">
              4.5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDishesCard;
