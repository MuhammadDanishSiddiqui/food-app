import React, { useState } from "react";
import { countries } from "../../constants/home-constants";
import DatePicker from "react-datepicker";

const Banner = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [countryList, setCountryList] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const [persons, setPersons] = useState(1);

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center px-4 py-4 md:px-8 lg:px-12">
      <div className="flex flex-col text-center xl:text-left w-full xl:w-2/4">
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
              <div
                onClick={() => setCountryList(!countryList)}
                className="flex items-center mb-6 cursor-pointer relative"
              >
                <img className="" src="/assets/images/region-icon.png" alt="" />
                <span className="font-GilroyBold text-sm md:text-base text-darkPrimary mx-2">
                  Select region
                </span>
                <img
                  className={`${countryList && "rotate-180"}`}
                  src="/assets/images/arrow-secondary.png"
                  alt=""
                />
                {countryList && (
                  <div className="text-center absolute w-full h-48 overflow-scroll no-scrollbar bg-white rounded-lg cursor-pointer text-lightPrimary py-2 shadow-lg top-20">
                    {countries.map((country) => {
                      return (
                        <p
                          className="font-GilroyBold text-sm"
                          onClick={() => {
                            setSelectedCountry(country);
                            setCountryList(!countryList);
                          }}
                        >
                          {country}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
              <span className="font-GilroyRegular text-lightPrimary text-sm md:text-base">
                {selectedCountry}
              </span>
            </div>
            <div className="px-3 mx-2 lg:px-2 lg:mx-1 border-lightPrimary border-x flex flex-col justify-center items-center">
              <div
                onClick={() => setDatePickerIsOpen(!datePickerIsOpen)}
                className="flex items-center cursor-pointer"
              >
                <img className="" src="/assets/images/date-icon.png" alt="" />
                <span className="font-GilroyBold text-sm md:text-base text-darkPrimary mx-2">
                  Select date
                </span>
                <img
                  className={`${datePickerIsOpen && "rotate-180"}`}
                  src="/assets/images/arrow-secondary.png"
                  alt=""
                />
              </div>
              <DatePicker
                className="hidden"
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setDatePickerIsOpen(!datePickerIsOpen);
                }}
                onClickOutside={() => setDatePickerIsOpen(!datePickerIsOpen)}
                open={datePickerIsOpen}
              />
              <span className="font-GilroyRegular text-lightPrimary text-sm md:text-base">
                {startDate.toDateString()}
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center mb-6 cursor-pointer">
                <img src="/assets/images/persons-icon.png" alt="" />
                <span className="font-GilroyBold text-sm md:text-base text-darkPrimary mx-2">
                  Select persons
                </span>
                <img src="/assets/images/arrow-secondary.png" alt="" />
              </div>
              <div className="flex items-center">
                <img
                  onClick={() => (persons > 1 ? setPersons(persons - 1) : null)}
                  className="cursor-pointer"
                  src="/assets/images/arrow-secondary.png"
                  alt=""
                />
                <span className="font-GilroyBold text-sm md:text-base text-lightPrimary mx-2">
                  {persons}
                </span>
                <img
                  onClick={() => setPersons(persons + 1)}
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
