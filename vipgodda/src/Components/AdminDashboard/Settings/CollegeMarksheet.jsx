import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../Navbar";

const Marksheet = () => {
  const marksheetRef = useRef();
  const [studentData, setStudentData] = useState({
    name: "John Doe",
    rollNo: "MC202401",
    dob: "2003-05-14",
    course: "MBBS",
    semester: "First Semester",
    subjects: [
      { name: "Anatomy", marks: 85, grade: "A" },
      { name: "Physiology", marks: 78, grade: "B+" },
      { name: "Biochemistry", marks: 82, grade: "A-" },
      { name: "Pathology", marks: 74, grade: "B" },
      { name: "Pharmacology", marks: 88, grade: "A" },
    ],
    cgpa: "3.75",
    dgpa: "3.80",
  });

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(marksheetRef.current);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
    pdf.save("Marksheet.pdf");
  };

  return (
    <><Navbar /><div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-xl border border-gray-200">
          <div ref={marksheetRef} className="p-8 border-2 border-gray-300 bg-gray-50 rounded-lg">
              <div className="text-center mb-6">
                  <img src="https://via.placeholder.com/150" alt="College Logo" className="w-24 mx-auto mb-4" />
                  <h1 className="text-3xl font-bold uppercase">Medical College Name</h1>
                  <p className="text-lg font-semibold">Affiliated with XYZ University</p>
                  <p className="text-sm text-gray-600">Address: XYZ Road, City, Country</p>
              </div>

              <h2 className="text-2xl font-bold text-center my-4">First Semester Marksheet</h2>

              <div className="text-lg space-y-2">
                  <p><strong>Student Name:</strong> {studentData.name}</p>
                  <p><strong>Roll No:</strong> {studentData.rollNo}</p>
                  <p><strong>Date of Birth:</strong> {studentData.dob}</p>
                  <p><strong>Course:</strong> {studentData.course}</p>
                  <p><strong>Semester:</strong> {studentData.semester}</p>
              </div>

              <table className="w-full mt-4 border-collapse border border-gray-400">
                  <thead>
                      <tr className="bg-gray-200">
                          <th className="border border-gray-400 p-2">Subject</th>
                          <th className="border border-gray-400 p-2">Marks</th>
                          <th className="border border-gray-400 p-2">Grade</th>
                      </tr>
                  </thead>
                  <tbody>
                      {studentData.subjects.map((subject, index) => (
                          <tr key={index} className="text-center">
                              <td className="border border-gray-400 p-2">{subject.name}</td>
                              <td className="border border-gray-400 p-2">{subject.marks}</td>
                              <td className="border border-gray-400 p-2">{subject.grade}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>

              <div className="mt-4 text-lg font-semibold">
                  <p><strong>CGPA:</strong> {studentData.cgpa}</p>
                  <p><strong>DGPA:</strong> {studentData.dgpa}</p>
              </div>

              <div className="flex justify-between mt-10">
                  <div>
                      <p className="border-t border-black w-48 text-center pt-2">Principal's Signature</p>
                  </div>
                  <div>
                      <p className="border-t border-black w-48 text-center pt-2">College Seal</p>
                  </div>
              </div>
          </div>

          <div className="mt-6 flex justify-between">
              <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded shadow">Print Marksheet</button>
              <button onClick={handleDownloadPDF} className="bg-green-500 text-white px-4 py-2 rounded shadow">Download PDF</button>
          </div>
      </div></>
  );
};

export default Marksheet;
