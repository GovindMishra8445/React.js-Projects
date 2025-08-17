import React from "react";
import StudentNavbar from "./StudentNavbar2";

const StudentProfile = () => {
  const student = {
    name: "John Doe",
    email: "johndoe@example.com",
    enrollment: "2023123456",
    program: "Bachelor of Science in Computer Science",
    year: "3rd Year",
    profilePic: "https://picsum.photos/200/300",
    bio: "Passionate about technology and coding. Always eager to learn new things!",
    skills: ["JavaScript", "React", "Python", "C++"],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <StudentNavbar />
      <div className="p-6 max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img
            src={student.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{student.name}</h2>
          <p className="text-gray-600">{student.email}</p>
          <p className="text-gray-600">Enrollment No: {student.enrollment}</p>
          <p className="text-gray-600">Program: {student.program}</p>
          <p className="text-gray-600">Year: {student.year}</p>
          <p className="mt-4 text-gray-700 italic">"{student.bio}"</p>
          
          <div className="mt-4 text-left">
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <ul className="mt-2 grid grid-cols-2 gap-2">
              {student.skills.map((skill, index) => (
                <li key={index} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-center">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
