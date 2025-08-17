import api from './axios';

// Cart APIs
export const addToCart = async (data) => {
  const response = await api.post('/carts/userAddToCart', data);
  return response.data;
};

export const getCart = async (userId) => {
  const response = await api.get(`/carts/getCartByUserId/${userId}`);
  return response.data;
};

export const updateCart = async (cartId, data) => {
  const response = await api.put(`/carts/updateCart/${cartId}`, data);
  return response.data;
};

export const removeFromCart = async (cartId, productId) => {
  const response = await api.delete(`/carts/removeFromCart/${cartId}/${productId}`);
  return response.data;
};
