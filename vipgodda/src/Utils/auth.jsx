import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


// import { jwtDecode } from "jwt-decode";
const isAuthenticated = () => {
    const user = useSelector(state => state.auth)
    // if (!(user.user.token)) {
    //     return user.user.token === null
    // } else {
    //     // navigate('/')
    // }
    if (user.user?.token !== null) {
        return true;
    }
};

// const getUserRole = () => {
    // const token = localStorage.getItem("token");
    // if (!token) return null;

    // try {
    //     const decoded = jwtDecode(token);
    //     console.log(decoded?.role,"decoded")
    //     return decoded?.role || null;
    // } catch (error) {
    //     console.error("Invalid token:", error);
    //     return null;
    // }
// };

// const logout = () => {
//     const dispatch = useDispatch();
//     dispatch(logout())
//     // localStorage.removeItem("persist:auth");
// };


// export { isAuthenticated, getUserRole, logout };
export { isAuthenticated };
