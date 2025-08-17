import React from "react";
import StudentNavbar from "./StudentNavbar2";

const StudentHome = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <StudentNavbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">Welcome to Your Student Dashboard</h1>
        <p className="text-lg text-gray-600 text-center mt-2">Track your progress, manage courses, and stay updated!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-blue-500">Upcoming Classes</h2>
            <p className="text-gray-700 mt-2">No upcoming classes today.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-green-500">Assignment Due</h2>
            <p className="text-gray-700 mt-2">Mathematics - Due Tomorrow</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-xl font-semibold text-red-500">Notifications</h2>
            <p className="text-gray-700 mt-2">3 New Messages</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Quick Actions</h2>
          <div className="flex gap-6 mt-4 justify-center">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600">View Grades</button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600">Join Class</button>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-600">Submit Assignment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
