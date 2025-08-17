// import React, { useEffect, useState } from "react";
// import "../../style/AdminDashboard/Navbar.css";
// import { FaRegCalendarAlt } from "react-icons/fa";
// import { MdNotifications } from "react-icons/md";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Navbar = () => {
//   const [toggleProfile, setToggleProfile] = useState(false);
//   const [adminImage, setAdminImage] = useState(null);
//   const [notifications, setNotifications] = useState([]);
//   const [calendar, setCalendar] = useState([]);
//   const [adminName, setAdminName] = useState("");

//   useEffect(() => {
//     const adminImageFromStorage = localStorage.getItem("adminImage");
//     setAdminImage(adminImageFromStorage);
//     const adminNameFromStorage = localStorage.getItem("adminName");
//     setAdminName(adminNameFromStorage);
//     fetchNotifications();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const response = await axios.get(
//         "https://university-project-paresh.onrender.com/University/Notification/notifications"
//       );
//       const res = await axios.get(
//         "https://university-project-paresh.onrender.com/University/CalenderRoute/events"
//       );
//       setNotifications(response.data);
//       console.log(response.data, res.data.Events);
//       setCalendar(res.data.Events);
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     }
//   };

//   return (
//     <div className="adminNavbarContainer">
//       <div className="leftSection">
//         <span>Admin Dashboard</span>
//       </div>
//       <div className="rightSection">
//         <div className="navbarIcons">
//           <Link to={"/admin-calendar"}>
//             <span className="calendarIcon">
//               <FaRegCalendarAlt />
//               {calendar.length > 0 && (
//                 <span className="calendarBadge">{calendar.length}</span>
//               )}
//             </span>
//           </Link>
//           <Link to={"/admin-notifications"}>
//             <span className="notificationIcon">
//               <MdNotifications />
//               {notifications.length > 0 && (
//                 <span className="notificationBadge">
//                   {notifications.length}
//                 </span>
//               )}
//             </span>
//           </Link>
//           <span onClick={() => setToggleProfile(!toggleProfile)}>
//             <img src={adminImage ? adminImage: "/images/user.png"} alt="Profile" className="adminProfileImage" />
//           </span>
//         </div>
//       </div>
//       <div className={`navPopup ${toggleProfile ? "show" : ""}`}>
//         <ul>
//           <li>
//             <Link to={"/admin-dashboard"}>Dashboard</Link>
//           </li>
//           <li>
//             <Link to={"/admin-dashboard/profile"}>Profile</Link>
//           </li>

//           <li>
//             <Link to={"/"}>Log Out</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegCalendarAlt, FaUserCircle } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import axios from "axios";
import { Axios } from "../../Utils/axios";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/AuthReducers";

const Navbar = () => {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [adminImage, setAdminImage] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [calendar, setCalendar] = useState([]);
  const [adminName, setAdminName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setAdminImage(localStorage.getItem("adminImage"));
    setAdminName(localStorage.getItem("adminName"));
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const [notifRes, calRes] = await Promise.all([
        axios.get("https://university-project-paresh.onrender.com/University/Notification/notifications"),
        axios.get("https://university-project-paresh.onrender.com/University/CalenderRoute/events"),
      ]);
      setNotifications(notifRes.data);
      setCalendar(calRes.data.Events);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleLogout = async () => {
      try {
          await Axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`, {withCredentials: true})
          dispatch(logout())
      } catch (error) {
          console.log(error)
      }
      navigate('/')
    }

  return (
    <div className="flex items-center justify-between  text-gray-900 p-3 pt-1  border-b border-gray-200 bg-gray-50">

      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div className="flex items-center space-x-6">
        <Link to="/admin-calendar" className="relative">
          <FaRegCalendarAlt className="text-2xl text-gray-600 hover:text-blue-500 transition" />
          {calendar.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1.5 py-0.5">
              {calendar.length}
            </span>
          )}
        </Link>
        <Link to="/admin-notifications" className="relative">
          <MdNotifications className="text-2xl text-gray-600 hover:text-blue-500 transition" />
          {notifications.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-1.5 py-0.5">
              {notifications.length}
            </span>
          )}
        </Link>
        <div className="relative">
          <FaUserCircle onClick={() => setToggleProfile(!toggleProfile)} className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 hover:border-blue-500 transition" />
          {toggleProfile && (
            <div className="absolute z-20 right-0 mt-2 w-48 bg-white text-gray-900 shadow-lg rounded-lg py-2 border border-gray-200">
              <p className="px-4 py-2 text-gray-800 font-semibold">{adminName}</p>
              <hr />
              <Link to="/admin-dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
              <Link to="/admin-dashboard/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              <Link to="/" onClick={handleLogout} className="block px-4 py-2 text-red-600 hover:bg-gray-100">Log Out</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
