const mongoose = require('mongoose');

const PetitionSchema = new mongoose.Schema({
  title: String,
  description: String,
  votes: Number,
  comments: [String]
});

module.exports = mongoose.model('Petition', PetitionSchema);