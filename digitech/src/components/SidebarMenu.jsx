import React, { useState, useEffect } from "react";
import { X, Search, Plus, Minus } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SidebarMenu({ isOpen, onClose }) {
  const [expanded, setExpanded] = useState({});
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setCategories([
        "Almond",
        "Cashew",
        "Anjeer",
        "Apricots",
        "Raisins",
        "Walnut",
        "Pistachio",
        "Dates",
      ]);
    }, 300);
  }, []);

  const toggleCategory = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleNavigate = (path) => {
    navigate(path);
    onClose(); // close sidebar
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#232424] z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-end px-4 py-4 border-b border-gray-700">
          <button
            onClick={onClose}
            className="text-gray-500 bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 hover:text-black"
          >
            <X />
          </button>
        </div>

        {/* Search Box */}
        <div className="px-4 py-4">
          <form
            onSubmit={(e) => {
              const form = e.target;
              const input = form.querySelector("input");
              if (!input.value.trim()) {
                // Let the browser show the validation message
                input.focus();
                return e.preventDefault();
              }

              // You can perform the search logic here if needed
              console.log("Search query:", input.value);
              onClose(); // Optional: close sidebar after search
            }}
            className="flex flex-col gap-3"
          >
            <input
              type="text"
              name="search"
              required
              placeholder="Search for Products..."
              className="w-full bg-white text-black rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-800 w-full text-white rounded-full px-4 py-2 text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition-colors duration-300"
            >
              <Search className="w-4 h-4" />
              <span className="font-bold">Search</span>
            </button>
          </form>
        </div>

        {/* Scrollable Nav */}
        <nav className="p-4 space-y-3 overflow-y-auto h-[calc(100%-180px)] custom-scrollbar">
          <SidebarItem
            label="Browse Categories"
            expandable
            expanded={expanded["Browse Categories"]}
            onToggle={() => toggleCategory("Browse Categories")}
          >
            <SidebarList
              items={categories}
              currentPath={location.pathname}
              onNavigate={handleNavigate}
              prefix="/category"
            />
          </SidebarItem>

          <SidebarItem
            label="Home"
            active={location.pathname === "/"}
            onClick={() => handleNavigate("/")}
          />

          <SidebarItem
            label="Shop"
            expandable
            expanded={expanded["Shop"]}
            onToggle={() => toggleCategory("Shop")}
          >
            <SidebarList
              items={categories}
              currentPath={location.pathname}
              onNavigate={handleNavigate}
              prefix="/shop"
            />
          </SidebarItem>

          <SidebarItem
            label="About Us"
            active={location.pathname === "/about"}
            onClick={() => handleNavigate("/about")}
          />
          <SidebarItem
            label="Blog"
            active={location.pathname === "/blog"}
            onClick={() => handleNavigate("/blog")}
          />
          <SidebarItem
            label="Contact Us"
            active={location.pathname === "/contactus"}
            onClick={() => handleNavigate("/contactus")}
          />
          <SidebarItem
            label="Career"
            active={location.pathname === "/career"}
            onClick={() => handleNavigate("/career")}
          />
          <SidebarItem
            label="Terms & Conditions"
            active={location.pathname === "/terms-conditions"}
            onClick={() => handleNavigate("/terms-conditions")}
          />
          <SidebarItem
            label="Privacy Policy"
            active={location.pathname === "/privacy-policy"}
            onClick={() => handleNavigate("/privacy-policy")}
          />
        </nav>
      </div>
    </>
  );
}

function SidebarItem({
  label,
  expandable = false,
  expanded = false,
  onToggle,
  children,
  onClick,
  active,
}) {
  return (
    <div>
      <div
        className={`flex items-center justify-between cursor-pointer font-serif text-sm px-1 py-1 rounded-md transition-colors
          ${
            active
              ? "text-red-500 font-semibold"
              : "text-white hover:text-red-400"
          }`}
        onClick={expandable ? onToggle : onClick}
      >
        <span>{label}</span>
        {expandable &&
          (expanded ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          ))}
      </div>

      {/* Smooth expand/collapse */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-96 mt-2" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function SidebarList({ items, onNavigate, currentPath, prefix }) {
  return (
    <ul className="pl-4 py-2 space-y-1 text-sm bg-[#2E2F2F] rounded-lg">
      {items.map((item) => {
        const path = `${prefix}/${item.toLowerCase()}`;
        const isActive = currentPath === path;

        return (
          <li
            key={item}
            onClick={() => onNavigate(path)}
            className={`cursor-pointer px-2 py-1 rounded-md transition-colors ${
              isActive
                ? "text-red-500 font-semibold"
                : "hover:text-red-400 text-white"
            }`}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
