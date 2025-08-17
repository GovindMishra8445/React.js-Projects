// import { Button, Menu, MenuItem, Badge, IconButton } from "@mui/material";
// import React, { useContext, useState } from "react";
// import { IoMenu } from "react-icons/io5";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { RxDashboard } from "react-icons/rx";
// import { TbSettings } from "react-icons/tb";
// import { LuLogOut } from "react-icons/lu";
// import { styled } from "@mui/material/styles";
// import { MyContext } from "../../App";
// import { Link, NavLink } from "react-router-dom";

// const Header = () => {
//   // Styled Badge for Notifications
//   const StyledBadge = styled(Badge)(({ theme }) => ({
//     "& .MuiBadge-badge": {
//       right: -3,
//       top: 13,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: "0 4px",
//     },
//   }));

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);

//   const context = useContext(MyContext);

//   return (
//     <header
//       // className={`w-full h-auto py-2 ${
//       //   context.isSidebarOpen ? "lg:pl-[70px]" : "pl-2"
//       // } md:px-10 bg-white shadow-md sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 transition-all`}
//       className="w-full h-[auto] py-2 pl-64 px-4 sm:px-20 bg-white shadow-md pr-7 flex items-center justify-between border-b border-gray-200 transition-all"
//     >
//       <div className="part1 flex items-center gap-3 w-[60%]">
//         <Button
//           className="!w-[40PX] !h-[40PX] !rounded-full !min-w-[35px] !text-gray-800 block md:hidden"
//           onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}
//         >
//           <IoMenu className="text-xl" />
//         </Button>
//       </div>
//       <div className="flex items-center justify-end gap-5 w-[40%]">
//         <IconButton aria-label="notifications">
//           <StyledBadge badgeContent={4} color="secondary">
//             <IoMdNotificationsOutline className="text-lg" />
//           </StyledBadge>
//         </IconButton>

//         {context.isLogin === true ? (
//           <div className="relative">
//             <div
//               className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
//               onClick={handleMenuOpen}
//             >
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/5432/5432747.png"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <Menu
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleMenuClose}
//               PaperProps={{
//                 elevation: 0,
//                 sx: {
//                   overflow: "visible",
//                   filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//                   mt: 1.5,
//                   "&::before": {
//                     content: '""',
//                     display: "block",
//                     position: "absolute",
//                     top: 0,
//                     right: 18,
//                     width: 10,
//                     height: 15,
//                     bgcolor: "background.paper",
//                     transform: "translateY(-50%) rotate(45deg)",
//                     zIndex: 0,
//                   },
//                 },
//               }}
//               transformOrigin={{ horizontal: "right", vertical: "top" }}
//               anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//             >
//               <NavLink to={"/"}>
//                 <MenuItem
//                   onClick={handleMenuClose}
//                   className="flex items-center gap-3"
//                 >
//                   <RxDashboard /> <span className="text-sm">Dashboard</span>
//                 </MenuItem>
//               </NavLink>
//               <Link to="/editProfile">
//                 <MenuItem
//                   onClick={handleMenuClose}
//                   className="flex items-center gap-3"
//                 >
//                   <TbSettings /> <span className="text-sm">Edit Profile</span>
//                 </MenuItem>
//               </Link>

