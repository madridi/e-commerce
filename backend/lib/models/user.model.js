const mongoose = require('mongoose');

module.exports = (function() {
  const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: String,
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now()}
  });

  return mongoose.model('User', userSchema);
})();