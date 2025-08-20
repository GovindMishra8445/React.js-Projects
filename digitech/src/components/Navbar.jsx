import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shopDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { label: "Dried Fruits", icon: "/icons/dried-fruits.png" },
    { label: "Spices", icon: "/icons/spices.png" },
    { label: "Pulses", icon: "/icons/pulses.png" },
  ];

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Shops", path: "/shop", hasDropdown: true },
    { label: "About Us", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact Us", path: "/contact" },
  ];

  const shopCategories = [
    {
      title: "Dry Fruit & Nuts",
      items: [
        "Almonds (Badam)",
        "Cashew Nuts (Kaju)",
        "Raisins (Kishmish)",
        "Pistachios (Pista)",
        "Walnut (Akhrot)",
        "Dry Dates (Chhuhara)",
        "Fox Nuts (Makhana)",
        "Fig (Anjeer)",
        "Apricot (Khubani)",
        "Pine Nuts (Chilgoza)",
      ],
    },
    {
      title: "Spices",
      items: [
        "Turmeric Powder (Haldi)",
        "Red Chilli (Lal Mirch)",
        "Coriander (Dhaniya)",
        "Cumin Seeds (Jeera)",
        "Fennel Seeds (Saunf)",
        "Mustard Seeds (Rai)",
        "Cloves (Laung)",
        "Black Pepper (Kali Mirch)",
        "Cardamom (Elaichi)",
        "Cinnamon (Dalchini)",
      ],
    },
    {
      title: "Pulses",
      items: [
        "Chana Dal",
        "Moong Dal",
        "Masoor Dal",
        "Toor Dal (Arhar)",
        "Urad Dal",
        "Kabuli Chana (White)",
        "Black Chana",
        "Green Moong Whole",
        "Rajma (Kidney Beans)",
        "Lobia (Black Eyed Peas)",
      ],
    },
  ];

  return (
    <nav
      className={`sticky top-0 z-20 bg-[#8B0000] text-white shadow-md transition-all duration-500 ${
        scrolled ? "py-2 shadow-lg bg-opacity-90 backdrop-blur-sm" : "py-4"
      }`}
    >
      <div className="container mx-auto px-30 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-20 transition-all duration-300">
        {/* Browse Categories */}
        <div className="relative hidden lg:block">
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center w-56 bg-[#a76e37] font-semibold text-lg px-4 py-2 rounded-2xl m-2 ${
              open ? "rounded-b-none" : ""
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

        {/* Navigation Links */}
        <ul
          className={`w-full lg:w-auto ${
            mobileMenuOpen ? "block" : "hidden"
          } lg:flex flex-col gap-5 lg:flex-row items-center text-white justify-center space-y-2 lg:space-y-0 lg:space-x-6 text-[16px] font-serif font-medium py-4 lg:py-0`}
        >
          {navLinks.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => item.hasDropdown && setShopDropdownOpen(true)}
              onMouseLeave={() => item.hasDropdown && setShopDropdownOpen(false)}
              ref={item.hasDropdown ? shopDropdownRef : null}
            >
              <a
                href={item.path}
                className="flex items-center gap-1 py-2 duration-500 hover:text-[#a76e37] cursor-pointer"
                onClick={(e) => {
                  if (item.hasDropdown) e.preventDefault();
                }}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      shopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>

              {item.hasDropdown && shopDropdownOpen && (
                <div className="absolute top-full left-0 bg-white font-Spartan text-black shadow-lg w-[800px] flex mt-2 z-20">
                  {shopCategories.map((category, cIdx) => (
                    <ul key={cIdx} className="w-1/3 p-4">
                      <li className="font-bold mb-2 font-serif text-[#595959]">
                        {category.title}
                      </li>
                      <hr className="mb-2" />
                      {category.items.map((catItem, iIdx) => (
                        <li key={iIdx}>
                          <a
                            href="#"
                            className="block py-1 text-[#b35c00] hover:bg-red-800 hover:text-white duration-500 p-4 hover:rounded-lg"
                          >
                            {catItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
