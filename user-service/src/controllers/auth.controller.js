const AuthService = require('../services/auth.service');

class AuthController {
    async signUp (request, response) {
        const serviceResponse = await AuthService.signUp(request);

        response.status(serviceResponse.status).send(serviceResponse);
    }

    async signIn (request, response) {
        const serviceResponse = await AuthService.signIn(request);

        response.status(serviceResponse.status).send(serviceResponse);
    }
}

module.exports = new AuthController();
