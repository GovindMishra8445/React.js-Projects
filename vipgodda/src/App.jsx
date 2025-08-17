import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Academics from "./Pages/Academics";
import Admission from "./Pages/Admission";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Alumni from "./Pages/Alumni";
import Login from "./Pages/Login";
import MultiUserLogin from "./Pages/MultiUserLogin";
// import Sidebar from "./Dashboard/AdminDashboard/Sidebar"

// import AdminLogin from "../Pages/AdminDashboard/Login";
import Sidebar from "./Components/AdminDashboard/Sidebar";
import Dashboard from "./Pages/AdminDashboard/Dashboard";
import Student from "./Pages/AdminDashboard/Student/Student";
import Teachers from "./Pages/AdminDashboard/Teacher/Teachers";
import Registration from "./Pages/AdminDashboard/Registration/Registration";
import AdminAdmission from "./Pages/AdminDashboard/Admission/AdminAdmission";
import ProfileForm from "./Components/AdminDashboard/ProfileForm";
import ChangePassword from "./Components/AdminDashboard/ChangePassword";
import Notification from "./Pages/AdminDashboard/Notification";
import Courses from "./Pages/AdminDashboard/Courses";
import Exam from "./Pages/AdminDashboard/Exam";
import Calendar from "./Pages/AdminDashboard/Calendar";
import Fees from "./Pages/AdminDashboard/Fees";
import Attendance from "./Pages/AdminDashboard/Attendance";
import Assignment from "./Pages/AdminDashboard/Assignment/Assignment";
import Schedule from "./Pages/AdminDashboard/Schedule/Schedule";
import TeacherPayroll from "./Pages/AdminDashboard/Teacher/TeacherPayRole";
import DocumentManagement from "./Pages/AdminDashboard/Documents";
import AdmissionForm from "./Components/AdminDashboard/Settings/admissionForm";
import LeavingCertificate from "./Components/AdminDashboard/Settings/CollegeLeaving";
import MarksManagement from "./Components/AdminDashboard/Marks/Marks";
import Marksheet from "./Components/AdminDashboard/Settings/CollegeMarksheet";
import FeeReceipt from "./Components/AdminDashboard/Settings/FeeReciep";
import DashboardStudent from "./Pages/StudenDashboard2/Dashboard2"
import StudentHome from "./Pages/StudenDashboard2/Home2";
import StudentCourses from "./Pages/StudenDashboard2/StudentCourses";
import StudentProfile from "./Pages/StudenDashboard2/StudentProfile";
import StudentGrades from "./Pages/StudenDashboard2/StudentGrade";
import StudentAttendance from "./Pages/StudenDashboard2/StudentAttendance";



import TeacherSidebar from "./Components/TeacherDashboard/Sidebar/TeacherSidebar";
// import TeacherNavbar from "./Component/TeacherDashboard/Navbar/TeacherNavbar";
import TeacherDashboard from "./Pages/TeacherDashboard/Dashboard/TeacherDashboard";
import TeacherSchedule from "./Pages/TeacherDashboard/Schedule/TeacherSchedule";
import TeacherStudent from "./Pages/TeacherDashboard/Student/TeacherStudent";
import TeacherSyllabusPage from "./Pages/TeacherDashboard/Syllabus/TeacherSyllabusPage";
import TeacherAssignmentPage from "./Pages/TeacherDashboard/Assignment/TeacherAssignmentPage";
import TeacherTestPage from "./Pages/TeacherDashboard/Test/TeacherTestPage";
import TeacherMarksPage from "./Pages/TeacherDashboard/Marks/TeacherMarksPage";
import TeacherNewQuestion from "./Pages/TeacherDashboard/NewQuestion/TeacherNewQuestion";
import TeacherProfileForm from "./Pages/TeacherDashboard/Profile/TeacherProfileForm";
import TeacherNotification from "./Pages/TeacherDashboard/Notification/TeacherNotification";
import TeacherCalendar from "./Pages/TeacherDashboard/Calendar/TeacherCalendar";
import TeacherChangePassword from "./Pages/TeacherDashboard/Profile/TeacherChangePassword";
import TeacherAttandancePage from "./Pages/TeacherDashboard/Attandance/TeacherAttandancePage";
import TeacherExamPage from "./Pages/TeacherDashboard/Exam/TeacherExamPage";
import Unauthorized from "./Pages/Unauthorized";
import ErrorPage from "./Pages/Error";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import { ImagePlay } from "lucide-react";

