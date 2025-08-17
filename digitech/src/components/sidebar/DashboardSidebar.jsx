import React from "react";
import { Link, NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { IoIosLogOut } from "react-icons/io";
import { GiShop } from "react-icons/gi";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdLocalOffer, MdSpeakerNotes } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { ArrowLeft } from "lucide-react";
import useLogout from "../../hooks/useLogout";

const DashboardSidebar = () => {
  const { logout } = useLogout();

  
  return (
    <div className="w-[250px] p-4 h-screen bg- shadow-md fixed top-0 left-0 z-[1000]">
      {/* Header */}
      <div className="p-1 mb-9 mt-4 font-bol text-xl text-center    border-gray-200">
        <Link className="flex items-center gap-4 text-black border-none outline-0" to="/">
     <ArrowLeft /> Spike Admin
        </Link>
      </div>

 

      {/* Main Menu */}
      <ul className="space-y-1 h-[65vh] w-full overflow-auto px-2">
        <li>
          <NavLink
            to="/dashboard"
            className="dash  flex items-center hover:text-white hover:bg-[#8B0000] d my-4uration-200 px-4 py-3 rounded  text-gray-700"
          >
            <DashboardIcon className="mr-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="dashboard-add-category" className="dash  flex hover:bg-[#8B0000] items-center hover:text-white d my-4 duration-200 px-4 py-3 rounded  text-gray-700 cursor-pointer">
        <GiShop className="mr-2 text-xl" />
           Vendor Categroy
          </NavLink>
        </li>
        <li>
          <NavLink to="dashboard-products" className="dash  flex items-center hover:text-white duration-200 px-4 py-3 my-4 rounded hover:bg-[#8B0000] text-gray-700 cursor-pointer">
            <FaShoppingCart className="mr-2 text-xl" />
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="offers" className="dash  flex items-center hover:text-white duration-200 px-4 py-3 my-4 rounded hover:bg-[#8B0000] text-gray-700 cursor-pointer">
            <MdLocalOffer className="mr-2 text-xl" />
            Offers
          </NavLink>
        </li>
        <li>
          <NavLink to="orders" className="dash  flex items-center hover:text-white duration-200 px-4 py-3 my-4 rounded hover:bg-[#8B0000] text-gray-700 cursor-pointer">
            <MdSpeakerNotes className="mr-2 text-xl" />
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="users" className="dash  flex items-center hover:text-white duration-200 px-4 py-3 my-4 rounded hover:bg-[#8B0000] text-gray-700 cursor-pointer">
            <FaUsers className="mr-2 text-xl" />
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="transactions" className="dash  flex items-center hover:text-white duration-200 px-4 py-3 my-4 rounded hover:bg-[#8B0000] text-gray-700 cursor-pointer">
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
          <IoIosLogOut className="text-xl"/>  
          <span className="text-sm sm:text-base font-semibold">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
