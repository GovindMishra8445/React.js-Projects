import React, { useState, useEffect } from "react";
import "./TeacherNavbar.css";
import { RiMenu2Line } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";

const TeacherNavbar = ({ toggleSidbarTeacher, setToggelSidebarTeacher }) => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [teacherName, setTeacherName] =useState("")
  const [studentImage, setStudentImage] = useState(null);

  useEffect(() => {
    const studentImageFromStorage = localStorage.getItem("teacherImage");
    // console.log("studentImageFromStorage",studentImageFromStorage)

    setStudentImage(studentImageFromStorage);
    const teacherNameFromStorage = localStorage.getItem("teacherName");
    setTeacherName(teacherNameFromStorage);
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "https://university-project-paresh.onrender.com/University/Notification/notifications"
      );
      const res = await axios.get(
        "https://university-project-paresh.onrender.com/University/CalenderRoute/events"
      );
      setNotifications(response.data);
      // console.log(response.data, res.data.Events);
      setCalendar(res.data.Events);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  return (
    <div className="flex items-center justify-between  text-gray-900 p-3 pt-1  border-b border-gray-200 bg-gray-50">

    <h1 className="text-xl font-semibold">Teacher Dashboard</h1>
    <div className="flex items-center space-x-6">
      <Link to="/teacher-calendar" className="relative">
        <FaRegCalendarAlt className="text-2xl text-gray-600 hover:text-blue-500 transition" />
        {calendar.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1.5 py-0.5">
            {calendar.length}
          </span>
        )}
      </Link>
      <Link to="/teacher-notification" className="relative">
        <MdNotifications className="text-2xl text-gray-600 hover:text-blue-500 transition" />
        {notifications.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1.5 py-0.5">
            {notifications.length}
          </span>
        )}
      </Link>
      <div className="relative">
        <img
          src={studentImage || "/images/user.png"}
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-500 transition"
          onClick={() => setToggleProfile(!toggleProfile)}
        />
        {toggleProfile && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 shadow-lg rounded-lg py-2 border border-gray-200">
            {/* <p className="px-4 py-2 text-gray-800 font-semibold">{adminName}</p> */}
            <hr />
            <Link to="/admin-dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
            <Link to="/admin-dashboard/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
            <Link to="/" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Log Out</Link>
          </div>
        )}
      </div>
    </div>
  </div>
    // <div className="navbar">
    //   <div className="left_section">
    //     <span onClick={() => setToggelSidebarTeacher(!toggleSidbarTeacher)}>
    //       <RiMenu2Line />
    //     </span>
    //     <span>Teacher Dashboard</span>
    //   </div>
    //   <div className="middle_section">
    //   <span className="student-name" style={{fontSize:"20px"}}>Welcome Back, {teacherName}</span>
    //   </div>
    //   <div className="right_section">
    //     <div className="navbar-icons">
    //       <Link to={""}>
    //         <span className="calendar-icon">
    //           <FaRegCalendarAlt />
    //           {calendar.length > 0 && (
    //             <span className="calendar-badge">{calendar.length}</span>
    //           )}
    //         </span>
    //       </Link>
    //       <Link to={"/teacher-notification"}>
    //         <span className="notification-icon">
    //           <MdNotifications />
    //           {notifications.length > 0 && (
    //             <span className="notification-badge">
    //               {notifications.length}
    //             </span>
    //           )}
    //         </span>
    //       </Link>
    //       <span onClick={() => setToggleProfile(!toggleProfile)}>
    //       <img
    //           src={studentImage}
    //           alt="Profile"
    //           className="student-profile-image"
    //         />
    //       </span>
    //     </div>
    //   </div>
    //   <div className={`nav-popup ${toggleProfile ? "show" : ""}`}>
    //     <ul>
    //       <li>
    //         <Link to={"/teacher-dashboard/profile"}>Profile</Link>
    //       </li>
    //       <li>Log In</li>
    //       <li>Sign Up</li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default TeacherNavbar;
