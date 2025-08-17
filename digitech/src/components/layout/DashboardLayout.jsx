import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../sidebar/DashboardSidebar";
import { HiMenu } from "react-icons/hi"; // Icon for mobile toggle

const DashboardLayout = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f4f6f9]">
    
      <div
        className={`fixed top-0 left-0 h-full z-40 transition-transform transform bg-white shadow-lg 
          w-64 md:   md:translate-x-0 ${show ? "translate-x-0" : "-translate-x-full"} md:block`}
      >
        .
        <DashboardSidebar />
      </div>

      {/* Overlay for mobile */}
      {show && (
        <div
          className="fixed inset-0 z-30 bg-blac/70 bg-opacity-50 md:hidden"
          onClick={() => setShow(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1  w-full  h-10 md:ml-64">
        {/* Mobile Header */}
        <div className="md:hidden relative z-1 p-4 flex w-full items-center bg-white shadow">
          <button onClick={() => setShow(!show)}>
            <HiMenu className="text-2xl" />
          </button>
          <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
        </div>

        {/* Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
