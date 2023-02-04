import React from "react";

const CategoriesCard = ({ image, title }) => {
  return (
    <div className="basis-2/4">
      <div className="px-4 py-3">
        <div className="basis-1/2 relative flex justify-center">
          <img src={image} alt="" />
          <p className="font-GilroyMedium z-10 text-xl md:text-3xl text-white absolute bottom-4">
            {title}
          </p>
          <div className="w-full z-0 bg-black opacity-40 h-12 md:h-20 absolute bottom-0 rounded-b-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
