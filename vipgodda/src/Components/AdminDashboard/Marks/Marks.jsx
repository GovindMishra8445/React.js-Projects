import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../Navbar";

const MarksManagement = () => {
  const [studentData, setStudentData] = useState({
    name: "",
    rollNumber: "",
    semester: "First Semester",
    subjects: [
      { name: "Anatomy", marks: "" },
      { name: "Physiology", marks: "" },
      { name: "Biochemistry", marks: "" },
      { name: "Pathology", marks: "" },
      { name: "Microbiology", marks: "" },
    ],
    cgpa: "",
    dgpa: "",
  });

  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleMarksChange = (index, value) => {
    const updatedSubjects = [...studentData.subjects];
    updatedSubjects[index].marks = value;
    setStudentData({ ...studentData, subjects: updatedSubjects });
  };

  const calculateGPA = () => {
    let totalMarks = 0;
    studentData.subjects.forEach((subject) => {
      totalMarks += Number(subject.marks);
    });
    const cgpa = (totalMarks / (studentData.subjects.length * 100)) * 10;
    setStudentData({ ...studentData, cgpa: cgpa.toFixed(2), dgpa: cgpa.toFixed(2) });
  };

  const handleDownloadPDF = async () => {
    const doc = new jsPDF("p", "mm", "a4");
    const canvas = await html2canvas(document.getElementById("marksheet"));
    const imgData = canvas.toDataURL("image/png");
    doc.addImage(imgData, "PNG", 10, 10, 190, 0);
    doc.save("Marksheet.pdf");
  };

  return (
    <><Navbar /><div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-4">Marks Management</h2>

      <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg bg-gray-50">
        <input type="text" name="name" placeholder="Student Name" value={studentData.name} onChange={handleChange} className="p-2 border rounded" />
        <input type="text" name="rollNumber" placeholder="Roll Number" value={studentData.rollNumber} onChange={handleChange} className="p-2 border rounded" />
      </div>

      <h3 className="text-xl font-semibold mt-4">Enter Marks</h3>
      <div className="p-4 border rounded-lg bg-gray-50">
        {studentData.subjects.map((subject, index) => (
          <div key={index} className="flex justify-between p-2">
            <span>{subject.name}</span>
            <input type="number" value={subject.marks} onChange={(e) => handleMarksChange(index, e.target.value)} className="p-2 border rounded w-24" />
          </div>
        ))}
      </div>
      <button onClick={calculateGPA} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Calculate GPA</button>

      {/* Marksheet Display */}
      <div id="marksheet" className="mt-6 p-6 border rounded-lg bg-gray-100">
        <h3 className="text-xl font-semibold text-center">Marksheet</h3>
        <p>Name: {studentData.name}</p>
        <p>Roll Number: {studentData.rollNumber}</p>
        <p>Semester: {studentData.semester}</p>
        <table className="w-full mt-4 border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Marks</th>
            </tr>
          </thead>
          <tbody>
            {studentData.subjects.map((subject, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{subject.name}</td>
                <td className="border px-4 py-2">{subject.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-4 font-semibold">CGPA: {studentData.cgpa}</p>
        <p className="font-semibold">DGPA: {studentData.dgpa}</p>
      </div>

      <div className="mt-6 flex justify-between">
        <button onClick={() => window.print()} className="bg-green-500 text-white px-4 py-2 rounded shadow">Print</button>
        <button onClick={handleDownloadPDF} className="bg-purple-500 text-white px-4 py-2 rounded shadow">Download PDF</button>
      </div>
    </div></>
  );
};

export default MarksManagement;
