import React from "react";
import { Link, NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { FaShoppingCart, FaBoxes } from "react-icons/fa";
import { MdSpeakerNotes } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { ArrowLeft, LogOut, Users } from "lucide-react";
import { BiStore } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const VendorDashboardSidebar = () => {
  const { logout } = useLogout();
  return (
    <div className="w-[250px] p-4 h-screen bg- shadow-md fixed top-0 left-0 z-[1000]">
      {/* Header */}
      <div className="p-1 mb-9 mt-4 font-bol text-xl text-center border-gray-200">
        <Link className="flex items-center gap-4 text-black border-none outline-0" to="/">
          <ArrowLeft /> Vendor Panel
        </Link>
      </div>

      {/* Main Menu */}
      <ul className="space-y-1 h-[65vh] w-full overflow-auto px-2">
        <li>
          <NavLink
            to="/vendor-dashboard"
            className="dash flex items-center hover:text-white hover:bg-[#0285c7a2] d my-4uration-200 px-4 py-3 rounded text-gray-700"
          >
            <DashboardIcon className="mr-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="vendor-products" className="dash flex hover:bg-[#0285c7a2] items-center hover:text-white d my-4 duration-200 px-4 py-3 rounded text-gray-700 cursor-pointer">
            <FaShoppingCart className="mr-2 text-xl" />
            My Products
          </NavLink>
        </li>
        <li>
          <NavLink to="vendor-orders" className="dash flex items-center hover:text-white duration-200 px-4 py-3 my-4 rounded hover:bg-[#0285c7a2] text-gray-700 cursor-pointer">
            <MdSpeakerNotes className="mr-2 text-xl" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="vendor-users" className="dash flex items-center hover:text-white duration-200 px-4 py-3 my-4 rounded hover:bg-[#0285c7a2] text-gray-700 cursor-pointer">
            <Users className="mr-2 text-xl" />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="vendor-earnings" className="dash flex items-center hover:text-white duration-200 px-4 py-3 my-4 rounded hover:bg-[#0285c7a2] text-gray-700 cursor-pointer">
            <GrTransaction className="mr-2 text-xl" />
            Transactions
          </NavLink>
        </li>
      
      </ul>
      <div className="top-4 relative pt-4 border-gray-400 border-t">
        <button 
          onClick={logout}
          className="flex items-center cursor-pointer gap-3 px-3 py-2 sm:py-3 hover:rounded-lg text-red-500 hover:text-white hover:bg-red-500 transition-colors w-full bg-gray-100 text-left"
        >
          <LogOut className="text-xl"/>  
          <span className="text-sm sm:text-base font-semibold">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default VendorDashboardSidebar; 