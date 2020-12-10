const Comment = require('../models/Comment')
const { mongooseToObject } = require('../../util/mongoose');

class commentController{
    showcm(req, res, next) {
        Comment.find({})
        .then((comment)=>{
            comments: comments
            comments = comments.map(comments => comments.toObject())
            res.render('producte/show', {comments})
        }
        )
            .catch(next);
    }
    
    //[Get]/create
}
module.exports = new commentController()