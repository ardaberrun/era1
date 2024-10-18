import axios from 'axios';

class UserService {
  constructor() {
    this.apiURL = 'http://localhost:4000';
  }

  async signUp(userData) {
    try {
      const response = await axios.post(`${this.apiURL}/auth/sign-up`, userData);

      return response.data;
    } catch (error) {
      throw error.response?.data;
    }
  }

  async signIn(userData) {
    try {
      const response = await axios.post(`${this.apiURL}/auth/sign-in`, userData);

      return response.data;
    } catch (error) {
      throw error.response?.data;
    }
  }
}

export default new UserService();