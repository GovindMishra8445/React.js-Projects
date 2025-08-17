
import React, { useEffect } from "react";
import DashboardNav from "../../components/navbar/DashboardNav";
import DashboardCards from "./DashboardHomeSection/DashboardCards";
import DashboardCharts from "./DashboardHomeSection/DashboardChart";
import DashboardTotalUserList from "./DashboardHomeSection/DashboardTotalUserList";
import { useApi } from "../../hooks/useApi";
import { getAdminDashboard } from "../../api/admin";

const DashboardHome = () => {
  const { data: apiResponse, loading, error, refetch } = useApi(getAdminDashboard);
  
  // Transform the API response to match the expected format
  const dashboardData = apiResponse?.result ? {
    totalProducts: apiResponse.result.totalProducts || 0,
    totalOrders: apiResponse.result.totalOrders || 0,
    totalUsers: apiResponse.result.totalUsers || 0,
    totalRevenue: apiResponse.result.totalSellingPrice || 0,
    // Default growth values to 0 if not provided
    productGrowth: 0,
    orderGrowth: 0,
    userGrowth: 0,
    revenueGrowth: 0
  } : {};

  useEffect(() => {
    console.log('Dashboard data:', dashboardData);
    console.log('API Response:', apiResponse);
  }, [dashboardData, apiResponse]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600">
        Error loading dashboard data: {error.message}
        <button 
          onClick={refetch}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="absolute top-0 bg-[#0284c7] rounded-xl left-0 md:left-63 w-full md:w-[80%] rounded-t-none h-[110vh] md:h-100"></div>
      <DashboardNav />

      <div className="relative z-1">
        <DashboardCards dashboardData={dashboardData} />
      </div>
      <div className="relative z-1">
        <DashboardCharts dashboardData={dashboardData} />
      </div>
      <div className="overflow-hidden">
        <DashboardTotalUserList dashboardData={dashboardData} />

    </div>
  
  </div>
  )
}

export default DashboardHome