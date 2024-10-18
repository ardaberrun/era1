const Express = require('express');
const EventRouter = Express.Router();
const EventController = require('../controllers/event.controller');
const AuthMiddleware = require('../middlewares/auth.middleware');


EventRouter.get('/', EventController.getEvents);
EventRouter.post('/', AuthMiddleware, EventController.createEvent);
// EventRouter.get('/:eventId', EventController.getEventDetails);

module.exports = EventRouter;
