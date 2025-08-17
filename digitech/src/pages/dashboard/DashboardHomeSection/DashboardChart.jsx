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

// Default data in case API doesn't return chart data
const defaultChartData = [
  { name: 'Jan', current: 0, previous: 0 },
  { name: 'Feb', current: 0, previous: 0 },
  { name: 'Mar', current: 0, previous: 0 },
  { name: 'Apr', current: 0, previous: 0 },
  { name: 'May', current: 0, previous: 0 },
  { name: 'Jun', current: 0, previous: 0 },
  { name: 'Jul', current: 0, previous: 0 },
];

const CustomTooltip = ({ active, payload, label }) => {
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
            <span className="text-gray-300">{entry.name}:</span>
            <span className="font-medium">
              {entry.name.includes('Revenue') ? '₹' : ''}{entry.value.toLocaleString()}
            </span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const DashboardCharts = ({ dashboardData = {} }) => {
  // Destructure with default empty object to prevent errors if data is not loaded yet
  const { 
    monthlySales = defaultChartData,
    monthlyOrders = defaultChartData,
    currentYear = new Date().getFullYear(),
    previousYear = new Date().getFullYear() - 1
  } = dashboardData;

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 mt-6 px-6">
      {/* Sales Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Sales Overview
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlySales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280" 
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="#6b7280" 
                tickFormatter={(value) => `₹${value.toLocaleString()}`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="current"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name={`${currentYear} Revenue`}
              />
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                name={`${previousYear} Revenue`}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders Chart */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Orders Overview
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyOrders}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280" 
                tick={{ fontSize: 12 }}
              />
              <YAxis stroke="#6b7280" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="current"
                fill="#3b82f6"
                name={`${currentYear} Orders`}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="previous"
                fill="#10b981"
                name={`${previousYear} Orders`}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;