// // import React, { useState, useEffect } from "react";
// // import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// // import "../../../style/AdminDashboard/Student.css";
// // import Navbar from "../../../Components/Navbar";
// // import StudentModal from "./StudentModal";
// // import axios from "axios";

// // function Student() {
// //   const [students, setStudents] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedStudent, setSelectedStudent] = useState(null);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [rowsPerPage, setRowsPerPage] = useState(10);
// //   const [searchQuery, setSearchQuery] = useState("");

// //   useEffect(() => {
// //     handleGetData();
// //   }, [currentPage, rowsPerPage]);

// //   const handleGetData = () => {
// //     setLoading(true);
// //     const token = localStorage.getItem("token");
// //     fetch(
// //       "https://university-project-paresh.onrender.com/University/Admin/allStudents",
// //       {
// //         method: "GET",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       }
// //     )
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log("Student", data?.Students);
// //         setStudents(data?.Students);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching student data:", error);
// //       })
// //       .finally(() => {
// //         setLoading(false);
// //       });
// //   };

// //   const handleRowClick = (student) => {
// //     setSelectedStudent(student);
// //   };

// //   const deleteRow = (id) => {
// //     if (window.confirm(`Are you sure you want to delete this student?`)) {
// //       setLoading(true);
// //       console.log("id", id);
// //       fetch(
// //         `https://university-project-paresh.onrender.com/University/Admin/deleteStudent/${id}`,
// //         {
// //           method: "DELETE",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       )
// //         .then((response) => response.json())
// //         .then((response) => {
// //           console.log(response);
// //           handleGetData();
// //         })
// //         .catch((error) => {
// //           console.error("Error deleting student:", error);
// //         })
// //         .finally(() => {
// //           setLoading(false);
// //         });
// //     }
// //   };

// //   const handlePaidClick = (rollNo) => {
// //     // Implement functionality for marking student as paid
// //     // You can perform API request here to mark the student as paid
// //   };

// //   const handleDisableStudent = (id) => {
// //     axios
// //       .put(
// //         `https://university-project-paresh.onrender.com/University/Admin/disableStudent/${id}`
// //       )
// //       .then((response) => {
// //         handleGetData();
// //       })
// //       .catch((error) => {
// //         console.error("Error disabling student:", error);
// //       });
// //   };

// //   const handleEnableStudent = (id) => {
// //     axios
// //       .put(
// //         `https://university-project-paresh.onrender.com/University/Admin/enableStudent/${id}`
// //       )
// //       .then((response) => {
// //         handleGetData();
// //       })
// //       .catch((error) => {
// //         console.error("Error enabling student:", error);
// //       });
// //   };

// //   const indexOfLastRow = currentPage * rowsPerPage;
// //   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
// //   const filteredStudents = students?.filter((student) =>
// //     Object?.values(student)?.some((value) =>
// //       value?.toString()?.toLowerCase()?.includes(searchQuery?.toLowerCase())
// //     )
// //   );

// //   const currentRows = filteredStudents?.slice(indexOfFirstRow, indexOfLastRow);

// //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //   const totalPages = Math?.ceil(filteredStudents?.length / rowsPerPage);

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="dashboard_layout flex flex-col">
// //         <h1 className="text-2xl font-semibold text-gray-800">
// //           All Student Lists
// //         </h1>
// //         <div className="flex flex-wrap justify-end space-x-4 mb-4">
// //           {/* Search filter */}
// //           <div className="flex flex-col items-start space-y-1 w-full sm:w-auto">
// //             <label htmlFor="search" className="text-sm text-gray-600 mb-0">
// //               Search
// //             </label>
// //             <input
// //               type="search"
// //               name="search"
// //               placeholder="Search here"
// //               className="p-2 border rounded-md w-full sm:w-64 text-left"
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //             />
// //           </div>
// //           {/* Rows per page filter */}
// //           <div className="flex flex-col items-start w-full sm:w-auto">
// //             <label htmlFor="rowsPerPage" className="text-sm text-gray-600 mb-0">
// //               Rows per page
// //             </label>
// //             <select
// //               name="rowsPerPage"
// //               id="rowsPerPage"
// //               className="p-2 border rounded-md w-full"
// //               onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
// //               value={rowsPerPage}
// //             >
// //               <option value="5">5</option>
// //               <option value="10">10</option>
// //             </select>
// //           </div>

// //           {/* Filter selection */}
// //           <div className="flex flex-col items-start space-y-1 w-full sm:w-auto">
// //             <label htmlFor="filter" className="text-sm text-gray-600 mb-0">
// //               Filter
// //             </label>
// //             <select
// //               name="filter"
// //               id="filter"
// //               className="p-2 border rounded-md w-full"
// //               // onChange={handleFilterChange} // Add your filter handler here
// //             >
// //               <option value="">Select Filter</option>
// //               <option value="option1">Option 1</option>
// //               <option value="option2">Option 2</option>
// //             </select>
// //           </div>

// //           {/* Sort by filter */}
// //           <div className="flex flex-col items-start space-y-1 w-full sm:w-auto">
// //             <label htmlFor="sort" className="text-sm text-gray-600 mb-0">
// //               Sort by
// //             </label>
// //             <select
// //               name="sort"
// //               id="sort"
// //               className="p-2 border rounded-md w-full"
// //               // onChange={handleSortChange} // Add your sort handler here
// //             >
// //               <option value="">Select Sort</option>
// //               <option value="asc">Ascending</option>
// //               <option value="desc">Descending</option>
// //               <option value="year">Year</option> {/* Sorting by year option */}
// //             </select>
// //           </div>
// //         </div>

// //         {loading ? (
// //           <div className="flex justify-center items-center">
// //             <span className="loader"></span>
// //           </div>
// //         ) : currentRows?.length === 0 ? (
// //           <div className="flex justify-center items-center text-xl text-gray-600">
// //             No data found
// //           </div>
// //         ) : (
// //           <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
// //             <table className="min-w-full table-auto">
// //               <thead className="bg-gray-700 text-black">
// //                 <tr>
// //                   <th className="px-4 py-2">SNo.</th>
// //                   <th className="px-4 py-2">Roll No.</th>
// //                   <th className="px-4 py-2">Name</th>
// //                   <th className="px-4 py-2">Email</th>
// //                   <th className="px-4 py-2">State</th>
// //                   <th className="px-4 py-2">Course Taken</th>
// //                   <th className="px-4 py-2">Branch Name</th>
// //                   <th className="px-4 py-2">Admission Year</th>
// //                   <th className="px-4 py-2">Fees</th>
// //                   <th className="px-4 py-2">Delete</th>
// //                   <th className="px-4 py-2">Enable</th>
// //                   <th className="px-4 py-2">Disable</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {currentRows?.map((student, index) => (
// //                   <tr
// //                     key={index}
// //                     className={
// //                       student.accountStatus === "disabled" ? "bg-red-100" : ""
// //                     }
// //                     onClick={() => handleRowClick(student)}
// //                   >
// //                     <td className="px-4 py-2">{index + 1}</td>
// //                     <td className="px-4 py-2">{student.rollNo}</td>
// //                     <td className="px-4 py-2">{student.Name}</td>
// //                     <td className="px-4 py-2">{student.email}</td>
// //                     <td className="px-4 py-2">{student.state}</td>
// //                     <td className="px-4 py-2">{student.courseTaken}</td>
// //                     <td className="px-4 py-2">{student.branchName}</td>
// //                     <td className="px-4 py-2">{student.admissionYear}</td>
// //                     <td className="px-4 py-2">
// //                       <button
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           handlePaidClick(student._id);
// //                         }}
// //                         className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
// //                       >
// //                         Paid
// //                       </button>
// //                     </td>
// //                     <td className="px-4 py-2">
// //                       <button
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           deleteRow(student._id);
// //                         }}
// //                         className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
// //                       >
// //                         Delete
// //                       </button>
// //                     </td>
// //                     <td className="px-4 py-2">
// //                       <button
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           handleEnableStudent(student._id);
// //                         }}
// //                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
// //                       >
// //                         Enable
// //                       </button>
// //                     </td>
// //                     <td className="px-4 py-2">
// //                       <button
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           handleDisableStudent(student._id);
// //                         }}
// //                         className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
// //                       >
// //                         Disable
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}

