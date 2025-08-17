import api from './axios';

// Business Category APIs
export const createBusinessCategory = async (data) => {
  const response = await api.post('/businessCategory/createBusinessCategory', data);
  return response.data;
};

export const getAllBusinessCategories = async () => {
  const response = await api.get('/businessCategory/getAllCategory');
  return response.data;
};

// export const getBusinessCategoryById = async (id) => {
//   const response = await api.get(`/businessCategory/getBusinessCategoryById/${id}`);
//   return response.data;
// };

export const updateBusinessCategory = async (id, data) => {
  const response = await api.put(`/businessCategory/updateBusinessCategory/${id}`, data);
  return response.data;
};

export const deleteBusinessCategory = async (id) => {
  const response = await api.delete(`/businessCategory/deleteBusinessCategory/${id}`);
  return response.data;
};
