import api from './axios';

export const login = async (credentials) => {
  const response = await api.post('/user/userLogin', credentials);
  return response.data;
};

export const signup = async (userData) => {
  const response = await api.post('user/userCreate', userData);
  return response.data;
};


export const adminLogin = async (credentials) => {
  const response = await api.post('/admin/adminLogin', credentials);
  return response.data;
};

export const vendorLogin = async (credentials) => {
  const response = await api.post('/vendor/VenderLogin', credentials);
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await api.post('/user/forgotPassword', { email });
  return response.data;
};

export const otpVerification = async ({ email, otp }) => {
  const response = await api.post('/user/otpVerification', { email, otp });
  return response.data;
};