// import React from "react";
// import StudentNavbar from "./StudentNavbar2";

// const attendanceRecords = [
//   { date: "2025-03-01", status: "Present" },
//   { date: "2025-03-02", status: "Absent" },
//   { date: "2025-03-03", status: "Present" },
//   { date: "2025-03-04", status: "Present" },
//   { date: "2025-03-05", status: "Late" },
//   { date: "2025-03-06", status: "Present" },
//   { date: "2025-03-07", status: "Absent" },
// ];

// const getStatusColor = (status) => {
//   switch (status) {
//     case "Present":
//       return "bg-green-500";
//     case "Absent":
//       return "bg-red-500";
//     case "Late":
//       return "bg-yellow-500";
//     default:
//       return "bg-gray-500";
//   }
// };

// const calculateAttendancePercentage = () => {
//   const totalDays = attendanceRecords.length;
//   const presentDays = attendanceRecords.filter(record => record.status === "Present").length;
//   return ((presentDays / totalDays) * 100).toFixed(2);
// };

// const StudentAttendance = () => {
//   const attendancePercentage = calculateAttendancePercentage();

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <StudentNavbar />
//       <div className="p-6 max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-blue-600">Attendance Record</h1>
        
//         <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
//           <div className="text-center mb-4">
//             <h2 className="text-xl font-semibold">Overall Attendance</h2>
//             <p className="text-2xl font-bold text-blue-600">{attendancePercentage}%</p>
//           </div>

//           <table className="w-full border-collapse border border-gray-200">
//             <thead>
//               <tr className="bg-blue-500 text-white">
//                 <th className="p-3 border border-gray-200">Date</th>
//                 <th className="p-3 border border-gray-200">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceRecords.map((record, index) => (
//                 <tr key={index} className="text-center border border-gray-200">
//                   <td className="p-3 border border-gray-200">{record.date}</td>
//                   <td className="p-3 border border-gray-200 font-bold">
//                     <span className={`px-4 py-1 text-white rounded-lg ${getStatusColor(record.status)}`}>
//                       {record.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentAttendance;
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Pie } from "react-chartjs-2";
  import { saveAs } from "file-saver";
  import StudentNavbar from "./StudentNavbar2";
  
  // Register required Chart.js elements
  ChartJS.register(ArcElement, Tooltip, Legend);
  
const attendanceRecords = [
  { date: "2025-03-01", status: "Present" },
  { date: "2025-03-02", status: "Absent" },
  { date: "2025-03-03", status: "Present" },
  { date: "2025-03-04", status: "Present" },
  { date: "2025-03-05", status: "Late" },
  { date: "2025-03-06", status: "Present" },
  { date: "2025-03-07", status: "Absent" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Present":
      return "bg-green-500";
    case "Absent":
      return "bg-red-500";
    case "Late":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

const calculateAttendancePercentage = () => {
  const totalDays = attendanceRecords.length;
  const presentDays = attendanceRecords.filter(record => record.status === "Present").length;
  return ((presentDays / totalDays) * 100).toFixed(2);
};

const exportData = () => {
  const csvData = attendanceRecords.map(record => `${record.date},${record.status}`).join("\n");
  const blob = new Blob(["Date,Status\n" + csvData], { type: "text/csv" });
  saveAs(blob, "attendance.csv");
};

const StudentAttendance = () => {
  const attendancePercentage = calculateAttendancePercentage();
  
  const chartData = {
    labels: ["Present", "Absent", "Late"],
    datasets: [
      {
        data: [
          attendanceRecords.filter(r => r.status === "Present").length,
          attendanceRecords.filter(r => r.status === "Absent").length,
          attendanceRecords.filter(r => r.status === "Late").length,
        ],
        backgroundColor: ["#34D399", "#F87171", "#FBBF24"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <StudentNavbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600">Attendance Record</h1>
        
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <div className="text-center mb-4">
            <h2 className="text-xl font-semibold">Overall Attendance</h2>
            <p className="text-2xl font-bold text-blue-600">{attendancePercentage}%</p>
          </div>

          <div className="flex justify-center my-6">
            <Pie data={chartData} />
          </div>

          <button 
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            onClick={exportData}
          >
            Export CSV
          </button>

          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3 border border-gray-200">Date</th>
                <th className="p-3 border border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceRecords.map((record, index) => (
                <tr key={index} className="text-center border border-gray-200">
                  <td className="p-3 border border-gray-200">{record.date}</td>
                  <td className="p-3 border border-gray-200 font-bold">
                    <span className={`px-4 py-1 text-white rounded-lg ${getStatusColor(record.status)}`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;

