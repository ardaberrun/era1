const AuthRoutes = require('./auth.routes');
const UserRoutes = require('./user.routes');

class Router {
    initialize (app) {
        app.get('/', (_, response) => {
            response.status(200).json({ status: 200, message: 'User Service: OK!' });
        });

        app.use('/auth', AuthRoutes);
        app.use('/user', UserRoutes);
    }
}

module.exports = new Router();
