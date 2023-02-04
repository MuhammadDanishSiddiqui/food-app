import React from "react";

const ReviewsSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center px-4 py-8 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex">
          {Array.from({ length: 4 }, () => {
            return (
              <img
                className="-mr-4 w-14"
                src="/assets/images/review-avatar.png"
                alt=""
              />
            );
          })}
        </div>
        <div className="flex flex-col ml-0 md:ml-12 mt-6 md:mt-0">
          <p className="font-GilroyBold text-xl text-secondary">
            Our happy customers
          </p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src="/assets/images/star.png" alt="" />
              <span className="font-GilroyBold text-xl text-darkPrimary ml-2">
                4.7
              </span>
            </div>
            <div>
              <p className="font-GilroyMedium text-xl text-lightPrimary">
                (8.2K Review)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6 md:mt-0 pl-0 md:pl-32">
        <p className="font-GilroySemiBold text-lightPrimary text-xl pb-2">
          We accept
        </p>
        <div className="flex justify-between items-center">
          <img className="w-10" src="/assets/images/visa-card.png" alt="" />
          <img className="w-10" src="/assets/images/master-card.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
