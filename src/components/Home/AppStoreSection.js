import React from "react";

const AppStoreSection = () => {
  return (
    <div className="flex justify-center px-4 py-12 md:px-8 lg:px-12 relative">
      <img src="/assets/images/app-store.png" alt="" />
      <p className="absolute font-GilroyBold text-black text-sm md:text-2xl lg:text-3xl xl:text-4xl  top-28 md:top-36 lg:top-48 xl:top-64">
        Download our Mobile App
      </p>
    </div>
  );
};

export default AppStoreSection;
