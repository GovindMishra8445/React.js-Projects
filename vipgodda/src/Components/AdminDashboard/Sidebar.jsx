// import { useState, useEffect } from "react";
// import {
//   FaTh,
//   FaBars,
//   FaUserAlt,
//   FaCommentAlt,
//   FaUserCheck,
//   FaFileAlt,
//   FaGraduationCap
// } from "react-icons/fa";
// // import { MdNotificationsActive } from "react-icons/md";
// import logoImage from "../../assets/images/logo.png";

// import { GrCertificate } from "react-icons/gr";
// import "../../style/AdminDashboard/Sidebar.css";
// import { NavLink } from "react-router-dom";
// import { PiExamFill } from "react-icons/pi";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 768px)");
//     setIsSmallScreen(mediaQuery.matches);

//     const handleMediaQueryChange = (e) => {
//       setIsSmallScreen(e.matches);
//       if (e.matches) setIsOpen(false);
//     };

//     mediaQuery.addListener(handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeListener(handleMediaQueryChange);
//     };
//   }, []);

//   const toggle = () => {
//     if (isSmallScreen) return;
//     setIsOpen(!isOpen);
//   };

//   const menuItem = [
//     { path: "/admin-dashboard", name: "Dashboard", icon: <FaTh /> },
//     // {
//     //   path: "/admin-registration",
//     //   name: "Registration",
//     //   icon: <FaCommentAlt />
//     // },
//     { path: "/admin-student", name: "Students", icon: <FaUserAlt /> },
//     { path: "/admin-teacher", name: "Teachers", icon: <FaUserAlt /> },
//     { path: "/admin-admission", name: "Admission", icon: <FaGraduationCap /> },
//     { path: "/admin-schedule", name: "Schedule", icon: <FaFileAlt /> },
//     { path: "/admin-attendance", name: "Attendance", icon: <FaUserCheck /> },
//     { path: "/admin-assignment", name: "Assignment", icon: <FaFileAlt /> },

//     // {
//     //   path: "/admin-notifications",
//     //   name: "Notifications",
//     //   icon: <MdNotificationsActive />
//     // },

//     { path: "/admin-courses", name: "Courses", icon: <GrCertificate /> },
//     { path: "/admin-exam", name: "Exam", icon: <PiExamFill /> },
//     // { path: "/admin-calendar", name: "Calendar", icon: <RiCalendarFill /> },
//     { path: "/admin-fees", name: "Fees", icon: <RiMoneyDollarCircleFill /> },
//     { path: "/admin-library", name: "Library", icon: <RiMoneyDollarCircleFill /> },
//     { path: "/admin-user-management", name: "UserManagement", icon: <RiMoneyDollarCircleFill /> }
//   ];

//   return (
//     <div className="adminSidebarContainer">
//       <div
//         style={{ width: isOpen ? "190px" : "50px" }}
//         className="sidebar-section"
//       >
//         <div className="top_section">
//           <img
//             src={logoImage}
//             alt=""
//             style={{ display: isOpen ? "block" : "none" }}
//             className="logo"
//           />
//           <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
//             <FaBars onClick={toggle} />
//           </div>
//         </div>
//         {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="link"
//             activeClassName="active"
//           >
//             <div className="icon">{item.icon}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="link_text"
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))}
//       </div>
//       <div className="adminMain">{children}</div>
//     </div>
//   );
// };

// export default Sidebar;


// import { useState, useEffect } from "react";
// import { FaTh, FaBars, FaUserAlt, FaGraduationCap, FaFileAlt, FaUserCheck } from "react-icons/fa";
// import { GrCertificate } from "react-icons/gr";
// import { PiExamFill } from "react-icons/pi";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
// import { NavLink } from "react-router-dom";
// import logoImage from "../../assets/images/logo.png";

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 768px)");
//     setIsSmallScreen(mediaQuery.matches);

//     const handleMediaQueryChange = (e) => {
//       setIsSmallScreen(e.matches);
//       if (e.matches) setIsOpen(false);
//     };

//     mediaQuery.addListener(handleMediaQueryChange);
//     return () => mediaQuery.removeListener(handleMediaQueryChange);
//   }, []);

//   const toggle = () => {
//     if (isSmallScreen) return;
//     setIsOpen(!isOpen);
//   };

