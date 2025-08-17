import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const data = await forgotPassword(email);
      if (data.responseCode === 200) {
        setMessage('Reset link sent to your email.');
        setTimeout(() => {
          navigate('/otp-verification', { state: { email } });
        }, 1000);
      } else {
        setMessage(data.responseMessage || 'Failed to send reset link.');
      }
    } catch (err) {
      setMessage(err?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="mt-10 mb-10 flex items-center justify-center bg-[#f8eaea]" style={{ background: 'linear-gradient(135deg, #fff 0%, #f8eaea 100%)' }}>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-[#88070a] relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#88070a] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#fff"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /></svg>
        </div>
        <h2 className="text-2xl font-extrabold mb-6 text-center text-[#88070a] mt-12 tracking-tight">Forgot Password?</h2>
        <p className="text-center text-gray-600 mb-6">Enter your email address and we'll send you a link to reset your password.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#88070a] mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] transition placeholder-gray-400 bg-[#fdf6f6]"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#88070a] text-white py-2.5 rounded-lg font-bold shadow-md hover:bg-[#a00a0e] transition-colors text-lg tracking-wide"
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
          {message && (
            <div className={`text-center text-sm mt-2 ${message.includes('sent') ? 'text-green-600' : 'text-red-600'}`}>{message}</div>
          )}
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <Link to="/login" className="text-[#88070a] hover:underline font-semibold transition">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default ForgotPassword