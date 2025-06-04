import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import logo from "../assets/Packpin-logo.svg"
import loginSidebarImage from "../assets/login-sidebar-image.jpeg"
import loginBackgroundImage from "../assets/login-background-image.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  // Get the setIsLogin function from context
  const { setIsLogin } = useContext(MyContext);
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // ✅ Fake login logic (replace with real API later)
    const validEmail = "admin@example.com";
    const validPassword = "password123";

    if (email === validEmail && password === validPassword) {
      // Simulate successful login response
      const fakeToken = "fake-jwt-token";
      localStorage.setItem("token", fakeToken);
      setIsLogin(true);
      navigate("/"); // Redirect to homepage or dashboard
    } else {
      alert("Invalid email or password");
    }
  };

  //   const payload = { email, password };

  //   try {
  //     const response = await fetch("https://api.packpin.in/admin/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(payload),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       console.log("Login successful:", data);
  //       localStorage.setItem("token", data.token);
  //       setIsLogin(true);
  //       navigate("/");
  //     } else {
  //       console.error("Login failed:", data);
  //       alert(data.message || "Login failed");
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     alert("An error occurred during login. Please try again.");
  //   }
  // };

  return (
    <div
      className="min-h-screen overflow-hidden bg-cover bg-center flex items-center justify-center bg-[#111827]"
      style={{
        backgroundImage: `url(${loginBackgroundImage})`,
      }}
    >
      <div className="bg-red-50 shadow-lg rounded-lg overflow-hidden flex w-full max-w-3xl max-h-screen">
        <div className="hidden md:block md:w-1/2">
          <img
            src={loginSidebarImage}
            alt="login-side-image"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-8 text-center">
            <img
              src={logo}
              alt="Logo"
              className="mx-auto h-12"
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-4 right-0 pr-3 flex items-center justify-center h-full text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

























