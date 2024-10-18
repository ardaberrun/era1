const Event = require('../models/event');

class EventService {
    async getEvents () {
        try {
            const events = await Event.find();
        
            return {
                status: 200,
                message: 'OK',
                data: events,
            };
          } catch (error) {
            return {
                status: 200,
                message: 'OK',
                data: [],
            };
          }
    }

    async createEvent (request) {
        const { title, description, image } = request.body;
        const userId = request.user._id;

        try {
          const newEvent = new Event({
            title,
            description,
            image,
            date: new Date(),
            createdBy: userId,
            participants: [userId]
          });

          await newEvent.save();

          return {
            status: 201,
            message: 'Event created successfully',
            data: newEvent
          };
        } catch (error) {
            return {
                status: 500,
                message: 'Error creating event',
                error: error.message
            };
        }
    }
}

module.exports = new EventService();
