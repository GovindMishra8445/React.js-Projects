import api from './axios';

// Admin APIs
export const adminLogin = async (credentials) => {
  const response = await api.post('/admin/adminLogin', credentials);
  return response.data;
};

// export const getAdminProfile = async (id) => {
//   const response = await api.get(`/admin/getAdminById/${id}`);
//   return response.data;
// };

export const updateAdminProfile = async (id, data) => {
  const response = await api.put(`/admin/updateAdmin/${id}`, data);
  return response.data;
};

export const getAdminDashboard = async () => {
  const response = await api.get('/admin/adminDashboard');
  return response.data;
};