//   const menuItem = [
//     { path: "/admin-dashboard", name: "Dashboard", icon: <FaTh /> },
//     { path: "/admin-student", name: "Students", icon: <FaUserAlt /> },
//     { path: "/admin-teacher", name: "Teachers", icon: <FaUserAlt /> },
//     { path: "/admin-payroll", name: "Payroll", icon: <FaUserAlt /> },
//     { path: "/admin-admission", name: "Admission", icon: <FaGraduationCap /> },
//     { path: "/admin-calendar", name: "Schedule", icon: <FaFileAlt /> },
//     { path: "/admin-attendance", name: "Attendance", icon: <FaUserCheck /> },
//     { path: "/admin-assignment", name: "Assignment", icon: <FaFileAlt /> },
//     { path: "/admin-courses", name: "Courses", icon: <GrCertificate /> },
//     { path: "/admin-exam", name: "Exam", icon: <PiExamFill /> },
//     { path: "/admin-documents", name: "Documents", icon: <PiExamFill /> },
//     { path: "/admin-fees", name: "Fees", icon: <RiMoneyDollarCircleFill /> },
//     { path: "/admin-library", name: "Library", icon: <RiMoneyDollarCircleFill /> },
//     { path: "/admin-user-management", name: "User Management", icon: <RiMoneyDollarCircleFill /> }
//   ];

//   return (
//     <div className="flex h-screen">
//       <div className={`bg-white shadow-lg border-r ${isOpen ? "w-64" : "w-16"} transition-all duration-300` }>
//         <div className="flex items-center justify-between p-4 border-b">
//           <img src={logoImage} alt="Logo" className={`h-10 transition-all duration-300 ${isOpen ? "block" : "hidden"}`} />
//           <FaBars className="text-gray-600 cursor-pointer text-xl" onClick={toggle} />
//         </div>
//         <nav className="mt-4">
//           {menuItem.map((item, index) => (
//             <NavLink
//               to={item.path}
//               key={index}
//               className={({ isActive }) =>
//                 `flex items-center gap-4 p-3 mx-3 my-1 rounded-lg text-gray-700 hover:bg-gray-100 transition ${isActive ? "bg-gray-200" : ""}`
//               }
//             >
//               <span className="text-lg">{item.icon}</span>
//               <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>{item.name}</span>
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//       <div className="flex-1 p-6 bg-gray-50">{children}</div>
//     </div>
//   );
// };

// export default Sidebar;









// import { useState, useEffect } from "react";
// import { FaTh, FaBars, FaUserAlt, FaGraduationCap, FaFileAlt, FaUserCheck, FaCog } from "react-icons/fa";
// import { GrCertificate } from "react-icons/gr";
// import { PiExamFill } from "react-icons/pi";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
// import { NavLink } from "react-router-dom";
// import logoImage from "../../assets/images/logo.png";

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 768px)");
//     setIsSmallScreen(mediaQuery.matches);

//     const handleMediaQueryChange = (e) => {
//       setIsSmallScreen(e.matches);
//       if (e.matches) setIsOpen(false);
//     };

//     mediaQuery.addListener(handleMediaQueryChange);
//     return () => mediaQuery.removeListener(handleMediaQueryChange);
//   }, []);

//   const toggle = () => {
//     if (isSmallScreen) return;
//     setIsOpen(!isOpen);
//   };

//   const menuItem = [
//     { path: "/admin-dashboard", name: "Dashboard", icon: <FaTh /> },
//     { path: "/admin-student", name: "Students", icon: <FaUserAlt /> },
//     { path: "/admin-teacher", name: "Teachers", icon: <FaUserAlt /> },
//     { path: "/admin-payroll", name: "Payroll", icon: <FaUserAlt /> },
//     { path: "/admin-admission", name: "Admission", icon: <FaGraduationCap /> },
//     { path: "/admin-calendar", name: "Schedule", icon: <FaFileAlt /> },
//     { path: "/admin-attendance", name: "Attendance", icon: <FaUserCheck /> },
//     { path: "/admin-assignment", name: "Assignment", icon: <FaFileAlt /> },
//     { path: "/admin-courses", name: "Courses", icon: <GrCertificate /> },
//     { path: "/admin-exam", name: "Exam", icon: <PiExamFill /> },
//     { path: "/admin-documents", name: "Documents", icon: <PiExamFill /> },
//     { path: "/admin-fees", name: "Fees", icon: <RiMoneyDollarCircleFill /> },
//      { path: "/admin-marksmanagement", name: "MarksManagement", icon: <RiMoneyDollarCircleFill /> },
//     { path: "/admin-library", name: "Library", icon: <RiMoneyDollarCircleFill /> },
//     { path: "/admin-user-management", name: "User Management", icon: <RiMoneyDollarCircleFill /> }
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <div className={`bg-white shadow-lg border-r ${isOpen ? "w-64" : "w-20"} transition-all duration-300 relative` }>
//         <div className="flex items-center justify-between p-4 border-b">
//           <img src={logoImage} alt="Logo" className={`h-10 transition-all duration-300 ${isOpen ? "block" : "hidden"}`} />
//           <FaBars className="text-gray-600 cursor-pointer text-xl" onClick={toggle} />
//         </div>
//         <nav className="mt-4">
//           {menuItem.map((item, index) => (
//             <NavLink
//               to={item.path}
//               key={index}
//               className={({ isActive }) =>
//                 `flex items-center gap-4 p-3 mx-3 my-1 rounded-lg text-gray-700 hover:bg-gray-200 transition ${isActive ? "bg-gray-300" : ""}`
//               }
//             >
//               <span className="text-lg">{item.icon}</span>
//               <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>{item.name}</span>
//             </NavLink>
//           ))}

