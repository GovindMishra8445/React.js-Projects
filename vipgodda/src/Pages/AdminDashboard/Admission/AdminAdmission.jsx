import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import Navbar from "../../../Components/AdminDashboard/Navbar";
import AdmissionStudentModal from "../../../Components/AdminDashboard/Admission/AdmissionStudentModal";
import { Axios } from "../../../Utils/axios";
import Modal from "../../../Components/Modal";

const AdminAdmission = () => {
  const [admission, setAdmission] = useState([]);
  const [filteredAdmission, setFilteredAdmission] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAdmission, setSelectedAdmission] = useState(null);
  const [courseOptions, setCourseOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectPayment, setSelectPayment] = useState("") 
  const [classes, setClasses] = useState([])

  // console.log(isOpen)

  useEffect(() => {
    // fetchCourses();
    fetchAdmission();
  }, []);

  // console.log(admission)

  const fetchAdmission = async () => {
    setLoading(true);
    try {
      const response = await Axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/admissions`,
        {
          withCredentials: true
        }
      );
      setAdmission(response.data.data)
    } catch (error) {
      console.error("Error fetching Admission:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {

  //     const fetchClasses = async () => {
  //         try {
  //             const response = await Axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/classes`, {withCredentials: true}) 
  //             setClasses(response.data.data)
  //         } catch (error) {
  //             console.error(error)
  //         }
  //     }

  //     fetchClasses();
  // }, [])

  // useEffect(() => {
  //   const filteredData = admission.filter(
  //     (entry) =>
  //       entry.courseTaken.toLowerCase().includes(selectedCourse.toLowerCase()) &&
  //       (entry.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         entry.email.toLowerCase().includes(searchQuery.toLowerCase()))
  //   );
  //   setFilteredAdmission(filteredData);
  // }, [selectedCourse, searchQuery, admission]);

  const handleApproved = async (id) => {
    const findApplicant = admission.find((applicant) => applicant.admissionno === id)
    setLoading(true);
    try {
      await Axios.put(`${import.meta.env.VITE_BASE_URL}/api/v1/admissions/approve`, {
         admissionId: findApplicant._id,
         paymentType: selectPayment,
          // name: findApplicant.studentId.name,
          // email: findApplicant.studentId.email,
          // mothersName: findApplicant.studentId.mothersName,
          // mobileNumber: findApplicant.studentId.mobileNumber,
          // yearOf10thPassout: findApplicant.studentId.yearOf10thPassout,
          // aadharNumber: findApplicant.studentId.aadharNumber,
          // street_add: findApplicant.studentId.street_add,
          // city: findApplicant.studentId.city,
          // state: findApplicant.studentId.state,
          // country: findApplicant.studentId.country,
          // pin: findApplicant.studentId.pin,
          // gender: findApplicant.studentId.gender,
          // dob: findApplicant.studentId.dob,
          // bloodGroup: findApplicant.studentId.bloodGroup,
          // branchName: findApplicant.studentId.branchName,
          // busService: findApplicant.busService,
          // hostelService: findApplicant.hostelService,
          // _id: findApplicant._id,
          // admissionYear: findApplicant.admissionYear,
          // applicationFormStatus: true,
        },
        {
          withCredentials: true
        }
      );
    } catch (error) {
      console.error("Error updating Data:", error);
    } finally {
      setLoading(false);
    }
    setIsOpen(false)
    fetchAdmission();
  }

    const handleSearch = () => {
        if (searchQuery === "") {
            return;
        } else {
            const filteredAdmission = admission.filter((applicant) => (applicant.studentId.userId.name || applicant.studentId.classId.gradeLevel || applicant.studentId.userId.email).toLowerCase().includes(searchQuery.toLowerCase()))
            setAdmission(filteredAdmission)
        }
    }
  

  return (
    <>
      <Navbar />
      <div className="dashboard_layout flex flex-col p-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Admission Lists</h1>
        <div className="flex justify-between items-center mb-6 gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search here..."
            className="p-3 border rounded-md w-full sm:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSearch}
            >
              Search
            </button>
          {/* <select
            id="courseFilter"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="p-3 pb-1 border rounded-md w-full sm:w-64"
          >
            <option value="">Select Branch</option>
            {courseOptions.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select> */}
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <span className="loader"></span>
          </div>
        ) : (
          <>
          <div className="overflow-x-auto rounded-lg bg-white shadow-lg p-2">
            <table className="bg-white border border-gray-300 rounded-lg">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-10 py-4 text-center text-md">Admission No.</th>
                  <th className="px-10 py-4 text-center text-md">Admission Year</th>
                  <th className="px-10 py-4 text-center text-md">Name</th>
                  <th className="px-10 py-4 text-center text-md">Class</th>
                  <th className="px-10 py-4 text-center text-md">Email</th>
                  <th className="px-10 py-4 text-center text-md">Gender</th>
                  <th className="px-10 py-4 text-center text-md">DateofBirth</th>
                  <th className="px-10 py-4 text-center text-md">Branch</th>
                  <th className="px-10 py-4 text-center text-md">Aadhar Number</th>
                  <th className="px-10 py-4 text-center text-md">Mobile No.</th>
                  <th className="px-10 py-4 text-center text-md">City</th>
                  <th className="px-10 py-4 text-center text-md">Approval</th>
                  <th className="px-10 py-4 text-center text-md">Actions</th>
                </tr>
              </thead>
              <tbody>
                {admission.map((applicant, index) => (
                  <>
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSelectedAdmission(applicant)}
                  >
                    <td className="px-10 py-4 border text-sm text-center">{applicant.admissionno}</td>
                    <td className="px-10 py-4 border text-sm text-center">{applicant.admissionYear}</td>
                    {/* <td className="p-3 flex items-center space-x-3"> */}
                      {/* <img
                        src={`https://i.pravatar.cc/40?u=${admission.email}`}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                      /> */}
                    <td className="px-10 py-4 border text-sm text-center capitalize">{applicant.studentId.userId.name}</td>
                    {/* </td> */}
                    <td className="px-10 py-4 border text-sm text-center">{applicant.studentId.classId.gradeLevel}</td>
                    <td className="px-10 py-4 border text-sm text-center">{applicant.studentId.userId.email}</td>
                    <td className="px-10 py-4 border text-sm text-center capitalize">{applicant.studentId.gender}</td>
                    <td className="px-10 py-4 border text-sm text-center">{applicant.studentId.dob}</td>
                    <td className="px-10 py-4 border text-sm text-center">{applicant.studentId.branchName}</td>
                    <td className="px-10 py-4 border text-sm text-center">
                      {applicant.studentId.aadharNumber}
                      {/* {admission.applicationFormStatus === "Confirm" ? "✅" : "❌"} */}
                    </td>
                    <td className="px-10 py-4 border text-sm text-center">{applicant.studentId.userId.mobileNumber}</td>
                    <td className="px-10 py-4 border text-sm text-center capitalize">{applicant.studentId.city}</td>
                    <td className={`px-10 py-4 border text-sm text-center`}>
                      <span className={`${applicant.applicationFormStatus === false ? "bg-blue-500 py-1 px-2 rounded-full" : "bg-green-500 py-1 px-2 rounded-full"}`}>
                       {applicant.applicationFormStatus === false ? "Pending" : "Approved"}
                      </span>
                    </td>
                    <td className="px-10 py-4 flex space-x-4 mt-0.5">
                      <button className="text-green-500 hover:text-green-700">
                        {/* <FaCheck onClick={() => setIsOpen(true)} /> */}
                        <FaCheck onClick={applicant.applicationFormStatus === false ? () => setIsOpen(true) : ''} />
                      </button>
                      <button className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                  <Modal open={isOpen} onClose={() => setIsOpen(false)} onApprove={() => handleApproved(applicant.admissionno)} onSelect={setSelectPayment} />
                  </>
                ))}
              </tbody>
            </table>
          </div>
          </>      
        )}
        {/* {selectedAdmission && (
          <AdmissionStudentModal
            admission={selectedAdmission}
            onClose={() => setSelectedAdmission(null)}
          />
        )} */}
      </div>
    </>
  );
};

export default AdminAdmission;

