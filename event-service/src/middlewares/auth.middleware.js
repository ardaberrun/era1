const UserService = require('../services/user.service');

class AuthMiddleware {
    async verify (request, response, next) {
        let token = request.headers.authorization;

        if (!token) {
            return response.status(401).json({ status: 401, message: 'Unauthorized!' });
        }

        try {
            token = token.split(' ')[1];

            const res = await UserService.verify(token);

            if (res.status !== 200) {
                return res.status(401).json({ message: 'Unauthorized!' });
            }

            request.user = res.data.data;

            next();
        } catch {
            response.status(403).json({ status: 403, error: 'Forbidden!' });
        }
    }
}

module.exports = new AuthMiddleware().verify;
