import React from "react";
import StudentNavbar from "./StudentNavbar2";

const grades = [
  { subject: "Mathematics", grade: "A", credits: 3 },
  { subject: "Physics", grade: "B+", credits: 4 },
  { subject: "Chemistry", grade: "A-", credits: 3 },
  { subject: "Computer Science", grade: "A", credits: 4 },
  { subject: "English", grade: "B", credits: 2 },
];

const StudentGrades = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <StudentNavbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600">My Grades</h1>
        
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3 border border-gray-200">Subject</th>
                <th className="p-3 border border-gray-200">Grade</th>
                <th className="p-3 border border-gray-200">Credits</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((course, index) => (
                <tr key={index} className="text-center border border-gray-200">
                  <td className="p-3 border border-gray-200">{course.subject}</td>
                  <td className="p-3 border border-gray-200 font-bold text-blue-600">{course.grade}</td>
                  <td className="p-3 border border-gray-200">{course.credits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentGrades;