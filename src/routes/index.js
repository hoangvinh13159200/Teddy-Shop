const loginRouter = require('./loginRouter')
const siteRouter = require('./siteRouter')
const producteRouter = require('./producteRouter')

function route(app){
    app.use('users', siteRouter)
	app.use('/login', loginRouter)
	app.use('/producte', producteRouter)
    app.use('/', siteRouter)
}

module.exports = route