//               <MenuItem
//                 onClick={handleMenuClose}
//                 className="flex items-center gap-3"
//               >
//                 <LuLogOut /> <span className="text-sm">Log Out</span>
//               </MenuItem>
//             </Menu>
//           </div>
//         ) : (
//           <Button className="btn-blue btn-sm">Login</Button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// Components/Header/Header.jsx
import React, { useContext, useState } from "react";
import { Button, Menu, MenuItem, Badge, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IoMenu } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { TbSettings } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { MyContext } from "../../App";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen, isLogin, setIsLogin } =
    useContext(MyContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/login");
  };

  if (!token) return null;

  return (
    <header className="w-full py-2 px-4 bg-[#1f2a38] shadow-md border-b border-gray-200 transition-all flex items-center justify-between">
      <div className="flex items-center">
        {/* Toggle button visible on small screens only */}
        {/* <Button
          className="w-9 h-9 rounded-full min-w-[35px] text-gray-800 block sm:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <IoMenu className="text-xl" />
        </Button> */}
        <Button
          className="!w-[40px] !h-[40px] !rounded-full "
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <IoMenu className="text-xl !text-white" />
        </Button>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center justify-end gap-5">
          {isLogin ? (
            <div className="relative">
              <div
                className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
                onClick={handleMenuOpen}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5432/5432747.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 18,
                      width: 10,
                      height: 15,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <NavLink to="/" onClick={handleMenuClose}>
                  <MenuItem className="flex items-center gap-3">
                    <RxDashboard /> <span className="text-sm">Dashboard</span>
                  </MenuItem>
                </NavLink>
                <NavLink to="/editProfile" onClick={handleMenuClose}>
                  <MenuItem className="flex items-center gap-3">
                    <TbSettings /> <span className="text-sm">Edit Profile</span>
                  </MenuItem>
                </NavLink>
                <MenuItem
                  className="flex items-center gap-3"
                  onClick={() => {
                    handleMenuClose();
                    handleLogout();
                  }}
                >
                  <LuLogOut /> <span className="text-sm">Log Out</span>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Button className="btn-blue btn-sm">Login</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

//

// import { Button, Menu, MenuItem, Badge, IconButton } from "@mui/material";
// import React, { useContext, useState } from "react";
// import { IoMenu } from "react-icons/io5";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { RxDashboard } from "react-icons/rx";
// import { TbSettings } from "react-icons/tb";
// import { LuLogOut } from "react-icons/lu";
// import { styled } from "@mui/material/styles";
// import { MyContext } from "../../App";
// import { Link, NavLink } from "react-router-dom";

// const Header = () => {
//   const StyledBadge = styled(Badge)(({ theme }) => ({
//     "& .MuiBadge-badge": {
//       right: -3,
//       top: 13,
//       border: `2px solid ${theme.palette.background.paper}`,
//       padding: "0 4px",
//     },
//   }));

//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);

//   const context = useContext(MyContext);

//   return (
//     <header
//       className="w-full h-auto py-2 px-4 sm:px-20 bg-white shadow-md flex items-center justify-between border-b border-gray-200 transition-all"
//     >
//       <div className="flex items-center">
//         {/* Toggle button visible on small screens only */}
//         <Button
//           className="w-9 h-9 rounded-full min-w-[35px] text-gray-800 block sm:hidden"
//           onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}
//         >
//           <IoMenu className="text-xl" />
//         </Button>
//       </div>
//       <div className="flex items-center gap-4 sm:gap-8">
//         <IconButton aria-label="notifications">
//           <StyledBadge badgeContent={4} color="secondary">
//             <IoMdNotificationsOutline className="text-lg" />
//           </StyledBadge>
//         </IconButton>

//         {context.isLogin === true ? (
//           <div className="relative">
//             <div
//               className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
//               onClick={handleMenuOpen}
//             >
//               <img
//                 src="https://cdn-icons-png.flaticon.com/512/5432/5432747.png"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <Menu
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleMenuClose}
//               PaperProps={{
//                 elevation: 0,
//                 sx: {
//                   overflow: "visible",
//                   filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//                   mt: 1.5,
//                   "&::before": {
//                     content: '""',
//                     display: "block",
//                     position: "absolute",
//                     top: 0,
//                     right: 18,
//                     width: 10,
//                     height: 15,
//                     bgcolor: "background.paper",
//                     transform: "translateY(-50%) rotate(45deg)",
//                     zIndex: 0,
//                   },
//                 },
//               }}
//               transformOrigin={{ horizontal: "right", vertical: "top" }}
//               anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//             >
//               <NavLink to={"/"}>
//                 <MenuItem
//                   onClick={handleMenuClose}
//                   className="flex items-center gap-3"
//                 >
//                   <RxDashboard /> <span className="text-sm">Dashboard</span>
//                 </MenuItem>
//               </NavLink>
//               <Link to="/editProfile">
//                 <MenuItem
//                   onClick={handleMenuClose}
//                   className="flex items-center gap-3"
//                 >
//                   <TbSettings /> <span className="text-sm">Edit Profile</span>
//                 </MenuItem>
//               </Link>
//               <MenuItem
//                 onClick={handleMenuClose}
//                 className="flex items-center gap-3"
//               >
//                 <LuLogOut /> <span className="text-sm">Log Out</span>
//               </MenuItem>
//             </Menu>
//           </div>
//         ) : (
//           <Button className="btn-blue btn-sm">Login</Button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
