const Product = require('../models/Product')
const User = require('../models/User')
class siteController{
    user(req, res, next){
        User.find({})
            .then(users =>{
                users : users
                users = users.map(users =>{users.toString()})
                res.render('users', {users})
            })
            .catch(error => next)
    }
    home(req, res, next){
        Product.find({})
            .then(Products => res.render('home'))
            .catch(error => next(error))
    }
    
}

module.exports = new siteController()