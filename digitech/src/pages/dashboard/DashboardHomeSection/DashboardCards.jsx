import React from "react";
import {
  BarChart4,
  PieChart,
  Users,
  Percent,
  ArrowUpRight,
  ArrowDownRight,
  IndianRupee,
} from "lucide-react";

const DashboardCards = ({ dashboardData = {} }) => {
  const { 
    totalProducts = 0, 
    totalOrders = 0, 
    totalUsers = 0, 
    totalRevenue = 0,
    productGrowth = 0,
    orderGrowth = 0,
    userGrowth = 0,
    revenueGrowth = 0
  } = dashboardData;

  const formatNumber = (num) => {
    if (!num) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatGrowth = (growth) => {
    if (growth === undefined || growth === null) return '0%';
    return `${growth > 0 ? '+' : ''}${growth}%`;
  };

  const stats = [
    {
      title: "Total Products",
      value: formatNumber(totalProducts),
      icon: <BarChart4 className="text-white w-5 h-5" />,
      iconBg: "bg-red-500",
      change: formatGrowth(productGrowth),
      direction: productGrowth >= 0 ? "up" : "down",
      subtitle: "Since last month",
      changeColor: productGrowth >= 0 ? "text-green-500" : "text-red-500",
    },
    {
      title: "Total Orders",
      value: formatNumber(totalOrders),
      icon: <PieChart className="text-white w-5 h-5" />,
      iconBg: "bg-orange-500",
      change: formatGrowth(orderGrowth),
      direction: orderGrowth >= 0 ? "up" : "down",
      subtitle: "Since last month",
      changeColor: orderGrowth >= 0 ? "text-green-500" : "text-red-500",
    },
    {
      title: "Total Users",
      value: formatNumber(totalUsers),
      icon: <Users className="text-white w-5 h-5" />,
      iconBg: "bg-pink-500",
      change: formatGrowth(userGrowth),
      direction: userGrowth >= 0 ? "up" : "down",
      subtitle: "Since last month",
      changeColor: userGrowth >= 0 ? "text-green-500" : "text-red-500",
    },
    {
      title: "Total Revenue",
      value: `₹${formatNumber(totalRevenue)}`,
      icon: <IndianRupee className="text-white w-5 h-5" />,
      iconBg: "bg-blue-500",
      change: formatGrowth(revenueGrowth),
      direction: revenueGrowth >= 0 ? "up" : "down",
      subtitle: "Since last month",
      changeColor: revenueGrowth >= 0 ? "text-green-500" : "text-red-500",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4  mt-10 py-6 px-0 mx-0">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 w-[230px] flex flex-col justify-between"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-gray-500 text-xs font-semibold uppercase">{item.title}</p>
              <h2 className="text-2xl  text-gray-900">{item.value}</h2>
            </div>
            <div
              className={`p-3  rounded-full  flex items-center justify-center ${item.iconBg}`}
            >
              {item.icon}
            </div>
          </div>

          <div className="text-sm flex items-center gap-1">
            {item.direction === "up" ? (
              <ArrowUpRight className={`${item.changeColor} w-4 h-4`} />
            ) : (
              <ArrowDownRight className={`${item.changeColor} w-4 h-4`} />
            )}
            <span className={`${item.changeColor} font-semibold`}>
              {item.change}
            </span>
            <span className="text-gray-500">· {item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;