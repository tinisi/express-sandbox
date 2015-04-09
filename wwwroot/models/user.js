
var mongoose = require('mongoose');

// first we need a schema
var userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    is_compliant: Boolean
})

// which is "compiled" into a model (their term, not mine)
var User = mongoose.model('User', userSchema);

module.exports = User;