// //         {selectedStudent && (
// //           <StudentModal
// //             student={selectedStudent}
// //             onClose={() => setSelectedStudent(null)}
// //           />
// //         )}

// //         <div className="flex justify-center items-center mt-5">
// //           <button
// //             onClick={() => paginate(currentPage - 1)}
// //             disabled={currentPage === 1}
// //             className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
// //           >
// //             <FaChevronLeft />
// //           </button>
// //           <span className="mx-2 text-lg">
// //             {currentPage} / {totalPages}
// //           </span>
// //           <button
// //             onClick={() => paginate(currentPage + 1)}
// //             disabled={indexOfLastRow >= filteredStudents?.length}
// //             className="p-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:bg-gray-200"
// //           >
// //             <FaChevronRight />
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default Student;




// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Navbar from "../../../Components/Navbar";
// import StudentModal from "./StudentModal";

// const dummyStudents = Array.from({ length: 20 }, (_, i) => ({
//   id: i + 1,
//   rollNo: `2025${i + 1}`,
//   name: `Student ${i + 1}`,
//   email: `student${i + 1}@university.com`,
//   state: "State Name",
//   courseTaken: "Computer Science",
//   branchName: "Engineering",
//   admissionYear: 2021,
//   feesPaid: Math.random() > 0.5,
//   accountStatus: Math.random() > 0.5 ? "active" : "disabled",
// }));

// function Student() {
//   const [students, setStudents] = useState(dummyStudents);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterBranch, setFilterBranch] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const rowsPerPage = 10;

//   const filteredStudents = students
//     .filter(student => student.branchName.includes(filterBranch))
//     .filter(student =>
//       Object.values(student).some(value =>
//         value.toString().toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );

//   if (sortOrder === "asc") {
//     filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (sortOrder === "desc") {
//     filteredStudents.sort((a, b) => b.name.localeCompare(a.name));
//   }

//   const indexOfLastRow = currentPage * rowsPerPage;
//   const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//   const currentRows = filteredStudents.slice(indexOfFirstRow, indexOfLastRow);
//   const totalPages = Math.ceil(filteredStudents.length / rowsPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
//   return (
//     <>
//       <Navbar />
//       <div className="dashboard_layout flex flex-col p-8">
//         <h1 className="text-3xl font-bold text-gray-900 mb-6">All Student Lists</h1>
//         <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mb-6 gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
//           <input
//             type="text"
//             placeholder="Search here..."
//             className="p-3 border rounded-md w-full sm:w-64"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <select
//             className="p-3 border rounded-md"
//             onChange={(e) => setFilterBranch(e.target.value)}
//           >
//             <option value="">All Branches</option>
//             <option value="Engineering">Engineering</option>
//           </select>
//           <select
//             className="p-3 border rounded-md"
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option value="">Sort by</option>
//             <option value="asc">Ascending</option>
//             <option value="desc">Descending</option>
//           </select>
//         </div>
//         <div className="overflow-x-auto rounded-lg bg-white shadow-lg p-6">
//           <table className="min-w-full table-auto border-collapse border border-gray-300">
//             <thead className="bg-gray-900 text-blue">
//               <tr>
//                 <th className="px-6 py-4 border">SNo.</th>
//                 <th className="px-6 py-4 border">Roll No.</th>
//                 <th className="px-6 py-4 border">Name</th>
//                 <th className="px-6 py-4 border">Email</th>
//                 <th className="px-6 py-4 border">State</th>
//                 <th className="px-6 py-4 border">Course</th>
//                 <th className="px-6 py-4 border">Branch</th>
//                 <th className="px-6 py-4 border">Year</th>
//                 <th className="px-6 py-4 border">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentRows.map((student, index) => (
//                 <tr
//                   key={index}
//                   className={`border-b ${student.accountStatus === "disabled" ? "bg-red-200" : "bg-gray-50"}`}
//                   onClick={() => setSelectedStudent(student)}
//                 >
//                   <td className="px-6 py-4 border">{index + 1}</td>
//                   <td className="px-6 py-4 border">{student.rollNo}</td>
//                   <td className="px-6 py-4 border">{student.name}</td>
//                   <td className="px-6 py-4 border">{student.email}</td>
//                   <td className="px-6 py-4 border">{student.state}</td>
//                   <td className="px-6 py-4 border">{student.courseTaken}</td>
//                   <td className="px-6 py-4 border">{student.branchName}</td>
//                   <td className="px-6 py-4 border">{student.admissionYear}</td>
//                   <td className="px-6 py-4 border font-semibold text-sm">
//                     {student.feesPaid ? (
//                       <span className="text-green-600">Paid</span>
//                     ) : (
//                       <span className="text-red-600">Unpaid</span>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {selectedStudent && (
//           <StudentModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
//         )}

//         <div className="flex justify-center items-center mt-6 gap-3">
//           <button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="p-3 bg-gray-400 rounded-md hover:bg-gray-500 disabled:bg-gray-300"
//           >
//             <FaChevronLeft />
//           </button>
//           <span className="mx-3 text-lg font-semibold">{currentPage} / {totalPages}</span>
//           <button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={indexOfLastRow >= filteredStudents.length}
//             className="p-3 bg-gray-400 rounded-md hover:bg-gray-500 disabled:bg-gray-300"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Student;




// import React, { useState } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import Navbar from "../../../Components/AdminDashboard/Navbar";
// import StudentModal from "./StudentModal";

// const dummyStudents = Array.from({ length: 20 }, (_, i) => ({
//   id: i + 1,
//   rollNo: `2025${i + 1}`,
//   name: `Student ${i + 1}`,
//   email: `student${i + 1}@university.com`,
//   dob: "01/01/2000",
//   class: "10A",
// }));

// function Student() {
//   const [students, setStudents] = useState(dummyStudents);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   //   const [students, setStudents] = useState(dummyStudents);
//   // const [selectedStudent, setSelectedStudent] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   // const [searchQuery, setSearchQuery] = useState("");
//   const [filterBranch, setFilterBranch] = useState("");
//   const [sortOrder, setSortOrder] = useState("");
//   const rowsPerPage = 10;

