import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout as logoutAction } from '../redux/authSlice';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const performLogout = () => {
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
  };

  return { logout: performLogout };
};

export default useLogout;
