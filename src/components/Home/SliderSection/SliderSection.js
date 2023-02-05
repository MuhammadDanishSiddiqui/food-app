import React from "react";
import CustomSlider from "./CustomSlider";

const SliderSection = () => {
  return (
    <div className="flex flex-col px-4 py-4 pb-0 md:px-8 lg:px-12">
      <div className="flex justify-center xl:justify-start py-12">
        <p className="text-center xl:text-left font-GilroyBold text-4xl lg:text-5xl text-darkPrimary">
          What Our <br /> <span className="text-secondary">Customers</span> Says
        </p>
      </div>
      <CustomSlider />
    </div>
  );
};

export default SliderSection;
