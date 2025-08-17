import api from './axios';

// Order APIs
export const createOrder = async (data) => {
  const response = await api.post('/order/createOrder', data);
  return response.data;
};

export const getAllOrders = async () => {
  const response = await api.get('/order/getAllOrder');
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await api.get(`/order/getOrderById/${id}`);
  return response.data;
};

export const updateOrder = async (id, data) => {
  const response = await api.put(`/order/updateOrder/${id}`, data);
  return response.data;
};

export const deleteOrder = async (id) => {
  const response = await api.delete(`/order/deleteOrder/${id}`);
  return response.data;
};
