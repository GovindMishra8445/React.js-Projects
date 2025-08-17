import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useSelector } from 'react-redux';

export default function ProtectedRoute({ roles }) {
  const location = useLocation();
  const user = useSelector(state => state.auth.user);

  if (!user) {
    return <Navigate to={"/login"} state={location} />;
  }

  // userType from backend: 'ADMIN', 'VENDOR', etc.
  const userRole = user.userType ? user.userType.toLowerCase() : '';

  if (!roles.map(r => r.toLowerCase()).includes(userRole)) {
    return <Navigate to={"/auth/unauthorized"} state={location} />;
  }

  return <Outlet />;
}