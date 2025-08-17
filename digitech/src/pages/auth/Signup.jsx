import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../api/auth';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    // userName: '',
    email: '',
    password: '',
    mobileNumber: '',
    addressLine: '',
    city: '',
    state: '',
    zipCode: '',
    countryCode: '',
    dateOfBirth: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async e => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const data = await signup(form);
      if (data.responseCode === 200) {
        setMessage('Signup successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setMessage(data.responseMessage || 'Signup failed.');
      }
    } catch (err) {
      setMessage(err?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex mx-auto  items-center justify-center bg-[#f8eaea]" style={{ background: 'linear-gradient(135deg, #fff 0%, #f8eaea 100%)' }}>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg border-t-8 border-[#88070a] relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#88070a] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#fff"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /></svg>
        </div>
        <h2 className="text-3xl font-extrabold mb-4 text-center text-[#88070a] mt-6 tracking-tight">Create Your Account</h2>
        <form className="space-y-5 h-[50vh] overflow-y-auto" onSubmit={handleSignup}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-semibold text-[#88070a] mb-1">First Name</label>
              <input type="text" id="firstName" name="firstName" required value={form.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="First Name" />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-semibold text-[#88070a] mb-1">Last Name</label>
              <input type="text" id="lastName" name="lastName" required value={form.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="Last Name" />
            </div>
          </div>
          {/* <div>
            <label htmlFor="userName" className="block text-sm font-semibold text-[#88070a] mb-1">Username</label>
            <input type="text" id="userName" name="userName" required value={form.userName} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="Username" />
          </div> */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#88070a] mb-1">Email</label>
            <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-[#88070a] mb-1">Password</label>
            <input type="password" id="password" name="password" required value={form.password} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="Password" />
          </div>
          <div>
            <div>
            <label htmlFor="mobileNumber" className="block text-sm font-semibold text-[#88070a] mb-1">Mobile</label>
            <input type="mobileNumber" id="mobileNumber" name="mobileNumber" required value={form.mobileNumber} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="mobileNumber" />
          </div>
            <label htmlFor="address" className="block text-sm font-semibold text-[#88070a] mb-1">Address Line</label>
            <input
  type="text"
  id="addressLine"
  name="addressLine"
  required
  value={form.addressLine}
  onChange={handleChange}
  className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]"
  placeholder="Address Line"
/>
            </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="city" className="block text-sm font-semibold text-[#88070a] mb-1">City</label>
              <input type="text" id="city" name="city" required value={form.city} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="City" />
            </div>
            <div className="flex-1">
              <label htmlFor="state" className="block text-sm font-semibold text-[#88070a] mb-1">State</label>
              <input type="text" id="state" name="state" required value={form.state} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="State" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="zip" className="block text-sm font-semibold text-[#88070a] mb-1">ZIP Code</label>
              <input type="text" id="zipCode" name="zipCode" required value={form.zipCode} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="ZIP Code" />
            </div>
            <div className="flex-1">
              <label htmlFor="countryCode" className="block text-sm font-semibold text-[#88070a] mb-1">Country Code</label>
              <input type="text" id="countryCode" name="countryCode" required value={form.countryCode} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" placeholder="Country Code" />
            </div>
          </div>
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-[#88070a] mb-1">Date of Birth</label>
            <input type="date" id="dateOfBirth" name="dateOfBirth" required value={form.dateOfBirth} onChange={handleChange} className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition bg-[#fdf6f6]" />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-[#88070a] text-white py-2.5 rounded-lg font-bold shadow-md hover:bg-[#a00a0e] transition-colors text-lg tracking-wide mt-2">{loading ? 'Signing up...' : 'Sign Up'}</button>
          {/* {error && <div className="text-red-600 text-sm mt-2 text-center">{typeof error === 'string' ? error : (error?.message || 'Signup failed')}</div>} */}
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#88070a] hover:underline font-semibold transition">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup