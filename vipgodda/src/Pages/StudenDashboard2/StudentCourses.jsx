import React from "react";
import StudentNavbar from "./StudentNavbar2";

const courses = [
  { id: 1, name: "Mathematics", instructor: "Prof. John Doe", progress: 80 },
  { id: 2, name: "Physics", instructor: "Dr. Emily Carter", progress: 60 },
  { id: 3, name: "Chemistry", instructor: "Dr. Robert Brown", progress: 90 },
  { id: 4, name: "Computer Science", instructor: "Prof. Lisa White", progress: 70 },
];

const StudentCourses = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <StudentNavbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">My Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {courses.map((course) => (
            <div key={course.id} className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2>
              <p className="text-gray-600">Instructor: {course.instructor}</p>
              <div className="mt-4">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-gray-700 text-sm mt-1">Progress: {course.progress}%</p>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600">
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentCourses;