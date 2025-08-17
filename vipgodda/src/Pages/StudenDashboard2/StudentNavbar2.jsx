// import React, { useState } from "react";
// import { Menu } from "lucide-react";

// const StudentNavbar = ({ toggleSidebar }) => {
//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//       <button className="md:hidden p-2 bg-gray-200 rounded" onClick={toggleSidebar}>
//         <Menu className="w-6 h-6" />
//       </button>
//       <h1 className="text-xl font-semibold"><a href="/student-dashboard" className="text-gray-700 hover:text-blue-500">Student Dashboard</a></h1>
//       <ul className="hidden md:flex gap-6">
//         <li><a href="/student-dashboard-home" className="text-gray-700 hover:text-blue-500">Home</a></li>
//         <li><a href="/student-dashboard-courses" className="text-gray-700 hover:text-blue-500">Courses</a></li>
//         <li><a href="/student-dashboard-grades" className="text-gray-700 hover:text-blue-500">Grades</a></li>
//         <li><a href="/student-dashboard-profile" className="text-gray-700 hover:text-blue-500">Profile</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default StudentNavbar;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/AuthReducers";
import { useNavigate } from "react-router-dom";

const StudentNavbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate('');

  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Hamburger Menu for Mobile */}
      <button 
        className="md:hidden p-2 bg-gray-200 rounded" 
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button>

      <h1 className="text-xl font-semibold">
        <a href="/student-dashboard" className="text-gray-700 hover:text-blue-500">
          Student Dashboard
        </a>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6">
        <li><a href="/student-dashboard-home" className="text-gray-700 hover:text-blue-500">Home</a></li>
        <li><a href="/student-dashboard-courses" className="text-gray-700 hover:text-blue-500">Courses</a></li>
        <li><a href="/student-dashboard-grades" className="text-gray-700 hover:text-blue-500">Grades</a></li>
        <li><a href="/student-dashboard-profile" className="text-gray-700 hover:text-blue-500">Profile</a></li>
        <li><a href="/student-dashboard-profile" onClick={handleLogout} className="text-gray-700 hover:text-blue-500">Logout</a></li>
      </ul>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)}></div>
      )}
      <div className={`fixed top-0 left-0 h-full w-30 bg-white shadow-lg p-6 z-50 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        <button 
          className="mb-4 p-2 bg-gray-200 rounded text-gray-700"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
        <ul className="flex flex-col gap-4">
          <li><a href="/student-dashboard-home" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="/student-dashboard-courses" className="text-gray-700 hover:text-blue-500">Courses</a></li>
          <li><a href="/student-dashboard-grades" className="text-gray-700 hover:text-blue-500">Grades</a></li>
          <li><a href="/student-dashboard-profile" className="text-gray-700 hover:text-blue-500">Profile</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default StudentNavbar;

