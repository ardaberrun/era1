import axios from 'axios';

class EventService {
  constructor() {
    this.apiURL = 'http://localhost:4001/event';
  }

  async getEvents() {
    try {
      const response = await axios.get(this.apiURL);

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

export default new EventService();