

import React, { useState } from "react";
import { FaPlus, FaChalkboardTeacher, FaUserGraduate, FaClipboardList, FaUserMd, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../Components/AdminDashboard/Navbar";
import { BarChart, Bar, PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, XAxis, YAxis, CartesianGrid } from "recharts";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [stats] = useState({
    studentCount: 124684,
    teacherCount: 12379,
    staffCount: 29300,
    awards: 95800,
  });

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const chartData = [
    { name: "Students", value: stats.studentCount },
    { name: "Teachers", value: stats.teacherCount },
    { name: "Staff", value: stats.staffCount },
  ];

  return (
    <>
      <Navbar />
      <div className="p-8  bg-gray-50 min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">College Dashboard</h2>
          <div className="flex space-x-4">
            <Link to="/admin-registration" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              <FaPlus className="inline-block mr-2" /> Add Student
            </Link>
            <Link to="/admin-registration" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
              <FaPlus className="inline-block mr-2" /> Add Teacher
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Students", icon: FaUserGraduate, stat: stats.studentCount, color: "bg-purple-300" },
            { label: "Teachers", icon: FaChalkboardTeacher, stat: stats.teacherCount, color: "bg-yellow-300" },
            { label: "Staff", icon: FaUserMd, stat: stats.staffCount, color: "bg-purple-300" },
            { label: "Awards", icon: FaBookOpen, stat: stats.awards, color: "bg-yellow-300" },
          ].map((item, index) => (
            <div key={index} className={`${item.color} p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center`}>
              {React.createElement(item.icon, { size: 50, className: "text-gray-700" })}
              <div className="text-xl font-semibold mt-4">{item.label}</div>
              <div className="text-3xl font-bold text-gray-700">{item.stat.toLocaleString()}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">User Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {chartData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Attendance Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3182CE" barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Calendar</h3>
            <Calendar className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
