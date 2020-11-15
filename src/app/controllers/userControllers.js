const User = require('../models/User')
const { mongooseToObject } = require('../../util/mongoose');

class userController{
     // [GET] /user/:slug
    show(req, res, next) {
        User.findOne({ slug: req.params.slug })
            .then((user) =>
                res.render('user/show', {
                    User: mongooseToObject(user),
                }),
            )
            .catch(next);
    }

    login(req, res, next){
        res.render('user/login')
    }

    //{GET} => register 
    register(req, res){
        res.render('user/register')
    }

    //{register/addAcount}
    //[POST] => register
    addAcount(req, res, next){
        res.json(req.body)
    }
    user(req, res, next){
        res.render('user/users')
    }
}

module.exports = new userController()