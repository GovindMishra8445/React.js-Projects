import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import VendorDashboardSidebar from "../sidebar/VendorDashboardSidebar";
import { HiMenu } from "react-icons/hi";

const VendorDashboardLayout = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f4f6f9]">
      <div
        className={`fixed top-0 left-0 h-full z-40 transition-transform transform bg-white shadow-lg 
          w-64 md: md:translate-x-0 ${show ? "translate-x-0" : "-translate-x-full"} md:block`}
      >
        <VendorDashboardSidebar />
      </div>

      {/* Overlay for mobile */}
      {show && (
        <div
          className="fixed inset-0 z-30 bg-blac/70 bg-opacity-50 md:hidden"
          onClick={() => setShow(false)}
        ></div>
      )}

      
      <div className="flex-1 w-full h-10 md:ml-64">
    
        <div className="md:hidden relative z-1 p-4 flex w-full items-center bg-white shadow">
          <button onClick={() => setShow(!show)}>
            <HiMenu className="text-2xl" />
          </button>
          <h1 className="ml-4 text-xl font-semibold">Vendor Dashboard</h1>
        </div>


        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default VendorDashboardLayout; 