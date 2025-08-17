import { useState } from "react";
import Navbar from "../../../Components/Navbar";
import StudentForm from "../../../Components/AdminDashboard/Registration/StudentForm";
import TeacherForm from "../../../Components/AdminDashboard/Registration/TeacherForm";
import "../../../style/AdminDashboard/Registration.css";

function Registration() {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <>
      <Navbar />
      <div className="dashboard_layout flex flex-col  pl-20">
        <div className="flex justify-start w-full mb-6 border-b border-gray-200">
          <button
            className={`px-6 py-2 font-semibold transition-colors duration-300 ${
              activeTab === "student"
                ? "border-b-4 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("student")}
          >
            Student
          </button>

          <button
            className={`px-6 py-2 font-semibold transition-colors duration-300 ${
              activeTab === "teacher"
                ? "border-b-4 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab("teacher")}
          >
            Teacher
          </button>
        </div>

        <div className="flex w-full">
          {/* Left Side: Content */}
          <div className="w-1/2 pr-4 border-r border-gray-200">
            <h2 className="text-xl font-bold mb-4">
              Add a New {activeTab === "student" ? "Student" : "Teacher"} Entry
            </h2>
            <p className="text-gray-600 mb-4">
              Here you can manage and add details for students or teachers.
              Select the appropriate tab above to get started.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Ensure all required fields are filled.</li>
              <li>Click on "Submit" to save the information.</li>
              <li>You can switch between student and teacher forms.</li>
            </ul>
          </div>

          <div className="w-full pl-6">
            <h2 className="text-xl font-bold mb-4">
               {activeTab === "student" ? "Student" : "Teacher"} Form !!
            </h2>
            {activeTab === "student" && <StudentForm />}
            {activeTab === "teacher" && <TeacherForm />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
