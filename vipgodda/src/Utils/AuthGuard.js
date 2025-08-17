import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../Utils/auth";

const AuthGuard = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/" replace /> : children;
};

export default AuthGuard;
