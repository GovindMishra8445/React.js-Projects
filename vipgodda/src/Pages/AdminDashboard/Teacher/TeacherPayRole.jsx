import React, { useState } from "react";
import { FaFilter, FaSearch, FaCheck, FaTimes } from "react-icons/fa";
import Navbar from "../../../Components/AdminDashboard/Navbar";

const TeacherPayroll = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const payrollData = [
    { id: 1, name: "Mr. Johnson", empId: "T101", designation: "Math Teacher", salary: 5000, deductions: 200, bonuses: 300, netPay: 5100, status: "Paid", date: "2025-03-10" },
    { id: 2, name: "Ms. Davis", empId: "T102", designation: "Science Teacher", salary: 5500, deductions: 250, bonuses: 400, netPay: 5650, status: "Pending", date: "2025-03-11" },
  ];

  const filteredData = payrollData.filter(
    (item) =>
      (paymentStatusFilter ? item.status === paymentStatusFilter : true) &&
      (dateFilter ? item.date === dateFilter : true) &&
      (searchTerm ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  return (
    <><Navbar /><div className="bg-white p-6 rounded-xl shadow-lg w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FaFilter className="text-blue-600" /> Teacher Payroll
          </h2>

          <div className="flex gap-4 mb-6">
              <input
                  type="text"
                  placeholder="Search by name"
                  className="p-2 pl-8 border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} />
              <select className="p-2 border rounded-lg" value={paymentStatusFilter} onChange={(e) => setPaymentStatusFilter(e.target.value)}>
                  <option value="">All Status</option>
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
              </select>
              <input type="date" className="p-2 border rounded-lg" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} />
          </div>

          <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
                  <thead>
                      <tr className="bg-blue-600 text-blue">
                          <th className="p-3 text-left">ID</th>
                          <th className="p-3 text-left">Name</th>
                          <th className="p-3 text-left">Emp ID</th>
                          <th className="p-3 text-left">Designation</th>
                          <th className="p-3 text-left">Salary</th>
                          <th className="p-3 text-left">Deductions</th>
                          <th className="p-3 text-left">Bonuses</th>
                          <th className="p-3 text-left">Net Pay</th>
                          <th className="p-3 text-left">Status</th>
                          <th className="p-3 text-left">Date</th>
                      </tr>
                  </thead>
                  <tbody>
                      {filteredData.map((item) => (
                          <tr key={item.id} className="border-b hover:bg-gray-100">
                              <td className="p-3">{item.id}</td>
                              <td className="p-3">{item.name}</td>
                              <td className="p-3">{item.empId}</td>
                              <td className="p-3">{item.designation}</td>
                              <td className="p-3">${item.salary}</td>
                              <td className="p-3">${item.deductions}</td>
                              <td className="p-3">${item.bonuses}</td>
                              <td className="p-3 font-bold">${item.netPay}</td>
                              <td className="p-3 flex items-center gap-2">
                                  {item.status === "Paid" ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
                              </td>
                              <td className="p-3">{item.date}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div></>
  );
};

export default TeacherPayroll;