import React, { useState } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaCheck, FaTimes, FaDownload, FaSearch } from "react-icons/fa";
import Navbar from "../../Components/AdminDashboard/Navbar";

const DocumentManagement = () => {
  const [view, setView] = useState("student");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [docTypeFilter, setDocTypeFilter] = useState("");

  const studentDocuments = [
    { id: 1, name: "John Doe", docName: "SLC", type: "PDF", uploadDate: "2025-03-15", status: "Verified" },
    { id: 2, name: "Jane Smith", docName: "CLC", type: "PDF", uploadDate: "2025-03-12", status: "Pending" },
    { id: 3, name: "Alice Brown", docName: "Aadhar", type: "PDF", uploadDate: "2025-03-10", status: "Verified" },
    { id: 4, name: "Bob Martin", docName: "PAN", type: "PDF", uploadDate: "2025-03-08", status: "Pending" },
  ];

  const teacherDocuments = [
    { id: 1, name: "Mr. Johnson", docName: "SLC", type: "PDF", uploadDate: "2025-03-10", status: "Verified" },
    { id: 2, name: "Ms. Davis", docName: "CLC", type: "PDF", uploadDate: "2025-03-08", status: "Pending" },
    { id: 3, name: "Dr. Lee", docName: "Aadhar", type: "PDF", uploadDate: "2025-03-05", status: "Verified" },
    { id: 4, name: "Prof. Smith", docName: "PAN", type: "PDF", uploadDate: "2025-03-02", status: "Pending" },
  ];

  const filteredData = (view === "student" ? studentDocuments : teacherDocuments).filter(
    (item) =>
      (statusFilter ? item.status === statusFilter : true) &&
      (docTypeFilter ? item.docName === docTypeFilter : true) &&
      (searchTerm ? item.name.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  return (
    <><Navbar /><div className="bg-white p-6 rounded-xl shadow-lg w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        {view === "student" ? <FaUserGraduate className="text-blue-600" /> : <FaChalkboardTeacher className="text-blue-600" />}
        {view === "student" ? "Student Documents" : "Teacher Documents"}
      </h2>

      <div className="flex justify-between mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by name"
            className="p-2 pl-8 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
          <select className="p-2 border rounded-lg" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Status</option>
            <option value="Verified">Verified</option>
            <option value="Pending">Pending</option>
          </select>
          <select className="p-2 border rounded-lg" value={docTypeFilter} onChange={(e) => setDocTypeFilter(e.target.value)}>
            <option value="">All Documents</option>
            <option value="SLC">SLC</option>
            <option value="CLC">CLC</option>
            <option value="Aadhar">Aadhar</option>
            <option value="PAN">PAN</option>
          </select>
        </div>
        <button
          className="p-2 bg-blue-600 text-white rounded-lg flex items-center gap-2"
          onClick={() => setView(view === "student" ? "teacher" : "student")}
        >
          {view === "student" ? <FaChalkboardTeacher /> : <FaUserGraduate />} {view === "student" ? "View Teacher Documents" : "View Student Documents"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Document Name</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Upload Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.docName}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3">{item.uploadDate}</td>
                <td className="p-3 flex items-center gap-2">
                  {item.status === "Verified" ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
                </td>
                <td className="p-3">
                  <button className="p-2 bg-gray-200 rounded-lg flex items-center gap-2">
                    <FaDownload /> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  );
};

export default DocumentManagement;
