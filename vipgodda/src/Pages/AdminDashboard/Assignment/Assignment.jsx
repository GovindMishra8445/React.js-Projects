import React, { useState, useEffect } from "react";
import "./Assignment.css";
import axios from "axios";
import Navbar from "../../../Components/AdminDashboard/Navbar";
import ShowSubmissionDetailsModal from "../../../Components/AdminDashboard/Assignmnet/ShowSubmissionDetailsModal";

function Assignment() {
  const [assignment, setAssignment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [assignmentId, setAssignmentId] = useState("");

  useEffect(() => {
    handleGetData();
  }, []);

  const handleGetData = () => {
    setLoading(true);
    fetch(
      "https://university-project-paresh.onrender.com/University/AssignmentRoute/allAssignments",
      {
        method: "GET"
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setAssignment(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
        setLoading(false);
      });
  };

  const handleShowSubmittedDetails = async (assignmentId) => {
    try {
      const response = await axios.get(
        `https://university-project-paresh.onrender.com/University/AssignmentRoute/assignmentSubmited/${assignmentId}`
      );
      // console.log("res", response.data);
      setAssignmentId(assignmentId);
      setSelectedAssignment(response.data);
      setShowSubmitModal(true);
    } catch (error) {
      console.error("Error fetching submitted details:", error);
    }
  };

  return (
    <>
    <Navbar />
    <div className="p-8  bg-gray-100 min-h-screen">
      {/* <h1 className="text-3xl font-semibold text-gray-800 mb-6">Student Assignments</h1> */}

      {selectedAssignment && (
        <ShowSubmissionDetailsModal
          show={showSubmitModal}
          onClose={() => {
            setShowSubmitModal(false);
            setSelectedAssignment(null);
          }}
          submittedDetails={selectedAssignment}
        />
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-xl p-6 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-gray-700">
              <thead>
                <tr className="bg-blue-600 text-blue">
                  <th className="p-3">SNo.</th>
                  <th className="p-3">Teacher Name</th>
                  <th className="p-3">Title</th>
                  <th className="p-3">Deadline</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Assignment For</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assignment.map((assignment, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{assignment.teacherName}</td>
                    <td className="p-3">{assignment.title}</td>
                    <td className="p-3">{new Date(assignment.deadline).toLocaleDateString("en-GB")}</td>
                    <td className="p-3 truncate max-w-xs">{assignment.description}</td>
                    <td className="p-3">{assignment.assignMent_for}</td>
                    <td className="p-3">
                      <button
                        className="hover:text-blue-800 text-blue-500 px-4 py-2 rounded-lg text-l"
                        onClick={() =>
                                                  handleShowSubmittedDetails(assignment._id)
                                                }
                      >
                        View
                      </button>
                      <button
                        className="hover:text-yellow-800 text-yellow-500 px-4 py-2 rounded-lg text-l"
                        onClick={() =>
                                                  handleShowSubmittedDetails(assignment._id)
                                                }
                      >
                        Edit
                      </button>
                      <button
                        className="hover:text-red-800 text-red-500 px-4 py-2 rounded-lg text-l"
                        onClick={() =>
                                                  handleShowSubmittedDetails(assignment._id)
                                                }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  </>
    // <>
    //   <Navbar />
    //   <div className="dashboard_layout adminAssignmentContainer  pl-48">
    //     <h1 className="title">Student Assignment</h1>

    //     {selectedAssignment && (
    //       <ShowSubmissionDetailsModal
    //         show={showSubmitModal}
    //         onClose={() => {
    //           setShowSubmitModal(false);
    //           setSelectedAssignment(null);
    //         }}
    //         submittedDetails={selectedAssignment}
    //         assignmentId={assignmentId}
    //       />
    //     )}
    //     {/* <section className="section">
    //       <div className="dateInput">
    //         <label className="label">Date:</label>
    //         <input type="date" name="Date" className="input" />
    //       </div>
    //       <div className="statusInput">
    //         <label htmlFor="rowsPerPage" className="label">
    //           Status:
    //         </label>
    //         <select
    //           name="rowsPerPage"
    //           id="rowsPerPage"
    //           className="select"
    //         >
    //           <option>Select a choice</option>
    //           <option value="notSubmitted">Not Submitted</option>
    //           <option value="pending">Pending</option>
    //           <option value="submitted">Submitted</option>
    //         </select>
    //       </div>
    //       <div className="branchInput">
    //         <label htmlFor="rowsPerPage" className="label">
    //           Brance Name:
    //         </label>
    //         <input
    //           type="search"
    //           name="search"
    //           placeholder="Search Brance Name"
    //           className="input"
    //         />
    //       </div>
    //       <div className="searchButton">
    //         <button className="button">Search</button>
    //       </div>
    //     </section> */}
    //     {loading ? (
    //       <div className="spinner" role="status">
    //         <span className="loader"></span>
    //       </div>
    //     ) : (
    //       <div className="table-container">
    //         <div className="table-section">
    //           <table>
    //             <thead>
    //               <tr>
    //                 <th>SNo.</th>
    //                 <th>Teacher Name</th>
    //                 <th>Title</th>
    //                 <th>Deadline</th>
    //                 <th>Description</th>
    //                 <th>Assignment For</th>
    //                 <th>Show Submission Assignment/Marks</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {assignment.map((assignment, index) => (
    //                 <tr key={index}>
    //                   <td>{index + 1}</td>
    //                   <td>{assignment.teacherName}</td>
    //                   <td>{assignment.title}</td>
    //                   <td>
    //                     {new Date(assignment.deadline).toLocaleDateString(
    //                       "en-GB"
    //                     )}
    //                   </td>
    //                   <td>{assignment.description}</td>
    //                   <td>{assignment.assignMent_for}</td>
    //                   <td>
    //                     <button
    //                       className="showButton"
    //                       onClick={() =>
    //                         handleShowSubmittedDetails(assignment._id)
    //                       }
    //                     >
    //                       View
    //                     </button>
    //                   </td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </>
  );
}

export default Assignment;
