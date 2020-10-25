// const User = require('../models/User')

class loginController{
    // user(req, res, next){
    //     User.find({})
    //         .then(Users => {res.render('users', {
    //             Users : Users
    //         })
    //         })
    //         .catch(error => next)
    // }
    login(req, res){
        res.render('login')
    }
}

module.exports = new loginController()