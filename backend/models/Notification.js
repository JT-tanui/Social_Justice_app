const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  userId: String,
  message: String
});

module.exports = mongoose.model('Notification', NotificationSchema);