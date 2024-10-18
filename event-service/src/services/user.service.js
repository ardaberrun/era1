const axios = require('axios');

class UserService {
    async verify (token) {
        try {
            const response = await axios.get('http://host.docker.internal:4000/user/verify', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        
            return response;
          } catch (error) {
            return {
                status: 500,
                message: 'An expected error occurred',
                error: error,
            };
          }
    }
}

module.exports = new UserService();
