// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// import { login, adminLogin, vendorLogin } from '../../api/auth';
// import { loginSuccess } from '../../redux/authSlice';
// import { useApi } from '../../hooks/useApi';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [message, setMessage] = useState('');
//   const loginApi = useApi(login, [], false);
//   const adminLoginApi = useApi(adminLogin, [], false);
//   const vendorLoginApi = useApi(vendorLogin, [], false);
//   const loading = loginApi.loading || adminLoginApi.loading || vendorLoginApi.loading;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const auth = useSelector(state => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');
//     try {
//       let data;
//       // Check for admin login
//       if (email === 'admin@gmail.com' && password === 'admin@123') {
//         data = await adminLoginApi.refetch({ email, password });
//       } else if (email === 'satyamrai382@gmail.com' && password === '123456') {
//         data = await vendorLoginApi.refetch({ email, password });
//       } else {
//         data = await loginApi.refetch({ email, password });
//       }
//       if (data.responseCode === 200) {
//         localStorage.setItem('token', data.result.token);
//         localStorage.setItem('user', JSON.stringify(data.result));
//         dispatch(loginSuccess({ token: data.result.token, user: data.result }));
//         setMessage('Login Successful! Redirecting...');
//         // Redirect based on user type
//         if (email === 'admin@gmail.com' && password === 'admin@123') {
//           navigate('/dashboard');
//         } else if (email === 'satyamrai322@gmail.com' && password === '123456') {
//           navigate('/vendor-dashboard');
//         } else if (data.result.userType === 'ADMIN') {
//           navigate('/admin/dashboard');
//         } else {
//           navigate('/vendor-dashboard');
//         }
//         return;
//       } else {
//         setMessage(data.responseMessage || 'Login Failed');
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || err?.message || 'Network error. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f8eaea]" style={{ background: 'linear-gradient(135deg, #fff 0%, #f8eaea 100%)' }}>
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-[#88070a] relative">
//         <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#88070a] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
//           <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#fff"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /></svg>
//         </div>
//         <h2 className="text-3xl font-extrabold mb-8 text-center text-[#88070a] mt-12 tracking-tight">Login to Your Account</h2>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email" className="block text-sm font-semibold text-[#88070a] mb-1">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//               className="w-full px-4 text- py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition placeholder-gray-400 bg-[#fdf6f6]"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-semibold text-[#88070a] mb-1">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition placeholder-gray-400 bg-[#fdf6f6]"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <Link to="/forgot-password" className="text-sm text-[#88070a] hover:underline font-medium transition">Forgot password?</Link>
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#88070a] text-white py-2.5 rounded-lg font-bold shadow-md hover:bg-[#a00a0e] transition-colors text-lg tracking-wide mt-2"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//           {/* {error && <div className="text-red-600 text-sm mt-2 text-center">{typeof error === 'string' ? error : (error?.message || 'Login failed')}</div>} */}
//         </form>
//         <p className="mt-8 text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <Link to="/signup" className="text-[#88070a] hover:underline font-semibold transition">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { loginSuccess } from '../../redux/authSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    try {
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (!userDoc.exists()) {
        throw new Error('User data not found');
      }
      const userData = userDoc.data();
      console.log("User Data:", userData);

      const payload = { token: user.accessToken, user: { ...userData, uid: user.uid } };
      dispatch(loginSuccess(payload));
      localStorage.setItem('token', payload.token);
      localStorage.setItem('user', JSON.stringify(payload.user));

      setMessage('Login Successful! Redirecting...');

      if (userData.userType === 'ADMIN') {
        navigate('/admin/dashboard');
      } else if (userData.userType === 'VENDOR') {
        navigate('/vendor-dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage(err.message || 'Login Failed');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8eaea]" style={{ background: 'linear-gradient(135deg, #fff 0%, #f8eaea 100%)' }}>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-[#88070a] relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#88070a] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#fff"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /></svg>
        </div>
        <h2 className="text-3xl font-extrabold mb-8 text-center text-[#88070a] mt-12 tracking-tight">Login to Your Account</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#88070a] mb-1">Email</label>
            <input type="email" id="email" name="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition placeholder-gray-400 bg-[#fdf6f6]" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-[#88070a] mb-1">Password</label>
            <input type="password" id="password" name="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition placeholder-gray-400 bg-[#fdf6f6]" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm text-[#88070a] hover:underline font-medium transition">Forgot password?</Link>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-[#88070a] text-white py-2.5 rounded-lg font-bold shadow-md hover:bg-[#a00a0e] transition-colors text-lg tracking-wide mt-2">
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {message && <div className="text-center text-sm mt-2">{message}</div>}
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#88070a] hover:underline font-semibold transition">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login; // यहाँ डिफॉल्ट एक्सपोर्ट जरूरी है