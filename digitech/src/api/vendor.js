import api from './axios';

// Vendor APIs
export const createVendor = async (vendorData) => {
  const response = await api.post('/vendor/createVender', vendorData);
  return response.data;
};

export const vendorLogin = async (credentials) => {
  const response = await api.post('/vendor/VenderLogin', credentials);
  return response.data;
};

// export const getVendorProfile = async (id) => {
//   const response = await api.get(`/vendor/getVenderById/${id}`);
//   return response.data;
// };

// export const updateVendorProfile = async (id, data) => {
//   const response = await api.put(`/vendor/updateVender/${id}`, data);
//   return response.data;
// };

// export const deleteVendor = async (id) => {
//   const response = await api.delete(`/vendor/deleteVender/${id}`);
//   return response.data;
// };

export const getAllVendors = async () => {
  const response = await api.get('admin/getAllVendors');
  return response.data;
};
