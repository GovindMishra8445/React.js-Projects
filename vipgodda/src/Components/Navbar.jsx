import React, { useState, useEffect, memo } from "react";
import { FaBars, FaBookOpen, FaGraduationCap, FaHome, FaImages, FaPhoneAlt, FaSignInAlt, FaTimes, FaUniversity, FaUserGraduate } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../Utils/auth";
import { Axios } from "../Utils/axios";
import { useDispatch } from "react-redux";
import { logout } from "../redux/AuthReducers";

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate= useNavigate("")
    const dispatch = useDispatch();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
                setMenuOpen(false);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isSticky]);

    const handleLogout = async () => {
        try {
            await Axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`, {withCredentials: true})
            dispatch(logout())
            localStorage.removeItem("persist:auth");
        } catch (error) {
            console.log(error)
        }
        navigate('/')
      }

    const navLinks = [
        { name: "About", path: "/about", icon: <FaUniversity /> },
        { name: "Academics", path: "/academics", icon: <FaGraduationCap /> },
        { name: "Admission", path: "/admission", icon: <FaBookOpen /> },
        { name: "Gallery", path: "/gallery", icon: <FaImages /> },
        { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt /> },
        { name: "Alumni", path: "/alumni", icon: <FaUserGraduate /> },
        // { name: "Login", path: "/login", icon: <FaSignInAlt /> },
    ];

    return (
        <nav
            className={`bg-primary text-white px-6 py-3 flex items-center justify-between md:justify-normal md:space-x-8 w-full transition-all duration-300 ${isSticky ? "fixed top-0 left-0 z-50 shadow-lg shadow-slate-400" : "relative"
                }`}
        >
            <Link to="/" className="items-center hidden space-x-2 md:flex">
                <FaHome className="text-xl" />
                <span className="hover:underline">Home</span>
            </Link>

            <Link to="/" className="text-2xl md:hidden">
                <FaHome />
            </Link>


            <button
                className="relative text-2xl md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            {menuOpen && (
                <ul className="absolute right-0 z-50 flex flex-col w-48 py-2 space-y-2 text-center shadow-lg rounded-b-md top-12 bg-primary">
                    {navLinks.map((item, index) => (
                        <Link to={item.path} key={index} onClick={() => setMenuOpen(false)} className="flex items-center px-4 py-2 space-x-4">
                            <span>{item.icon}</span>
                            <span> {item.name}</span>
                        </Link>
                    ))}
                       <li className="px-4 py-2">
            {isAuthenticated() ? (
                <p
                    onClick={() => {
                        handleLogout();
                        setMenuOpen(false);
                    }}
                    className="cursor-pointer text-gray-200 hover:text-white"
                >
                    Logout
                </p>
            ) : (
                <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="text-white hover:underline"
                >
                    Login
                </Link>
            )}
        </li>
                </ul>
            )}
            <ul className="hidden space-x-8 md:flex">
                {navLinks.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 cursor-pointer hover:underline">
                        {item.icon} {/* Icon */}
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}
                <li>
                {!isAuthenticated() ?
            <p
              onClick={handleLogout}
              className={"cursor-pointer py-2 px-1 font-normal text-gray-200 hover:text-white"
              }
            >
              Logout
            </p> :
            <Link
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-[#002147f0] font-ubuntu py-2 px-1 font-normal bg-white"
                  : "text-white font-ubuntu py-2 px-1 font-normal"
              }
            >
              Login
            </Link>}
                </li>
            </ul>
        </nav>
    );
}

export default memo(Navbar)