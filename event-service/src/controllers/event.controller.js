const EventService = require('../services/event.service');

class EventController {
    async getEvents (_, response) {
        const serviceResponse = await EventService.getEvents();

        response.status(serviceResponse.status).send(serviceResponse);
    }

    async createEvent (request, response) {
        const serviceResponse = await EventService.createEvent(request);

        response.status(serviceResponse.status).send(serviceResponse);
    }
}

module.exports = new EventController();
