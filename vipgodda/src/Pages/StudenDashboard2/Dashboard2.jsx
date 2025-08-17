import React from "react";
import StudentNavbar from "./StudentNavbar2";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const performanceData = [
  { semester: "Sem 1", gpa: 3.5 },
  { semester: "Sem 2", gpa: 3.7 },
  { semester: "Sem 3", gpa: 3.8 },
  { semester: "Sem 4", gpa: 3.9 },
];

const DashboardStudent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <StudentNavbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">DashboardStudent Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-blue-500">GPA</h2>
            <p className="text-gray-700 mt-2 text-2xl font-bold">3.8</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-green-500"><a href="/student-dashboard-attendence" className="text-gray-700 hover:text-blue-500">Attendance</a></h2>
            <p className="text-gray-700 mt-2 text-2xl font-bold">92%</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-red-500">Notifications</h2>
            <p className="text-gray-700 mt-2 text-2xl font-bold">3 New</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Recent Activities</h2>
          <ul className="mt-4 space-y-3">
            <li className="bg-gray-50 p-3 rounded-lg shadow">✔️ Submitted Assignment: Mathematics</li>
            <li className="bg-gray-50 p-3 rounded-lg shadow">📅 Upcoming Exam: Physics - March 20</li>
            <li className="bg-gray-50 p-3 rounded-lg shadow">🔔 New Announcement from Prof. Smith</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Performance Chart</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={performanceData}>
              <XAxis dataKey="semester" />
              <YAxis domain={[3.0, 4.0]} />
              <Tooltip />
              <Line type="monotone" dataKey="gpa" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardStudent;
