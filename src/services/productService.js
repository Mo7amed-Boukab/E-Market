import api from './api';

export const productService = {
  async getAllProducts(params = {}) {
    const response = await api.get('/products', { params });
    return response.data;
  },

  async getProductById(id) {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  async searchProducts(query) {
    const response = await api.get('/products/search', { params: { q: query } });
    return response.data;
  },

  async filterProducts(filters) {
    const response = await api.get('/products/filter', { params: filters });
    return response.data;
  },

  async getCategories() {
    const response = await api.get('/categories');
    return response.data;
  },
};
