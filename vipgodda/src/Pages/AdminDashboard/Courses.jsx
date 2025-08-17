


import { useEffect, useState } from "react";
import Navbar from "../../Components/AdminDashboard/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CourseFormModel from "../../Components/AdminDashboard/Courses/CourseFormModel";
import CourseEditModel from "../../Components/AdminDashboard/Courses/CourseEditModel";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Axios } from "../../Utils/axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editCourseData, setEditCourseData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
      handleGetData();
  }, []);

  const handleGetData = async () => {
    // const token = localStorage.getItem("token");
    try {
      const response = await Axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/classes`,
        { withCredentials: true }
      );
      setCourses(response.data.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    } finally {
      setLoading(false);
    }
  };

  // const handleEditCourse = (courseId, updatedCourseData) => {
  //   setCourses(
  //     courses.map((course) =>
  //       course._id === courseId ? { ...course, ...updatedCourseData } : course
  //     )
  //   );
  // };

  // const deleteRow = async (courseId) => {
  //   try {
  //     await axios.delete(
  //       `https://university-project-paresh.onrender.com/University/Course/deleteCourse/${courseId}`
  //     );
  //     handleGetData();
  //     toast.success("Course deleted successfully");
  //   } catch (error) {
  //     console.error("Error deleting schedule:", error);
  //     toast.error("Error deleting course");
  //   }
  // };

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse.courseDetails]);
  };

  const indexOfLastRow = currentPage * itemsPerPage;
  const indexOfFirstRow = indexOfLastRow - itemsPerPage;
  // const currentCourses = courses.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className="p-8 bg-gray-100 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">All Classes</h1>
         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setShowForm(true)}
          >
            Add Class
          </button>
        </div>

        {showForm && <CourseFormModel onAddCourse={addCourse} setShowForm={setShowForm} />}
        {showEditForm && (
          <CourseEditModel
            courseId={editCourseData._id}
            initialCourseData={editCourseData}
            onEditCourse={handleEditCourse}
            setShowEditForm={setShowEditForm}
          />
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-600 text-blue">
                <tr>
                  <th className="p-3">S.No</th>
                  <th className="p-3">Class Name</th>
                  <th className="p-3">Registration Fees</th>
                  <th className="p-3">Admission Fees</th>
                  <th className="p-3">Tution Fees</th>
                  <th className="p-3">Examination Fees</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{course.gradeLevel}</td>
                    <td className="p-3">{course.feeId.registrationFee}</td>
                    <td className="p-3">{course.feeId.admissionFee}</td>
                    <td className="p-3">{course.feeId.tutionFee}</td>
                    <td className="p-3">{course.feeId.examFee}</td>
                    {/* <td className="p-3">
                      <button
                        className="text-yellow-500"
                        onClick={() => {
                          setEditCourseData(course);
                          setShowEditForm(true);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="p-3">
                      <button
                        className="text-red-500"
                        onClick={() => deleteRow(course._id)}
                      >
                        Delete
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-center items-center mt-4 space-x-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 bg-gray-300 rounded disabled:opacity-50"
          >
            <FaChevronLeft />
          </button>
          <span className="text-lg font-medium">{currentPage}</span>
          <span>/ {Math.ceil(courses.length / itemsPerPage)}</span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastRow >= courses.length}
            className="p-2 bg-gray-300 rounded disabled:opacity-50"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Courses;

