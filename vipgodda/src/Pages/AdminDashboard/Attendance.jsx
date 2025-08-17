// import React, { useEffect, useState } from "react";
import styles from "../../style/AdminDashboard/Attendance.module.css";
// import Navbar from "../../component/AdminDashboard/Navbar";

// function Attendance() {
//   const [students, setStudents] = useState([]);
//   const [filteredStudents, setFilteredStudents] = useState([]);
//   const [date, setDate] = useState("");
//   const [searchName, setSearchName] = useState("Paresh");
//   const [searchRollNo, setSearchRollNo] = useState("");
//   const [loading, setLoading] = useState(true);
//   console.log("f", filteredStudents);

//   useEffect(() => {
//     handleGetData();
//   }, []);

//   const handleGetData = () => {
//     setLoading(true);
//     const token = localStorage.getItem("token");
//     fetch(
//       "https://university-project-paresh.onrender.com/University/Admin/allStudents",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         // console.log(data);
//         setStudents(data.Students);
//       })
//       .catch((error) => {
//         console.error("Error fetching student data:", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const handleFilter = () => {
//     let filteredData = students;

//     if (date) {
//       filteredData = filteredData?.filter((student) =>
//         student.attendance.some(
//           (attendance) => attendance.date.split("T")[0] === date
//         )
//       );
//     }

//     if (searchName) {
//       filteredData = filteredData?.filter((student) =>
//         student.Name.toLowerCase().includes(searchName.toLowerCase())
//       );
//     }

//     if (searchRollNo) {
//       filteredData = filteredData?.filter((student) =>
//         student.rollNo.toLowerCase().includes(searchRollNo.toLowerCase())
//       );
//     }

//     setFilteredStudents(filteredData);
//   };

//   useEffect(() => {
//     handleFilter();
//     // eslint-disable-next-line
//   }, [date, searchName, searchRollNo, filteredStudents]);

//   return (
//     <>
//       <Navbar />
//       <div className={`dashboard_layout ${styles.adminAttendanceContainer}`}>
//         <div className={styles.container}>
//           <h1 className={styles.title}> Student Attendance</h1>
//         </div>
//         <section className={styles.section}>
//           <div className={styles.dateInput}>
//             <label className={styles.label}>Date:</label>
//             <input
//               type="date"
//               name="date"
//               className={styles.input}
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>
//           <div className={styles.searchInput}>
//             <label className={styles.label}>Search by Name:</label>
//             <input
//               type="text"
//               name="searchName"
//               className={styles.input}
//               value={searchName}
//               onChange={(e) => setSearchName(e.target.value)}
//               placeholder="Enter Name"
//             />
//           </div>
//           <div className={styles.searchInput}>
//             <label className={styles.label}>Search by Roll No:</label>
//             <input
//               type="text"
//               name="searchRollNo"
//               className={styles.input}
//               value={searchRollNo}
//               onChange={(e) => setSearchRollNo(e.target.value)}
//               placeholder="Enter Roll No"
//             />
//           </div>
//         </section>

//         {loading ? (
//           <div className="spinner" role="status">
//             <span className="loader"></span>
//           </div>
//         ) : (
//           <div className={styles.tableContainer}>
//             <div className={styles.tableSection}>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>SNo.</th>
//                     <th>Name</th>
//                     <th>Roll No.</th>
//                     <th>Date</th>
//                     <th className={styles.attendance}>Attendance</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredStudents?.map((student, index) => (
//                     <React.Fragment key={index}>
//                       {student.attendance.length === 0 && (
//                         <tr>
//                           <td>{index + 1}</td>
//                           <td>{student.Name}</td>
//                           <td>{student.rollNo}</td>
//                           <td colSpan="2">No attendance recorded</td>
//                         </tr>
//                       )}
//                       {student.attendance.map((attendance, idx) => (
//                         <tr key={idx}>
//                           {idx === 0 && (
//                             <>
//                               <td rowSpan={student.attendance.length}>
//                                 {index + 1}
//                               </td>
//                               <td rowSpan={student.attendance.length}>
//                                 {student.Name}
//                               </td>
//                               <td rowSpan={student.attendance.length}>
//                                 {student.rollNo}
//                               </td>
//                             </>
//                           )}
//                           <td>
//                             {new Date(attendance.date).toLocaleDateString(
//                               "en-GB",
//                               {
//                                 day: "2-digit",
//                                 month: "2-digit",
//                                 year: "numeric",
//                               }
//                             )}
//                           </td>
//                           <td>{attendance.present ? "Present" : "Absent"}</td>
//                         </tr>
//                       ))}
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Attendance;

// import React, { useState } from "react";
// import { FaFilter, FaCheck, FaTimes } from "react-icons/fa";

// const Attendance = () => {
//   const [classFilter, setClassFilter] = useState("");
//   const [sectionFilter, setSectionFilter] = useState("");
//   const [dateFilter, setDateFilter] = useState("");

//   const attendanceData = [
//     { sno: 1, class: "10", section: "A", name: "John Doe", roll: "101", date: "2025-03-08", status: "Present" },
//     { sno: 2, class: "10", section: "B", name: "Jane Smith", roll: "102", date: "2025-03-08", status: "Absent" },
//     { sno: 3, class: "11", section: "A", name: "Alice Brown", roll: "103", date: "2025-03-08", status: "Present" },
//   ];

//   const filteredData = attendanceData.filter(
//     (item) =>
//       (classFilter ? item.class === classFilter : true) &&
//       (sectionFilter ? item.section === sectionFilter : true) &&
//       (dateFilter ? item.date === dateFilter : true)
//   );

//   return (
//     <><Navbar />
//     <div className="bg-white p-6 rounded-xl shadow-lg w-full ">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
//         <FaFilter className="text-blue-600" /> Attendance Records
//       </h2>

