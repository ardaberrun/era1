const jwt = require('jsonwebtoken');

class AuthMiddleware {
    verify (request, response, next) {
        let token = request.headers.authorization;

        if (!token) {
            return response.status(401).json({ status: 401, message: 'Unauthorized!' });
        }
    
        try {
            token = token.split(' ')[1];
            const verified = jwt.verify(token, 'very_very_secret_key');

            request.user = verified;
 
            next();
        } catch {
            response.status(403).json({ status: 403, error: 'Forbidden!' });
        }
    }
}

module.exports = new AuthMiddleware().verify;
