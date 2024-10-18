const UserService = require('../services/user.service');

class UserController {
    async getProfileDetails (request, response) {
        const serviceResponse = await UserService.getProfileDetails(request);

        response.status(serviceResponse.status).send(serviceResponse);
    }

    async verify (request, response) {
        const serviceResponse = await UserService.getProfileDetails({ params: { userId: request.user._id } });

        response.status(serviceResponse.status).send(serviceResponse);
    }

    async updateUser (request, response) {
        if (request.user._id !==  request.params.userId) {
            return response.status(403).json({ status: 403, error: 'Forbidden!' });
        }

        const serviceResponse = await UserService.updateUser(request);

        response.status(serviceResponse.status).send(serviceResponse);
    }
}

module.exports = new UserController();