//       <div className="flex gap-4 mb-6">
//         <select
//           className="p-2 border rounded-lg w-1/3"
//           value={classFilter}
//           onChange={(e) => setClassFilter(e.target.value)}
//         >
//           <option value="">Select Class</option>
//           <option value="10">Class 10</option>
//           <option value="11">Class 11</option>
//         </select>
//         <select
//           className="p-2 border rounded-lg w-1/3"
//           value={sectionFilter}
//           onChange={(e) => setSectionFilter(e.target.value)}
//         >
//           <option value="">Select Section</option>
//           <option value="A">Section A</option>
//           <option value="B">Section B</option>
//         </select>
//         <input
//           type="date"
//           className="p-2 border rounded-lg w-1/3"
//           value={dateFilter}
//           onChange={(e) => setDateFilter(e.target.value)} />
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
//           <thead>
//             <tr className="bg-blue-600 text-blue">
//               <th className="p-3 text-left">SNo.</th>
//               <th className="p-3 text-left">Class</th>
//               <th className="p-3 text-left">Section</th>
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Roll No</th>
//               <th className="p-3 text-left">Date</th>
//               <th className="p-3 text-left">Attendance</th>
//               <th className="p-3 text-left">Percentage</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.map((item, index) => (
//               <tr key={index} className="border-b hover:bg-gray-100">
//                 <td className="p-3">{item.sno}</td>
//                 <td className="p-3">{item.class}</td>
//                 <td className="p-3">{item.section}</td>
//                 <td className="p-3">{item.name}</td>
//                 <td className="p-3">{item.roll}</td>
//                 <td className="p-3">{item.date}</td>
//                 <td className="p-3 flex items-center gap-2">
//                   {item.status === "Present" ? (
//                     <FaCheck className="text-green-500" />
//                   ) : (
//                     <FaTimes className="text-red-500" />
//                   )}
//                 </td>
//                 <td className="p-3">55%</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div></>
//   );
// };

// export default Attendance;

import React, { useEffect, useState } from "react";
import { FaFilter, FaCheck, FaTimes, FaUserGraduate, FaChalkboardTeacher, FaSearch } from "react-icons/fa";
import Navbar from "../../Components/AdminDashboard/Navbar";
import { Axios } from "../../Utils/axios";

const Attendance = () => {
  const [classFilter, setClassFilter] = useState("");
  const [sectionFilter, setSectionFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("student");
  const [students, setStudents] = useState("");

  const studentAttendanceData = [
    { sno: 1, class: "10", section: "A", name: "John Doe", roll: "101", date: "2025-03-08", status: "Present" },
    { sno: 2, class: "10", section: "B", name: "Jane Smith", roll: "102", date: "2025-03-08", status: "Absent" },
    { sno: 3, class: "11", section: "A", name: "Alice Brown", roll: "103", date: "2025-03-08", status: "Present" },
  ];

  const teacherAttendanceData = [
    { sno: 1, name: "Mr. Johnson", subject: "Math", date: "2025-03-08", status: "Present" },
    { sno: 2, name: "Ms. Davis", subject: "Science", date: "2025-03-08", status: "Absent" },
  ];

  const filteredData = (view === "student" ? studentAttendanceData : teacherAttendanceData).filter(
    (item) =>
      (dateFilter ? item.date === dateFilter : true) &&
      (searchTerm ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await Axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/students`, {
        withCredentials: true
      })
      console.log(response.data.data);  
      setStudents(response.data.data)
    }

    fetchStudents();
  }, [])

  return (
    <><Navbar /><div className="bg-white p-6 rounded-xl shadow-lg w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <FaFilter className="text-blue-600" /> Attendance Records
      </h2>

      <div className="flex justify-between mb-6">
        <div className="flex gap-4">
          {view === "student" && (
            <>
              <select className="p-2 border rounded-lg" value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
                <option value="">Select Class</option>
                <option value="10">Class 10</option>
                <option value="11">Class 11</option>
              </select>
              <select className="p-2 border rounded-lg" value={sectionFilter} onChange={(e) => setSectionFilter(e.target.value)}>
                <option value="">Select Section</option>
                <option value="A">Section A</option>
                <option value="B">Section B</option>
              </select>
            </>
          )}


          <input
            type="text"
            placeholder="Search by name"
            className="p-2  border rounded-lg text-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
          {/* <FaSearch className="absolute left-2 top-3 text-gray-500" /> */}

          <input type="date" className="p-2 border rounded-lg" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} />
        </div>
        <button
          className="p-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
          onClick={() => setView(view === "student" ? "teacher" : "student")}
        >
          {view === "student" ? <FaChalkboardTeacher /> : <FaUserGraduate />} {view === "student" ? "View Teacher Attendance" : "View Student Attendance"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-blue">
              <th className="p-3 text-left">SNo.</th>
              <th className="p-3 text-left">Name</th>
              {view === "student" ? (
                <>
                  <th className="p-3 text-left">Class</th>
                  <th className="p-3 text-left">Section</th>
                  <th className="p-3 text-left">Roll No</th>
                </>
              ) : (
                <th className="p-3 text-left">Subject</th>
              )}
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Attendance</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{item.sno}</td>
                <td className="p-3">{item.name}</td>
                {view === "student" ? (
                  <>
                    <td className="p-3">{item.class}</td>
                    <td className="p-3">{item.section}</td>
                    <td className="p-3">{item.roll}</td>
                  </>
                ) : (
                  <td className="p-3">{item.subject}</td>
                )}
                <td className="p-3">{item.date}</td>
                <td className="p-3 flex items-center gap-2">
                  {item.status === "Present" ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  );
};

export default Attendance;
