import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./Utils/auth";
import { getUser } from "./redux/AuthReducers";
import { useDispatch, useSelector } from "react-redux";


const PrivateRoute = ({ children, allowedRoles }) => {

    const user = useSelector((state) => state.auth)

    // console.log(user.user.role)

    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default PrivateRoute;