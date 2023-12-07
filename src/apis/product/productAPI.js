import axiosClient from 'utils/axios';

const endpoint = '/product';

export default {
  async getAllProduct() {
    const path = `${endpoint}/getAllProduct`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async createProduct(payload) {
    const path = `${endpoint}/create-product`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async updateProduct(payload) {
    const path = `${endpoint}/updateProduct/${payload.id}`;

    const response = await axiosClient.put(path, payload);

    return response.data;
  },
};
