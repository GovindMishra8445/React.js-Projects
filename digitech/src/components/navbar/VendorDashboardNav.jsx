import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const VendorDashboardNav = () => {
  const [open, setOpen] = useState(false);

  
  return (
    <>
      <header className="bg-white w-full h-16 shadow-md px-6 sm:px-12 flex items-center justify-between rounded-full sticky top-0 z-10 transition-all duration-300">
        <div className="flex items-center gap-4">
          <p className="text-2xl cursor-pointer dropdown dropdown-hover">
            <IoMdNotificationsOutline />
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <p className="text-lg pl-3">Notifications</p>
              <li><a>New order received</a></li>
              <li><a>Payment received</a></li>
              <li><a>Product review</a></li>
            </ul>
          </p>
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Vendor Dashboard</span>
          </div>
        </div>

        <button
          className="relative rounded-full border-2 border-gray-200 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all duration-200"
          onClick={() => setOpen(true)}
        >
          <img
            src="/images/profile.jpg"
            alt="Vendor Profile"
            className="w-10 h-10 object-cover rounded-full ring-1 ring-gray-200"
          />
          <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
        </button>
      </header>
    </>
  );
};

export default VendorDashboardNav; 