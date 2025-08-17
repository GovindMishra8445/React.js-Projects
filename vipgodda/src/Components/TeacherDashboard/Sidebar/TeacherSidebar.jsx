// import React, { useState } from "react";
import {
  // MdSpaceDashboard,
  MdEventAvailable,
  MdNotificationsNone
} from "react-icons/md";
import { PiExamBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { GrSchedule } from "react-icons/gr";
import { FaBook, FaRegCalendarAlt } from "react-icons/fa";
// import { SlNotebook } from "react-icons/sl";
import { MdSupervisorAccount } from "react-icons/md";
import "./TeacherSidebar.css";
// import logoImage from "../../../assets/images/logo.png";

// const TeacherSidebar = ({ toggleSidbarTeacher }) => {
//   const [activeItem, setActiveItem] = useState("TeacherDashboard");

//   const handleItemClick = (itemName) => {
//     setActiveItem(itemName);
//   };

//   return (
//     <>
//       <div className={`sidebar ${toggleSidbarTeacher ? "" : "hide"}`}>
//         <div className="sidebar_header">
//           <span>
//             <img src={logoImage} alt="" />
//           </span>
//           <span>MODERN GROUP OF INSTITUTIONS</span>
//         </div>
//         <div className="sidebar_contain">
//           {/* <Link to={"/teacher-dashboard"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherDashboard" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherDashboard")}
//             >
//               <span className="sidebar_icon">
//                 <MdSpaceDashboard />
//               </span>
//               <span>Dashboard</span>
//             </div>
//           </Link> */}
//           <Link to={"/teacher-schedule"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherSchedule" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherSchedule")}
//             >
//               <span className="sidebar_icon">
//                 <GrSchedule />
//               </span>
//               <span>Schedule</span>
//             </div>
//           </Link>
//           <Link to={"/teacher-syllabus"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherSyllabusPage" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherSyllabusPage")}
//             >
//               <span className="sidebar_icon">
//                 <FaBook />
//               </span>
//               <span>Syllabus</span>
//             </div>
//           </Link>
//           <Link to={"/teacher-assignment"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherAssignmentPage" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherAssignmentPage")}
//             >
//               <span className="sidebar_icon">
//                 <MdEventAvailable />
//               </span>
//               <span>Assignment</span>
//             </div>
//           </Link>
//           <Link to={"/teacher-attendance"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherAttendancePage" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherAttendancePage")}
//             >
//               <span className="sidebar_icon">
//                 <MdSupervisorAccount />
//               </span>
//               <span>Attendance</span>
//             </div>
//           </Link>
//           <Link to={"/teacher-notification"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherNotification" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherNotification")}
//             >
//               <span className="sidebar_icon">
//                 <MdNotificationsNone />
//               </span>
//               <span>Notification</span>
//             </div>
//           </Link>
//           <Link to={"/teacher-calendar"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherCalendar" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherCalendar")}
//             >
//               <span className="sidebar_icon">
//                 <FaRegCalendarAlt />
//               </span>
//               <span>Calendar</span>
//             </div>
//           </Link>
//           {/* <Link to={"/teacher-studentmarks"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherMarksPage" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherMarksPage")}
//             >
//               <span className="sidebar_icon">
//                 <PiStudentFill />
//               </span>
//               <span>Student Marks</span>
//             </div>
//           </Link> */}
//           <Link to={"/teacher-test"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherTestPage" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherTestPage")}
//             >
//               <span className="sidebar_icon">
//                 <MdSupervisorAccount />
//               </span>
//               <span>Test</span>
//             </div>
//           </Link>
//           {/* <Link to={"/teacher-newquestion"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherNewQuestion" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherNewQuestion")}
//             >
//               <span className="sidebar_icon">
//                 <SlNotebook />
//               </span>
//               <span>New Question</span>
//             </div>
//           </Link> */}
//           <Link to={"/teacher-exam"}>
//             <div
//               className={`sidebar_items ${
//                 activeItem === "TeacherExamPage" ? "active" : ""
//               }`}
//               onClick={() => handleItemClick("TeacherExamPage")}
//             >
//               <span className="sidebar_icon">
//                 <PiExamBold />
//               </span>
//               <span>Exam</span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TeacherSidebar;


import { useState, useEffect } from "react";
import { FaTh, FaBars, FaUserAlt, FaGraduationCap, FaFileAlt, FaUserCheck, FaCog } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { PiExamFill } from "react-icons/pi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logoImage from "../../../assets/logo.png"

const TeacherSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsSmallScreen(e.matches);
      if (e.matches) setIsOpen(false);
    };

    mediaQuery.addListener(handleMediaQueryChange);
    return () => mediaQuery.removeListener(handleMediaQueryChange);
  }, []);

  const toggle = () => {
    if (isSmallScreen) return;
    setIsOpen(!isOpen);
  };

  // const menuItem = [
  //   { path: "/admin-dashboard", name: "Dashboard", icon: <FaTh /> },
  //   { path: "/admin-student", name: "Students", icon: <FaUserAlt /> },
  //   { path: "/admin-teacher", name: "Teachers", icon: <FaUserAlt /> },
  //   { path: "/admin-payroll", name: "Payroll", icon: <FaUserAlt /> },
  //   { path: "/admin-admission", name: "Admission", icon: <FaGraduationCap /> },
  //   { path: "/admin-calendar", name: "Schedule", icon: <FaFileAlt /> },
  //   { path: "/admin-attendance", name: "Attendance", icon: <FaUserCheck /> },
  //   { path: "/admin-assignment", name: "Assignment", icon: <FaFileAlt /> },
  //   { path: "/admin-courses", name: "Courses", icon: <GrCertificate /> },
  //   { path: "/admin-exam", name: "Exam", icon: <PiExamFill /> },
  //   { path: "/admin-documents", name: "Documents", icon: <PiExamFill /> },
  //   { path: "/admin-fees", name: "Fees", icon: <RiMoneyDollarCircleFill /> },
  //    { path: "/admin-marksmanagement", name: "MarksManagement", icon: <RiMoneyDollarCircleFill /> },
  //   { path: "/admin-library", name: "Library", icon: <RiMoneyDollarCircleFill /> },
  //   { path: "/admin-user-management", name: "User Management", icon: <RiMoneyDollarCircleFill /> }
  // ];

  const menuItem = [
    { path: "/teacher-dashboard", name: "Dashboard", icon: <FaTh /> },
    { path: "/teacher-schedule", name: "Schedule", icon: <GrSchedule /> },
    { path: "/teacher-syllabus", name: "Syllabus", icon: <FaBook /> },
    { path: "/teacher-assignment", name: "Assignment", icon: <MdEventAvailable /> },
    { path: "/teacher-attendance", name: "Attendance", icon: <MdSupervisorAccount /> },
    { path: "/teacher-notification", name: "Notification", icon: <MdNotificationsNone /> },
    { path: "/teacher-calendar", name: "Calendar", icon: <FaRegCalendarAlt /> },
    { path: "/teacher-test", name: "Test", icon: <MdSupervisorAccount /> },
    { path: "/teacher-exam", name: "Exam", icon: <PiExamBold /> },
    { path: "/teacher-studentmarks", name: "Marks", icon: <PiExamBold /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`bg-white shadow-lg border-r ${isOpen ? "w-64" : "w-20"} transition-all duration-300 relative` }>
        <div className="flex items-center justify-between p-4 border-b">
          <img src={logoImage} alt="Logo" className={`h-10 transition-all duration-300 ${isOpen ? "block" : "hidden"}`} />
          <FaBars className="text-gray-600 cursor-pointer text-xl" onClick={toggle} />
        </div>
        <nav className="mt-4">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                `flex items-center gap-4 p-3 mx-3 my-1 rounded-lg text-gray-700 hover:bg-gray-200 transition ${isActive ? "bg-gray-300" : ""}`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>{item.name}</span>
            </NavLink>
          ))}

          <div className="mx-3 my-1 relative">
            <button 
              className="flex items-center gap-4 p-3 w-full text-left text-gray-700 rounded-lg hover:bg-gray-200 transition"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <FaCog className="text-lg" />
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Settings</span>
            </button>
            {isSettingsOpen && (
              <div className="ml-8 bg-white shadow-md rounded-lg absolute z-50 w-48 p-2 border">
                <NavLink to="/admin-admission-form" className="block p-2 text-gray-600 hover:bg-gray-100">Admission Form</NavLink>
                <NavLink to="/admin-fee-receipt" className="block p-2 text-gray-600 hover:bg-gray-100">Fee Receipt</NavLink>
                <NavLink to="/admin-marksheet" className="block p-2 text-gray-600 hover:bg-gray-100">Marksheet</NavLink>
                <NavLink to="/admin-slc-clc" className="block p-2 text-gray-600 hover:bg-gray-100">SLC/CLC</NavLink>
              </div>
            )}

<button
              className="hidden flex items-center gap-4 p-3 w-full text-left text-gray-700 rounded-lg hover:bg-gray-200 transition"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <FaCog className="text-lg" />
              <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Settings</span>
            </button>
          </div>
        </nav>
      </div>
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">{children}</div>
    </div>
  );
};

export default TeacherSidebar;

