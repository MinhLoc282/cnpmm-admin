import axiosClient from 'utils/axios';

const endpoint = '/user';

export default {
  async login(payload) {
    const path = `${endpoint}/loginAdmin`;

    const response = await axiosClient.post(path, payload, {
      withCredentials: true,
    });

    return response.data;
  },

  async getAllUser() {
    const path = `${endpoint}/all-users`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async deleteUser(payload) {
    const path = `${endpoint}/delete-user/${payload.id}`;

    const response = await axiosClient.delete(path);

    return response.data;
  },

  async refreshToken() {
    const path = `${endpoint}/refresh`;

    const response = await axiosClient.get(path, {
      withCredentials: true,
    });

    return response.data;
  },

  async logout() {
    const path = `${endpoint}/logout`;

    const response = await axiosClient.post(path);

    return response.data;
  },
};
