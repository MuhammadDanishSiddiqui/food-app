import React from "react";

const SliderCard = () => {
  return (
    <div className="flex flex-col p-3 rounded-xl shadow-2xl">
      <div className="flex items-center">
        <img
          className="w-20 lg:w-24"
          src="/assets/images/customer.png"
          alt=""
        />
        <div className="flex flex-col">
          <p className="font-GilroyRegular text-xl lg:text-2xl text-darkPrimary">
            William Smith
          </p>
          <p className="font-GilroyRegular text-base lg:text-lg text-lightPrimary">
            Customer
          </p>
        </div>
      </div>
      <div className="py-4">
        <p className="font-GilroyRegular text-base text-darkPrimary">
          أنا أحب خدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها.
          هذه أفضل منصةخدماتهم وأستمتع بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع
          بها. هذه أفضل منصةأنا أحب خدماتهم وأستمتع بها. هذه أفضل منصة
        </p>
      </div>
      <div className="flex justify-end">
        <div className="flex items-center">
          <img src="/assets/images/star.png" alt="" />
          <span className="font-GilroyBold text-sm ml-2">4.7</span>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
