import axiosClient from 'utils/axios';

const endpoint = '/category';

export default {
  async getAllCategory() {
    const path = `${endpoint}/all`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async createCategory(payload) {
    const path = `${endpoint}/create-cate`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  }
};
