var mongoose = require("mongoose");


var loginSchema = mongoose.Schema({
    username: String,
    password: String
});

var User = mongoose.model('user', loginSchema);

module.exports = User;