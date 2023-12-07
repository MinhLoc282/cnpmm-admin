import axiosClient from 'utils/axios';

const endpoint = '/review';

export default {
  async getAllReviews() {
    const path = `${endpoint}/all`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async createReview(payload) {
    const path = `${endpoint}`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async deleteReview(payload) {
    const path = `${endpoint}/${payload.id}`;

    const response = await axiosClient.delete(path, payload);

    return response.data;
  },

  async updateReview(payload) {
    const path = `${endpoint}/${payload.id}`;

    const response = await axiosClient.put(path, payload);

    return response.data;
  },
};
