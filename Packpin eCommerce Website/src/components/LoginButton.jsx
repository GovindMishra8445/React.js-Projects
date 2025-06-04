import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loggedInUser, setLoggedInUser } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    loggedInUser ? navigate("/profile") : navigate("/login");
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleLogOut}
        className="flex flex-col items-center text-xs text-black hover:text-gray-500"
      >
        <img src={assets.profile_icon} className="w-5 h-5" alt="Profile" />
        {loggedInUser ? "Profile" : "Login"}
      </button>
    </div>
  );
};

export default LoginButton;