//   const filteredStudents = students.filter(student =>
//     student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     student.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="dashboard_layout flex flex-col p-8">
//         {/* <h1 className="text-3xl font-bold text-gray-900 mb-6">All Student Lists</h1> */}
//         <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mb-6 gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
//         <input
//             type="text"
//             placeholder="Search here..."
//             className="p-3 border rounded-md w-full sm:w-64"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <select
//             className="p-3 border rounded-md"
//             onChange={(e) => setFilterBranch(e.target.value)}
//           >
//             <option value="">All Branches</option>
//             <option value="Engineering">Engineering</option>
//           </select>
//           <select
//             className="p-3 border rounded-md"
//             onChange={(e) => setSortOrder(e.target.value)}
//           >
//             <option value="">Sort by</option>
//             <option value="asc">Ascending</option>
//             <option value="desc">Descending</option>
//           </select>
//         </div>
//         {/* <div className="flex justify-between items-center mb-6 gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
//           <input
//             type="text"
//             placeholder="Search here..."
//             className="p-3 border rounded-md w-full sm:w-64"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div> */}
//         <div className="overflow-x-auto rounded-lg bg-white shadow-lg p-3">
//           <table className="min-w-full bg-white border border-gray-300 rounded-lg">
//             <thead className="bg-gray-100 text-gray-600">
//               <tr>
//                 <th className="p-3 text-left">SI No</th>
//                 <th className="p-3 text-left">Student Name</th>
//                 <th className="p-3 text-left">Student ID</th>
//                 <th className="p-3 text-left">Class</th>
//                 <th className="p-3 text-left">DOB</th>
//                 <th className="p-3 text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredStudents.map((student,index) => (
//                 <tr
//                   key={student.id}
//                   className="border-b hover:bg-gray-100 cursor-pointer"
//                   onClick={() => setSelectedStudent(student)}
//                 >
//                  <td className="px-6 py-4 border">{index + 1}</td>
//                   <td className="p-3 flex items-center space-x-3">
//                     <img
//                       src={`https://i.pravatar.cc/40?u=${student.email}`}
//                       alt="avatar"
//                       className="w-10 h-10 rounded-full"
//                     />
//                     <div>
//                       <span className="block font-medium">{student.name}</span>
//                       <span className="text-sm text-gray-500">{student.email}</span>
//                     </div>
//                   </td>
//                   <td className="p-3">{student.rollNo}</td>
//                   <td className="p-3">{student.class}</td>
//                   <td className="p-3">{student.dob}</td>
//                   <td className="p-3 flex justify-center space-x-3">
//                     <button className="text-blue-500 hover:text-blue-700">
//                       <FaEdit />
//                     </button>
//                     <button className="text-red-500 hover:text-red-700">
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {selectedStudent && (
//           <StudentModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
//         )}
//       </div>
//     </>
//   );
// }

// export default Student;


import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../../../Components/AdminDashboard/Navbar";
import StudentModal from "./StudentModal";
import { Axios } from "../../../Utils/axios";

function Student() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBranch, setFilterBranch] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const fetchClasses = async () => {
        try {
            const response = await Axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/classes`, {withCredentials: true})
            setClasses(response.data.data);
        } catch (error) {
            console.error(error)
        }
      }

      fetchClasses();
  }, [])
  
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await Axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/students`,
          {
            withCredentials: true
          }
        );
        console.log(response.data.data)
        setStudents(response.data.data)
      } catch (error) {
        console.error("Error fetching Admission:", error);
      }
    };

    fetchStudents();
  }, []);

  // const filterStudents = students.filter((student) => (student.userId.name || student.userId.email).toLowerCase().includes(searchQuery.toLowerCase()));
  
  const ApprovedStudents = students.filter(student => student.isApprovedStudent === true);
  


  return (
    <>
      <Navbar />
      <div className="dashboard_layout flex flex-col p-8">
        <div className="flex flex-wrap sm:flex-nowrap justify-between items-center mb-6 gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search here..."
            className="p-3 border rounded-md w-full sm:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="p-3 border rounded-md w-[30%]">
            <option value="">Select Classes</option>
            {
              classes.map((classItem) => (
                <option value={classItem.gradeLevel}>{classItem.gradeLevel}</option>
              ))  
            }
          </select>
          {/* <select
            className="p-3 border rounded-md"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select> */}
        </div>
        
        <div className="overflow-x-auto rounded-lg bg-white shadow-lg p-3">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-10 py-4 text-center text-md">Roll No.</th>
                <th className="px-10 py-4 text-center text-md">Student Name</th>
                <th className="px-10 py-4 text-center text-md">Gender</th>
                <th className="px-10 py-4 text-center text-md">Class</th>
                <th className="px-10 py-4 text-center text-md">DOB</th> 
                <th className="px-10 py-4 text-center text-md">Mobile No.</th>
                <th className="px-10 py-4 text-center text-md">Aadhar No.</th>
                <th className="px-10 py-4 text-center text-md">Action</th>
              </tr>
            </thead>
            <tbody>
              {ApprovedStudents.map((student, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 cursor-pointer"
                >
                  <td className="px-10 py-4 border text-sm text-center">{student.rollNo}</td>
                  <td className="px-5 py-4 flex items-center space-x-3">
                    {/* <img
                      src={`https://i.pravatar.cc/40?u=${student.email}`}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    /> */}
                    <div>
                      <span className="block font-medium">{student.userId.name}</span>
                      <span className="text-sm text-gray-500">{student.userId.email}</span>
                    </div>
                  </td>
                  <td className="px-10 py-4 border text-sm text-center">{student.gender}</td>
                  <td className="px-10 py-4 border text-sm text-center">{student.classId.gradeLevel}</td>
                  <td className="px-10 py-4 border text-sm text-center">{student.dob}</td>
                  <td className="px-10 py-4 border text-sm text-center">{student.userId.mobileNumber}</td>
                  <td className="px-10 py-4 border text-sm text-center">{student.aadharNumber}</td>

                  <td className="px-10 py-4 border text-sm text-center">
                    <div className="flex gap-5">
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedStudent && (
          <StudentModal student={selectedStudent} onClose={() => setSelectedStudent(null)} />
        )}
      </div>
    </>
  );
}

export default Student;

 