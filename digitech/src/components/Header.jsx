import React, { useEffect, useRef, useState } from "react";
import CartDropdown from "./CartDropdown";
import { Menu } from "lucide-react";

const categories = [
  { label: "Dried Fruits", icon: "/icons/dried-fruits.png" },
  { label: "Spices", icon: "/icons/spices.png" },
  { label: "Pulses", icon: "/icons/pulses.png" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartIconRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartIconRef.current && !cartIconRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    }
    if (cartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartOpen]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [{ label: "Home", path: "/" }, { label: "Shop", path: "/shop" }, { label: "About Us", path: "/" }, { label: "Blog", path: "/blog" }]

  return (
    <header
      className={`bg-white font-sans z-50 ${
        isSticky ? "shadow-md sticky top-0" : "shadow-sm"
      }`}
    >
      {/* Top: Logo, Search, Icons */}
      <div className="container mx-auto lg:px-8 md:px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo */}
        <div className="lg:flex md:flex flex items-center gap-2 lg:pl-0 md:pl-0 px-2">
          <a href="/" className="flex-shrink-0">
            <img
              src="/vantara_logo.png"
              alt="Vantara Logo"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Search */}
          <form className="flex flex-1 lg:w-[40rem] h-10 md:h-12 lg:ml-20 md:ml-2 ml-0">
            <input
              type="text"
              placeholder="Search for Products..."
              className="flex-1 border border-[#8B0000] border-r-0 rounded-l-full px-3 md:px-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#8B0000] lg:w-auto md:w-[10%] w-[10%]"
            />
            <select className="border border-[#8B0000] border-l-0 px-2 md:px-4 py-2 text-sm md:text-base focus:outline-none">
              <option>All Categories</option>
              <option>Nuts</option>
              <option>Dried Fruits</option>
              <option>Seeds</option>
              <option>Dates</option>
              <option>Berries</option>
              <option>Mixes</option>
            </select>
            <button
              type="submit"
              className="bg-[#8B0000] text-white px-3 md:px-4 rounded-r-full flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="flex gap-15 justify-between">
          {" "}
          {/* Hamburger (mobile/tablet) */}
          <button
            className="lg:hidden md:hidden text-2xl text-[#8B0000]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          {/* Wishlist/Cart (desktop only) */}
          <ul className="flex lg:flex lg:gap-8 md:flex md:gap-5 gap-15 items-center text-sm">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-red-800"
              >
                <div className="relative">
                  <div className="bg-[#A97B50] p-2 w-10 h-10 rounded-full flex-center flex items-center justify-center text-white">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                    </svg>
                  </div>
                  <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    0
                  </span>
                </div>
               <span className="text-base">Wishlist</span>
              </a>
            </li>
            <button
              type="button"
              aria-label="Open cart dropdown"
              onClick={() => setCartOpen((prev) => !prev)}
              className="flex items-center text-gray-700 hover:text-red-800 focus:outline-none"
            >
              <span className="relative flex items-center">
                <span className="bg-[#A97B50] rounded-full w-10 h-10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L21 13M7 13V6a1 1 0 011-1h3m4 0h2a1 1 0 011 1v7"
                    ></path>
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    0
                  </span>
                </span>
              </span>
              <span className="ml-2 text-base">Cart</span>
            </button>
            <CartDropdown open={cartOpen} />
          </ul>
        </div>
      </div>
      {/* Navigation + Categories */}
      <nav className="bg-[#8B0000] text-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start justify-between">
          {/* Categories dropdown (only on lg+) */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setOpen(!open)}
              className={`flex items-center w-56 bg-[#a76e37] font-semibold text-lg px-4 py-2 rounded-2xl m-2 ${
                open ? "rounded-b-none " : ""
              }`}
            >
              Browse Categories
              <svg
                className={`w-4 h-4 ml-2 transform transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open && (
              <div className="absolute bg-white left-2 top-12 text-black w-56 mt-1 rounded-b-xl shadow-lg z-20">
                <ul className="divide-y divide-gray-200">
                  {categories.map((cat, i) => (
                    <li
                      key={i}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={cat.icon}
                        alt={cat.label}
                        className="w-5 h-5 mr-2"
                      />
                      {cat.label}
                    </li>
                  ))}
                </ul>
                <div className="text-center py-1 bg-[#E6D1BC] rounded-b-xl font-medium hover:bg-[#d9bfa4] cursor-pointer">
                  + Show More
                </div>
              </div>
            )}
          </div>

          {/* Main menu links */}
          <ul
            className={`w-full lg:w-auto mt-2 lg:mt-0 ${
              mobileMenuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-6 text-base font-medium`}
          >
            {navLinks.map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    className="block md:mt-5 duration-500 hover:text-yellow-800"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
