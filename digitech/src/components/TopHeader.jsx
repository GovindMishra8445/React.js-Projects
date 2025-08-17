import React from "react";
import { Link } from "react-router-dom";

export default function TopHeader() {
  return (
    <div className="w-full border-b border-gray-200 bg-white text-sm text-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-12">
        <div className="md:flex hidden items-center gap-6">
          <span className="flex items-center gap-2">
            <i className="bi bi-envelope text-lg"></i>
            care@vantaraagro.com
          </span>
          <span className="flex items-center gap-2">
            <i className="bi bi-telephone text-lg"></i>
            +91-999 999 9999
          </span>
        </div>
        <div className="flex items-center divide-x divide-gray-300">
          <a href="#" className="flex items-center gap-2 lg:px-4 md:px-4 px-1 hover:underline">
            <i className="bi bi-person text-lg"></i>
            Order Tracking
          </a>
          <Link to="/signup" className="flex items-center gap-2 lg:px-4 md:px-4 px-1 hover:underline">
            <i className="bi bi-person-plus text-lg"></i>
            Register
          </Link>
          <Link to="/login" className="flex items-center gap-2 lg:px-4 md:px-4 px-1 hover:underline">
            <i className="bi bi-person text-lg"></i>
            Sign in
          </Link>
          <div className="flex items-center gap-2 lg:px-4 md:px-4 px-1 cursor-pointer">
            <i className="bi bi-translate text-lg"></i>
            English <span className="ml-1">&#9660;</span>
          </div>
        </div>
      </div>
    </div>
  );
}