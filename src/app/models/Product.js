const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema

const Producte = new Schema(
{
    // country:{type: String, minlength:1},
    name: {type: String, required: true },
    img: {type: String, minlength: 1},
    description:{type: String},
    origin:{type: String},
    price: {type: String},
	selled: {type: String},
	ad :{type: String},
	slug: {type: String, slug: 'name', unique: true }
},
{
    name_user: {type: String},
    content: {type: String},
}
)
mongoose.plugin(slug)

module.exports = mongoose.model('Producte', Producte)