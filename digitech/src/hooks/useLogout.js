// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout as logoutAction } from '../redux/authSlice';

// export const useLogout = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const performLogout = () => {
//     dispatch(logoutAction());
    
//     const isAdminPath = window.location.pathname.startsWith('/admin');
//     const isVendorPath = window.location.pathname.startsWith('/vendor');
    
//     if (isAdminPath) {
//       navigate('/admin/login');
//     } else if (isVendorPath) {
//       navigate('/vendor/login');
//     } else {
//       navigate('/login');
//     }
//   };

//   return { logout: performLogout };
// };

// export default useLogout;





import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout as logoutAction } from '../redux/authSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const performLogout = async () => {
    try {
      await signOut(auth); // Firebase से साइनआउट
      dispatch(logoutAction());
      
      const isAdminPath = window.location.pathname.startsWith('/admin');
      const isVendorPath = window.location.pathname.startsWith('/vendor');
      
      if (isAdminPath) {
        navigate('/admin/login');
      } else if (isVendorPath) {
        navigate('/vendor/login');
      } else {
        navigate('/login');
      }
    } catch (err) {
      console.error("Logout error:", err); // एरर डिबगिंग
    }
  };

  return { logout: performLogout };
};

export default useLogout;