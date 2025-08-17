import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const vendorSalesData = [
  { name: "January", "2025": 45000, "2024": 35000 },
  { name: "February", "2025": 52000, "2024": 42000 },
  { name: "March", "2025": 48000, "2024": 38000 },
  { name: "April", "2025": 61000, "2024": 45000 },
  { name: "May", "2025": 55000, "2024": 50000 },
  { name: "June", "2025": 67000, "2024": 55000 },
  { name: "July", "2025": 72000, "2024": 60000 },
];

const vendorOrderData = [
  { name: "Jan", "2025": 25, "2024": 18 },
  { name: "Feb", "2025": 32, "2024": 25 },
  { name: "Mar", "2025": 28, "2024": 22 },
  { name: "Apr", "2025": 35, "2024": 28 },
  { name: "May", "2025": 42, "2024": 35 },
  { name: "Jun", "2025": 38, "2024": 30 },
  { name: "Jul", "2025": 45, "2024": 38 },
];

const tool = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="p-3 shadow-lg text-sm text-white"
        style={{
          backgroundColor: "#1f2937",
          borderRadius: "12px",
        }}
      >
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="flex gap-2 items-center">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.name}: <strong>₹{entry.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const VendorDashboardCharts = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 overflow-hidden p-4 md:p-6 font-sans">
      
      {/* LEFT CARD - Sales Value */}
      <div className="bg-[#263348] text-white rounded-lg shadow-md p-4 md:p-5 w-[330px] md:w-[630px] h-[400px] md:h-[510px]">
        <h2 className="text-[12px] text-blue-200 font-medium mb-1">OVERVIEW</h2>
        <h1 className="text-[18px] md:text-[20px] font-bold mb-3">Monthly Sales</h1>

        <div className="h-[300px] md:h-[389px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={vendorSalesData}>
              <CartesianGrid stroke="#444" strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#ccc" fontSize={10} />
              <YAxis stroke="#ccc" domain={[30000, 80000]} fontSize={10} />
              <Tooltip content={tool} />
              <Legend verticalAlign="top" iconType="circle" height={30} />
              <Line
                type="monotone"
                dataKey="2025"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="2024"
                stroke="#ffffff"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Custom */}
        <div className="flex justify-end gap-4 md:gap-6 text-xs md:text-sm mt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <span>2025</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white" />
            <span>2024</span>
          </div>
        </div>
      </div>

      {/* RIGHT CARD - Orders */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-5  w-[330px] md:w-[350px] h-[400px] md:h-[510px]">
        <h2 className="text-[12px] text-gray-500 font-medium mb-1">ORDERS</h2>
        <h1 className="text-[18px] md:text-[20px] font-bold mb-3 text-gray-800">Monthly Orders</h1>

        <div className="h-[300px] md:h-[380px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={vendorOrderData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" fontSize={10} />
              <YAxis fontSize={10} />
              <Tooltip />
              <Legend verticalAlign="top" height={30} />
              <Bar dataKey="2025" fill="#3B82F6"  />
              <Bar dataKey="2024" fill="#10B981"  />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 md:gap-6 text-xs md:text-sm mt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600" />
            <span>2025</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboardCharts; 