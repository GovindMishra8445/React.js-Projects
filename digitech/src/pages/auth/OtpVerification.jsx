import React, { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { otpVerification } from '../../api/auth';

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const inputRefs = useRef([]);

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (!value) return;
    let newOtp = [...otp];
    newOtp[idx] = value.slice(-1);
    setOtp(newOtp);
    if (idx < 5 && value) {
      inputRefs.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    const otpValue = otp.join('');
    console.log('OTP Submit Debug:', { email, otp: otpValue });
    if (!email) {
      setMessage('Email missing. Please go back and try again.');
      return;
    }
    if (otpValue.length !== 5) {
      setMessage('Please enter a valid 5-digit OTP.');
      return;
    }
    setLoading(true);
    try {
      const data = await otpVerification({ email, otp: otpValue });
      console.log('OTP API Response:', data);
      if (data.responseCode === 200) {
        setMessage('OTP Verified! Redirecting to login...');
        setTimeout(() => navigate('/login'), 1500);
      } else {
        setMessage(data.responseMessage || 'OTP verification failed.');
      }
    } catch (err) {
      console.log('OTP API Error:', err);
      setMessage(err?.responseMessage || 'Network error. Please try again.');
    }
    setLoading(false);
  };


  const handleResend = () => {
    setLoading(true);
    setMessage('');
    // TODO: Integrate resend OTP API here
    setTimeout(() => {
      setLoading(false);
      setMessage('OTP resent to your email.');
    }, 1000);
  };

  return (
    <div className="mt-10 mb-10 flex items-center justify-center bg-[#f8eaea]" style={{ background: 'linear-gradient(135deg, #fff 0%, #f8eaea 100%)' }}>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-8 border-[#88070a] relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#88070a] rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#fff"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" /></svg>
        </div>
        <h2 className="text-2xl font-extrabold mb-6 text-center text-[#88070a] mt-12 tracking-tight">OTP Verification</h2>
        <p className="text-center text-gray-600 mb-6">Enter the 5-digit OTP sent to your email.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={el => inputRefs.current[idx] = el}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(e, idx)}
                onKeyDown={e => handleKeyDown(e, idx)}
                className="w-12 h-12 text-center text-xl border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#88070a] focus:border-[#88070a] bg-[#fdf6f6]"
                autoFocus={idx === 0}
              />
            ))}
          </div>
          <button
            type="submit"
            disabled={loading || otp.some(d => !d)}
            className="w-full bg-[#88070a] text-white py-2.5 rounded-lg font-bold shadow-md hover:bg-[#a00a0e] transition-colors text-lg tracking-wide"
          >
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          <div className="flex justify-between items-center mt-2">
            <button type="button" onClick={handleResend} disabled={loading} className="text-sm text-[#88070a] hover:underline font-semibold transition">
              Resend OTP
            </button>
            <Link to="/login" className="text-sm text-[#88070a] hover:underline font-semibold transition">Back to Login</Link>
          </div>
          {message && (
            <div className={`text-center text-sm mt-2 ${message.includes('Verified') ? 'text-green-600' : 'text-red-600'}`}>{message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;