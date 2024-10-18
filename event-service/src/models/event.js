const mongoose = require('mongoose');



const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  participants: [
    {
      type: String
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);
