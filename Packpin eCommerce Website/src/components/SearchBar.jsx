import React, { useContext, useEffect, useState, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const searchBarRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside); // For mobile touch events
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showSearch, setShowSearch]);

  return showSearch && visible ? (
    <div
      className="pt-5 sticky z-50 top-10 flex items-center justify-end"
      ref={searchBarRef}
    >
      {/* Search Input Container */}
      <div className=" flex justify-between items-center border border-gray-800 bg-white rounded-full sm:w-3/4 md:w-1/2 max-w-xl p-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm px-2"
          placeholder="Search Product"
          ref={searchBarRef}
        />
        <img className="w-4" src={assets.search_icon} alt="Search" />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
