

import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../../Components/AdminDashboard/Navbar";
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dayFilter, setDayFilter] = useState("Monday");
  const [sectionFilter, setSectionFilter] = useState("A");
  const [courseOptions, setCourseOptions] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("B.Tech");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchCourses();
    fetchSchedule();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "https://university-project-paresh.onrender.com/University/Course/allCourses"
      );
      setCourseOptions(response.data.courses.map((course) => course.courseName));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchSchedule = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://university-project-paresh.onrender.com/University/TimeTableRoute/timeTableDetails"
      );
      if (Array.isArray(response.data.timetableEntries)) {
        setSchedule(response.data.timetableEntries);
        setFilteredSchedule(response.data.timetableEntries);
      }
    } catch (error) {
      console.error("Error fetching schedule:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const filteredData = schedule.filter(
      (entry) =>
        entry.day === dayFilter &&
        entry.branch.toLowerCase().includes(selectedCourse.toLowerCase()) &&
        entry.section === sectionFilter
    );
    setFilteredSchedule(filteredData);
  }, [dayFilter, selectedCourse, sectionFilter, schedule]);

  const indexOfLastRow = currentPage * itemsPerPage;
  const indexOfFirstRow = indexOfLastRow - itemsPerPage;
  const currentData = filteredSchedule.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <><Navbar /><div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <FaCalendarAlt className="text-blue-700" /> University & School Schedule
      </h2>
      <div className="flex gap-4 mb-6">
        <select value={dayFilter} onChange={(e) => setDayFilter(e.target.value)} className="p-2 border rounded-lg">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} className="p-2 border rounded-lg">
          <option value="">Select Branch</option>
          {courseOptions.map((course, index) => (
            <option key={index} value={course}>{course}</option>
          ))}
        </select>
        <select value={sectionFilter} onChange={(e) => setSectionFilter(e.target.value)} className="p-2 border rounded-lg">
          {["A", "B", "C", "D", "E"].map((section) => (
            <option key={section} value={section}>{section}</option>
          ))}
        </select>
      </div>
      {loading ? (
        <div className="text-center py-6 text-gray-600">Loading schedule...</div>
      ) : (
        <div className="space-y-6">
          {currentData.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4">
                <FaClock className="text-blue-500 text-lg" />
                <span className="font-semibold text-gray-800 text-lg">{item.startTime} - {item.endTime}</span>
              </div>
              <div className="text-gray-900 font-medium text-lg">{item.subject}</div>
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <FaMapMarkerAlt className="text-red-500" /> {item.branch} ({item.section})
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="p-2 bg-gray-200 rounded-lg shadow">
          <FaChevronLeft />
        </button>
        <span>{currentPage}</span> / <span>{Math.ceil(filteredSchedule.length / itemsPerPage)}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastRow >= filteredSchedule.length} className="p-2 bg-gray-200 rounded-lg shadow">
          <FaChevronRight />
        </button>
      </div>
    </div></>
  );
};

export default Schedule;
