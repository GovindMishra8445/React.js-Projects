
import { useEffect, useState } from "react";
import Navbar from "../../Components/AdminDashboard/Navbar";
import ExamEditModel from "../../Components/AdminDashboard/Exam/ExamEditModel";
import ExamFormModel from "../../Components/AdminDashboard/Exam/ExamFormModel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Exam = () => {
  const [exams, setExams] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editExamData, setEditExamData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = async () => {
    try {
      const response = await fetch("https://university-project-paresh.onrender.com/University/ExamRoute/exams");
      const data = await response.json();
      setExams(data);
    } catch (error) {
      console.error("Error fetching exams:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditExam = (examId, updatedExamData) => {
    setExams(exams.map((exam) => (exam._id === examId ? { ...exam, ...updatedExamData } : exam)));
  };

  const deleteRow = async (examId) => {
    try {
      await fetch(`https://university-project-paresh.onrender.com/University/ExamRoute/exams/${examId}`, { method: "DELETE" });
      setExams(exams.filter((exam) => exam._id !== examId));
      alert("Exam deleted successfully");
    } catch (error) {
      console.error("Error deleting exam:", error);
    }
  };

  const addExam = (newExam) => {
    setExams([...exams, newExam.examDetails]);
  };

  const indexOfLastRow = currentPage * itemsPerPage;
  const indexOfFirstRow = indexOfLastRow - itemsPerPage;
  const currentExams = exams.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <>
      <Navbar />
      <div className="dashboard_layout examList p-6 bg-gray-100 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-700">All Exam Lists</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setShowForm(true)}>Add Exam</button>
        </div>
        {showForm && <ExamFormModel onAddExam={addExam} setShowForm={setShowForm} />}
        {showEditForm && <ExamEditModel examId={editExamData._id} initialExamData={editExamData} onEditExam={handleEditExam} setShowEditForm={setShowEditForm} />}
        {loading ? (
          <div className="flex justify-center items-center h-32"><span className="loader"></span></div>
        ) : (
          <div className="bg-white p-4 rounded-lg shadow">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">S.No</th>
                  <th className="p-2 border">Exam Branch</th>
                  <th className="p-2 border">Exam Type</th>
                  <th className="p-2 border">Subject</th>
                  <th className="p-2 border">Year</th>
                  <th className="p-2 border">Timing</th>
                  <th className="p-2 border">Marks</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Edit</th>
                  <th className="p-2 border">Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentExams.map((exam, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="p-2 border text-center">{index + 1}</td>
                    <td className="p-2 border text-center">{exam.examBranch}</td>
                    <td className="p-2 border text-center">{exam.examType}</td>
                    <td className="p-2 border text-center">{exam.examSubject}</td>
                    <td className="p-2 border text-center">{exam.examYear}</td>
                    <td className="p-2 border text-center">{exam.examTiming}</td>
                    <td className="p-2 border text-center">{exam.examMarks}</td>
                    <td className="p-2 border text-center">{exam.examDate}</td>
                    <td className="p-2 border text-center">
                      <button className="text-yellow-500" onClick={() => { setEditExamData(exam); setShowEditForm(true); }}>Edit</button>
                    </td>
                    <td className="p-2 border text-center">
                      <button className="text-red-500" onClick={() => deleteRow(exam._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex justify-between items-center mt-4">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="text-gray-600 hover:text-gray-900">
            <FaChevronLeft />
          </button>
          <span>{currentPage} / {Math.ceil(exams.length / itemsPerPage)}</span>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastRow >= exams.length} className="text-gray-600 hover:text-gray-900">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Exam;
