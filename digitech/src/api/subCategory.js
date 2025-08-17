import api from './axios';

// SubCategory APIs
export const createSubCategory = async (data) => {
  const response = await api.post('/subCategory/createSubCategory', data);
  return response.data;
};

export const getAllSubCategories = async () => {
  const response = await api.get('/subCategory/getAllSubCategory');
  return response.data;
};

export const getSubCategoryById = async (id) => {
  const response = await api.get(`/subCategory/getSubCategoryById/${id}`);
  return response.data;
};

export const updateSubCategory = async (id, data) => {
  const response = await api.put(`/subCategory/updateSubCategory/${id}`, data);
  return response.data;
};

export const deleteSubCategory = async (id) => {
  const response = await api.delete(`/subCategory/deleteSubCategory/${id}`);
  return response.data;
};
