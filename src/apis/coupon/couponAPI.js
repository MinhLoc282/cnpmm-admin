import axiosClient from 'utils/axios';

const endpoint = '/coupon';

export default {
  async getAllCoupons() {
    const path = `${endpoint}/all`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async createCoupon(payload) {
    const path = `${endpoint}/create`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async deleteCoupon(payload) {
    const path = `${endpoint}/${payload.id}`;

    const response = await axiosClient.delete(path, payload);

    return response.data;
  },

  async updateCoupon(payload) {
    const path = `${endpoint}/${payload.id}`;

    const response = await axiosClient.put(path, payload);

    return response.data;
  },
};
