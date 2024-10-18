const EventRoutes = require('./event.routes');

class Router {
    initialize (app) {
        app.get('/', (_, response) => {
            response.status(200).json({ status: 200, message: 'Event Service: OK!' });
        });

        app.use('/event', EventRoutes);
    }
}

module.exports = new Router();
