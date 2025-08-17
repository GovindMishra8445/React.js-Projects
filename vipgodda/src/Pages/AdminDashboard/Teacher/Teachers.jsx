// import React, { useState, useEffect } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Navbar from "../../../Components/Navbar";
// import TeacherModal from "./TeacherModal";
// import "../../../style/AdminDashboard/Teacher.css";
// import axios from "axios";

// function Teachers() {
//   const [teachers, setTeachers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     handleGetData();
//   }, [currentPage, rowsPerPage]);

//   const handleGetData = () => {
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     fetch(
//       "https://university-project-paresh.onrender.com/University/Admin/allTeachers",
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setTeachers(data.Teachers);
//       })
//       .catch((error) => {
//         console.error("Error fetching teacher data:", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleRowClick = (teacher) => {
//     setSelectedTeacher(teacher);
//   };

//   const deleteTeacher = (id) => {
//     setLoading(true);
//     if (window.confirm(`Are you sure you want to delete this student?`)) {
//       setLoading(true);
//       console.log("id", id);
//       fetch(
//         `https://university-project-paresh.onrender.com/University/Admin/deleteTeacher/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json"
//           }
//         }
//       )
//         .then((response) => response.json())
//         .then((response) => {
//           console.log(response);
//           handleGetData();
//         })
//         .catch((error) => {
//           console.error("Error deleting student:", error);
//         })
//         .finally(() => {
//           setLoading(false);
//         });
//     }
//   };

//   const handleDisableStudent = (id) => {
//     axios
//       .put(
//         `https://university-project-paresh.onrender.com/University/Admin/disableTeacher/${id}`
//       )
//       .then((response) => {
//         handleGetData();
//       })
//       .catch((error) => {
//         console.error("Error disabling student:", error);
//       });
//   };

//   const handleEnableStudent = (id) => {
//     axios
//       .put(
//         `https://university-project-paresh.onrender.com/University/Admin/enableTeacher/${id}`
//       )
//       .then((response) => {
//         handleGetData();
//       })
//       .catch((error) => {
//         console.error("Error enabling student:", error);
//       });
//   };

//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;

//   const filteredTeachers = teachers?.filter((teacher) =>
//     Object?.values(teacher)?.some((value) =>
//       value?.toString()?.toLowerCase()?.includes(searchQuery.toLowerCase())
//     )
//   );

//   const currentRows = filteredTeachers?.slice(indexOfFirstRow, indexOfLastRow);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const totalPages = Math?.ceil(filteredTeachers?.length / rowsPerPage);

//   return (
//     <>
//       <Navbar />
//       <div className="dashboard_layout adminTeacherContainer pb-70 pl-20">
//         <div className="select-container">
//           <h1>All Teacher Lists</h1>
//           <div>
//             <label htmlFor="rowsPerPage" className="label">
//               Rows per page:
//             </label>
//             <select
//               name="rowsPerPage"
//               id="rowsPerPage"
//               className="select"
//               onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
//               value={rowsPerPage}
//             >
//               <option value="5">5</option>
//               <option value="10">10</option>
//             </select>
//           </div>

//           <div className="relative">
//             <input
//               type="search"
//               name="search"
//               placeholder="Search here"
//               className="search-input"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         {loading ? (
//           <div className="spinner" role="status">
//             <span className="loader"></span>
//           </div>
//         ) : (
//           <div className="table-container">
//             <div className="table-section">
//               <table>
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>Name</th>
//                     <th>Guardian Name</th>
//                     <th>Email</th>
//                     <th>Mobile</th>
//                     <th>State</th>
//                     <th>Department</th>
//                     <th>Joining Date</th>
//                     <th>Delete</th>
//                     <th>Enable</th>
//                     <th>Disable</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {currentRows?.map((teacher, index) => (
//                     <tr
//                       key={index}
//                       className={
//                         teacher.accountStatus === "Disabled"
//                           ? "disabled-row"
//                           : ""
//                       }
//                       onClick={() => handleRowClick(teacher)}
//                     >
//                       <td>{index + 1}</td>
//                       <td>{teacher.Name}</td>
//                       <td>{teacher.guardian_Name}</td>
//                       <td>{teacher.email}</td>
//                       <td>{teacher.mobileNo}</td>
//                       <td>{teacher.state}</td>
//                       <td>{teacher.Department}</td>
//                       <td>
//                         {new Date(teacher.joiningDate).toLocaleDateString(
//                           "en-GB"
//                         )}
//                       </td>
//                       <td>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             deleteTeacher(teacher._id);
//                           }}
//                           className="deleteButton"
//                         >
//                           Delete
//                           {/* <FaTrash className="mr-1" /> */}
//                         </button>
//                       </td>
//                       <td>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleEnableStudent(teacher._id);
//                           }}
//                           className="enableButton"
//                         >
//                           Enable
//                         </button>
//                       </td>
//                       <td>
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleDisableStudent(teacher._id);
//                           }}
//                           className="disableButton"
//                         >
//                           Disable
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {selectedTeacher && (
//           <TeacherModal
//             teacher={selectedTeacher}
//             onClose={() => setSelectedTeacher(null)}
//           />
//         )}

//         <div className="pagination">
//           <button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             <FaChevronLeft />
//           </button>
//           <span>{currentPage}</span> / <span>{totalPages}</span>
//           <button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={indexOfLastRow >= filteredTeachers?.length}
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Teachers;


// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Navbar from "../../../Components/Navbar";
// import TeacherModal from "./TeacherModal";
// import "../../../style/AdminDashboard/Teacher.css";

// const dummyTeachers = [
//   {
//     id: 1,
//     Name: "John Doe",
//     guardian_Name: "Jane Doe",
//     email: "johndoe@example.com",
//     mobileNo: "9876543210",
//     state: "California",
//     Department: "Computer Science",
//     joiningDate: "2023-08-15",
//     accountStatus: "Active",
//   },
//   {
//     id: 2,
//     Name: "Alice Smith",
//     guardian_Name: "Robert Smith",
//     email: "alicesmith@example.com",
//     mobileNo: "9123456789",
//     state: "Texas",
//     Department: "Mathematics",
//     joiningDate: "2022-05-22",
//     accountStatus: "Disabled",
//   },
//   {
//     id: 3,
//     Name: "Michael Brown",
//     guardian_Name: "Laura Brown",
//     email: "michaelbrown@example.com",
//     mobileNo: "9988776655",
//     state: "New York",
//     Department: "Physics",
//     joiningDate: "2021-11-10",
//     accountStatus: "Active",
//   },
// ];

// function Teachers() {
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 5;
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = dummyTeachers.slice(indexOfFirstRow, indexOfLastRow);
//   const totalPages = Math.ceil(dummyTeachers.length / rowsPerPage);

//   return (
//     <>
//       <Navbar />
//       <div className="p-8 bg-gray-100 min-h-screen">
//         <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
//           <h1 className="text-2xl font-bold mb-4">All Teacher Lists</h1>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-300 rounded-lg">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="py-2 px-4 border">#</th>
//                   <th className="py-2 px-4 border">Name</th>
//                   <th className="py-2 px-4 border">Guardian</th>
//                   <th className="py-2 px-4 border">Email</th>
//                   <th className="py-2 px-4 border">Mobile</th>
//                   <th className="py-2 px-4 border">State</th>
//                   <th className="py-2 px-4 border">Department</th>
//                   <th className="py-2 px-4 border">Joining Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentRows.map((teacher, index) => (
//                   <tr
//                     key={index}
//                     className={`${
//                       teacher.accountStatus === "Disabled" ? "bg-red-100" : ""
//                     } hover:bg-gray-100 cursor-pointer`}
//                     onClick={() => setSelectedTeacher(teacher)}
//                   >
//                     <td className="py-2 px-4 border">{index + 1}</td>
//                     <td className="py-2 px-4 border">{teacher.Name}</td>
//                     <td className="py-2 px-4 border">{teacher.guardian_Name}</td>
//                     <td className="py-2 px-4 border">{teacher.email}</td>
//                     <td className="py-2 px-4 border">{teacher.mobileNo}</td>
//                     <td className="py-2 px-4 border">{teacher.state}</td>
//                     <td className="py-2 px-4 border">{teacher.Department}</td>
//                     <td className="py-2 px-4 border">
//                       {new Date(teacher.joiningDate).toLocaleDateString("en-GB")}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex justify-between items-center mt-4">
//             <button
//               className="p-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//             >
//               <FaChevronLeft />
//             </button>
//             <span className="text-lg">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               className="p-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
//               onClick={() =>
//                 setCurrentPage((prev) =>
//                   prev < totalPages ? prev + 1 : prev
//                 )
//               }
//               disabled={currentPage === totalPages}
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>
//       </div>
//       {selectedTeacher && (
//         <TeacherModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />
//       )}
//     </>
//   );
// }

// export default Teachers;


// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Navbar from "../../../Components/Navbar";
// import TeacherModal from "./TeacherModal";
// import "../../../style/AdminDashboard/Teacher.css";

// const dummyTeachers = [
//   {
//     id: 1,
//     Name: "John Doe",
//     guardian_Name: "Jane Doe",
//     email: "johndoe@example.com",
//     mobileNo: "9876543210",
//     state: "California",
//     Department: "Computer Science",
//     joiningDate: "2023-08-15",
//     accountStatus: "Active",
//   },
//   {
//     id: 2,
//     Name: "Alice Smith",
//     guardian_Name: "Robert Smith",
//     email: "alicesmith@example.com",
//     mobileNo: "9123456789",
//     state: "Texas",
//     Department: "Mathematics",
//     joiningDate: "2022-05-22",
//     accountStatus: "Disabled",
//   },
//   {
//     id: 3,
//     Name: "Michael Brown",
//     guardian_Name: "Laura Brown",
//     email: "michaelbrown@example.com",
//     mobileNo: "9988776655",
//     state: "New York",
//     Department: "Physics",
//     joiningDate: "2021-11-10",
//     accountStatus: "Active",
//   },
// ];

// function Teachers() {
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const rowsPerPage = 5;
//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const filteredTeachers = dummyTeachers.filter((teacher) =>
//     Object.values(teacher).some((value) =>
//       value.toString().toLowerCase().includes(searchQuery.toLowerCase())
//     )
//   );
//   const currentRows = filteredTeachers.slice(indexOfFirstRow, indexOfLastRow);
//   const totalPages = Math.ceil(filteredTeachers.length / rowsPerPage);

//   return (
//     <>
//       <Navbar />
//       <div className="p-8 bg-gray-100 min-h-screen">
//         <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-md">
//           <h1 className="text-2xl font-bold mb-4">All Teacher Lists</h1>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search Teachers..."
//               className="w-full p-2 border rounded-md"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border border-gray-300 rounded-lg">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="py-2 px-4 border">#</th>
//                   <th className="py-2 px-4 border">Name</th>
//                   <th className="py-2 px-4 border">Guardian</th>
//                   <th className="py-2 px-4 border">Email</th>
//                   <th className="py-2 px-4 border">Mobile</th>
//                   <th className="py-2 px-4 border">State</th>
//                   <th className="py-2 px-4 border">Department</th>
//                   <th className="py-2 px-4 border">Joining Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentRows.map((teacher, index) => (
//                   <tr
//                     key={index}
//                     className={`${
//                       teacher.accountStatus === "Disabled" ? "bg-red-100" : ""
//                     } hover:bg-gray-100 cursor-pointer`}
//                     onClick={() => setSelectedTeacher(teacher)}
//                   >
//                     <td className="py-2 px-4 border">{index + 1}</td>
//                     <td className="py-2 px-4 border">{teacher.Name}</td>
//                     <td className="py-2 px-4 border">{teacher.guardian_Name}</td>
//                     <td className="py-2 px-4 border">{teacher.email}</td>
//                     <td className="py-2 px-4 border">{teacher.mobileNo}</td>
//                     <td className="py-2 px-4 border">{teacher.state}</td>
//                     <td className="py-2 px-4 border">{teacher.Department}</td>
//                     <td className="py-2 px-4 border">
//                       {new Date(teacher.joiningDate).toLocaleDateString("en-GB")}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <div className="flex justify-between items-center mt-4">
//             <button
//               className="p-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//               disabled={currentPage === 1}
//             >
//               <FaChevronLeft />
//             </button>
//             <span className="text-lg">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               className="p-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
//               onClick={() =>
//                 setCurrentPage((prev) =>
//                   prev < totalPages ? prev + 1 : prev
//                 )
//               }
//               disabled={currentPage === totalPages}
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>
//       </div>
//       {selectedTeacher && (
//         <TeacherModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />
//       )}
//     </>
//   );
// }

// export default Teachers;

import React, { useEffect, useState } from "react";
import { FaSearch, FaFilter, FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../../../Components/AdminDashboard/Navbar";
import TeacherModal from "./TeacherModal";
import { Axios } from "../../../Utils/axios";
import CourseFormModel from "../../../Components/AdminDashboard/Courses/CourseFormModel";
import TeacherFormModel from "./TeacherFormModal";

const dummyTeachers = [
  {
    id: 1,
    name: "Ms. Elizabeth Johnson",
    schoolId: "SI-ENG-123",
    subject: "English Literature",
    classes: "9A, 10B",
    phone: "(555) 101-0101",
    address: "123 Elm St, Springfield, IL",
    email: "johnson@edu.org",
  },
  {
    id: 2,
    name: "Mr. Carlos Garcia",
    schoolId: "GRC-HIS-456",
    subject: "History",
    classes: "8C, 11A",
    phone: "(555) 101-0102",
    address: "456 Oak Ave, Springfield, IL",
    email: "garcia@edu.org",
  },
  {
    id: 21,
    name: "Mr. Carlos Garcia",
    schoolId: "GRC-HIS-456",
    subject: "History",
    classes: "8C, 11A",
    phone: "(555) 101-0102",
    address: "456 Oak Ave, Springfield, IL",
    email: "garcia@edu.org",
  },
  {
    id: 
    12,
    name: "Mr. Carlos Garcia",
    schoolId: "GRC-HIS-456",
    subject: "History",
    classes: "8C, 11A",
    phone: "(555) 101-0102",
    address: "456 Oak Ave, Springfield, IL",
    email: "garcia@edu.org",
  },
  {
    id: 9,
    name: "Mr. Carlos Garcia",
    schoolId: "GRC-HIS-456",
    subject: "History",
    classes: "8C, 11A",
    phone: "(555) 101-0102",
    address: "456 Oak Ave, Springfield, IL",
    email: "garcia@edu.org",
  },
  // Add more teachers as needed
];

function Teachers() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [teachers, setTeachers] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await Axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/teachers`,
          {
            withCredentials: true
          }
        );
        console.log(response.data.data)
        setTeachers(response.data.data)
      } catch (error) {
        console.error("Error fetching Admission:", error);
      }
    };

    fetchTeachers();
  }, []);

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse.courseDetails]);
  };

  const handleSearch = () => {
      if (searchQuery === "") {
        return;
      } else {
        const filterTeacher = teachers.filter((teacher) => (teacher.userId.name || teacher.userId.email).toLowerCase().includes(searchQuery.toLowerCase()));
        setTeachers(filterTeacher)
      }
  }

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-5">
            <h1 className="text-2xl font-bold mb-4">All Teachers List</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setShowForm(true)}
            >
              Add Teacher
            </button>
          </div>

          {showForm && <TeacherFormModel onAddCourse={addCourse} setShowForm={setShowForm} />}
          
          {/* Search & Filter Section */}
          <div className="flex items-center space-x-4 mb-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search by ID, Name, or Subject"
                className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {/* <FaSearch className="absolute left-3 top-3 text-gray-400" /> */}
            </div>
            <button onClick={handleSearch} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 flex items-center">
              <FaFilter className="mr-2" /> Filters
            </button>
          </div>

          {/* Teachers Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-10 py-4 text-center text-md">SNo.</th>
                  <th className="px-10 py-4 text-center text-md">Teacher's Name</th>
                  <th className="px-10 py-4 text-center text-md">Email</th>
                  <th className="px-10 py-4 text-center text-md">Mobile No.</th>
                  <th className="px-10 py-4 text-center text-md">Aadhar No.</th>
                  <th className="px-10 py-4 text-center text-md">DateofBirth</th>
                  <th className="px-10 py-4 text-center text-md">Gender</th>
                  <th className="px-10 py-4 text-center text-md">City</th>
                  <th className="px-10 py-4 text-center text-md">Department</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 cursor-pointer"
                    // onClick={() => setSelectedTeacher(teacher)}
                  >
                    {/* <td className="p-3">
                      <input type="checkbox" className="w-4 h-4" />
                    </td>
                    <td className="p-3 flex items-center space-x-3">
                      <img
                        src={`https://i.pravatar.cc/40?u=${teacher.email}`}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <span>{teacher.name}</span>
                    </td> */}
                    <td className="px-10 py-4 border text-sm text-center">{index + 1}</td>
                    <td className="px-10 py-4 border text-sm text-center">{teacher.userId.name}</td>
                    <td className="px-10 py-4 border text-sm text-center">{teacher.userId.email}</td>
                    <td className="px-10 py-4 border text-sm text-center">{teacher.userId.mobileNumber}</td>
                    <td className="px-10 py-4 border text-sm text-center">{teacher.aadharNumber}</td>
                    <td className="px-10 py-4 border text-sm text-center">{teacher.dob}</td>
                    <td className="px-10 py-4 border text-sm text-center">{teacher.gender}</td>
                    <td className="px-10 py-4 border text-sm text-center">{teacher.city}</td>
                    <td className="px-10 py-4 border text-sm text-center">{teacher.department}</td>
                    {/* <td className="p-3 flex justify-center space-x-3">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* {selectedTeacher && (
  <div className="adminTeacherModalContainer">
    <TeacherModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />
  </div>
)} */} 
    </>
  );
}

export default Teachers;
