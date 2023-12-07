import axiosClient from 'utils/axios';

const endpoint = '/order';

export default {
  async getAllOrders() {
    const path = `${endpoint}/getAll`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async createOrder(payload) {
    const path = `${endpoint}`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async updateOrder(payload) {
    const path = `${endpoint}/admin/${payload.id}`;

    const response = await axiosClient.put(path, payload);

    return response.data;
  },
};
