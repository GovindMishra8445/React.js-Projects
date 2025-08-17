import { useState } from "react";
import { FiX } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Axios } from "../../../Utils/axios";

const CourseFormModel = ({ onAddCourse, setShowForm }) => {
  const [formData, setFormData] = useState({
    gradeLevel: "",
    registrationFee: "",
    admissionFee: "",
    tutionFee: "",
    examFee: ""
  });

  console.log(formData)

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   fetch(
  //     "https://university-project-paresh.onrender.com/University/Course/addCourse",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(formData)
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("data", data);
  //       onAddCourse(data);
  //       toast.success("Course added successfully");
  //       setShowForm(false);
  //     })
  //     .catch((error) => {
  //       toast.error("Failed to add course. Please try again later.");
  //       console.error("Error adding course:", error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/classes`,{
        name: "",
        gradeLevel: formData.gradeLevel,
        registrationFee: formData.registrationFee, 
        admissionFee: formData.admissionFee,
        tutionFee: formData.tutionFee,
        examFee: formData.examFee, 
      }, { withCredentials: true });
      console.log(response.data)
      setShowForm(false);
    } catch (error) {
      console.error("Error adding course:", error);
    } finally {
      setLoading(false)
    }
  }

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="addCourseModal">
      <ToastContainer />
      <div className="modalContent">
        <div className="modalHeader">
          <div className="modalCloseButton relative left-[98%] text-xl">
            <button className="closeButton" onClick={handleCloseForm}>
              <FiX />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="modalForm">
          <div className="fornGroup">
            <label htmlFor="course-name">Class Name:</label>
            <input
              type="text"
              id="course-name"
              name="gradeLevel"
              value={formData.gradeLevel}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Registration Fee</label>
            <input
              type="text"
              id="registrationFee"
              name="registrationFee"
              value={formData.registrationFee}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Admission Fee</label>
            <input
              type="text"
              id="admissionFee"
              name="admissionFee"
              value={formData.admissionFee}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Tution Fee</label>
            <input
              type="text"
              id="tutionFee"
              name="tutionFee"
              value={formData.tutionFee}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Examination Fee</label>
            <input
              type="text"
              id="examFee"
              name="examFee"
              value={formData.examFee}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          {/* <div className="fornGroup">
            <label htmlFor="course-date">Course Year:</label>
            <input
              type="date"
              id="course-date"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="inputField"
            />
          </div> */}
          {/* <button type="submit" className="submitButton bg-blue-600  py-2 px-5 w-[10%]">
            {loading ? (
              <div className="spinner" role="status">
                <span className="loader">Loading...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button> */}
          <button className="bg-blue-600  py-2 px-5 w-[20%] rounded-xl mb-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CourseFormModel;
