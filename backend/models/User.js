const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  county: String,
  followedPetitions: [String]
});

module.exports = mongoose.model('User', UserSchema);