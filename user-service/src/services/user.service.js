const User = require('../models/user');

class UserService {
    async getProfileDetails (request) {
        try {
            const user = await User.findById(request.params.userId, '-password');
    
            if (!user) {
                return {
                    status: 404,
                    message: 'User not found',
                };
            }
    
            return {
                status: 200,
                message: 'Success',
                data: {
                  _id: user._id,
                  name: user.name,
                  surname: user.surname,
                  email: user.email
                }
            };
        } catch (error) {
            return {
                status: 500,
                message: 'An error occurred',
            }
        }
    }

    async updateUser (request) {
        try {
            const { name, surname } = request.body;
            const user = await User.findById(request.params.userId);
    
            if (!user) {
                return {
                    status: 404,
                    message: 'User not found',
                };
            }
    
            user.name = name || user.name;
            user.surname = surname || user.surname;

            await user.save();

            return {
                status: 200,
                message: 'Success',
                data: {
                  _id: user._id,
                  name: user.name,
                  surname: user.surname,
                  email: user.email
                }
            };
        } catch (error) {
            return {
                status: 500,
                message: 'An error occurred',
            }
        }
    }

}

module.exports = new UserService();
