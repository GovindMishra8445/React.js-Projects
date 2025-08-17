// import React, { useContext, useState } from "react";
// import { Button } from "@mui/material";
// import { NavLink, useNavigate } from "react-router-dom";
// import { RxDashboard } from "react-icons/rx";
// import { TbLogout, TbReportSearch } from "react-icons/tb";
// import { MdOutlineSettings } from "react-icons/md";
// import { AiOutlineCustomerService, AiOutlineProduct } from "react-icons/ai";
// import { BsBagCheck } from "react-icons/bs";
// import { FaAngleDown } from "react-icons/fa6";
// import { Collapse } from "react-collapse";
// import { MyContext } from "../../App";
// import logo from "../../assets/Packpin-logo.png";

// const Sidebar = () => {
//   const [subMenuIndex, setSubMenuIndex] = useState(null);
//   const { setIsSidebarOpen, setIsLogin } = useContext(MyContext);
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   const toggleSubMenu = (index) => {
//     setSubMenuIndex(subMenuIndex === index ? null : index);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLogin(false);
//     navigate("/login");
//   };

//   if (!token) {
//     return null;
//   }

//   return (
//     <div className="fixed top-0 left-0 bg-[#1f2a38] w-[70px] sm:w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-5 px-3 flex flex-col justify-between transition-all duration-300 z-10">
//       <div>
//         {/* Logo */}
//         <div className="py-3 flex items-center justify-center sm:justify-start">
//           <NavLink to="/">
//             <img
//               src={logo}
//               className="w-[50px] sm:w-[250px] bg-white px-8 py-2 max-sm:px-0 max-sm:py-0 rounded-md"
//               alt="Logo"
//             />
//           </NavLink>
//         </div>

//         <ul className="mt-4 space-y-2">
//           {/* Dashboard */}
//           <li>
//             <NavLink to="/">
//               <Button className="w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
//                 <RxDashboard className="text-[20px] text-red-500" />
//                 <span className="hidden sm:inline">Dashboard</span>
//               </Button>
//             </NavLink>
//           </li>

//           {/* Products with Submenu */}
//           <li>
//             <Button
//               onClick={() => toggleSubMenu(1)}
//               className="w-full !capitalize !py-4 !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center"
//             >
//               <AiOutlineProduct className="text-[20px] text-red-500" />
//               <span className="hidden sm:inline">Products</span>
//               <span className="ml-auto w-6 h-6 max-sm:w-1.5 max-sm:h-1.5 flex items-center justify-center">
//                 <FaAngleDown
//                   className={`transition-all ${
//                     subMenuIndex === 1 ? "rotate-180" : ""
//                   }`}
//                 />
//               </span>
//             </Button>
//             <Collapse isOpened={subMenuIndex === 1}>
//               <ul className="w-full bg-[#111826] rounded-md mt-2 space-y-2 py-2">
//                 <li className="w-full">
//                   <NavLink to="/products/category">
//                     <Button className="!text-white !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3 max-sm:!text-[10px] max-sm:!pl-0 ">
//                       <span className="block w-2 h-2 rounded-full bg-[rgba(0,0,0,0.3)] max-sm:hidden"></span>
//                       Category
//                     </Button>
//                   </NavLink>
//                 </li>
//                 <li className="w-full">
//                   <NavLink to="/products/sub-category">
//                     <Button className="!text-white !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3 max-sm:!text-[10px] max-sm:!pl-0 ">
//                       <span className="block w-2 h-2 rounded-full bg-[rgba(0,0,0,0.3)] max-sm:hidden"></span>
//                       Sub Category
//                     </Button>
//                   </NavLink>
//                 </li>
//                 <li className="w-full">
//                   <NavLink to="/products">
//                     <Button className="!text-white !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3 max-sm:!text-[10px] max-sm:!pl-0 ">
//                       <span className="block w-2 h-2 rounded-full bg-[rgba(0,0,0,0.3)] max-sm:hidden"></span>
//                       All Products
//                     </Button>
//                   </NavLink>
//                 </li>
//               </ul>
//             </Collapse>
//           </li>

//           {/* Order Section */}
//           <li>
//             <NavLink to="/orders">
//               <Button className="w-full !capitalize !py-4 !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
//                 <BsBagCheck className="text-[20px] text-red-500" />
//                 <span className="hidden sm:inline">Orders</span>
//               </Button>
//             </NavLink>
//           </li>

//           {/* Reports */}
//           <li>
//             <NavLink to="/reports">
//               <Button className="w-full !capitalize !py-4 !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
//                 <TbReportSearch className="text-[20px] text-red-500" />
//                 <span className="hidden sm:inline">Reports</span>
//               </Button>
//             </NavLink>
//           </li>

//           {/* Customers */}
//           <li>
//             <NavLink to="/customers">
//               <Button className="w-full !capitalize !py-4 !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
//                 <AiOutlineCustomerService className="text-[20px] text-red-500" />
//                 <span className="hidden sm:inline">Customers</span>
//               </Button>
//             </NavLink>
//           </li>

//           {/* Settings */}
//           <li>
//             <NavLink to="/settings">
//               <Button className="w-full !capitalize !py-4 !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
//                 <MdOutlineSettings className="text-[20px] text-red-500" />
//                 <span className="hidden sm:inline">Settings</span>
//               </Button>
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Logout Button at Bottom */}
//       <div className="mt-auto mb-5">
//         <Button
//           onClick={handleLogout}
//           className="!w-full !py-3 gap-3 hover:bg-[#fafafa]"
//         >
//           <TbLogout className="text-[20px] text-black font-bold" />
//           <span className="hidden sm:inline text-black text-sm font-bold">
//             Log Out
//           </span>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useContext, useState } from "react";
// import { Button } from "@mui/material";
// import { NavLink, useNavigate } from "react-router-dom";
// import { RxDashboard } from "react-icons/rx";
// import { TbLogout, TbReportSearch } from "react-icons/tb";
// import { MdOutlineSettings } from "react-icons/md";
// import { AiOutlineCustomerService, AiOutlineProduct } from "react-icons/ai";
// import { BsBagCheck } from "react-icons/bs";
// import { FaAngleDown } from "react-icons/fa6";
// import { Collapse } from "react-collapse";
// import { MyContext } from "../../App";
// import logo from "../../assets/Packpin-logo.png";

// const Sidebar = () => {
//   const [subMenuIndex, setSubMenuIndex] = useState(null);
//   const { setIsSidebarOpen, setIsLogin } = useContext(MyContext);
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   const toggleSubMenu = (index) => {
//     setSubMenuIndex(subMenuIndex === index ? null : index);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLogin(false);
//     navigate("/login");
//   };

//   if (!token) {
//     return null;
//   }

//   const navLinkClasses = ({ isActive }) =>
//     isActive
//       ? "py-3 border-l-4 border-red-500 rounded-md"
//       : "border-r-4 border-transparent";
//   return (
//     <div className="fixed top-0 left-0 bg-[#1f2a38] w-[70px] sm:w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-5 px-3 flex flex-col justify-between transition-all duration-300 z-10">
//       <div>
//         {/* Logo */}
//         <div className="py-3 flex items-center justify-center sm:justify-start">
//           <NavLink to="/">
//             <img
//               src={logo}
//               className="w-[50px] sm:w-[250px]  px-8 py-2 max-sm:px-0 max-sm:py-0 rounded-md"
//               alt="Logo"
//             />
//           </NavLink>
//         </div>

//         <ul className="mt-4 space-y-2">
//           {/* Dashboard */}
//           <li>
//             <NavLink to="/" className={navLinkClasses}>
//               {({ isActive }) => (
//                 <Button
//                   className={`w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center ${
//                     isActive
//                       ? "py-3 border-l-4 border-red-500 rounded-md"
//                       : "border-r-4 border-transparent"
//                   }`}
//                 >
//                   <RxDashboard
//                     className={`text-[20px] ${
//                       isActive ? "text-red-500" : "text-red-300"
//                     }`}
//                   />
//                   <span className="hidden sm:inline">Dashboard</span>
//                 </Button>
//               )}
//             </NavLink>
//           </li>
//           {/* Products with Submenu */}
//           <li>
//             <Button
//               onClick={() => toggleSubMenu(1)}
//               className={`w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center ${
//                 subMenuIndex === 1
//                   ? "border-l-4 border-red-500"
//                   : "border-l-4 border-transparent"
//               }`}
//             >
//               <AiOutlineProduct  className={`text-[20px] ${
//                       isActive ? "text-red-500" : "text-red-300"
//                     }`} />
//               <span className="hidden sm:inline">Products</span>
//               <span className="ml-auto w-6 h-6 max-sm:w-1.5 max-sm:h-1.5 flex items-center justify-center">
//                 <FaAngleDown
//                   className={`transition-all ${
//                     subMenuIndex === 1 ? "rotate-180" : ""
//                   }`}
//                 />
//               </span>
//             </Button>
//             <Collapse isOpened={subMenuIndex === 1}>
//               <ul className="w-full bg-[#111826] rounded-md mt-2 space-y-2 py-2">
//                 <li className="w-full">
//                   <NavLink to="/products/category">
//                     {({ isActive }) => (
//                       <Button className="!text-white !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3 max-sm:!text-[10px] max-sm:!pl-0">
//                         <span
//                           className={`block w-2 h-2 rounded-full ${
//                             isActive ? "bg-red-500" : "bg-white"
//                           } max-sm:hidden`}
//                         ></span>
//                         Category
//                       </Button>
//                     )}
//                   </NavLink>
//                 </li>
//                 <li className="w-full">
//                   <NavLink to="/products/sub-category">
//                     {({ isActive }) => (
//                       <Button className="!text-white !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3 max-sm:!text-[10px] max-sm:!pl-0">
//                         <span
//                           className={`block w-2 h-2 rounded-full ${
//                             isActive ? "bg-red-500" : "bg-white"
//                           } max-sm:hidden`}
//                         ></span>
//                         Sub Category
//                       </Button>
//                     )}
//                   </NavLink>
//                 </li>
//                 <li className="w-full">
//                   <NavLink to="/products" end>
//                     {({ isActive }) => (
//                       <Button className="!text-white !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3 max-sm:!text-[10px] max-sm:!pl-0">
//                         <span
//                           className={`block w-2 h-2 rounded-full ${
//                             isActive ? "bg-red-500" : "bg-white"
//                           } max-sm:hidden`}
//                         ></span>
//                         All Products
//                       </Button>
//                     )}
//                   </NavLink>
//                 </li>
//               </ul>
//             </Collapse>
//           </li>

//           {/* Orders */}
//           <li>
//             <NavLink to="/orders" className={navLinkClasses}>
//               <Button className="w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
//                 <BsBagCheck  className={`text-[20px] ${
//                       isActive ? "text-red-500" : "text-red-300"
//                     }`} />
//                 <span className="hidden sm:inline">Orders</span>
//               </Button>
//             </NavLink>
//           </li>

//           {/* Reports */}
//           <li>
//             <NavLink to="/reports" className={navLinkClasses}>
//               <Button className="w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
//                 <TbReportSearch  className={`text-[20px] ${
//                       isActive ? "text-red-500" : "text-red-300"
//                     }`}/>
//                 <span className="hidden sm:inline">Reports</span>
//               </Button>
//             </NavLink>
//           </li>

//           {/* Customers */}
//           <li>
//             <NavLink to="/customers" className={navLinkClasses}>
//               <Button className="w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
//                 <AiOutlineCustomerService  className={`text-[20px] ${
//                       isActive ? "text-red-500" : "text-red-300"
//                     }`} />
//                 <span className="hidden sm:inline">Customers</span>
//               </Button>
//             </NavLink>
//           </li>

//           {/* Settings */}
//           <li>
//             <NavLink to="/settings" className={navLinkClasses}>
//               <Button className="w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
//                 <MdOutlineSettings  className={`text-[20px] ${
//                       isActive ? "text-red-500" : "text-red-300"
//                     }`} />
//                 <span className="hidden sm:inline">Settings</span>
//               </Button>
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Logout Button at Bottom */}
//       <div className="mt-auto mb-5">
//         <Button
//           onClick={handleLogout}
//           className="!w-full !py-4 gap-5 !text-[#9da4b0] hover:!text-white !font-[500]"
//         >
//           <TbLogout className="text-[20px] text-red-500 font-bold" />
//           <span className="hidden sm:inline text-sm  !text-[#9da4b0] hover:!text-white !font-[500]">
//             Log Out
//           </span>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbLogout, TbReportSearch } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { AiOutlineCustomerService, AiOutlineProduct } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { MyContext } from "../../App";
import logo from "../../assets/Packpin-logo-Admin-Panel.svg";

