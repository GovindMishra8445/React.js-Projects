import React from "react";
import {
  BarChart4,
  PieChart,
  Package,
  Percent,
  ArrowUpRight,
  ArrowDownRight,
  IndianRupee,
  Star,
} from "lucide-react";

const vendorStats = [
  {
    title: "Total Products",
    value: "45",
    icon: <Package className="text-white w-5 h-5" />,
    iconBg: "bg-blue-500",
    change: "12%",
    direction: "up",
    subtitle: "Since last month",
    changeColor: "text-green-500",
  },
  {
    title: "Total Orders",
    value: "156",
    icon: <PieChart className="text-white w-5 h-5" />,
    iconBg: "bg-orange-500",
    change: "8%",
    direction: "up",
    subtitle: "Since last week",
    changeColor: "text-green-500",
  },
  {
    title: "Total Users",
    value: "₹89,450",
    icon: <IndianRupee className="text-white w-5 h-5" />,
    iconBg: "bg-green-500",
    change: "15%",
    direction: "up",
    subtitle: "Since last month",
    changeColor: "text-green-500",
  },
  {
    title: "Total revenue",
    value: "4.8",
    icon: <Star className="text-white w-5 h-5" />,
    iconBg: "bg-yellow-500",
    change: "0.2",
    direction: "up",
    subtitle: "Since last week",
    changeColor: "text-green-500",
  },
];

const VendorDashboardCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 py-6 px-4 md:px-6">
      {vendorStats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between min-h-[140px]"
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <p className="text-gray-500 text-xs font-semibold uppercase truncate">{item.title}</p>
              <h2 className="text-xl md:text-2xl text-gray-900 font-bold">{item.value}</h2>
            </div>
            <div
              className={`p-3 rounded-full flex items-center justify-center ${item.iconBg} flex-shrink-0 ml-2`}
            >
              {item.icon}
            </div>
          </div>

          <div className="text-sm flex items-center gap-1 flex-wrap">
            {item.direction === "up" ? (
              <ArrowUpRight className={`${item.changeColor} w-4 h-4 flex-shrink-0`} />
            ) : (
              <ArrowDownRight className={`${item.changeColor} w-4 h-4 flex-shrink-0`} />
            )}
            <span className={`${item.changeColor} font-semibold`}>
              {item.change}
            </span>
            <span className="text-gray-500 text-xs">· {item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VendorDashboardCards; 