import api from './axios';

// Product APIs
export const addProduct = async (data) => {
  const response = await api.post('/product/addProduct', data);
  return response.data;
};

export const getAllProducts = async () => {
  const response = await api.get('/product/getProduct');
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/product/getProductById/${id}`);
  return response.data;
};

export const updateProduct = async (id, data) => {
  const response = await api.put(`/product/updateProduct/${id}`, data);
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/product/deleteProduct/${id}`);
  return response.data;
};