//           <div className="mx-3 my-1 relative">
//             <button 
//               className="flex items-center gap-4 p-3 w-full text-left text-gray-700 rounded-lg hover:bg-gray-200 transition"
//               onClick={() => setIsSettingsOpen(!isSettingsOpen)}
//             >
//               <FaCog className="text-lg" />
//               <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Settings</span>
//             </button>
//             {isSettingsOpen && (
//               <div className="ml-8 bg-white shadow-md rounded-lg absolute z-50 w-48 p-2 border">
//                 <NavLink to="/admin-admission-form" className="block p-2 text-gray-600 hover:bg-gray-100">Admission Form</NavLink>
//                 <NavLink to="/admin-fee-receipt" className="block p-2 text-gray-600 hover:bg-gray-100">Fee Receipt</NavLink>
//                 <NavLink to="/admin-marksheet" className="block p-2 text-gray-600 hover:bg-gray-100">Marksheet</NavLink>
//                 <NavLink to="/admin-slc-clc" className="block p-2 text-gray-600 hover:bg-gray-100">SLC/CLC</NavLink>
//               </div>
//             )}

// <button
//               className="hidden flex items-center gap-4 p-3 w-full text-left text-gray-700 rounded-lg hover:bg-gray-200 transition"
//               onClick={() => setIsSettingsOpen(!isSettingsOpen)}
//             >
//               <FaCog className="text-lg" />
//               <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>Settings</span>
//             </button>
//           </div>
//         </nav>
//       </div>
//       <div className="flex-1 p-6 bg-gray-50 overflow-auto">{children}</div>
//     </div>
//   );
// };

// export default Sidebar;
import { useState, useEffect } from "react";
import { FaTh, FaBars, FaUserAlt, FaGraduationCap, FaFileAlt, FaUserCheck, FaCog } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { PiExamFill } from "react-icons/pi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logo.png"

const Sidebar = ({ children }) => {
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

  const menuItem = [
    { path: "/admin-dashboard", name: "Dashboard", icon: <FaTh /> },
    { path: "/admin-student", name: "Students", icon: <FaUserAlt /> },
    { path: "/admin-teacher", name: "Teachers", icon: <FaUserAlt /> },
    { path: "/admin-payroll", name: "Payroll", icon: <FaUserAlt /> },
    { path: "/admin-admission", name: "Admission", icon: <FaGraduationCap /> },
    { path: "/admin-calendar", name: "Schedule", icon: <FaFileAlt /> },
    { path: "/admin-attendance", name: "Attendance", icon: <FaUserCheck /> },
    { path: "/admin-assignment", name: "Assignment", icon: <FaFileAlt /> },
    { path: "/admin-courses", name: "Courses/Classes", icon: <GrCertificate /> },
    { path: "/admin-exam", name: "Exam", icon: <PiExamFill /> },
    { path: "/admin-documents", name: "Documents", icon: <PiExamFill /> },
    { path: "/admin-fees", name: "Fees", icon: <RiMoneyDollarCircleFill /> },
    { path: "/admin-marksmanagement", name: "MarksManagement", icon: <RiMoneyDollarCircleFill /> },
    { path: "/admin-library", name: "Library", icon: <RiMoneyDollarCircleFill /> },
    { path: "/admin-user-management", name: "User Management", icon: <RiMoneyDollarCircleFill /> }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`bg-white shadow-lg border ${isOpen ? "w-64" : "w-20"} transition-all duration-300 relative flex flex-col` }>
        <div className="flex items-center justify-between p-4 border-b">
          <img src={logoImage} alt="Logo" className={`h-10 transition-all duration-300 ${isOpen ? "block" : "hidden"}`} />
          <FaBars className="text-gray-600 cursor-pointer text-xl" onClick={toggle} />
        </div>
        <nav className="flex-1 overflow-y-auto">
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
          </div>
        </nav>
      </div>
      <div className="flex-1 p-6 bg-gray-50 overflow-auto">{children}</div>
    </div>
  );
};

export default Sidebar;