const Sidebar = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const { setIsSidebarOpen, setIsLogin } = useContext(MyContext);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const toggleSubMenu = (index) => {
    setSubMenuIndex(subMenuIndex === index ? null : index);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/login");
  };

  if (!token) {
    return null;
  }

  const navLinkClasses = ({ isActive }) =>
    isActive
      ? "py-3 border-l-4 border-red-500 rounded-md"
      : "border-r-4 border-transparent";

  return (
    <div className="fixed top-0 left-0 bg-[#1f2a38] w-[70px] sm:w-[18%] h-full border-r border-[rgba(0,0,0,0.1)] py-5  px-5 flex flex-col justify-between transition-all duration-300 z-10">
      <div>
        {/* Logo */}
        <div className="py-3 flex items-center justify-center sm:justify-start">
          <NavLink to="/">
            <img
              src={logo}
              className="w-[150px] sm:w-[250px]"
              alt="Logo"
            />
          </NavLink>
        </div>

        <ul className="mt-4 space-y-2">
          {/* Dashboard */}
          <li>
            <NavLink to="/" className={navLinkClasses}>
              {({ isActive }) => (
                <Button
                  className={`w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center ${
                    isActive
                      ? "py-3 border-l-4 border-red-500 rounded-md"
                      : "border-r-4 border-transparent"
                  }`}
                >
                  <RxDashboard
                    className={`text-[20px] ${
                      isActive ? "text-red-500" : "text-red-400"
                    }`}
                  />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
              )}
            </NavLink>
          </li>

          {/* Products with Submenu */}
          <li>
            <Button
              onClick={() => toggleSubMenu(1)}
              className={`w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center ${
                subMenuIndex === 1
                  ? "border-l-4 border-red-500"
                  : "border-l-4 border-transparent"
              }`}
            >
              <AiOutlineProduct
                className={`text-[20px] ${
                  subMenuIndex === 1 ? "text-red-500" : "text-red-400"
                }`}
              />
              <span className="hidden sm:inline">Products</span>
              <span className="ml-auto w-6 h-6 max-sm:w-1 max-sm:ml-0 max-sm:h-1 flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 1 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={subMenuIndex === 1}>
              <ul className="w-full max-sm:w-12 bg-[#111826] rounded-md mt-2 space-y-2 max-sm:space-y-0 py-2 max-sm:py-0">
                <li className="w-full">
                  <NavLink to="/products/category">
                    {({ isActive }) => (
                      <Button className="!text-white !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3 max-sm:!text-[8px] max-sm:!pl-0">
                        <span
                          className={`block w-2 h-2 rounded-full ${
                            isActive ? "bg-red-500" : "bg-white"
                          } max-sm:hidden`}
                        ></span>
                        Category
                      </Button>
                    )}
                  </NavLink>
                </li>
                <li className="w-full">
                  <NavLink to="/products/sub-category">
                    {({ isActive }) => (
                      <Button className="!text-white !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3 max-sm:!text-[8px] max-sm:!pl-0">
                        <span
                          className={`block w-2 h-2 rounded-full ${
                            isActive ? "bg-red-500" : "bg-white"
                          } max-sm:hidden`}
                        ></span>
                        Sub Category
                      </Button>
                    )}
                  </NavLink>
                </li>
                <li className="w-full">
                  <NavLink to="/products" end>
                    {({ isActive }) => (
                      <Button className="!text-white !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-7 flex gap-3 max-sm:!text-[8px] max-sm:!pl-0">
                        <span
                          className={`block w-2 h-2 rounded-full ${
                            isActive ? "bg-red-500" : "bg-white"
                          } max-sm:hidden`}
                        ></span>
                        All Products
                      </Button>
                    )}
                  </NavLink>
                </li>
              </ul>
            </Collapse>
          </li>

          {/* Orders */}
          <li>
            <NavLink to="/orders" className={navLinkClasses}>
              {({ isActive }) => (
                <Button className="w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
                  <BsBagCheck
                    className={`text-[20px] ${
                      isActive ? "text-red-500" : "text-red-400"
                    }`}
                  />
                  <span className="hidden sm:inline">Orders</span>
                </Button>
              )}
            </NavLink>
          </li>

          {/* Reports */}
          <li>
            <NavLink to="/reports" className={navLinkClasses}>
              {({ isActive }) => (
                <Button className="w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
                  <TbReportSearch
                    className={`text-[20px] ${
                      isActive ? "text-red-500" : "text-red-400"
                    }`}
                  />
                  <span className="hidden sm:inline">Reports</span>
                </Button>
              )}
            </NavLink>
          </li>

          {/* Customers */}
          <li>
            <NavLink to="/customers" className={navLinkClasses}>
              {({ isActive }) => (
                <Button className="w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
                  <AiOutlineCustomerService
                    className={`text-[20px] ${
                      isActive ? "text-red-500" : "text-red-400"
                    }`}
                  />
                  <span className="hidden sm:inline">Customers</span>
                </Button>
              )}
            </NavLink>
          </li>

          {/* Settings */}
          <li>
            <NavLink to="/settings" className={navLinkClasses}>
              {({ isActive }) => (
                <Button className="w-full !py-4 !capitalize !justify-start flex gap-3 text-[14px] !text-[#9da4b0] hover:!text-white !font-[500] items-center">
                  <MdOutlineSettings
                    className={`text-[20px] ${
                      isActive ? "text-red-500" : "text-red-400"
                    }`}
                  />
                  <span className="hidden sm:inline">Settings</span>
                </Button>
              )}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Logout Button at Bottom */}
      <div className="mt-auto mb-5">
        <Button
          onClick={handleLogout}
          className="!w-full !py-4 gap-5 !text-[#9da4b0] hover:!bg-[#111826]  !font-[500]"
        >
          <TbLogout className="text-[20px] text-red-500 font-bold" />
          <span className="hidden sm:inline text-sm !text-[#9da4b0] hover:!text-white !font-[500]">
            Log Out
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
