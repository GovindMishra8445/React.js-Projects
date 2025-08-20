import React, { useEffect, useRef, useState } from "react";
import CartDropdown from "./CartDropdown";
import { Search, Heart, ShoppingCart, Menu } from "lucide-react";
import SidebarMenu from "./SidebarMenu";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cartIconRef = useRef(null);

  // Close cart dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartIconRef.current && !cartIconRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Add sticky header on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full bg-white font-sans transition-all duration-300 sticky top-0 z-30 ${
          isSticky ? "shadow-lg bg-opacity-90 backdrop-blur-sm" : ""
        }`}
      >
        <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-8 py-4 flex flex-wrap items-center justify-between">
          {/* Mobile Header */}
          <div className="flex items-center justify-between w-full lg:hidden mb-2">
            {/* Left icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="bg-[#A97B50] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-800"
              >
                <Menu className="w-5 h-5" />
              </button>
              <button
                className="bg-[#A97B50] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-800"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Logo */}
            <a href="/" className="mx-auto">
              <img src="/vantara_logo.png" alt="Logo" className="h-16 w-auto" />
            </a>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              {/* Wishlist */}
              <div className="relative">
                <div className="bg-[#A97B50] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-red-800">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>

              {/* Cart */}
              <div ref={cartIconRef} className="relative">
                <button
                  onClick={() => setCartOpen(!cartOpen)}
                  className="bg-[#A97B50] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-red-800 relative"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
                {cartOpen && <CartDropdown open={cartOpen} />}
              </div>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between w-full gap-6">
            {/* Logo */}
            <a href="/" className="shrink-0">
              <img src="/vantara_logo.png" alt="Logo" className="h-24 w-32" />
            </a>

            {/* Search Bar */}
            <form
              className="flex flex-1 max-w-[34rem] h-12 min-w-0"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search for Products..."
                className="flex-1 border text-[#595959] border-[#8B0000] rounded-l-full text-base px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
              />
              <select className="border-l-0 border-y border-r border-[#8B0000] text-[#595959] px-3 py-2 text-base cursor-pointer">
                <option>All Categories</option>
                <option>Nuts</option>
                <option>Dried Fruits</option>
                <option>Seeds</option>
                <option>Dates</option>
                <option>Berries</option>
                <option>Mixes</option>
              </select>
              <button className="bg-[#8B0000] text-white px-5 py-2 rounded-r-full cursor-pointer flex items-center justify-center">
                <Search className="w-6 h-6" />
              </button>
            </form>

            {/* Right Icons */}
            <ul className="flex items-center gap-6 text-sm shrink-0">
              {/* Wishlist */}
              <li>
                <a className="hover:text-red-800 flex items-center gap-2 text-[#595959] font-serif cursor-pointer">
                  <div className="relative">
                    <div className="bg-[#A97B50] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-red-800">
                      <Heart className="w-5 h-5" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                  <span>Wishlist</span>
                </a>
              </li>

              {/* Cart */}
              <li ref={cartIconRef}>
                <button
                  onClick={() => setCartOpen(!cartOpen)}
                  className="flex items-center gap-2 text-[#595959] hover:text-red-800 font-serif"
                >
                  <div className="relative">
                    <div className="bg-[#A97B50] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-red-800">
                      <ShoppingCart className="w-6 h-6" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-[#8B0000] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      0
                    </span>
                  </div>
                  <span>Cart</span>
                </button>
                {cartOpen && <CartDropdown open={cartOpen} />}
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
