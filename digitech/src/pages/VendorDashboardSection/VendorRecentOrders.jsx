import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const recentOrders = [
  { 
    orderId: "ORD_001", 
    customer: "John Doe", 
    amount: "₹2,450", 
    status: "Delivered", 
    date: "2025-01-15",
    products: 3 
  },
  { 
    orderId: "ORD_002", 
    customer: "Jane Smith", 
    amount: "₹1,890", 
    status: "Processing", 
    date: "2025-01-14",
    products: 2 
  },
  { 
    orderId: "ORD_003", 
    customer: "Mike Johnson", 
    amount: "₹3,200", 
    status: "Shipped", 
    date: "2025-01-13",
    products: 1 
  },
  { 
    orderId: "ORD_004", 
    customer: "Sarah Wilson", 
    amount: "₹1,650", 
    status: "Delivered", 
    date: "2025-01-12",
    products: 4 
  },
  { 
    orderId: "ORD_005", 
    customer: "David Brown", 
    amount: "₹2,800", 
    status: "Processing", 
    date: "2025-01-11",
    products: 2 
  },
];

const VendorRecentOrders = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 md:p-6 bg-[#f5f7fa]">
      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl shadow-md p-4 w-full lg:w-[650px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-bold text-lg">Recent Orders</h2>
          <button className="text-xs bg-[#6366f1] text-white px-3 py-1 rounded-md font-semibold">
            VIEW ALL
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm min-w-[600px]">
            <thead className="text-gray-500 font-semibold">
              <tr>
                <th className="pb-2">ORDER ID</th>
                <th className="pb-2">CUSTOMER</th>
                <th className="pb-2">AMOUNT</th>
                <th className="pb-2">STATUS</th>
                <th className="pb-2">DATE</th>
                <th className="pb-2">ITEMS</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 font-medium">{order.orderId}</td>
                  <td className="py-3">{order.customer}</td>
                  <td className="py-3 font-semibold">{order.amount}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3">{order.date}</td>
                  <td className="py-3">{order.products}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-xl shadow-md p-4 w-full lg:w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-bold text-lg">Top Products</h2>
          <button className="text-xs bg-[#6366f1] text-white px-3 py-1 rounded-md font-semibold">
            VIEW ALL
          </button>
        </div>
        <div className="space-y-3">
          {[
            { name: "Organic Almonds", sales: 45, revenue: "₹12,450" },
            { name: "Premium Cashews", sales: 38, revenue: "₹9,800" },
            { name: "Mixed Dry Fruits", sales: 32, revenue: "₹8,200" },
            { name: "Pistachios", sales: 28, revenue: "₹7,600" },
            { name: "Walnuts", sales: 25, revenue: "₹6,800" },
          ].map((product, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-800 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.sales} units sold</p>
              </div>
              <div className="text-right flex-shrink-0 ml-2">
                <p className="font-semibold text-green-600">{product.revenue}</p>
                <p className="text-xs text-gray-500">Revenue</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorRecentOrders; 