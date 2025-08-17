import React, { useState } from "react";
import VendorDashboardNav from "../../components/navbar/VendorDashboardNav";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const earningsData = [
  { month: "Jan", earnings: 12000 },
  { month: "Feb", earnings: 14500 },
  { month: "Mar", earnings: 13200 },
  { month: "Apr", earnings: 15800 },
  { month: "May", earnings: 17200 },
  { month: "Jun", earnings: 18900 },
  { month: "Jul", earnings: 21000 },
];

const transactions = [
  {
    id: "ORD_001",
    date: "2025-07-01",
    amount: 2450,
    method: "UPI",
    status: "Completed",
  },
  {
    id: "ORD_002",
    date: "2025-06-28",
    amount: 1890,
    method: "Credit Card",
    status: "Completed",
  },
  {
    id: "ORD_003",
    date: "2025-06-25",
    amount: 3200,
    method: "Net Banking",
    status: "Completed",
  },
  {
    id: "ORD_004",
    date: "2025-06-20",
    amount: 1650,
    method: "UPI",
    status: "Pending",
  },
  {
    id: "ORD_005",
    date: "2025-06-18",
    amount: 2800,
    method: "Debit Card",
    status: "Completed",
  },
  {
    id: "ORD_006",
    date: "2025-06-15",
    amount: 4100,
    method: "UPI",
    status: "Completed",
  },
];

const VendorTransactions = () => {
  const [txns] = useState(transactions);
  const totalEarnings = earningsData.reduce((sum, d) => sum + d.earnings, 0);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] ">
      <VendorDashboardNav />
      <div className="flex flex-col sm:flex-row justify-between mt-4 items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#0284c7]">Transactions</h2>
          <p className="text-sm text-gray-600 mt-1">Your transactions summary and recent transactions</p>
        </div>
        <div className="bg-white rounded-lg shadow px-6 py-3 flex flex-col items-center">
          <span className="text-xs text-gray-500">Total Transactions</span>
          <span className="text-2xl font-bold text-green-600">{formatCurrency(totalEarnings)}</span>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="bg-white rounded-xl shadow p-4 mb-8">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Transactions Over Time</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={earningsData}>
              <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
              <XAxis dataKey="month" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip formatter={(v) => formatCurrency(v)} />
              <Line type="monotone" dataKey="earnings" stroke="#0284c7" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white shadow rounded-xl overflow-x-auto border border-gray-200">
        <div className="min-w-[700px]">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-[#0284c7]">
              <tr>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Date</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Order ID</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Amount</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Method</th>
                <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-white">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {txns.map((txn) => (
                <tr key={txn.id} className="hover:bg-gray-50 transition-all">
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{txn.date}</td>
                  <td className="px-4 md:px-6 py-4 font-medium text-gray-900">{txn.id}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-green-700 font-semibold">{formatCurrency(txn.amount)}</td>
                  <td className="px-4 md:px-6 py-4 text-sm text-gray-700">{txn.method}</td>
                  <td className="px-4 md:px-6 py-4 text-sm">
                    <span className={`px-2 py-1 text-xs rounded-full ${txn.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VendorTransactions; 