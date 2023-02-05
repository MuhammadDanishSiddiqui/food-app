import React from "react";
import { Link } from "react-router-dom";
import { addressList, linksList } from "../constants/home-constants";

export const Footer = () => {
  return (
    <div className="flex flex-wrap bg-darkPrimary px-4 py-16 md:px-8 lg:px-12">
      <div className="pr-0 md:pr-4 flex justify-center items-center mt-6 xl:mt-0 basis-full md:basis-1/2 xl:basis-3/12">
        <img src="/assets/images/logo-dark.png" alt="" />
      </div>
      <div className="mt-6 xl:mt-0 basis-full md:basis-1/2 lg:basis-3/12">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-GilroySemiBold text-2xl text-secondary mb-4">
            Address
          </p>
          {addressList.map(({ icon, text }) => {
            return (
              <div key={text} className="flex items-center py-2">
                <img className="mr-2" src={icon} alt="" />
                <p className="text-white font-GilroyRegular text-base">
                  {text}
                </p>
              </div>
            );
          })}
          <div className="flex items-center py-2">
            <p className="text-white font-GilroyRegular text-base mr-6">
              FAQ's
            </p>
            <p className="text-white font-GilroyRegular text-base">
              Contact Us
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 xl:mt-0 basis-full md:basis-1/2 xl:basis-3/12">
        <div className="">
          <p className="text-center md:text-left font-GilroySemiBold text-2xl text-secondary mb-4">
            Links
          </p>
          {linksList.map(({ path, text }) => {
            return (
              <div
                key={text}
                className="flex justify-center md:justify-start py-2"
              >
                <Link
                  className="text-white font-GilroyRegular text-base hover:text-secondary"
                  to={path}
                >
                  {text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start mt-6 xl:mt-0 basis-full md:basis-1/2 xl:basis-3/12">
        <div className="">
          <div>
            <p className="font-GilroySemiBold text-2xl text-secondary mb-4">
              Subcribe to Newsletter
            </p>
            <div className="flex">
              <input
                className="text-darkPrimary font-GilroyMedium text-sm p-2 w-48 rounded-lg"
                type="text"
                placeholder="Email Address"
              />
              <div className="ml-3 flex justify-center items-center w-11 h-11 rounded-lg bg-secondary text-white">
                <img className="" src="/assets/images/region-icon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="pt-20">
            <p className="text-center md:text-left font-GilroySemiBold text-xl text-white mb-2">
              Our Social
            </p>
            <div className="flex justify-center md:justify-start">
              <img src="/assets/images/facebook.png" alt="" />
              <img className="mx-4" src="/assets/images/twitter.png" alt="" />
              <img src="/assets/images/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
