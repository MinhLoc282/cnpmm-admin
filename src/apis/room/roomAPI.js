import axiosClient from 'utils/axios';

const endpoint = '/room';

export default {
  async getAllRoom() {
    const path = `${endpoint}/all`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async createRoom(payload) {
    const path = `${endpoint}/create-room`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },
};
