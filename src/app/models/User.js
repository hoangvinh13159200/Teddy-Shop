const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String, minlength: 1},
    pass: {type: String, minlength: 8, maxlength: 12}
})

module.exports = mongoose.model('User', User)