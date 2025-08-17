import api from './axios';

// User APIs
export const userLogin = async (credentials) => {
  const response = await api.post('/user/userLogin', credentials);
  return response.data;
};

export const userSignup = async (userData) => {
  const response = await api.post('/user/userCreate', userData);
  return response.data;
};

export const getUserProfile = async (id) => {
  const response = await api.get(`/user/getProfile/${id}`);
  return response.data;
};

export const updateUserProfile = async (id, data) => {
  const response = await api.put(`/user/updateProfile/${id}`, data);
  return response.data;
};

export const changePassword = async (data) => {
  const response = await api.post('/user/passwordChange', data);
  return response.data;
};

