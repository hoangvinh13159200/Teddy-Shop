const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Producte = new Schema({
    // country:{type: String, minlength:1},
    name: {type: String, minlength: 1},
    img: {type: String, minlength: 1},
    price: {type: String},
	selled: {type: String},
	ad :{type: String},
	slug: {type: String, slug: 'name', unique: true}
})

module.exports = mongoose.model('Producte', Producte)