import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { links } from "../constants/home-constants";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center px-4 py-4 md:px-8 lg:px-12">
        <div className="flex justify-start items-center basis-3/4 lg:basis-1/4">
          <img src="/assets/images/logo.png" alt="" />
        </div>
        <div className="hidden lg:flex justify-around basis-2/4">
          {links.map(({ link, text }) => {
            return (
              <Link
                key={text}
                className={`text-darkPrimary ${
                  pathname === link
                    ? "font-GilroySemiBold text-darkPrimary before:content-[''] before:absolute before:w-full before:bg-secondary before:h-1 before:top-8"
                    : "font-GilroyMedium text-lightPrimary"
                } relative text-base`}
                to={link}
              >
                {text}
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex justify-end items-center lg:basis-1/4 font-GilroyMedium text-base text-lightPrimary">
          <img src="/assets/images/default-avatar.png" alt="" />
          <Link to={"/signup"} className="capitalize mx-2">
            Sign Up
          </Link>
          <span>|</span>
          <Link to={"login"} className="ml-2 text">
            Log In
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-end items-center basis-1/4 lg:hidden"
        >
          <RxHamburgerMenu size={35} />
        </div>
      </div>
      {open && (
        <div className="flex z-40 lg:hidden flex-col justify-start items-center pt-8 fixed right-0 top-0 w-60 h-full bg-darkPrimary">
          <button
            onClick={() => setOpen(!open)}
            className="self-end mr-4 cursor-pointer"
          >
            <RxCross2 color="white" size={35} />
          </button>
          {links.map(({ link, text }) => {
            return (
              <Link
                key={text}
                className={`text-darkPrimary ${
                  pathname === link
                    ? "font-GilroySemiBold before:content-[''] before:absolute before:w-full before:bg-secondary before:h-1 before:top-12"
                    : "font-GilroyMedium"
                } relative text-base text-white py-4`}
                to={link}
              >
                {text}
              </Link>
            );
          })}
          <Link
            className={`text-darkPrimary ${
              pathname === "/signup"
                ? "font-GilroySemiBold before:content-[''] before:absolute before:w-full before:bg-secondary before:h-1 before:top-12"
                : "font-GilroyMedium"
            } relative text-base text-white py-4`}
            to={"signup"}
          >
            Sign Up
          </Link>
          <Link
            className={`text-darkPrimary ${
              pathname === "/login"
                ? "font-GilroySemiBold before:content-[''] before:absolute before:w-full before:bg-secondary before:h-1 before:top-12"
                : "font-GilroyMedium"
            } relative text-base text-white py-4`}
            to={"/login"}
          >
            Log In
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