function App() {
  const darkMode = useSelector((state) => state.darkMode);
  console.log("Redux toolkit implemented ",darkMode)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/login" element={<MultiUserLogin />} />
        <Route path="/teacher/login" element={<MultiUserLogin />} />
        <Route path="/admin/login" element={<MultiUserLogin />} />

        {/* studenr dash board rooutes started from here */}
      <Route path="/student-dashboard" element={<PrivateRoute allowedRoles={["admin", "student"]}><DashboardStudent /></PrivateRoute>} /> 
      <Route path="/student-dashboard-home" element={<PrivateRoute allowedRoles={["admin", "student"]}><StudentHome /></PrivateRoute>} />
      <Route path="/student-dashboard-courses" element={<PrivateRoute allowedRoles={["admin", "student"]}><StudentCourses /></PrivateRoute>} />
      <Route path="/student-dashboard-profile" element={<PrivateRoute allowedRoles={["admin", "student"]}><StudentProfile /></PrivateRoute>} />
      <Route path="/student-dashboard-grades" element={<PrivateRoute allowedRoles={["admin", "student"]}><StudentGrades /></PrivateRoute>} />
      <Route path="/student-dashboard-attendence" element={<PrivateRoute allowedRoles={["admin", "student"]}><StudentAttendance /></PrivateRoute>} />

      {/* <Route path="/student-dashboard" element={<DashboardStudent />} />
      <Route path="/student-dashboard-home" element={<StudentHome />} />
      <Route path="/student-dashboard-courses" element={<StudentCourses />} />
      <Route path="/student-dashboard-profile" element={<StudentProfile />} />
      <Route path="/student-dashboard-grades" element={<StudentGrades />} />
      <Route path="/student-dashboard-attendence" element={<StudentAttendance />} /> */}

        {/* studenr dash board rooutes ended here */}


        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
            <Sidebar>
              <Dashboard />
            </Sidebar>
            </PrivateRoute>
          }
        />
        
         <Route 
          path="/admin-student"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
            <Sidebar>
              <Student />
            </Sidebar>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-teacher"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
            <Sidebar>
              <Teachers />
            </Sidebar>
            </PrivateRoute>
          }
        />
          <Route
          path="/admin-payroll"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <TeacherPayroll />
           </Sidebar>
           </PrivateRoute>
          }
        />


        <Route
          path="/admin-documents"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <DocumentManagement/>
            </Sidebar>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-admission-form"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <AdmissionForm/>
           </Sidebar>
           </PrivateRoute>
          }
        />
            <Route
          path="/admin-slc-clc"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <LeavingCertificate/>
           </Sidebar>
           </PrivateRoute>
          }
        />

        <Route
          path="/admin-fee-receipt"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <FeeReceipt/>
           </Sidebar>
           </PrivateRoute>
          }
        />

<Route
          path="/admin-marksheet"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Marksheet/>
           </Sidebar>
           </PrivateRoute>
          }
        />


<Route
          path="/admin-marksmanagement"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <MarksManagement/>
           </Sidebar>
           </PrivateRoute>
          }
        />
        
        

        <Route
          path="/admin-registration"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Registration />
           </Sidebar>
           </PrivateRoute>
          }
        />
        <Route
          path="/admin-admission"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <AdminAdmission />
           </Sidebar>
           </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard/profile"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <ProfileForm />
            </Sidebar>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard/profile/changepassword"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <ChangePassword />
           </Sidebar>
           </PrivateRoute>
          }
        />
        <Route
          path="/admin-notifications"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Notification />
           </Sidebar>
           </PrivateRoute>
          }
        />
        <Route
          path="/admin-courses"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Courses />
           </Sidebar>
           </PrivateRoute>
          }
        />
        <Route
          path="/admin-exam"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Exam />
           </Sidebar>
           </PrivateRoute>
          }
        />
        <Route
          path="/admin-calendar"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Calendar />
           </Sidebar>
          </PrivateRoute>
          }
        />
        <Route
          path="/admin-fees"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Fees />
           </Sidebar>
           </PrivateRoute>
          }
        />
        <Route
          path="/admin-attendance"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Attendance />
            </Sidebar>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-assignment"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Assignment />
           </Sidebar>
           </PrivateRoute>
          }
        />
        <Route
          path="/admin-schedule"
          element={
           <PrivateRoute allowedRoles={["admin"]}>
           <Sidebar>
              <Schedule />
            </Sidebar>
            </PrivateRoute>
          }
        /> 



              <Route path="/teacher-dashboard"  element={
                <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                    <TeacherDashboard />
                </TeacherSidebar>
                </PrivateRoute>
                } />
              <Route path="/teacher-schedule" element={
                <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                    <TeacherSchedule />
                </TeacherSidebar>
                </PrivateRoute>
                } />
              {/* element={
                  <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                    <TeacherStudent />
                  </TeacherSidebar>
                  </PrivateRoute>
                } */}
              <Route
                path="/teacher-syllabus"
                element={
                <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                    <TeacherSyllabusPage />
                </TeacherSidebar>
                </PrivateRoute>
                }
              />
              <Route
                path="/teacher-assignment"
                element={
                <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                  <TeacherAssignmentPage />
                </TeacherSidebar>
                </PrivateRoute>
                }
              />
              <Route
                path="/teacher-attendance"
                element={
                 <PrivateRoute allowedRoles={["admin", "teacher"]}>
                 <TeacherSidebar>
                    <TeacherAttandancePage />
                  </TeacherSidebar>
                 </PrivateRoute>
                }
              />
              <Route path="/teacher-test" element={
                <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                    <TeacherTestPage />
                </TeacherSidebar>
                </PrivateRoute>
                } />
              <Route
                path="/teacher-studentmarks"
                element={
                <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                    <TeacherMarksPage />
                </TeacherSidebar>
                </PrivateRoute>
                }
              />
              <Route path="/teacher-exam"  element={
                <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                    <TeacherExamPage />
                </TeacherSidebar>
                </PrivateRoute>
                } />
              <Route
                path="/teacher-newquestion"
                element={<TeacherNewQuestion />}
              />
              <Route
                path="/teacher-dashboard/profile"
                element={<TeacherProfileForm />}
              />
              <Route
                path="/teacher-dashboard/profile/changepassword"
                element={<TeacherChangePassword />}
              />
              <Route
                path="/teacher-notification"
                element={
                <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                    <TeacherNotification />
                </TeacherSidebar>
                </PrivateRoute>
                }
              />
              <Route path="/teacher-calendar" element={
                <PrivateRoute allowedRoles={["admin", "teacher"]}>
                <TeacherSidebar>
                    <TeacherCalendar />
                </TeacherSidebar>
                </PrivateRoute>
                } />


<Route path="*" element={<ErrorPage />} />
<Route path="/unauthorized" element={<Unauthorized/>} />
      </Routes>
    


      
    </Router>
  );
}

export default App;
