// import React from "react";
// import {
//   FaCalendarAlt,
//   FaClipboardCheck,
//   FaEnvelope,
//   FaFlag,
//   FaIdCard,
//   FaPhone,
//   FaRegAddressBook,
//   FaRegAddressCard,
//   FaRegHospital,
//   FaTint,
//   FaUniversity,
//   FaUser,
//   FaVenusMars
// } from "react-icons/fa";
// import { FiX } from "react-icons/fi";

// const StudentModal = ({ student, onClose }) => {
//   return (
//     <div className="adminStudentModalContainer">
//       <div className="modalContainer">
//         <div className="modalHeader">
//           <h2>Add Notification</h2>
//           <button className="closeBtn" onClick={onClose}>
//             <FiX />
//           </button>
//         </div>
//         <div className="gridContainer">
//           <div className="gridItem">
//             <FaUser className="icon" />
//             <p className="text">
//               <strong>Name:</strong> {student.Name}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaIdCard className="icon" />
//             <p className="text">
//               <strong>UID:</strong> {student.UID}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegAddressBook className="icon" />
//             <p className="text">
//               <strong>Father's Name:</strong> {student.fatherName}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegAddressCard className="icon" />
//             <p className="text">
//               <strong>Mother's Name:</strong> {student.motherName}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaEnvelope className="icon" />
//             <p className="text">
//               <strong>Email:</strong> {student.email}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaPhone className="icon" />
//             <p className="text">
//               <strong>Mobile No:</strong> {student.mobileNo}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegAddressCard className="icon" />
//             <p className="text">
//               <strong>Address:</strong> {student.address}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaFlag className="icon" />
//             <p className="text">
//               <strong>State:</strong> {student.state}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaFlag className="icon" />
//             <p className="text">
//               <strong>Country:</strong> {student.country}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaRegHospital className="icon" />
//             <p className="text">
//               <strong>City/Village:</strong> {student.cityORVillage}
//             </p>
//           </div>

//           <div className="gridItem">
//             <FaVenusMars className="icon" />
//             <p className="text">
//               <strong>Gender:</strong> {student.gender}
//             </p>
//           </div>

//           <div className="gridItem">
//             <FaTint className="icon" />
//             <p className="text">
//               <strong>Blood Group:</strong> {student.bloodGroup}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaUniversity className="icon" />
//             <p className="text">
//               <strong>Roll No:</strong> {student.rollNo}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaUniversity className="icon" />
//             <p className="text">
//               <strong>Course Taken:</strong> {student.courseTaken}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaUniversity className="icon" />
//             <p className="text">
//               <strong>Branch Name:</strong> {student.branchName}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaCalendarAlt className="icon" />
//             <p className="text">
//               <strong>Admission Year:</strong> {student.admissionYear}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaClipboardCheck className="icon" />
//             <p className="text">
//               <strong>Account Status:</strong> {student.accountStatus}
//             </p>
//           </div>
//           <div className="gridItem">
//             <FaClipboardCheck className="icon" />
//             <p className="text">
//               <strong>Registered By:</strong> {student.registeredBY}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentModal;
// // "_id": "65e06caa76d41ee6dd5b9c20",
// // "Name": "AYUSHI VASHISTH",
// // "fatherName": "Mr Sharma",
// // "motherName": "Ms Shrama",
// // "email": "ayushivashisth24@gmail.com",
// // "mobileNo": "08219187422",
// // "address": "HNO-315, GALI NO-15, B BLOCK, TOMAR COLONY, BEHIND BURARI SCHOOL",
// // "state": "DELHI",
// // "country": "India",
// // "cityORVillage": "BURARI",
// // "pin": "110000",
// // "applicationFormStatus": "Pending",
// // "gender": "Female",
// // "bloodGroup": "AB+",
// // "courseTaken": "B.Tech",
// // "branchName": "CS",
// // "tenth_passoutYear": "2020",
// // "DOB": "01-08-1997",
// // "busService": "No",
// // "hostelService": "No",
// // "AadharNumber": "XXXXXXXX4499",





import React from "react";
import { FiX } from "react-icons/fi";

const StudentModal = ({ onClose }) => {
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

export default StudentModal;


