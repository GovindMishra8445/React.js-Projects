import { useState } from "react";
import { FiX } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Axios } from "../../../Utils/axios";

const TeacherFormModel = ({ onAddCourse, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    aadharNumber: "",
    mothersName: "",
    street_add: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    department: "",  
  });

//   console.log(formData)

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/teachers`,{
        name: formData.name,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
        aadharNumber: formData.aadharNumber,
        mothersName: formData.mothersName,
        street_add: formData.street_add,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        pin: formData.pin,
        gender: formData.gender,
        dob: formData.dob,
        bloodGroup: formData.bloodGroup,
        department: formData.department,
      }, { withCredentials: true });
      console.log(response.data)
      setShowForm(false)
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
        <div className="modalHeader flex ">
          <div className="modalTitle">
          </div>
          <div className="modalCloseButton">
            <button className="closeButton" onClick={handleCloseForm}>
              <FiX />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="modalForm">
          <div className="fornGroup">
            <label htmlFor="course-name">Teacher Name</label>
            <input
              type="text"
              id="course-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-name">Email</label>
            <input
              type="text"
              id="course-name"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-name">Mobile Number</label>
            <input
              type="text"
              id="course-name"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Aadhar Number</label>
            <input
              type="text"
              id="registrationFee"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              className="inputField"
              maxLength={12}
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Mother's Name</label>
            <input
              type="text"
              name="mothersName"
              value={formData.mothersName}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Street Address</label>
            <input
              type="text"
              id="tutionFee"
              name="street_add"
              value={formData.street_add}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">City</label>
            <input
              type="text"
              id="examFee"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">State</label>
            <input
              type="text"
              id="examFee"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Country</label>
            <input
              type="text"
              id="examFee"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Pin</label>
            <input
              type="text"
              id="examFee"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label>Gender</label>
            <select name="gender" onChange={handleChange} className="inputField">
                <option value="">Choose Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Date of birth</label>
            <input
              type="date"
              id="examFee"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="inputField"
            />
          </div>
          <div className="fornGroup">
            <label className="fornGroup">Blood Group</label>
            <select name="bloodGroup" onChange={handleChange} className="w-full p-2 border rounded-md">
                <option value="">Select a category</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="O+">O+</option>
                <option value="A-">A-</option>
                <option value="B-">B-</option>
                <option value="AB-">AB-</option>
                <option value="O-">O-</option>
            </select>
          </div>
          <div className="fornGroup">
            <label htmlFor="course-fee">Department</label>
            <input
              type="text"
              id="examFee"
              name="department"
              value={formData.department}
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

export default TeacherFormModel;