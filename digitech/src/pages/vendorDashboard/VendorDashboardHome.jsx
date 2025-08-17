import React from "react";
import VendorDashboardNav from "../../components/navbar/VendorDashboardNav";
import VendorDashboardCards from "./VendorDashboardSection/VendorDashboardCards";
import VendorDashboardCharts from "./VendorDashboardSection/VendorDashboardCharts";
import VendorRecentOrders from "./VendorDashboardSection/VendorRecentOrders";

const VendorDashboardHome = () => {
  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] min-h-screen">
      <div className="absolute top-0 bg-[#0284c7] rounded-xl left-0 w-full rounded-t-none h-[70vh] -"></div>
      <VendorDashboardNav />

      <div className="relative">
        <VendorDashboardCards />
      </div>
      <div className="relative overflow-x-auto">
        <div className="min-w-[700px]">
          <VendorDashboardCharts />
        </div>
      </div>
      <div className="relative overflow-x-auto mt-4">
        <div className="min-w-[700px]">
          <VendorRecentOrders />
        </div>
      </div>
    </div>
  );
};

export default VendorDashboardHome; 