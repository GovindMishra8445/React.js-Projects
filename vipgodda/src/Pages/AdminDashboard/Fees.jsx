

import React, { useState } from "react";
import Navbar from "../../Components/AdminDashboard/Navbar";
// import ReceiptModal from "./ReceiptModal";
import ReceiptModal from "./Fees/RecieptModal";

const dummyFees = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  studentName: `Student ${i + 1}`,
  rollNo: `2025${i + 1}`,
  feesType: i % 2 === 0 ? "Semester" : "Annual",
  paymentType: i % 3 === 0 ? "Offline" : "Online",
  date: `05/03/202${i % 5}`,
  account: `$${(Math.random() * 5000 + 1000).toFixed(2)}`,
  status: Math.random() > 0.5 ? "Paid" : "Pending",
}));

function Fees() {
  const [fees, setFees] = useState(dummyFees);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPayment, setFilterPayment] = useState("");
  const [receiptData, setReceiptData] = useState(null);

  const filteredFees = fees
    .filter((fee) =>
      fee.studentName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((fee) => (filterStatus ? fee.status === filterStatus : true))
    .filter((fee) => (filterPayment ? fee.paymentType === filterPayment : true));

  return (
    <>
      <Navbar />
      <div className="dashboard_layout ">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">All Fees Lists</h1>
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mb-6 gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
  <input
    type="text"
    placeholder="Search by Student Name..."
    className="p-3 border rounded-md flex-1 min-w-[200px]"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  <select
    className="p-3 border rounded-md flex-1 min-w-[150px]"
    onChange={(e) => setFilterStatus(e.target.value)}
  >
    <option value="">All Status</option>
    <option value="Paid">Paid</option>
    <option value="Pending">Pending</option>
  </select>
  <select
    className="p-3 border rounded-md flex-1 min-w-[150px]"
    onChange={(e) => setFilterPayment(e.target.value)}
  >
    <option value="">All Payment Types</option>
    <option value="Online">Online</option>
    <option value="Offline">Offline</option>
  </select>
</div>


        <div className="overflow-x-auto rounded-lg bg-white shadow-lg p-6 ">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-900 text-blue">
              <tr>
                <th className="px-6 py-4 border">S.No</th>
                <th className="px-6 py-4 border">Student Name</th>
                <th className="px-6 py-4 border">Roll No</th>
                <th className="px-6 py-4 border">Fees Type</th>
                <th className="px-6 py-4 border">Payment Type</th>
                <th className="px-6 py-4 border">Date</th>
                <th className="px-6 py-4 border">Amount</th>
                <th className="px-6 py-4 border">Paid Amount</th>
                <th className="px-6 py-4 border">Dues Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredFees.map((fee, index) => (
                <tr key={index} className="border-b bg-gray-50">
                  <td className="px-6 py-4 border">{index + 1}</td>
                  <td className="px-6 py-4 border">{fee.studentName}</td>
                  <td className="px-6 py-4 border">{fee.rollNo}</td>
                  <td className="px-6 py-4 border">{fee.feesType}</td>
                  <td
                    className={`px-6 py-4 border cursor-pointer ${
                      fee.paymentType === "Offline" ? "text-blue-600 underline" : ""
                    }`}
                    onClick={() =>
                      fee.paymentType === "Offline" && setReceiptData(fee)
                    }
                  >
                    {fee.paymentType}
                  </td>
                  <td className="px-6 py-4 border">{fee.date}</td>
                  <td className="px-6 py-4 border">{fee.account}</td>
                  <td className="px-6 py-4 border font-semibold text-sm">
                  50000
                  </td>
                  <td className="px-6 py-4 border text-red">
                   40000
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {receiptData && <ReceiptModal fee={receiptData} onClose={() => setReceiptData(null)} />}
    </>
  );
}

export default Fees;
