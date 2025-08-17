// import React from 'react'
// import AddAcount from "../../../img/add-user.png"
// import Course from "../../../img/course.png"
// import "./TeacherDashboard.css"
// import TeacherNavbar from '../../../component/TeacherDashboard/Navbar/TeacherNavbar'
// const TeacherDashboard = () => {
//   return (
//     <><TeacherNavbar /><div className='dashboard'>
//       <div className='dashboard-first-section'>
//         <div>
//           <span><img src={AddAcount} alt="" /></span>
//           <span>Add account</span>
//         </div>
//         <div>
//           <span><img src={Course} alt="" /></span>
//           <span>Courses</span>
//         </div>
//         <div>
//           <span><img src={AddAcount} alt="" /></span>
//           <span>Add account</span>
//         </div>
//         <div>
//           <span><img src={AddAcount} alt="" /></span>
//           <span>Add account</span>
//         </div>
//         <div>
//           <span><img src={AddAcount} alt="" /></span>
//           <span>Add account</span>
//         </div>
//       </div>
//       <div className='dashboard-second-section'>
//         <div className='dashboard-search-box'>
//           <span>My Groups</span>
//           <input type="text" placeholder="Search groups" />
//         </div>
//         <div className='dashboard-group-card'>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//           <div></div>
//         </div>
//       </div>
//     </div></>
//   )
// }

// export default TeacherDashboard
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import TeacherNavbar from "../../../Components/TeacherDashboard/Navbar/TeacherNavbar";
import { FaUserPlus, FaBook, FaChalkboardTeacher, FaBell, FaCalendarAlt } from "react-icons/fa";

const data = [
  { name: "Assignments", value: 30 },
  { name: "Exams", value: 20 },
  { name: "Attendance", value: 25 },
  { name: "Syllabus Covered", value: 25 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const groups = [
  { name: "Math Enthusiasts", members: 20 },
  { name: "Science Explorers", members: 15 },
  { name: "History Buffs", members: 12 },
  { name: "Coding Wizards", members: 25 },
  { name: "Literature Lovers", members: 18 },
  { name: "Music Masters", members: 10 }
];

const TeacherDashboard = () => {
  return (
    <>
      <TeacherNavbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* First Section: Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
            <FaUserPlus className="text-blue-500 text-3xl mb-2" />
            <span className="text-gray-700 font-semibold">Add Account</span>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
            <FaBook className="text-green-500 text-3xl mb-2" />
            <span className="text-gray-700 font-semibold">Courses</span>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
            <FaChalkboardTeacher className="text-purple-500 text-3xl mb-2" />
            <span className="text-gray-700 font-semibold">Class Schedules</span>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
            <FaBell className="text-red-500 text-3xl mb-2" />
            <span className="text-gray-700 font-semibold">Notifications</span>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
            <FaCalendarAlt className="text-orange-500 text-3xl mb-2" />
            <span className="text-gray-700 font-semibold">Upcoming Events</span>
          </div>
        </div>

        {/* Second Section: Search and Groups */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold text-gray-700">My Groups</span>
            <input type="text" placeholder="Search groups" className="p-2 border rounded-lg w-1/3" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {groups.map((group, index) => (
              <div key={index} className="h-20 bg-blue-100 rounded-lg shadow flex items-center justify-center font-semibold text-gray-700">
                {group.name} ({group.members} members)
              </div>
            ))}
          </div>
        </div>

        {/* Third Section: Analytics */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-700">Performance Overview</h2>
          <div className="flex justify-center items-center mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherDashboard;
