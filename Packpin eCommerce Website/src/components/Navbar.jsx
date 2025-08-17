import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import LoginButton from "./LoginButton";

const Navbar = () => {
  const { loggedInUser, getCartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (loggedInUser) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-5 py-3 font-medium sticky top-8 z-10">
        <Link to="/">
          <img
            src={assets.packpin_logo}
            alt="packpin_logo"
            className="w-36 max-sm:w-20"
          />
        </Link>
        {/* <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex items-center flex-col gap-1">
            <p>HOME</p>
          </NavLink>
        </ul> */}
        <div className="flex items-center gap-2">
          <div
            className="group max-sm:hidden relative cursor-pointer"
            onClick={handleProfileClick}
          >
            <img
              src={assets.profile_icon}
              className="w-5 max-sm:w-4"
              alt="Profile"
            />
          </div>

          <Link
            to="/cart"
            className="relative flex items-center gap-1 max-sm:hidden"
          >
            <img src={assets.cart_icon} alt="Cart" className="w-5 max-sm:w-4" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 max-sm:w-2 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="text-gray-800 bottom-0 fixed z-30 bg-gray-100 lg:hidden xl:hidden sm:hidden max-sm:w-full">
        <div className="text-sm justify-around items-center flex">
          <NavLink
            onClick={() => setShowMenu(false)}
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-gray-500 font-bold" : "text-black"
              }`
            }
          >
            <img
              src="/src/assets/home-icon.png"
              alt="Home"
              className="w-5 h-5"
            />
            Home
          </NavLink>

          <LoginButton />

          <NavLink
            onClick={() => setShowMenu(false)}
            to="/cart"
            className={({ isActive }) =>
              `flex flex-col items-center text-xs ${
                isActive ? "text-gray-500 font-bold" : "text-black"
              }`
            }
          >
            <img src={assets.cart_icon} alt="Cart" className="w-6 h-6" />
            Cart
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
