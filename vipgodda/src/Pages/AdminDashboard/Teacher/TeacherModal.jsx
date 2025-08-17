// import React from "react";
// import {
//   FaCalendarAlt,
//   FaEnvelope,
//   FaPhone,
//   FaRegAddressCard,
//   FaRegAddressBook,
//   FaTint,
//   FaUniversity,
//   FaUser,
//   FaVenusMars
// } from "react-icons/fa";
// import { FiX } from "react-icons/fi";

// const TeacherModal = ({ teacher, onClose }) => {
//   return (
//     <div className="adminTeacherModalContainer">
//       <div className="modalContainer">
//         <div className="modalHeader">
//           <h2>Teacher Details</h2>
//           <button className="closeBtn" onClick={onClose}>
//             <FiX />
//           </button>
//         </div>
//         <div className="gridContainer">
//           <div className="gridItem">
//             <FaUser className="icon" />
//             <p className="text">
//               <strong>Name:</strong> {teacher.name}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegAddressBook className="icon" />
//             <p className="text">
//               <strong>Guardian Name:</strong> {teacher.schoolId}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaEnvelope className="icon" />
//             <p className="text">
//               <strong>Email:</strong> {teacher.email}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaPhone className="icon" />
//             <p className="text">
//               <strong>Mobile:</strong> {teacher.mobileNo}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegAddressCard className="icon" />
//             <p className="text">
//               <strong>Address:</strong> {teacher.address}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaTint className="icon" />
//             <p className="text">
//               <strong>Blood Group:</strong> {teacher.bloodGroup}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaUniversity className="icon" />
//             <p className="text">
//               <strong>Department:</strong> {teacher.Department}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaVenusMars className="icon" />
//             <p className="text">
//               <strong>Gender:</strong> {teacher.gender}
//             </p>
//           </div>

//           <div className="gridItem">
//             <FaRegAddressCard className="icon" />
//             <p className="text">
//               <strong>City/Village:</strong> {teacher.cityORVillage}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegAddressCard className="icon" />
//             <p className="text">
//               <strong>State:</strong> {teacher.state}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegAddressCard className="icon" />
//             <p className="text">
//               <strong>UID:</strong> {teacher.UID}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegAddressCard className="icon" />
//             <p className="text">
//               <strong>Account Status:</strong> {teacher.accountStatus}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaCalendarAlt className="icon" />
//             <p className="text">
//               <strong>Joining Date:</strong> {teacher.joiningDate}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegAddressCard className="icon" />
//             <p className="text">
//               <strong>Registered By:</strong> {teacher.registeredBY}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeacherModal;


import React from "react";
import { FiX } from "react-icons/fi";

const TeacherModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-sm relative">
        
        {/* Close Button */}
        <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500" onClick={onClose}>
          <FiX size={24} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">Teacher Details</h2>

        {/* Teacher Info */}
        <div className="space-y-2 text-gray-700">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>UID:</strong> TCH-12345</p>
          <p><strong>Department:</strong> Computer Science</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Main St, CA</p>
          <p><strong>Joining Date:</strong> Aug 15, 2023</p>
          <p><strong>Salary:</strong> $3,500 / month</p>
          <p><strong>Status:</strong> Active</p>
        </div>

        {/* Close Button */}
        <div className="text-center mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherModal;

