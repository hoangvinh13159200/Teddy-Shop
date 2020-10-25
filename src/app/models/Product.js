const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    country:{type: String, minlength:1},
    name: {type: String, minlength: 1},
    img: {type: String, minlength: 1},
    price: {type: String},
    selled: {type: String}
})

module.exports = mongoose.model('Product', Product)