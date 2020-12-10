const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema ({
    user: String,
    text: String,
    sao: String
},
{
    timestamps: true,
})


module.exports =  mongoose.model('Comment', Comment);