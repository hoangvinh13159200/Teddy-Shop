const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Local = new Schema({
	id: {type: String},
	code:{type: String},
	name:{type: String},
	districts:{type: Array}
})

module.exports = mongoose.model('Local', Local)