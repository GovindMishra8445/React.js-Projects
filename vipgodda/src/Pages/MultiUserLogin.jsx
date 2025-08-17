// import React from "react";
import logo from "../assets/logo.jpg";
// import { useLocation } from "react-router-dom";

// export default function MultiUserLogin() {
//     const location = useLocation();

//     let title = "Login";
//     if (location.pathname.includes("/student")) {
//         title = "Student Login";
//     } else if (location.pathname.includes("/teacher")) {
//         title = "Teacher Login";
//     } else if (location.pathname.includes("/admin")) {
//         title = "Admin Login";
//     }
//     return (
//         <div
//             className="flex items-center justify-center w-full min-h-screen px-5 bg-fixed bg-center bg-no-repeat bg-cover md:justify-end md:px-20"
//             style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1616512659455-111d3367649f')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}
//         >
//             <div className="w-full max-w-[350px] p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-gray-300">
//                 <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />

//                 <h2 className="mb-4 text-2xl font-semibold text-center text-white">{title}</h2>
//                 <form>
//                     <div className="mb-4">
//                         <label className="block mb-2 text-sm font-semibold text-white">Email</label>
//                         <input
//                             type="email"
//                             required
//                             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your email"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2 text-sm font-semibold text-white">Password</label>
//                         <input
//                             type="password"
//                             required
//                             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your password"
//                         />
//                     </div>

//                     <div className="mb-4 text-right">
//                         <a href="#" className="text-sm text-white hover:underline">
//                             Forgot Password?
//                         </a>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full py-2 text-white transition rounded-lg bg-primary hover:bg-blue-600"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }





// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// // import logo from "../assets/Logo2.png";

// // export default function MultiUserLogin() {
// //     const location = useLocation();
// //     const navigate = useNavigate();
// //     const [uid, setUid] = useState("");
// //     const [password, setPassword] = useState("");

// //     let title = "Login";
// //     let token = "";
// //     let role = ''

// //     if (location.pathname.includes("/student/login")) {
// //         title = "Student Login";
// //         role = 'student'
// //         token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJzdHVkZW50In19.Mp0Pcwsz5VECK11Kf2ZZNF_SMKu5CgBeLN9ZOP04kZo'
// //     } else if (location.pathname.includes("/teacher/login")) {
// //         title = "Teacher Login";
// //         role = 'teacher'
// //         token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJ0ZWFjaGVyIn19.Mp0Pcwsz5VECK11Kf2ZZNF_SMKu5CgBeLN9ZOP04kZo'
// //     } else if (location.pathname.includes("/admin/login")) {
// //         token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InJvbGUiOiJhZG1pbiJ9fQ.Mp0Pcwsz5VECK11Kf2ZZNF_SMKu5CgBeLN9ZOP04kZo'
// //         title = "Admin Login";
// //         role = 'admin'
// //     }

// //     const handleLogin = (e) => {
// //         e.preventDefault();

// //         if (uid && password) {
// //             // api call here...
// //             localStorage.setItem("token", token);

// //             alert(`Login successful!`);
// //             navigate(`/${role}-dashboard`);
// //         } else {
// //             alert("Please enter both UID and Password.");
// //         }
// //     };



// export default function MultiUserLogin() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [uid, setUid] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);

//     let title = "Login";
//     let role = "";

//     if (location.pathname.includes("/student/login")) {
//         title = "Student Login";
//         role = "student";
//     } else if (location.pathname.includes("/teacher/login")) {
//         title = "Teacher Login";
//         role = "teacher";
//     } else if (location.pathname.includes("/admin/login")) {
//         title = "Admin Login";
//         role = "admin";
//     }

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         if (!uid || !password) {
//             alert("Please enter both UID and Password.");
//             return;
//         }

//         setLoading(true);
//         try {
//             const response = await axios.post("http://localhost:8080/api/users/login", {
//                 emailOrMobile: uid,
//                 password: password,
//             });
            
//             if (response.data.status) {
//                 localStorage.setItem("token", response.data.accessToken);
//                 alert(`${title} Login Successful!`);
//                 navigate(`/${response.data.data.role}-dashboard`);
//             } else {
//                 alert("Unauthorized! Please check your credentials.");
//             }
//         } catch (error) {
//             alert("Login failed! Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };



//     return (
//         <div
//             className="flex items-center justify-center w-full min-h-screen px-5 bg-fixed bg-center bg-no-repeat bg-cover md:justify-end md:px-20"
//             style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1616512659455-111d3367649f')`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//             }}
//         >
//             <div className="w-full max-w-[350px] p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-gray-300">
//                 <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />
//                 <h2 className="mb-4 text-2xl font-semibold text-center text-white">{title}</h2>
//                 <form onSubmit={handleLogin}>
//                     <div className="mb-4">
//                         <label className="block mb-2 text-sm font-semibold text-white">UID</label>
//                         <input
//                             type="text"
//                             required
//                             value={uid}
//                             onChange={(e) => setUid(e.target.value)}
//                             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your UID"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block mb-2 text-sm font-semibold text-white">Password</label>
//                         <input
//                             type="password"
//                             required
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             placeholder="Enter your password"
//                         />
//                     </div>
//                     <div className="mb-4 text-right">
//                         <a href="#" className="text-sm text-white hover:underline">Forgot Password?</a>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full py-2 text-white transition rounded-lg bg-primary hover:bg-blue-600"
//                     >
//                         Login
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }




import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Axios } from "../Utils/axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/AuthReducers";

export default function MultiUserLogin() {
    const location = useLocation();
    const navigate = useNavigate();
    const [uid, setUid] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    let title = "Login";
    let role = "";

    if (location.pathname.includes("/student/login")) {
        title = "Student Login";
        role = "student";
    } else if (location.pathname.includes("/teacher/login")) {
        title = "Teacher Login";
        role = "teacher";
    } else if (location.pathname.includes("/admin/login")) {
        title = "Admin Login";
        role = "admin";
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!uid || !password) {
            alert("Please enter both UID and Password.");
            return;
        }

        setLoading(true);
        try {
            const response = await Axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`, {
                email: uid,
                password: password,
            }, {
                withCredentials: true,
            });
            console.log(response.data.data.role,">>>>>>>>>>>>>>>>>>>")
            console.log(response.data.data)
            console.log(response.data.status)
            if (response.data.status) {
                dispatch(setUser(response.data.data))
                alert(`${title} Login Successful!`);
                navigate(`/${response.data.data.role}-dashboard`);
            } else {
                alert("Unauthorized! Please check your credentials.");
            }
        } catch (error) {
            alert("Login failed! Please try again.");
            console.log(error)
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div
            className="flex items-center justify-center w-full min-h-screen px-5 bg-fixed bg-center bg-no-repeat bg-cover md:justify-end md:px-20"
            style={{
                backgroundImage: `url('../../src/assets/schoolimg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="w-full max-w-[350px] p-8 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg border border-gray-300">
                <h2 className="mb-4 text-2xl font-semibold text-center text-white">{title}</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-semibold text-white">Email or Mobile</label>
                        <input
                            type="text"
                            required
                            value={uid}
                            onChange={(e) => setUid(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your Email or Mobile"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-semibold text-white">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4 text-right">
                        <a href="#" className="text-sm text-white hover:underline">Forgot Password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white transition rounded-lg bg-primary hover:bg-blue-600"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
