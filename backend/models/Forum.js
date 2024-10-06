const mongoose = require('mongoose');

const ForumSchema = new mongoose.Schema({
  petitionId: String,
  comments: [{ text: String, votes: Number }]
});

module.exports = mongoose.model('Forum', ForumSchema);