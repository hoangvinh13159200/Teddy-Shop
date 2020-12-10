const loginRouter = require('./loginRouter')
const siteRouter = require('./siteRouter')
const cartRouter = require("./cartRouter")
const producteRouter = require('./producteRouter')
const { cart } = require('../app/controllers/cartControllers')
const CommentModel = require('../app/models/Comment')

function route(app){
    app.use('users', siteRouter)
    app.use('/cart', cartRouter)
	app.use('/login', loginRouter)
    app.use('/producte', producteRouter)
    app.use('/', siteRouter)
    app.get('/comment', (req, res)=>{
        res.render('comment')
    })
    app.post('/comment', (req, res)=>{
        const comment = new CommentModel(req.body);
        comment
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    })
}

module.exports = route