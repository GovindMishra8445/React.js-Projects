import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const defaultPageVisits = [
  { name: "/", visitors: 0, users: 0, rate: 0, trend: "none" },
  { name: "/products", visitors: 0, users: 0, rate: 0, trend: "none" },
  { name: "/categories", visitors: 0, users: 0, rate: 0, trend: "none" },
  { name: "/cart", visitors: 0, users: 0, rate: 0, trend: "none" },
  { name: "/profile", visitors: 0, users: 0, rate: 0, trend: "none" },
];

const defaultSocialTraffic = [
  { name: "Direct", visitors: 0, percent: 0, color: "bg-blue-400" },
  { name: "Organic Search", visitors: 0, percent: 0, color: "bg-green-400" },
  { name: "Social Media", visitors: 0, percent: 0, color: "bg-purple-400" },
  { name: "Referral", visitors: 0, percent: 0, color: "bg-yellow-400" },
  { name: "Email", visitors: 0, percent: 0, color: "bg-red-400" },
];

const DashboardTotalUserList = ({ dashboardData = {} }) => {
  const { 
    pageVisits = defaultPageVisits,
    socialTraffic = defaultSocialTraffic,
    loading = false,
    error = null
  } = dashboardData;

  const formatNumber = (num) => {
    if (!num && num !== 0) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatRate = (rate) => {
    if (rate === undefined || rate === null) return '0.00%';
    return `${parseFloat(rate).toFixed(2)}%`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600 text-center">
        Error loading dashboard data: {error.message}
      </div>
    );
  }

  return (
    <div className="md:flex flex-col lg:flex-row gap-6 p-6 bg-[#f5f7fa] justify-center">
      {/* Page Visits Table */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-2/3 overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-gray-800 font-bold text-xl">Page Visits</h2>
          <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-gray-500 font-medium border-b">
              <tr>
                <th className="pb-3 px-4">PAGE NAME</th>
                <th className="pb-3 px-4 text-right">VISITORS</th>
                <th className="pb-3 px-4 text-right">UNIQUE USERS</th>
                <th className="pb-3 px-4 text-right">BOUNCE RATE</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {pageVisits.map((page, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium">{page.name}</td>
                  <td className="py-4 px-4 text-right">{formatNumber(page.visitors)}</td>
                  <td className="py-4 px-4 text-right">{formatNumber(page.users)}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-1 text-sm">
                      {page.trend === "up" ? (
                        <ArrowUpRight className="text-green-500 w-4 h-4" />
                      ) : page.trend === "down" ? (
                        <ArrowDownRight className="text-red-500 w-4 h-4" />
                      ) : null}
                      {formatRate(page.rate)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Social Traffic */}
      <div className="bg-white rounded-xl shadow-md p-6 w-full lg:w-1/3 mt-6 lg:mt-0">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-gray-800 font-bold text-xl">Traffic Sources</h2>
          <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            View All
          </button>
        </div>
        <div className="space-y-6">
          {socialTraffic.map((social, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 font-medium">{social.name}</span>
                <span className="font-semibold">{formatNumber(social.visitors)}</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-full rounded-full ${social.color} transition-all duration-500`}
                  style={{ width: `${Math.min(social.percent || 0, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>0%</span>
                <span>{Math.round(social.percent || 0)}%</span>
                <span>100%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardTotalUserList;